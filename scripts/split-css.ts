import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import postcss from 'postcss';
import type { ChildNode, AtRule, Root } from 'postcss';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '../dist');

function classify(
  selector: string,
  gameClasses: string[],
  crayonClasses: string[],
): 'game' | 'crayon' | null {
  if (gameClasses.some(c => selector.includes(c))) return 'game';
  if (crayonClasses.some(c => selector.includes(c))) return 'crayon';
  return null;
}

function classifyFontFace(node: AtRule): 'game' | 'crayon' | null {
  let family = '';
  node.walkDecls('font-family', decl => {
    family = decl.value.replace(/['"]/g, '');
  });
  if (family === 'DungGeunMo') return 'game';
  if (family.includes('온글잎') || family.includes('승훈')) return 'crayon';
  return null;
}

function splitNodes(
  nodes: ChildNode[],
  gameClasses: string[],
  crayonClasses: string[],
): { keep: ChildNode[]; game: ChildNode[]; crayon: ChildNode[] } {
  const keep: ChildNode[] = [];
  const game: ChildNode[] = [];
  const crayon: ChildNode[] = [];

  for (const node of nodes) {
    if (node.type === 'rule') {
      const bucket = classify(node.selector, gameClasses, crayonClasses);
      if (bucket === 'game') game.push(node.clone());
      else if (bucket === 'crayon') crayon.push(node.clone());
      else keep.push(node.clone());
    } else if (node.type === 'atrule') {
      if (node.name === 'font-face') {
        const bucket = classifyFontFace(node);
        if (bucket === 'game') game.push(node.clone());
        else if (bucket === 'crayon') crayon.push(node.clone());
        else keep.push(node.clone());
      } else if (node.nodes) {
        // Recursively split at-rules (@media, @supports, @keyframes, etc.)
        const inner = splitNodes(node.nodes as ChildNode[], gameClasses, crayonClasses);

        const wrap = (children: ChildNode[]): AtRule | null => {
          if (children.length === 0) return null;
          const wrapper = node.clone() as AtRule;
          wrapper.removeAll();
          children.forEach(c => wrapper.append(c));
          return wrapper;
        };

        const keepW = wrap(inner.keep);
        const gameW = wrap(inner.game);
        const crayonW = wrap(inner.crayon);
        if (keepW) keep.push(keepW);
        if (gameW) game.push(gameW);
        if (crayonW) crayon.push(crayonW);
      } else {
        keep.push(node.clone());
      }
    } else {
      keep.push(node.clone());
    }
  }

  return { keep, game, crayon };
}

function buildRoot(nodes: ChildNode[]): Root {
  const root = postcss.root();
  nodes.forEach(n => root.append(n));
  return root;
}

async function main(): Promise<void> {
  const entryUrl = pathToFileURL(resolve(distDir, 'pine-design-system.es.js')).href;
  const mod = await import(entryUrl) as Record<string, unknown>;

  const { gameLightTheme, gameDarkTheme, crayonLightTheme, crayonDarkTheme } = mod;
  if (!gameLightTheme || !gameDarkTheme || !crayonLightTheme || !crayonDarkTheme) {
    throw new Error('Theme class names not found in built module — run `pnpm build` first.');
  }

  const gameClasses = [gameLightTheme as string, gameDarkTheme as string];
  const crayonClasses = [crayonLightTheme as string, crayonDarkTheme as string];
  console.log('game   :', gameClasses);
  console.log('crayon :', crayonClasses);

  const cssPath = resolve(distDir, 'style.css');
  const root = postcss.parse(readFileSync(cssPath, 'utf-8'));
  const { keep, game, crayon } = splitNodes(
    root.nodes as ChildNode[],
    gameClasses,
    crayonClasses,
  );

  const keepRoot = buildRoot(keep);
  const gameRoot = buildRoot(game);
  const crayonRoot = buildRoot(crayon);

  writeFileSync(cssPath, keepRoot.toResult().css, 'utf-8');
  writeFileSync(resolve(distDir, 'style-game.css'), gameRoot.toResult().css, 'utf-8');
  writeFileSync(resolve(distDir, 'style-crayon.css'), crayonRoot.toResult().css, 'utf-8');

  const kb = (s: string) => `${(Buffer.byteLength(s) / 1024).toFixed(1)} KB`;
  console.log('✓ CSS split complete:');
  console.log(`  style.css        ${kb(keepRoot.toResult().css)}`);
  console.log(`  style-game.css   ${kb(gameRoot.toResult().css)}`);
  console.log(`  style-crayon.css ${kb(crayonRoot.toResult().css)}`);
}

main().catch(err => {
  console.error('split-css failed:', err);
  process.exit(1);
});

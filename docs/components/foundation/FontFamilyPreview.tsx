"use client";

const FAMILIES: { theme: string; name: string; stack: string }[] = [
  {
    theme: "basic",
    name: "sans (Inter)",
    stack:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
  },
  {
    theme: "basic",
    name: "mono (Roboto Mono)",
    stack:
      "'Roboto Mono', 'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
  },
  {
    theme: "game",
    name: "pixel (DungGeunMo)",
    stack: "'DungGeunMo', system-ui, -apple-system, sans-serif",
  },
  {
    theme: "crayon",
    name: "crayon (온글잎-승훈체)",
    stack: "'온글잎-승훈체', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
];

const SAMPLE = "안녕하세요 Hello 123";

export function FontFamilyPreview() {
  return (
    <div className="my-6">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
        {FAMILIES.map(({ theme, name, stack }) => (
          <div
            key={name}
            className="p-4 px-5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950"
          >
            <div className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              {theme}
            </div>
            <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              {name}
            </div>
            <div
              className="text-xl leading-relaxed text-gray-900 dark:text-gray-100 mb-3"
              style={{ fontFamily: stack }}
            >
              {SAMPLE}
            </div>
            <code className="block text-[11px] text-gray-500 dark:text-gray-400 font-mono whitespace-pre-wrap break-all">
              {stack}
            </code>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        game and crayon themes display their fonts when web fonts (DungGeunMo, 온글잎-승훈체) are loaded.
      </p>
    </div>
  );
}

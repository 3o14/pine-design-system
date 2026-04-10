Analyze the current branch and create a GitHub Pull Request.

## Steps

1. Run these commands in parallel to understand the branch state:
   - `git status` — check for uncommitted changes
   - `git log main..HEAD --oneline` — list commits ahead of main
   - `git diff main...HEAD` — full diff against main

2. Analyze all changes:
   - Summarize what was changed and why
   - Identify the type of change: feat / fix / docs / refactor / chore
   - Note affected packages or areas (e.g. component name, docs, config)

3. Draft the PR:
   - **Title**: concise, under 70 chars, conventional commit style (e.g. `feat(Button): add fullWidth prop`)
   - **Body**: structured markdown as shown below

4. If the current branch has no remote tracking branch, push it first: `git push -u origin HEAD`

5. Create the PR with `gh pr create` using the drafted title and body.

## PR body format

```
## Summary
- <bullet 1>
- <bullet 2>

## Changes
- <affected area>: <what changed>

## Test plan
- [ ] <what to verify>
```

Do not add "Co-Authored-By" trailers to the PR body.
After creation, print the PR URL.

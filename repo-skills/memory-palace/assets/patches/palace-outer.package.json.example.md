# `palace-outer/package.json` — move build-time deps to `dependencies`

PLAYBOOK §B. Upstream ships `@babel/preset-typescript` (and other
build-time `@types/*`) in `devDependencies`. Vercel's nested `npm install`
runs under `NODE_ENV=production`, which strips devDependencies — and the
webpack build then explodes with:

```
Cannot find package '@babel/preset-typescript' imported from
/vercel/path1/palace-outer/babel-virtual-resolve-base.js
```

`scripts/build-palace.mjs` already passes `--include=dev` on the nested
install as a belt-and-braces fix, but **also move these out of
`devDependencies`** so the package is correct on its own and doesn't
trip CI variants that don't honor that flag.

## After the move (this is the production state of bingranyou.com)

```json
{
    "repository": "#",
    "license": "UNLICENSED",
    "scripts": {
        "start": "node server/index.ts",
        "build": "webpack --config ./bundler/webpack.prod.js",
        "dev": "webpack serve --config ./bundler/webpack.dev.js"
    },
    "dependencies": {
        "@babel/core": "^7.16.12",
        "@babel/preset-env": "^7.16.11",
        "@babel/preset-react": "^7.16.7",
        "@babel/preset-typescript": "^7.16.7",
        "@types/react": "^17.0.43",
        "@types/react-dom": "^17.0.14",
        "@types/stats.js": "^0.17.0",
        "@types/three": "^0.138.0",
        "@tweenjs/tween.js": "^18.6.4",
        "@types/tweenjs": "^1.0.4",
        "...": "...every other package upstream had"
    },
    "devDependencies": {}
}
```

## What to actually do in your vendor copy

1. Open `palace-outer/package.json`.
2. Cut the entire `devDependencies` block.
3. Paste its entries into `dependencies` (alphabetically merged, no
   duplicates).
4. Leave `"devDependencies": {}` in place (or remove the key entirely)
   — npm tolerates either.
5. Delete `palace-outer/node_modules` and `palace-outer/package-lock.json`,
   then `npm install --include=dev` inside `palace-outer/` to regenerate
   a clean lockfile.
6. **Force-add the regenerated `palace-outer/package-lock.json`** to git
   (upstream's `.gitignore` excludes it; you want it committed for PLAYBOOK
   §C — locking framer-motion's transitive resolution).

   ```bash
   git add -f palace-outer/package-lock.json
   ```

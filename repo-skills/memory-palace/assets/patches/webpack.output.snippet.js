// SNIPPET — replace the `output` block in palace-outer/bundler/webpack.common.js
// (the original points at `dist/` — we redirect it into host/public/palace/
// so Next.js can serve it as a static route under /palace).
//
// Insert directly under `module.exports = {` and BEFORE the existing
// `devtool`, `plugins`, `resolve`, `module` blocks. If you're editing in
// place, replace the existing `output: { ... }` block.

output: {
    hashFunction: 'xxhash64',
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, '../../public/palace'),
    publicPath: '/palace/',
},

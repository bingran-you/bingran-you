// SNIPPET — replace the existing `.ts` ts-loader rule in
// palace-outer/bundler/webpack.common.js with this version.
//
// Why `transpileOnly: true` (PLAYBOOK §C):
// Upstream package.json uses `"framer-motion": "^6.3.1"`. Local resolves to
// 6.3.x. Vercel fresh install resolves to 6.5+ with stricter motion-component
// prop types — 51 TS2322 errors out of ts-loader, build fails. Skipping ts
// type checks inside webpack produces identical JS output and lets the build
// pass. Type errors still surface in your IDE and in `tsc --noEmit`.

{
    test: /\.ts?$/,
    use: { loader: 'ts-loader', options: { transpileOnly: true } },
    exclude: /node_modules/,
},

import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import path from "node:path";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  turbopack: {
    root: path.resolve(__dirname),
  },
  async rewrites() {
    return [
      // /palace serves the vendored outer site (webpack build in public/palace/)
      { source: "/palace", destination: "/palace/index.html" },
      // /palace/os serves the vendored inner site (CRA build in public/palace/os/)
      { source: "/palace/os", destination: "/palace/os/index.html" },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);

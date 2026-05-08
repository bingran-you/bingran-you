import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import path from "node:path";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "bingranyou.com" }],
        destination: "https://bingran.ai/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.bingranyou.com" }],
        destination: "https://bingran.ai/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.bingran.ai" }],
        destination: "https://bingran.ai/:path*",
        permanent: true,
      },
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

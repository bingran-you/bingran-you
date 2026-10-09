import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async rewrites() {
    return [
      // Proxies an app deployed from another repository. It is deliberately
      // absent from the project catalog and the sitemap, so keep these two
      // rules: deleting them is the only thing that would break the URL.
      {
        source: "/projects/tasksminer",
        destination:
          "https://tasksminer-benchflow.vercel.app/projects/tasksminer",
      },
      {
        source: "/projects/tasksminer/:path*",
        destination:
          "https://tasksminer-benchflow.vercel.app/projects/tasksminer/:path*",
      },
      // /palace serves the vendored outer site (webpack build in public/palace/)
      { source: "/palace", destination: "/palace/index.html" },
      // /palace/os serves the vendored inner site (CRA build in public/palace/os/)
      { source: "/palace/os", destination: "/palace/os/index.html" },
      {
        source: "/palace/os/:path*",
        destination: "/palace/os/index.html",
      },
    ];
  },
};

export default nextConfig;

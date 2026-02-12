import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Point Turbopack at the actual project root (where `node_modules` lives).
    // Setting this explicitly avoids incorrect inference (e.g. `src/app`).
    root: path.resolve(__dirname).replace(/\\/g, "/"),
  },
};

export default nextConfig;

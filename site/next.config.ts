import type { NextConfig } from "next";

/**
 * Deployed to Vercel, which runs Node — so this is a normal Next build, not a
 * static export. That restores middleware-based locale detection (`proxy.ts`)
 * and on-demand image optimisation.
 *
 * `trailingSlash` stays on: the archived legacy site under `public/legacy/`
 * links between its pages relatively (`../`, `v2/`), which only resolves
 * correctly when directory URLs keep their trailing slash.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  /**
   * Next serves `public/` by exact file path and does no directory-index
   * lookup, so `/legacy/` would 404 while `/legacy/index.html` worked. These
   * map the four archived pages onto their index files. Add a line here if
   * another legacy page is ever added.
   */
  async rewrites() {
    return [
      { source: "/legacy", destination: "/legacy/index.html" },
      { source: "/legacy/versions", destination: "/legacy/versions/index.html" },
      {
        source: "/legacy/versions/:version",
        destination: "/legacy/versions/:version/index.html",
      },
    ];
  },
};

export default nextConfig;

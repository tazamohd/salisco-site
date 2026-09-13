import type { NextConfig } from "next";

/**
 * Built as a static export so GitHub Pages can serve it — Pages runs no Node
 * process. Consequences worth knowing before changing anything here:
 *
 *  - No middleware/proxy. Locale detection happens in `app/(entry)/page.tsx`,
 *    the static page served at `/`.
 *  - No on-demand image optimisation, hence `images.unoptimized`.
 *  - Every route must be statically known (it is — see `generateStaticParams`).
 *
 * NEXT_PUBLIC_BASE_PATH is `/salisco-site` for a project Pages site
 * (tazamohd.github.io/salisco-site). Set it empty once the site moves to a
 * custom domain or a user/org Pages site served at the root.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;

/**
 * Prefixes a public-directory path with the deployment's base path.
 *
 * `next/link` applies `basePath` automatically, but two things do not:
 * `next/image` when `images.unoptimized` is set (the src is emitted verbatim),
 * and `metadata.icons`. Both must go through here or they 404 on a project
 * Pages site served from /<repo>.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

export const logoSrc = asset("/logo.webp");

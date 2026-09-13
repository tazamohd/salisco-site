import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/routes";

// Emitted as a file at build time — required under `output: "export"`.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

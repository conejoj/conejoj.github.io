import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Needed for `output: "export"`: written once at build time as /robots.txt.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}

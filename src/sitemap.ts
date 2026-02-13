import type { MetadataRoute } from "next";
import env from "@/env.mjs";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = env.NEXT_PUBLIC_WEBSITE_URL;
  const locales = routing.locales;
  const pages = ["", "about"];

  const routes = locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page ? `/${page}` : ""}`,
      lastModified: new Date().toISOString().split("T")[0],
    })),
  );

  return [...routes];
}

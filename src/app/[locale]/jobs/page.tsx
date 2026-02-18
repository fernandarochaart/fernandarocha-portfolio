import type { Metadata } from "next/types";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Jobs" });

  return {
    title: t("title"),
  };
}

export default async function JobsPage() {
  const t = await getTranslations("Footer");

  return (
    <div className="min-h-screen mx-auto text-center mt-20">
      <h1 className="text-base md:text-2xl">{t("about")}</h1>
      <p>Here are some of the services I offer:</p>
      <ul>
        <li>UI/UX Design</li>
        <li>Content Writing</li>
      </ul>
    </div>
  );
}

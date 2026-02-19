import type { Metadata } from "next/types";
import { getTranslations } from "next-intl/server";
import SlideUpWrapper from "@/components/wrapper/slide-wrapper";
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
  const t = await getTranslations({ locale, namespace: "About" });

  return {
    title: t("title"),
  };
}

export default async function AboutPage() {
  const t = await getTranslations("Footer");

  return (
    <div className="min-h-screen mx-auto text-center mt-20">
      <SlideUpWrapper>
        <h1 className="text-base md:text-2xl">{t("about")}</h1>
      </SlideUpWrapper>
      <p className="mt-6 text-sm md:text-lg">{t("description")}.</p>
    </div>
  );
}

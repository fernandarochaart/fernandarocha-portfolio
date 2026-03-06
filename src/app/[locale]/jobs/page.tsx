import type { Metadata } from "next/types";
import { getTranslations } from "next-intl/server";
import TimelineLayout from "@/components/timeline-layout/timeline-layout";
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
  const t = await getTranslations({ locale, namespace: "Jobs" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function JobsPage() {
  const t = await getTranslations("Jobs");

  return (
    <section className="col-span-4 px-6 md:px-16 lg:px-24 py-16 md:py-24">
      <SlideUpWrapper>
        <div className="max-w-6xl mx-auto">
          <div className="lg:w-1/2 space-y-10 mb-24">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight">
              {t("h1")}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-sm">
              {t("subtitle")}
            </p>
          </div>

          <TimelineLayout />
        </div>
      </SlideUpWrapper>
    </section>
  );
}

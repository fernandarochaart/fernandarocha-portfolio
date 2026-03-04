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
  const t = await getTranslations({ locale, namespace: "PrivacyPolicy" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

const sectionIds = ["01", "02", "03", "04", "05", "06", "07"] as const;

export default async function PrivacyPolicyPage() {
  const t = await getTranslations("PrivacyPolicy");

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
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {t("lastUpdated")}
            </p>
          </div>

          <div className="max-w-4xl space-y-16">
            {sectionIds.map((id) => (
              <div key={id} className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {id}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  {t(`sections.${id}.title`)}
                </h2>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {t(`sections.${id}.content`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SlideUpWrapper>
    </section>
  );
}

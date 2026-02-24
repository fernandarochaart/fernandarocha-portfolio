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
  const t = await getTranslations("About");

  return (
    <section className="col-span-4 min-h-screen px-6 md:px-16 lg:px-24 py-16 md:py-24">
      <SlideUpWrapper>
        <div className="flex flex-col lg:flex-row lg:items-start gap-16 lg:gap-24 max-w-6xl mx-auto">
          <div className="lg:w-1/2 lg:sticky lg:top-24 space-y-10">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight">
                {t("h1")}
              </h1>
            </div>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-sm">
              {t("subtitle")}
            </p>
          </div>

          <div className="lg:w-1/2 space-y-10">
            <p className="text-base md:text-lg leading-relaxed">
              {t("description")}
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-8 pt-4 border-t border-border">
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                  {t("labels.location")}
                </span>
                <span className="text-sm font-medium">{t("location")}</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                  {t("labels.role")}
                </span>
                <span className="text-sm font-medium">{t("role")}</span>
              </div>
            </div>
          </div>
        </div>
      </SlideUpWrapper>
    </section>
  );
}

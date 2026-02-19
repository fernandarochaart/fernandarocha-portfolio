import type { Metadata } from "next/types";
import { getTranslations } from "next-intl/server";
import ContactForm from "@/components/contact-form/contact-form";
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
  const t = await getTranslations({ locale, namespace: "Contact" });

  return {
    title: t("title"),
    description: t("h1"),
  };
}

export default async function ContactPage() {
  const t = await getTranslations("Contact");

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
              {t("cardSubtitle")}
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-8 pt-4 border-t border-border">
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                  {t("labels.email")}
                </span>
                <a
                  href="mailto:fernandarochaart@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium hover:underline underline-offset-4 transition-all"
                >
                  Fernanda Rocha
                </a>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                  {t("labels.linkedin")}
                </span>
                <a
                  href="https://www.linkedin.com/in/fernanda-padilha-da-rocha-mktecomunicacao/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium hover:underline underline-offset-4 transition-all"
                >
                  fernandarocha
                </a>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                  {t("labels.instagram")}
                </span>
                <a
                  href="https://www.instagram.com/fernandaarocha_"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium hover:underline underline-offset-4 transition-all"
                >
                  @fernandaarocha_
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </SlideUpWrapper>
    </section>
  );
}

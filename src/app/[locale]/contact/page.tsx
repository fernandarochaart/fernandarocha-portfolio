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
  const t = await getTranslations({ locale, namespace: "Contact" });

  return {
    title: t("title"),
    description: t("h1"),
  };
}

export default function ContactPage() {
  return (
    <div className="min-h-screen mx-auto text-center mt-20">
      <h1>Contact</h1>
      <p>Feel free to reach out to me at fernanda@example.com.</p>
    </div>
  );
}

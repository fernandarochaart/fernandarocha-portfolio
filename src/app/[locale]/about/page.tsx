import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("Footer");

  return (
    <div className="min-h-screen mx-auto text-center mt-20">
      <h1 className="text-base md:text-2xl">{t("about")}</h1>
      <p className="mt-6 text-sm md:text-lg">{t("description")}.</p>
    </div>
  );
}

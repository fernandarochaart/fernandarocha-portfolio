import { getTranslations } from "next-intl/server";

export default async function HeroSection() {
  const t = await getTranslations("Layout");
  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}

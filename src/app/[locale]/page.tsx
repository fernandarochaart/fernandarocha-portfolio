import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("Home");
  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold">{t("description")}</h1>
    </main>
  );
}

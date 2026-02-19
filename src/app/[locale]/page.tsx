import { getTranslations } from "next-intl/server";
import SlideUpWrapper from "@/components/wrapper/slide-wrapper";

export default async function Home() {
  const t = await getTranslations("Home");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SlideUpWrapper>
        <h1 className="text-2xl font-bold">{t("description")}</h1>
      </SlideUpWrapper>
    </main>
  );
}

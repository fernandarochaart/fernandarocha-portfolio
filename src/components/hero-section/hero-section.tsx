import { getTranslations } from "next-intl/server";
import { InfiniteCarousel } from "../card-carousel/card-carousel";
import SlideUpWrapper from "../wrapper/slide-wrapper";

export default async function HeroSection() {
  const t = await getTranslations("Layout");

  return (
    <>
      <SlideUpWrapper>
        <div className="flex min-h-screen items-center">
          <h1 className="mx-auto">{t("title")}</h1>
        </div>
      </SlideUpWrapper>

      <div className="min-h-screen w-full">
        <InfiniteCarousel direction="right" speed="normal" />
      </div>
    </>
  );
}

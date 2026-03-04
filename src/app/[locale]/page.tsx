import HeroSection from "@/components/hero-section/hero-section";
import SlideUpWrapper from "@/components/wrapper/slide-wrapper";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <SlideUpWrapper>
        <HeroSection />
      </SlideUpWrapper>
    </main>
  );
}

import HeroSection from "@/components/hero-section/hero-section";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import JobsPage from "./jobs/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <section id="home" className="scroll-mt-20">
        <HeroSection />
      </section>

      <section id="jobs" className="scroll-mt-20">
        <JobsPage />
      </section>

      <section id="about" className="scroll-mt-20">
        <AboutPage />
      </section>

      <section id="contact" className="scroll-mt-20">
        <ContactPage />
      </section>
    </main>
  );
}

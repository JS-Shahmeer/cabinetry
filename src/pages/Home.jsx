import SiteNavbar from "@/components/shared/SiteNavbar";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import PortfolioGallery from "@/components/home/PortfolioGallery";
import CraftsmanshipSection from "@/components/home/CraftmanshipSection";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import ProcessSection from "@/components/home/ProcessSection";
import HardwareCTASection from "@/components/home/HardwareCTASection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import SiteFooter from "@/components/shared/SiteFooter";
import StickyConsultationCTA from "@/components/shared/StickyConsultationCTA";

const images = {
  hero:          "https://media.base44.com/images/public/6a2c516b2e53d966d671587c/efc5448eb_generated_2800ab13.png",
  workshop:      "https://media.base44.com/images/public/6a2c516b2e53d966d671587c/7a63d8653_generated_ea656d07.png",
  kitchen:       "https://media.base44.com/images/public/6a2c516b2e53d966d671587c/e19f472eb_generated_59c01594.png",
  bath:          "https://media.base44.com/images/public/6a2c516b2e53d966d671587c/3d1fb18b0_generated_3c6fa065.png",
  builtIn:       "https://media.base44.com/images/public/6a2c516b2e53d966d671587c/28c099c3e_generated_419aa79e.png",
  entertainment: "https://media.base44.com/images/public/6a2c516b2e53d966d671587c/dd77d63ae_generated_4223884a.png",
  storage:       "https://media.base44.com/images/public/6a2c516b2e53d966d671587c/6e3375d4d_generated_93cbca2e.png",
  grain:         "https://media.base44.com/images/public/6a2c516b2e53d966d671587c/c270b2017_generated_e7d1bec3.png",
  before:        "https://media.base44.com/images/public/6a2c516b2e53d966d671587c/a2f24d572_generated_8448dae5.png",
  after:         "https://media.base44.com/images/public/6a2c516b2e53d966d671587c/e94ded35b_generated_716697d4.png",
  cta:           "https://media.base44.com/images/public/6a2c516b2e53d966d671587c/fd8ce7301_generated_f8d7b457.png",
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteNavbar />
      <Hero image={images.hero} />
      <PortfolioGallery images={images} />
      <AboutSection image={images.workshop} />
      <CraftsmanshipSection image={images.grain} />
      <ServicesSection images={images} />
      <BeforeAfterSection before={images.before} after={images.after} />
      <ProcessSection />
      <HardwareCTASection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection image={images.cta} />
      <SiteFooter />
      <StickyConsultationCTA />
    </main>
  );
}
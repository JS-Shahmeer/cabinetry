import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import TrustBar from "@/components/shared/TrustBar";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import { IMG } from "@/components/lib/siteImages";

const categories = [
  {
    label: "Pricing",
    faqs: [
      ["How much does custom cabinetry cost?", "Custom cabinetry pricing depends on the scope of your project—room size, cabinet count, wood species, finish, and features. We provide detailed quotes after your consultation so you understand exactly what you're getting and what it costs. We're happy to discuss budget expectations during the consultation."],
      ["Is custom cabinetry more expensive than stock cabinets?", "Custom cabinetry is priced higher than big-box stock cabinets, but it's built to a fundamentally different standard—all-wood construction, custom sizing, and professional finishes that last significantly longer. Most homeowners find the long-term value of custom cabinetry far exceeds the initial price difference."],
      ["Do you offer financing or payment plans?", "We can discuss payment scheduling for larger projects. Please ask about options during your consultation."],
      ["Do you provide written quotes?", "Yes. After your consultation and design review, we provide a detailed written quote covering all materials, labor, and installation."],
    ]
  },
  {
    label: "Timeline",
    faqs: [
      ["How long does a custom cabinet project take?", "Timelines vary by project scope. A single bathroom vanity typically takes 4–6 weeks. A full kitchen remodel runs 8–12 weeks. Built-in projects fall in between at 5–8 weeks. We'll give you a specific timeline after reviewing your project."],
      ["How soon can you start my project?", "Our schedule varies by season and current project load. The best way to get an accurate start date is to schedule a consultation—we can usually give you a realistic start window within a few days of that conversation."],
      ["What causes delays?", "Most delays are related to material lead times or significant design changes during fabrication. We communicate proactively if any issue arises that could affect your timeline."],
    ]
  },
  {
    label: "Materials",
    faqs: [
      ["Do you use particle board in your cabinets?", "Never. Every cabinet Southern Accent Cabinetry builds uses all-wood construction—plywood interior boxes and solid wood face frames. Particle board is cheaper but fails faster under moisture and load. We refuse to use it."],
      ["What wood species do you work with?", "We work with maple, oak, cherry, walnut, hickory, pine, poplar, and other species depending on your project requirements. During your consultation we'll discuss which species is best suited to your finish selection and design goals."],
      ["What finish options are available?", "We offer lacquer-based paint in custom colors, semi-transparent stains in warm and cool tones, and natural clear-coat finishes. All finishes are professionally applied and cured for maximum durability."],
      ["What hardware do you use?", "We offer soft-close hinges and full-extension drawer slides on every project as standard. Decorative hardware (pulls, knobs, latches) is selected during the design process in the style and finish of your choice."],
    ]
  },
  {
    label: "Design",
    faqs: [
      ["How does the design consultation work?", "Your consultation is a no-pressure conversation about your project. We'll visit your space, listen to your goals, discuss styles and materials, and answer your questions. There's no obligation and no sales pressure—just a genuine planning discussion."],
      ["Can I bring inspiration photos?", "Absolutely. We encourage it. Photos from Pinterest, Houzz, magazine features, or homes you've visited are extremely helpful for communicating your style preferences."],
      ["Can you match my home's existing trim and millwork?", "Yes. Custom cabinetry can be built to match or complement your home's existing architectural details, door styles, and trim profiles."],
      ["Do I need to have a design idea before the consultation?", "Not at all. Some clients come with very specific ideas; others come with zero idea and just know they want better cabinetry. Both are perfectly fine. We'll guide the conversation wherever you are."],
    ]
  },
  {
    label: "Installation",
    faqs: [
      ["Do you handle installation yourself?", "Yes. Our installation team handles delivery and installation. We don't hand your project off to a subcontractor—the same standard that built your cabinets governs the installation."],
      ["Do I need to be home during installation?", "We ask that someone be present on the first day of installation and for the final walkthrough. After that, trusted access arrangements can be discussed."],
      ["How do you protect my floors and walls during installation?", "Our installation crew lays protective coverings on all floors and takes care to protect adjacent surfaces. We treat your home as if it were our own."],
    ]
  },
  {
    label: "Warranty & Support",
    faqs: [
      ["Do you stand behind your work?", "Absolutely. We've built our reputation over 40 years by standing behind every project. If something isn't right after installation, we make it right—no argument, no hassle."],
      ["What happens if a door or drawer needs adjustment?", "Minor adjustments after installation are normal in any cabinetry project as wood acclimates to your home's humidity. We address all post-installation adjustments as part of our service."],
      ["How do I care for my custom cabinets?", "We'll provide specific care guidance based on your finish type. In general: clean with a mild damp cloth, avoid harsh chemicals, and wipe up moisture promptly. Lacquer finishes are quite durable with normal care."],
    ]
  },
  {
    label: "Consultation",
    faqs: [
      ["Is the consultation really free?", "Yes, completely free. No obligation. We believe in earning your business through the quality of our work and the clarity of our communication—not by pressuring you after a quote."],
      ["What should I prepare for my consultation?", "Bring any inspiration photos you have, an idea of your approximate budget range, and think through your storage needs and frustrations with your current space. We'll handle the rest."],
      ["What happens after the consultation?", "After our visit, we develop a custom design for your review. Once you're happy with the design and we've finalized materials, we provide a detailed written quote. Nothing moves to production without your approval."],
    ]
  },
];

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-5 text-left gap-4">
        <span className="font-display text-xl text-primary">{q}</span>
        {open ? <ChevronUp className="h-5 w-5 shrink-0 text-[#8C6A43]" /> : <ChevronDown className="h-5 w-5 shrink-0 text-[#8C6A43]" />}
      </button>
      {open && <p className="pb-5 leading-8 text-muted-foreground">{a}</p>}
    </div>
  );
}

export default function FAQ() {
  const [activeCat, setActiveCat] = useState("Pricing");
  const current = categories.find(c => c.label === activeCat);

  return (
    <PageLayout title="Custom Cabinetry FAQs | Pricing, Timeline & Materials" description="Answers to the most common questions about custom cabinetry pricing, timeline, wood species, installation, and what to expect from Southern Accent Cabinetry in North Augusta, SC.">
      <PageHero
        eyebrow="Frequently Asked Questions · Custom Cabinetry"
        title="Your Custom Cabinetry Questions, Answered"
        subtitle="Pricing, timelines, materials, installation — everything you need to know before starting your project in North Augusta, Augusta, or the CSRA."
        image={IMG.grain}
        cta={false}
      />
      <TrustBar />

      <section className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
            {/* Sidebar */}
            <aside className="space-y-1">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8C6A43]">Categories</p>
              {categories.map(({ label }) => (
                <button key={label} onClick={() => setActiveCat(label)} className={`block w-full rounded-none py-3 px-4 text-left text-sm transition-colors ${activeCat === label ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"}`}>
                  {label}
                </button>
              ))}
            </aside>

            {/* Questions */}
            <div>
              <h2 className="font-display text-3xl text-primary mb-8">{activeCat} Questions</h2>
              <div className="border-t border-border">
                {current?.faqs.map(([q, a]) => <AccordionItem key={q} q={q} a={a} />)}
              </div>
              <div className="mt-12 bg-muted p-8">
                <p className="font-display text-2xl text-primary mb-3">Still have a question?</p>
                <p className="text-muted-foreground mb-5">The best way to get an accurate answer for your specific project is a direct conversation with our team.</p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link to="/consultation" className="inline-block bg-primary px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:bg-[#C8A977] hover:text-[#2D241E] transition-colors">
                    Request a Consultation
                  </Link>
                  <a href="tel:8034423868" className="inline-block border border-primary px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    Call 803-442-3868
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
}
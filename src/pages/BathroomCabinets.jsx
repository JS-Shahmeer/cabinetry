import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import TrustBar from "@/components/shared/TrustBar";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import InlineTestimonial from "@/components/shared/InlineTestimonial";
import HardwareCarouselSection from "@/components/shared/HardwareCarouselSection";
import { IMG } from "@/components/lib/siteImages";

const vanityStyles = [
  { name: "Freestanding Vanity", desc: "A standalone vanity that functions as furniture. Ideal for larger bathrooms or master baths." },
  { name: "Floating / Wall-Mount", desc: "Cabinet hung from the wall for a modern, spa-like appearance with easy floor cleaning." },
  { name: "Built-In Vanity", desc: "Recessed into a wall niche or built to fill an alcove—maximizes space in any bathroom." },
  { name: "Double Sink Vanity", desc: "Custom-sized for two sinks with shared or separated storage zones for each user." },
  { name: "Tower Storage", desc: "Tall linen or storage towers that coordinate with your vanity for complete bath organization." },
  { name: "Medicine Surrounds", desc: "Custom face frames and storage surrounding recessed or surface-mount medicine cabinets." },
];

const faqs = [
  ["Can you match my existing bathroom style?", "Yes. We can build cabinetry to match tile, trim, and fixtures you're keeping, or design something entirely new if you're starting from scratch. During your consultation we'll look at the rest of the room and make sure the cabinetry fits the overall style instead of standing apart from it."],
  ["Do you build cabinets for small bathrooms?", "Small bathrooms are actually where custom cabinetry makes the biggest difference. We regularly design vanities and storage for powder rooms and tight primary baths, using every inch of an odd shaped wall or awkward corner that a stock vanity simply can't account for."],
  ["What countertop options work with custom vanities?", "We build cabinetry to accommodate whatever countertop you choose, including quartz, granite, marble, and solid surface. We can also recommend countertop fabricators we've worked with before if you don't already have one in mind."],
  ["How long does a custom bathroom cabinet project take?", "Most bathroom cabinetry projects take between four and eight weeks from final design approval to installation, depending on the complexity of the layout and our current shop schedule. We'll give you a firm timeline once your design and materials are locked in."],
];

const featuredHardware = [
  {
    title: "Decorative Cabinet Hardware",
    description: "Handles and knobs selected to match vanity style and finish direction.",
    image: IMG.bath,
    href: "https://www.hardwareresources.com/decorative-hardware",
  },
  {
    title: "Bathroom Organizers",
    description: "Keep vanity interiors cleaner and easier to use with dedicated storage accessories.",
    image: IMG.storage,
    bullets: ["Drawer organization", "Vanity organization", "Hair appliance storage"],
    href: "https://www.hardwareresources.com/organizers/bathroom-organizers.html",
  },
  {
    title: "Soft-Close Hinges",
    description: "Quiet close movement for high-use bathroom cabinet doors.",
    image: IMG.workshop,
    href: "https://www.hardwareresources.com/decorative-hardware",
  },
  {
    title: "Drawer Slides",
    description: "Smooth slide performance for vanity drawers and storage pull-outs.",
    image: IMG.grain,
    href: "https://www.hardwareresources.com/organizers/bathroom-organizers.html",
  },
  {
    title: "Vanity Accessories",
    description: "Bathroom-focused accessory upgrades for day-to-day organization and convenience.",
    image: IMG.bath,
    href: "https://www.hardwareresources.com/organizers/bathroom-organizers.html",
  },
];

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-6 text-left">
        <span className="font-display text-xl text-primary">{q}</span>
        {open ? <ChevronUp className="h-5 w-5 text-[#8C6A43]" /> : <ChevronDown className="h-5 w-5 text-[#8C6A43]" />}
      </button>
      {open && <p className="pb-6 leading-8 text-muted-foreground">{a}</p>}
    </div>
  );
}

export default function BathroomCabinets() {
  return (
    <PageLayout title="Bathroom Cabinets" description="Custom bathroom cabinets built with all-wood construction in North Augusta, SC and Augusta, GA. Freestanding, floating, built-in, and double-sink designs.">
      <PageHero
        eyebrow="Custom Bathroom Cabinets · North Augusta, SC"
        title="Custom Bathroom Cabinets Built to Last"
        subtitle="All wood cabinetry designed for your bathroom's exact dimensions, storage needs, and style, not pulled from a showroom catalog."
        image={IMG.bath}
      />
      <TrustBar />

      <section className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Why custom bathroom cabinetry</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Bathroom Cabinetry That Fits Your Space Perfectly</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">Standard vanity sizes rarely fit bathrooms perfectly. Custom bathroom cabinetry eliminates the gap between cabinet and wall, maximizes storage in odd shaped spaces, and creates a cohesive, finished look that stock cabinets can't achieve.</p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">Whether you're remodeling a primary bath or updating a powder room, Southern Accent Cabinetry designs and builds custom bathroom cabinetry that elevates the entire room.</p>
            <div className="mt-8 space-y-3">
              {["Built to exact wall dimensions", "Any door style and finish", "Soft close hinges and drawer slides", "Integrated linen storage options", "Double sink configurations", "Matching accessories and towers"].map(item => (
                <div key={item} className="flex items-center gap-3"><Check className="h-4 w-4 shrink-0 text-[#8C6A43]" /><span>{item}</span></div>
              ))}
            </div>
          </div>
          <img src={IMG.bath} alt="Custom bathroom vanity by Southern Accent Cabinetry" className="h-[500px] w-full object-cover" />
        </div>
      </section>

      <div className="bg-white px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <InlineTestimonial quote="Our new vanity fits the bathroom like it was always there. The craftsmanship is exceptional and the finish is absolutely beautiful." name="Bathroom Remodel Client, Augusta, GA" />
        </div>
      </div>

      {/* Vanity Styles */}
      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Cabinet designs</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Custom Cabinet Styles for Every Bathroom</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {vanityStyles.map(({ name, desc }) => (
              <div key={name} className="border-l-4 border-[#C8A977] bg-background p-7">
                <h3 className="font-display text-2xl text-primary mb-3">{name}</h3>
                <p className="leading-7 text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Space optimization */}
      <section className="bg-primary px-5 py-24 text-white lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#C8A977]">Space optimization</p>
            <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">Every Bathroom Has More Storage Potential Than You Think</h2>
            <p className="mt-5 text-lg leading-8 text-white/72">Custom cabinetry unlocks storage in spaces that stock furniture ignores, like the space under a sloped ceiling, a narrow alcove between the toilet and wall, or a full height cabinet in an unused corner.</p>
            <div className="mt-8 space-y-3">
              {["Vanity drawer inserts and organizers", "Hidden hamper pulls in vanity base", "Built in linen tower integration", "Under sink plumbing accommodations", "Recessed niche storage above toilet", "Matching medicine cabinet framing"].map(item => (
                <div key={item} className="flex items-center gap-3"><Check className="h-4 w-4 shrink-0 text-[#C8A977]" /><span className="text-white/82">{item}</span></div>
              ))}
            </div>
          </div>
          <img src={IMG.storage} alt="Custom bathroom storage solutions" className="h-[460px] w-full object-cover" />
        </div>
      </section>

      {/* Gallery */}
      <section className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Recent projects</p>
          <h2 className="mb-12 font-display text-4xl leading-tight text-primary md:text-5xl">Bathroom Vanity Projects</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {[IMG.bath, IMG.grain, IMG.workshop].map((img, i) => (
              <div key={i} className="group overflow-hidden">
                <img src={img} alt={`Custom bathroom vanity project ${i + 1}`} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <HardwareCarouselSection
        eyebrow="Featured products"
        title="Bathroom Hardware and Storage"
        intro="Bathroom-related accessories only, focused on vanity organization, smooth hardware performance, and practical daily use."
        products={featuredHardware}
      />

      {/* FAQ */}
      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Common questions</p>
          <h2 className="mb-12 font-display text-4xl leading-tight text-primary md:text-5xl">Bathroom Cabinet Questions</h2>
          <div className="border-t border-border">
            {faqs.map(([q, a]) => <FAQ key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      <ConsultationCTA headline="Ready to Design Your Custom Bathroom Cabinets?" sub="Tell us about your bathroom. We'll help you explore layout options, styles, and materials for cabinetry built perfectly for your space." />
    </PageLayout>
  );
}
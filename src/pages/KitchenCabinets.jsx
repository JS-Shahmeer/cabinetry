import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import TrustBar from "@/components/shared/TrustBar";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import InlineTestimonial from "@/components/shared/InlineTestimonial";
import HardwareCarouselSection from "@/components/shared/HardwareCarouselSection";
import kitchen1 from "@/assets/images/kitchen1.webp";
import kitchenOrganizers from "@/assets/images/kitchen2.webp";
import kitchen2 from "@/assets/images/kitchen2.webp";
import kitchen3 from "@/assets/images/kitchen3.webp";
import storage1 from "@/assets/images/storage1.webp";
import storage2 from "@/assets/images/storage2.webp";
import storage3 from "@/assets/images/storage3.webp";
import kitchenKnobsPulls from "@/assets/images/new-images/Kitchen-Cabinets _Cabinet-Knobs-Pulls.jpg";
import kitchenHinges from "@/assets/images/new-images/Kitchen-Cabinets_Cabinet-Hinges.webp";
import kitchenDrawerSlides from "@/assets/images/kitchen1.webp";
import DrawerOrganizers from "@/assets/images/new-images/Cabinet-Inserts_Drawer-Organizers.png";
import Pulloutstorage from "@/assets/images/storage6.webp";

const styles = [
  { name: "Shaker", desc: "Clean recessed panel doors. Timeless in both traditional and modern kitchens." },
  { name: "Raised Panel", desc: "Classic raised center panel. Elegant in traditional, colonial, and formal kitchens." },
  { name: "Slab / Flat Front", desc: "Full flush panel. Perfect for contemporary, transitional, and minimalist kitchens." },
  { name: "Beaded Inset", desc: "Inset doors with a beaded frame detail. A hallmark of high-end custom cabinetry." },
  { name: "Glass Front", desc: "Display uppers with glass panels to showcase dishware and add visual depth." },
  { name: "Open Shelving", desc: "Integrated open shelves combined with cabinetry for a modern, curated kitchen look." },
];

const species = [
  ["Maple", "Hard and smooth-grained—takes paint and stain evenly for a clean, consistent finish."],
  ["Oak", "Bold grain character that adds warmth and natural texture to traditional kitchens."],
  ["Cherry", "Rich reddish-brown tones that deepen beautifully over time. A luxury wood choice."],
  ["Walnut", "Dark, dramatic grain. The premium choice for modern and transitional luxury kitchens."],
  ["Hickory", "Pronounced rustic grain with natural color variation. Perfect for farmhouse kitchens."],
  ["Painted", "Any species with a lacquer-based paint finish in custom colors matched to your vision."],
];

const storage = [
  "Deep drawer base cabinets", "Pull-out shelf inserts", "Pot and pan dividers", "Spice pull-outs", "Lazy Susan corner storage",
  "Waste and recycling pull-outs", "Silverware tray inserts", "Drawer organizer inserts", "Blind corner solutions", "Pantry pull-out systems",
];

const faqs = [
  ["How long does a full kitchen cabinet project take?", "Most full kitchen cabinet projects take between six and ten weeks from final design approval to installation, depending on the scope of the layout and our current shop schedule. Smaller updates, like replacing an island or adding a pantry wall, typically move faster."],
  ["Can you match new cabinets to existing trim or flooring?", "Yes. We'll look at your existing trim, flooring, and any cabinetry you're keeping during the consultation and design around it, so the new cabinets feel like they belong rather than standing out."],
  ["Do you handle demolition and removal of old cabinets?", "We do. Our crew handles removal of your existing cabinets as part of the installation process, so you're not coordinating a separate demolition crew or hauling anything out yourself."],
  ["What is the difference between painted and stained cabinets?", "Stained cabinets show the natural wood grain underneath a clear or tinted finish, while painted cabinets are finished in a solid opaque color that hides the grain entirely. Painted finishes tend to work well in more modern kitchens, while stained finishes lean traditional, though plenty of kitchens mix both on different cabinet runs."],
];

const featuredHardware = [
  {
    title: "Decorative Cabinet Knobs & Pulls",
    description: "Modern, traditional and transitional finishes.",
    image: kitchenKnobsPulls,
    href: "https://www.hardwareresources.com/decorative-hardware/cabinet-knobs-pulls.html",
    linkLabel: "Link to Decorative Hardware",
  },
  {
    title: "Pull-Out Storage",
    description: "Core kitchen organization categories supported by Hardware Resources.",
    image: Pulloutstorage,
    bullets: ["Spice pull-outs", "Base cabinet pull-outs", "Waste container pull-outs"],
    href: "https://www.hardwareresources.com/organizers/cabinet-organizers.html",
    linkLabel: "Link to Kitchen Organizers",
  },
  {
    title: "Drawer Organization",
    description: "Purpose-built organizer systems for everyday kitchen workflow.",
    image: DrawerOrganizers,
    bullets: ["Cutlery trays", "Utensil organizers", "Knife storage"],
    href: "https://www.hardwareresources.com/organizers/cabinet-organizers.html",
    linkLabel: "Link to Drawer Organizers",
  },
  {
    title: "Corner Cabinet Solutions",
    description: "Maximize hard-to-reach corner zones with dedicated systems.",
    image: kitchen3,
    bullets: ["Lazy Susan", "CornerMax", "Blind corner organizers"],
    href: "https://www.hardwareresources.com/organizers/cabinet-organizers.html",
    linkLabel: "Link to Corner Organizers",
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

export default function KitchenCabinets() {
  return (
    <PageLayout title="Kitchen Cabinets" description="Southern Accent Cabinetry builds fully custom kitchen cabinets in North Augusta, SC and Augusta, GA. All-wood construction, plywood interiors, solid wood faces, and professional lacquer finishes.">
      <PageHero
        eyebrow="Custom Kitchen Cabinets · North Augusta, SC"
        title="Custom Kitchen Cabinets Built for Your Home"
        subtitle="Precision-crafted all-wood kitchen cabinetry designed around your kitchen's exact dimensions, your family's storage needs, and your personal style."
        image={kitchen1}
      />
      <TrustBar />

      {/* Intro */}
      <section className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Why custom kitchen cabinets</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Your Kitchen Deserves Cabinets Built for It</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">Stock cabinets are sized for a theoretical kitchen. Custom kitchen cabinets are built for yours—maximizing every inch, working around awkward corners, and making the most of ceiling height.</p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">Southern Accent Cabinetry has been building custom kitchen cabinets for CSRA homeowners since 1984. Every cabinet is constructed with plywood interiors, solid wood faces, and finished with durable lacquer for a result that looks and performs better than anything off a showroom floor.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Floor-to-ceiling maximization", "Custom island cabinetry", "Built-in specialty storage", "Any door style or wood species", "Professional paint or stain finish", "Installed by our own crew"].map(item => (
                <div key={item} className="flex items-center gap-3"><Check className="h-4 w-4 shrink-0 text-[#8C6A43]" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
          <img src={kitchen2} alt="Luxury custom kitchen cabinets by Southern Accent Cabinetry" className="h-[500px] w-full object-cover" />
        </div>
      </section>

      <div className="bg-white px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <InlineTestimonial quote="The kitchen looks like it was designed by an architect. Every cabinet fits perfectly and the finish is absolutely flawless." name="Kitchen Remodel Client, Augusta, GA" />
        </div>
      </div>

      {/* Cabinet Styles */}
      <section className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Door styles</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Cabinet Door Styles for Every Kitchen</h2>
            <p className="mt-5 text-lg text-muted-foreground">From classic shaker to sleek flat front, we build every door style to your specifications in the wood species and finish of your choice.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {styles.map(({ name, desc }) => (
              <div key={name} className="bg-white border-t-4 border-[#C8A977] p-7">
                <h3 className="font-display text-2xl text-primary mb-3">{name}</h3>
                <p className="leading-7 text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wood Species */}
      <section className="bg-primary px-5 py-24 text-white lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#C8A977]">Wood species & finishes</p>
            <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">Premium Wood Species. Professional Finishes.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {species.map(([name, desc]) => (
              <div key={name} className="border border-white/15 p-7">
                <h3 className="font-display text-2xl text-[#C8A977] mb-3">{name}</h3>
                <p className="leading-7 text-white/75">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storage Features */}
      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Storage optimization</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Every Inch Working For You</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">Custom cabinetry isn't just about appearance—it's about making your kitchen dramatically more functional. We design storage systems that eliminate the frustration of inaccessible corners, wasted space, and cluttered counters.</p>
            <div className="mt-8 grid gap-2 sm:grid-cols-2">
              {storage.map(item => (
                <div key={item} className="flex items-center gap-3 py-1"><Check className="h-4 w-4 shrink-0 text-[#8C6A43]" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
          <img src={storage1} alt="Custom kitchen storage solutions by Southern Accent Cabinetry" className="h-[480px] w-full object-cover" />
        </div>
      </section>

      {/* Project Gallery */}
      <section className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Recent work</p>
              <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Kitchen Cabinet Projects</h2>
            </div>
            <Link to="/gallery" className="hidden text-sm text-[#8C6A43] hover:text-primary md:block">Full gallery →</Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[kitchen3, kitchen1, kitchenOrganizers].map((img, i) => (
              <div key={i} className="group relative overflow-hidden">
                <img src={img} alt={`Custom kitchen cabinet project ${i + 1}`} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/gallery" className="text-sm text-[#8C6A43]">View all gallery projects →</Link>
          </div>
        </div>
      </section>

      <HardwareCarouselSection
        eyebrow="Featured products"
        title="Kitchen Hardware and Organization"
        intro="This section includes the largest hardware section, covering all core kitchen categories supported by Hardware Resources."
        products={featuredHardware}
      />

      <div className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <InlineTestimonial quote="The storage solutions they designed eliminated every frustration we had with our old kitchen. Everything has a place and nothing is wasted." name="Kitchen Client, North Augusta, SC" />
        </div>
      </div>

      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Common questions</p>
          <h2 className="mb-12 font-display text-4xl leading-tight text-primary md:text-5xl">Kitchen Cabinet Questions</h2>
          <div className="border-t border-border">
            {faqs.map(([q, a]) => <FAQ key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      <ConsultationCTA headline="Ready to Design Your Custom Kitchen Cabinets?" sub="Tell us about your kitchen. We'll explore options, materials, and design ideas together in a free, no-pressure consultation." />
    </PageLayout>
  );
}
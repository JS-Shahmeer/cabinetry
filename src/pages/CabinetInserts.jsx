import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import TrustBar from "@/components/shared/TrustBar";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import InlineTestimonial from "@/components/shared/InlineTestimonial";
import HardwareCarouselSection from "@/components/shared/HardwareCarouselSection";
import cabinetInsertsHero from "@/assets/images/cabinetinserts1.png";
import storage3 from "@/assets/images/storage3.webp";

const insertOptions = [
  {
    title: "Pull Out Shelving",
    desc: "Full extension shelves that bring the back of a deep cabinet within easy reach instead of leaving it buried behind everything else.",
  },
  {
    title: "Spice Pull Outs",
    desc: "Narrow pull out units sized for spice jars, built to fit slim spaces beside the range or sink.",
  },
  {
    title: "Waste & Recycling Pull Outs",
    desc: "Concealed bins that keep trash and recycling out of sight but easy to access.",
  },
  {
    title: "Drawer Dividers",
    desc: "Custom fitted dividers for utensils, cutlery, or linens, sized to your exact drawer.",
  },
  {
    title: "Lazy Susans",
    desc: "Rotating shelving for corner cabinets, so nothing gets pushed out of reach.",
  },
  {
    title: "Tray & Lid Dividers",
    desc: "Vertical dividers for baking sheets, cutting boards, and pot lids that would otherwise stack awkwardly.",
  },
];

const faqs = [
  ["Can you add inserts to cabinets you didn't build?", "In most cases, yes. We measure your existing cabinet openings and build inserts to fit them, whether we built the original cabinetry or not. There are occasional layouts, like unusually shallow cabinets or nonstandard framing, where an insert isn't practical, but we'll tell you upfront if that's the case rather than after the fact."],
  ["Do inserts work in older cabinets?", "Older cabinets can usually be fitted with inserts as long as the box itself is still square and structurally sound. We'll take a look at the condition of your existing cabinets during the consultation and let you know if any adjustments are needed before an insert goes in."],
  ["What's the difference between an insert and an organizer from a store?", "A store bought organizer is made to a standard size and often needs to be trimmed, wedged, or left with gaps to fit your cabinet. A custom insert is built to your exact opening, out of solid wood instead of plastic or thin laminate, and finished to match the rest of your cabinetry."],
  ["How long does an insert installation take?", "Most insert projects are measured and installed within two to four weeks, depending on the number of cabinets involved and our current shop schedule. Smaller single cabinet updates can often move faster."],
];

const featuredHardware = [
  { title: "Drawer Inserts", description: "Built-to-fit inserts for cleaner drawer zoning and easier access.", image: storage3, href: "https://www.hardwareresources.com/organizers/cabinet-organizers/drawer-organizers.html" },
  { title: "Cutlery Organizers", description: "Dedicated slots and dividers for daily flatware organization.", image: cabinetInsertsHero, href: "https://www.hardwareresources.com/organizers/cabinet-organizers/drawer-organizers.html" },
  { title: "Knife Blocks", description: "Safe, organized knife storage integrated into drawer layouts.", image: storage3, href: "https://www.hardwareresources.com/organizers/cabinet-organizers/drawer-organizers.html" },
  { title: "Utensil Organizers", description: "Adjustable utensil organization for broad kitchen tool sets.", image: cabinetInsertsHero, href: "https://www.hardwareresources.com/organizers/cabinet-organizers/drawer-organizers.html" },
  { title: "Spice Organizers", description: "Spice drawer and pull-out systems for quick visibility and reach.", image: storage3, href: "https://www.hardwareresources.com/organizers/cabinet-organizers.html" },
  { title: "Waste Container Systems", description: "Concealed waste and recycling pull-out systems for cleaner cabinet layouts.", image: cabinetInsertsHero, href: "https://www.hardwareresources.com/organizers/cabinet-organizers/waste-container-organizers.html" },
  { title: "Mixer Lift", description: "Heavy appliance lift systems that hide stand mixers when not in use.", image: storage3, href: "https://www.hardwareresources.com/organizers/cabinet-organizers.html" },
  { title: "Roll-Out Shelves", description: "Smooth roll-out shelf upgrades for deep base cabinet access.", image: cabinetInsertsHero, href: "https://www.hardwareresources.com/organizers/cabinet-organizers.html" },
  { title: "Paper Towel Pull-Out", description: "Integrated paper towel storage and dispensing pull-out units.", image: storage3, href: "https://www.hardwareresources.com/organizers/cabinet-organizers.html" },
  { title: "Cleaning Supply Organizer", description: "Under-sink and utility organizers for cleaning products and tools.", image: cabinetInsertsHero, href: "https://www.hardwareresources.com/organizers/cabinet-organizers.html" },
  { title: "CornerMax", description: "CornerMax systems that recover corner cabinetry storage efficiently.", image: storage3, href: "https://www.hardwareresources.com/organizers/cabinet-organizers/corner-organizers.html" },
  { title: "Pantry Pull-Out", description: "Tall pull-out systems that support pantry-style organization in cabinet towers.", image: cabinetInsertsHero, href: "https://www.hardwareresources.com/organizers/cabinet-organizers.html" },
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

export default function CabinetInserts() {
  return (
    <PageLayout title="Cabinet Inserts" description="Custom cabinet inserts built to your exact cabinet dimensions in North Augusta, SC and Augusta, GA. Pull outs, drawer dividers, lazy susans, and storage upgrades for new cabinets or retrofits.">
      <PageHero
        eyebrow="Custom Cabinet Inserts · North Augusta, SC"
        title="Custom Cabinet Inserts Built to Last"
        subtitle="All wood inserts designed to fit your exact cabinets, whether newly built or already in your home, not generic organizers off a hardware store shelf."
        image={cabinetInsertsHero}
      />
      <TrustBar />

      <section className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Why custom cabinet inserts</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Inserts That Make Every Cabinet Work Harder</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">A cabinet with just a single shelf inside is only using part of its potential. Custom inserts add structure inside the box itself, so drawers hold what they're supposed to hold and deep cabinets stop swallowing things whole.</p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">Whether you're finishing new cabinetry or upgrading cabinets you already have, Southern Accent Cabinetry designs and builds inserts that turn wasted space into storage you actually use.</p>
            <div className="mt-8 space-y-3">
              {[
                "Built to your exact cabinet openings",
                "Matched to your existing wood species and finish",
                "Soft close slides on all pull outs",
                "Available for new builds or retrofits",
                "Designed for kitchens, bathrooms, and pantries",
                "Installed by our own crew",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3"><Check className="h-4 w-4 shrink-0 text-[#8C6A43]" /><span>{item}</span></div>
              ))}
            </div>
          </div>
          <img src={storage3} alt="Custom cabinet insert solutions" className="h-[500px] w-full object-cover" />
        </div>
      </section>

      <div className="bg-white px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <InlineTestimonial quote="They fit inserts into cabinets we already had and it felt like a brand new kitchen without replacing a single box." name="Cabinet Insert Client, Augusta, GA" />
        </div>
      </div>

      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Insert designs</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Custom Insert Options for Every Cabinet</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {insertOptions.map(({ title, desc }) => (
              <div key={title} className="border-l-4 border-[#C8A977] bg-background p-7">
                <h3 className="font-display text-2xl text-primary mb-3">{title}</h3>
                <p className="leading-7 text-muted-foreground">{desc}</p>
                <Link to="/consultation" className="mt-6 inline-block bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:bg-[#C8A977] hover:text-[#2D241E] transition-colors">
                  Request a Consultation
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-24 text-white lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#C8A977]">Space optimization</p>
            <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">Every Cabinet Has More Storage Potential Than You Think</h2>
            <p className="mt-5 text-lg leading-8 text-white/72">Most of the wasted space in a kitchen or bathroom isn't in the room, it's inside the cabinets themselves. The right insert turns an empty corner or an overly deep base cabinet into storage you reach for every day.</p>
            <div className="mt-8 space-y-3">
              {[
                "Pull out shelving for deep base cabinets",
                "Vertical dividers for trays and lids",
                "Hidden pull out bins for trash and recycling",
                "Drawer organizers for utensils and tools",
                "Corner cabinet lazy susans",
                "Custom fitted spice storage",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3"><Check className="h-4 w-4 shrink-0 text-[#C8A977]" /><span className="text-white/82">{item}</span></div>
              ))}
            </div>
          </div>
          <img src={cabinetInsertsHero} alt="Cabinet insert space optimization" className="h-[460px] w-full object-cover" />
        </div>
      </section>

      <HardwareCarouselSection
        eyebrow="Featured products"
        title="Cabinet Insert Hardware Collection"
        intro="This is the strongest hardware page, with insert-focused options aligned to Hardware Resources kitchen organizer categories."
        products={featuredHardware}
      />

      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Common questions</p>
          <h2 className="mb-12 font-display text-4xl leading-tight text-primary md:text-5xl">Cabinet Insert Questions</h2>
          <div className="border-t border-border">
            {faqs.map(([q, a]) => <FAQ key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      <ConsultationCTA headline="Ready to Upgrade Your Cabinets with Custom Inserts?" sub="Tell us what's not working in your current cabinets. We'll help you figure out the right inserts to fix it." />
    </PageLayout>
  );
}

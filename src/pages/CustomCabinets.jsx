import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import TrustBar from "@/components/shared/TrustBar";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import InlineTestimonial from "@/components/shared/InlineTestimonial";
import { IMG } from "@/components/lib/siteImages";

const rooms = [
  { title: "Kitchen Cabinets", desc: "Floor-to-ceiling storage, island bases, wall cabinets, and specialty inserts—all built custom to your kitchen's exact dimensions.", img: IMG.kitchen, href: "/kitchen-cabinets" },
  { title: "Bathroom Cabinets", desc: "Custom vanity cabinets, linen towers, and medicine cabinet surrounds designed for your bathroom's layout and storage needs.", img: IMG.bath, href: "/bathroom-cabinets" },
  { title: "Laundry Room Cabinets", desc: "Functional laundry storage that keeps detergents, linens, and supplies organized with purpose-built cabinetry.", img: IMG.storage, href: "/built-ins" },
  { title: "Home Office Cabinets", desc: "Built-in desks, file storage, and bookcase walls that transform underused rooms into productive, organized work spaces.", img: IMG.builtIn, href: "/built-ins" },
  { title: "Built-In Storage", desc: "Floor-to-ceiling built-ins for living rooms, libraries, mudrooms, and closets—designed around how you live.", img: IMG.entertainment, href: "/built-ins" },
  { title: "Entertainment Centers", desc: "Custom media walls and entertainment centers with integrated technology management and clean cable routing.", img: IMG.entertainment, href: "/built-ins" },
];

const materials = [
  ["Wood Species", "Maple, oak, cherry, walnut, hickory, and more—selected for grain, stability, and your desired aesthetic."],
  ["Plywood Interiors", "All cabinet boxes are built with plywood—not particle board—for strength, moisture resistance, and long-term durability."],
  ["Solid Wood Faces", "Face frames and doors are built from solid wood for a premium look and feel that holds up to daily use for decades."],
  ["Paint Finishes", "Lacquer-based paints in any color with a smooth, durable surface that resists chipping and everyday wear."],
  ["Stain Finishes", "Semi-transparent stains that enhance natural wood grain character while providing lasting protection."],
  ["Hardware Options", "Soft-close hinges, full-extension drawer slides, and decorative hardware in a range of finishes."],
];

const faqs = [
  ["What makes custom cabinets different from stock or semi custom?", "Stock cabinets come in fixed sizes and have to be adjusted to fit your space with fillers and gaps. Custom cabinets are built to your exact dimensions from the start, which means no wasted space, no mismatched fillers, and a layout designed specifically around how you use the room."],
  ["Do you offer design consultations before I commit to a project?", "Yes, every project starts with a free, no pressure consultation where we talk through your space, your goals, and rough budget before any design work begins."],
  ["Can you build cabinets for any room in the house?", "We build cabinetry for kitchens, bathrooms, pantries, mudrooms, home offices, closets, and built in storage throughout the house. If you have a space that needs custom storage, it's worth asking us even if it doesn't fall neatly into one category."],
  ["What is the typical process from design to installation?", "After your initial consultation, we'll put together a design and materials plan for your approval, then move into fabrication in our shop. Once everything is built, our own crew handles installation, so the same team is involved from the first sketch to the final walkthrough."],
];

const relatedHardware = [
  "Cabinet knobs and pulls",
  "Soft close hinges",
  "Full extension drawer slides",
  "Drawer organizer systems",
  "Pull-out storage options",
  "Custom cabinet inserts",
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

export default function CustomCabinets() {
  return (
    <PageLayout title="Custom Cabinets" description="Southern Accent Cabinetry builds fully custom all-wood cabinets for kitchens, bathrooms, laundry rooms, home offices, and built-in storage in North Augusta, SC and Augusta, GA.">
      <PageHero
        eyebrow="Custom Cabinetry"
        title="Fully Custom Cabinets Designed Around Your Home"
        subtitle="Every cabinet is built from scratch—no stock sizes, no shortcuts, no particle board. Just precision-crafted all-wood cabinetry designed for the way you live."
        image={IMG.kitchen}
      />
      <TrustBar />

      {/* Intro */}
      <section className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">What makes us different</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Built to Your Exact Specifications. Not Someone Else's.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">Semi-custom and stock cabinetry are designed for a hypothetical homeowner. Our cabinets are designed for you—your ceiling heights, your storage needs, your aesthetic preferences, your home.</p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">Every project begins with a consultation where we listen to what you need, then design a solution built to achieve it.</p>
            <div className="mt-8 space-y-3">
              {["Custom dimensions for your space", "Wood species selected by you", "Finish options in paint or stain", "Hardware tailored to your style", "Built and installed by our team"].map(item => (
                <div key={item} className="flex items-center gap-3"><Check className="h-5 w-5 text-[#8C6A43]" /><span>{item}</span></div>
              ))}
            </div>
          </div>
          <img src={IMG.kitchen} alt="Custom all-wood kitchen cabinetry by Southern Accent Cabinetry" className="h-[480px] w-full object-cover" />
        </div>
      </section>

      {/* Inline testimonial */}
      <div className="bg-white px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <InlineTestimonial quote="Every measurement was perfect. These aren't cabinets that almost fit—they were built for our exact kitchen and it shows." name="Kitchen Client, Evans, GA" />
        </div>
      </div>

      {/* Room by room */}
      <section className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">All rooms. All storage.</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Custom Cabinetry for Every Room in Your Home</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map(({ title, desc, img, href }) => (
              <Link key={title} to={href} className="group bg-white overflow-hidden block">
                <div className="overflow-hidden">
                  <img src={img} alt={`${title} by Southern Accent Cabinetry`} className="h-60 w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <div className="mb-4 h-px w-10 bg-[#C8A977]" />
                  <h3 className="font-display text-2xl text-primary">{title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{desc}</p>
                  <span className="mt-4 inline-block text-sm text-[#8C6A43] hover:text-primary transition-colors">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-primary px-5 py-24 text-white lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#C8A977]">Materials & finishes</p>
            <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">Premium Materials. Professional Finishes.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {materials.map(([title, text]) => (
              <div key={title} className="border border-white/15 p-7">
                <h3 className="font-display text-2xl text-[#C8A977] mb-3">{title}</h3>
                <p className="leading-7 text-white/75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Our process</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">From Consultation to Installation</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {[["01", "Consultation", "We listen to your vision, measure your space, and understand your goals."], ["02", "Design", "We develop a custom design tailored to your home, style, and storage requirements."], ["03", "Build", "Our craftsmen fabricate every cabinet using all-wood materials to exact specifications."], ["04", "Installation", "We deliver and install with precision, then do a final walkthrough to ensure your complete satisfaction."]].map(([num, title, text]) => (
              <div key={title} className="border-l-4 border-[#C8A977] pl-6 py-2">
                <p className="font-display text-5xl text-[#C8A977]">{num}</p>
                <h3 className="mt-5 font-display text-2xl text-primary">{title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/process" className="text-sm text-[#8C6A43] hover:text-primary transition-colors">See the full process →</Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Related hardware</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Custom Cabinet Hardware and Insert Options</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">Because every custom cabinet is built around your layout, we can also match hardware and interior accessories to the way you want each space to function.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {relatedHardware.map((item) => (
                <div key={item} className="flex items-center gap-3"><Check className="h-4 w-4 shrink-0 text-[#8C6A43]" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
          <div className="border-l-4 border-[#C8A977] bg-background p-7">
            <h3 className="font-display text-3xl text-primary">Coordinate Hardware During Design</h3>
            <p className="mt-4 leading-7 text-muted-foreground">Review available hardware and organization systems so your cabinet build and accessory selections are planned together from the start.</p>
            <a href="http://www.hardwareresources.com" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-primary px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-[#C8A977] hover:text-[#2D241E]">
              View Hardware Options
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Common questions</p>
          <h2 className="mb-12 font-display text-4xl leading-tight text-primary md:text-5xl">Questions About Custom Cabinetry</h2>
          <div className="border-t border-border">
            {faqs.map(([q, a]) => <FAQ key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
}
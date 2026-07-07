import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import TrustBar from "@/components/shared/TrustBar";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import InlineTestimonial from "@/components/shared/InlineTestimonial";
import HardwareCarouselSection from "@/components/shared/HardwareCarouselSection";
import { IMG } from "@/components/lib/siteImages";
import storage1 from "@/assets/images/storage1.webp";
import storage2 from "@/assets/images/storage2.webp";
import storage3 from "@/assets/images/storage3.webp";
import storage4 from "@/assets/images/storage4.webp";
import storage5 from "@/assets/images/storage5.webp";
import storage6 from "@/assets/images/storage6.webp";
import storage7 from "@/assets/images/storage7.webp";
import builtInDecorativeWood from "@/assets/images/new-images/Built-In-Cabinets_Decorative-Wood-Moulding.webp";
import builtInHardwareSupports from "@/assets/images/new-images/Built-In-Cabinets_Shelf-Supports-Decorative-Hardware.webp";

const categories = [
  { title: "Entertainment Centers", desc: "Custom media walls built around your technology, TV alcoves, component storage, cable management, and decorative display niches in one cohesive unit.", img: storage2, features: ["TV alcove built to exact screen size", "Ventilated component storage", "Integrated cable management", "Display niches and shelving", "Matching surrounding cabinetry"] },
  { title: "Home Office Built Ins", desc: "A built in home office transforms a spare room or awkward nook into a productive, organized workspace that feels permanent and intentional.", img: storage3, features: ["Built in desk at custom height", "Overhead upper cabinets", "File drawer bases", "Floor to ceiling bookcase walls", "Integrated lighting pocket opportunities"] },
  { title: "Mudrooms & Entry Storage", desc: "A custom mudroom keeps every household member organized at the point of entry, lockers, benches, hooks, cubbies, and shoe storage built to your family's needs.", img: storage4, features: ["Individual family lockers", "Built in bench with base storage", "Cubby systems for shoes and bags", "Upper cabinet storage", "Hook rail integration"] },
  { title: "Libraries & Bookshelves", desc: "Floor to ceiling library walls with integrated ladder tracks, reading nooks, and display shelving that make a bold architectural statement.", img: storage5, features: ["Floor to ceiling shelf runs", "Integrated ladder track hardware", "Adjustable shelf spacing", "Decorative crown and base trim", "Mixed open and closed storage"] },
  { title: "Closets & Organization", desc: "Custom closet systems with dedicated zones for hanging, folding, shoes, and accessories, designed around your wardrobe, not a generic plan.", img: storage6, features: ["Double and single hang zones", "Custom drawer banks", "Shoe shelving systems", "Accessory drawers and trays", "Island or center console options"] },
];

const faqs = [
  ["Can built ins be designed around furniture or a TV I already own?", "Yes, we regularly design built ins around a specific TV size, existing furniture, or an heirloom piece you want incorporated into the final layout. Bring the measurements to your consultation and we'll build the design around them."],
  ["Will a built in still work if I want to sell my home eventually?", "Built ins are generally viewed as a valuable, permanent upgrade rather than something that limits resale, since they read as intentional architecture instead of furniture that has to be worked around. Most buyers see them as a selling point."],
  ["Can you match built ins to trim that's already in my house?", "Yes. We'll look at your existing trim profile, baseboards, and crown molding during the design process so the new built in reads as part of the original house rather than an obvious addition."],
  ["How long does a built in project typically take?", "Most built in projects take between five and nine weeks from final design approval to installation, depending on the size and complexity of the piece. Larger whole room built ins, like a full library wall, tend to run toward the longer end."],
];

const featuredHardware = [
  {
    title: "Decorative Hardware",
    description: "Cabinet pulls and knobs that complement built-ins in offices, libraries, and entertainment walls.",
    image: builtInHardwareSupports,
    href: "https://www.hardwareresources.com/decorative-hardware",
  },
  {
    title: "Shelf Supports",
    description: "Structural shelf support options for display shelves and high-load built-in storage.",
    image: builtInHardwareSupports,
    href: "https://www.hardwareresources.com/decorative-wood",
  },
  {
    title: "Decorative Wood & Mouldings",
    description: "Profile and trim options that are especially relevant for custom built-ins and architectural detailing.",
    image: builtInDecorativeWood,
    href: "https://www.hardwareresources.com/decorative-wood",
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

export default function BuiltIns() {
  return (
    <PageLayout title="Built In Cabinets" description="Southern Accent Cabinetry builds custom built in cabinets, entertainment centers, home offices, libraries, mudrooms, and closet systems in North Augusta, SC and Augusta, GA.">
      <PageHero
        eyebrow="Built In Cabinets · North Augusta, SC"
        title="Built In Cabinets That Become Part of Your Home"
        subtitle="Custom built in cabinetry designed to look like it was always there, entertainment centers, home offices, libraries, mudrooms, and closet systems built with all wood craftsmanship."
        image={IMG.builtIn}
      />
      <TrustBar />

      {/* Intro */}
      <section className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Why built in cabinets?</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Storage That Looks Like Architecture, Not Furniture</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">Built in cabinetry transforms underutilized walls and rooms into functional, organized spaces that feel intentional and permanent. Unlike freestanding furniture, a custom built in is sized to your ceiling height, designed for your wall configuration, and finished to match your home's trim and style.</p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">The result is storage that looks like it was always there, and a room that feels complete.</p>
            <div className="mt-8 space-y-3">
              {["Built to ceiling height, no wasted space above", "Matched to your home's existing trim style", "All wood construction for lasting integrity", "Custom interior configurations and inserts", "Painted or stained to your specification"].map(item => (
                <div key={item} className="flex items-center gap-3"><Check className="h-4 w-4 shrink-0 text-[#8C6A43]" /><span>{item}</span></div>
              ))}
            </div>
          </div>
          <img src={storage1} alt="Custom built-in cabinetry by Southern Accent Cabinetry" className="h-[500px] w-full object-cover" />
        </div>
      </section>

      <div className="bg-white px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <InlineTestimonial quote="The built in wall unit in our living room is the most asked about feature in our home. Every guest assumes it was original to the house." name="Built In Client, North Augusta, SC" />
        </div>
      </div>

      {/* Categories */}
      <section className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Built in solutions</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Every Room Has Built In Potential</h2>
          </div>
          <div className="space-y-8">
            {categories.map(({ title, desc, img, features }, i) => (
              <div key={title} className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <img src={img} alt={`${title} custom built-in cabinetry`} className="h-[400px] w-full object-cover" />
                </div>
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="mb-3 h-px w-10 bg-[#C8A977]" />
                  <h3 className="font-display text-4xl text-primary">{title}</h3>
                  <p className="mt-4 text-lg leading-8 text-muted-foreground">{desc}</p>
                  <div className="mt-6 space-y-2">
                    {features.map(f => <div key={f} className="flex items-center gap-3"><Check className="h-4 w-4 shrink-0 text-[#8C6A43]" /><span className="text-sm">{f}</span></div>)}
                  </div>
                  <Link to="/consultation" className="mt-6 inline-block bg-primary px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:bg-[#C8A977] hover:text-[#2D241E] transition-colors">
                    Request a Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Project gallery</p>
          <h2 className="mb-12 font-display text-4xl leading-tight text-primary md:text-5xl">Built In Cabinet Projects</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {[storage5, storage6, storage7].map((img, i) => (
              <div key={i} className="group overflow-hidden">
                <img src={img} alt={`Custom built-in project ${i + 1}`} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/gallery" className="text-sm text-[#8C6A43] hover:text-primary transition-colors">View the full project gallery →</Link>
          </div>
        </div>
      </section>

      <HardwareCarouselSection
        eyebrow="Featured products"
        title="Built-In Hardware and Trim Selections"
        intro="Built-ins benefit from a mix of decorative hardware, concealed mechanics, and trim/moulding options for architectural finish quality."
        products={featuredHardware}
      />

      <section className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Common questions</p>
          <h2 className="mb-12 font-display text-4xl leading-tight text-primary md:text-5xl">Built In Cabinet Questions</h2>
          <div className="border-t border-border">
            {faqs.map(([q, a]) => <FAQ key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      <ConsultationCTA headline="Ready to Design Your Custom Built In Cabinets?" sub="Whether it's an entertainment center, home office, mudroom, or library wall, we'll design the perfect built in solution for your space." />
    </PageLayout>
  );
}
import { ArrowUpRight, Check } from "lucide-react";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import TrustBar from "@/components/shared/TrustBar";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import kitchen1 from "@/assets/images/kitchen1.webp";
import kitchen2 from "@/assets/images/kitchen2.webp";
import storage1 from "@/assets/images/storage1.webp";
import storage2 from "@/assets/images/storage2.webp";
import storage3 from "@/assets/images/storage3.webp";
import storage4 from "@/assets/images/storage4.webp";
import storage5 from "@/assets/images/storage5.webp";
import storage6 from "@/assets/images/storage6.webp";
import storage7 from "@/assets/images/storage7.webp";
import walkInPantry1 from "@/assets/images/walkinpantry1.png";

const categories = [
  {
    title: "Cabinet Knobs",
    desc: "Decorative and functional cabinet knobs in timeless and modern profiles to match your cabinetry style.",
    image: kitchen1,
    cta: "View Options",
    href: "https://www.hardwareresources.com/decorative-hardware/cabinet-knobs-pulls.html",
  },
  {
    title: "Cabinet Pulls",
    desc: "Premium pull styles and finishes selected to complement paint colors, wood tones, and overall kitchen design.",
    image: kitchen2,
    cta: "View Options",
    href: "https://www.hardwareresources.com/decorative-hardware/cabinet-knobs-pulls.html",
  },
  {
    title: "Hinges",
    desc: "High performance hinge systems with smooth operation, soft close action, and long term durability.",
    image: storage1,
    cta: "Learn More",
    href: "https://www.hardwareresources.com/functional-hardware/cabinet-hinges.html",
  },
  {
    title: "Drawer Slides",
    desc: "Full extension and soft close drawer slide options designed for heavy use and clean, reliable motion.",
    image: storage2,
    cta: "Learn More",
    href: "https://www.hardwareresources.com/dovetail-drawer-boxes",
  },
  {
    title: "Drawer Organizers",
    desc: "Custom organizer inserts that keep utensils, tools, and daily essentials easy to see and easy to reach.",
    image: storage3,
    cta: "View Options",
    href: "https://www.hardwareresources.com/organizers/cabinet-organizers/drawer-organizers.html",
  },
  {
    title: "Pull-Out Storage",
    desc: "Base cabinet pull-outs that bring deep storage forward so nothing gets lost at the back of the cabinet.",
    image: storage4,
    cta: "View Options",
    href: "https://www.hardwareresources.com/organizers/cabinet-organizers.html",
  },
  {
    title: "Pantry Organization",
    desc: "Shelving and pull-out systems for pantry zones that stay organized around the way your family shops and cooks.",
    image: walkInPantry1,
    cta: "Learn More",
    href: "https://www.hardwareresources.com/organizers",
  },
  {
    title: "Cabinet Inserts",
    desc: "Built-to-fit inserts for spices, trays, lids, and more, matched to your cabinet openings and layout.",
    image: storage5,
    cta: "Learn More",
    href: "https://www.hardwareresources.com/organizers/cabinet-organizers.html",
  },
  {
    title: "Corner Cabinet Solutions",
    desc: "Lazy susans and corner access solutions that recover storage from hard-to-use cabinet corners.",
    image: storage6,
    cta: "View Options",
    href: "https://www.hardwareresources.com/organizers/cabinet-organizers/corner-organizers.html",
  },
  {
    title: "Closet & Utility Accessories",
    desc: "Accessory systems for closets, utility spaces, and mudrooms to create practical organization across the home.",
    image: storage7,
    cta: "Learn More",
    href: "https://www.hardwareresources.com/decorative-wood",
  },
];

const serviceRelatedHardware = [
  "Kitchen cabinet pulls and knobs",
  "Bathroom vanity hardware sets",
  "Built-in cabinet slide and hinge systems",
  "Walk-in pantry pull-out accessories",
  "Custom cabinet insert configurations",
  "Corner and utility storage hardware",
];

export default function HardwareCabinetInserts() {
  return (
    <PageLayout
      title="Hardware & Cabinet Inserts"
      description="Explore premium cabinet hardware, accessories, and organization systems for custom cabinetry projects in North Augusta, SC and Augusta, GA."
    >
      <PageHero
        eyebrow="Hardware & Cabinet Inserts · North Augusta, SC"
        title="Premium Cabinet Hardware & Storage Solutions"
        subtitle="Choose hardware, accessories, and cabinet organization systems as part of your cabinetry project, from decorative knobs and pulls to functional inserts and pull-out storage."
        image={kitchen1}
      />
      <TrustBar />

      <section className="px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Product source reference</p>
              <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Explore Hardware Resources Product Inspiration</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">We design selections to match your project style, finish direction, and functionality goals. You can browse manufacturer options and then finalize choices with our team during your cabinetry planning.</p>
            </div>
            <a
              href="http://www.hardwareresources.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-[#C8A977] hover:text-[#2D241E]"
            >
              Visit Hardware Resources <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Related hardware</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Service Categories and Related Hardware</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">Whether your project is a kitchen, bathroom, built-in, pantry, or insert upgrade, we help you select hardware and accessories that match the cabinet style and improve daily function.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {serviceRelatedHardware.map((item) => (
                <div key={item} className="flex items-center gap-3"><Check className="h-4 w-4 shrink-0 text-[#8C6A43]" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>

          <div className="border-l-4 border-[#C8A977] bg-background p-7">
            <h3 className="font-display text-3xl text-primary">Coordinate Services and Hardware in One Plan</h3>
            <p className="mt-4 leading-7 text-muted-foreground">Review service categories and compare compatible hardware options before finalizing your cabinet package.</p>
            <a
              href="http://www.hardwareresources.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-primary px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-[#C8A977] hover:text-[#2D241E]"
            >
              View Hardware Options <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Product categories</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Hardware and Organization Options for Every Cabinet</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <article key={category.title} className="group overflow-hidden bg-background">
                <div className="overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-60 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="mb-4 h-px w-10 bg-[#C8A977]" />
                  <h3 className="font-display text-2xl text-primary">{category.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{category.desc}</p>
                  <a
                    href={category.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-[#C8A977] hover:text-[#2D241E]"
                  >
                    Learn More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-24 text-white lg:px-8 lg:py-32 text-center">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#C8A977]">Why clients choose this approach</p>
          <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">Hardware and Inserts Planned with the Cabinet Build</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              "Finish coordination between cabinetry and hardware",
              "Soft close performance across doors and drawers",
              "Storage systems designed to real cabinet dimensions",
              "One project plan for cabinetry and accessory selections",
            ].map((point) => (
              <div key={point} className="flex items-center md:justify-center gap-3"><Check className="h-4 w-4 shrink-0 text-[#C8A977]" /><span className="text-white/82">{point}</span></div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA
        headline="Need Help Choosing Hardware and Organization Upgrades?"
        sub="Tell us about your cabinetry project and we will help you select the right hardware, inserts, and storage accessories for function and style."
      />
    </PageLayout>
  );
}

import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import TrustBar from "@/components/shared/TrustBar";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import kitchen1 from "@/assets/images/kitchen1.webp";
import kitchen2 from "@/assets/images/kitchen2.webp";
import kitchen3 from "@/assets/images/kitchen3.webp";
import storage1 from "@/assets/images/storage1.webp";
import storage2 from "@/assets/images/storage2.webp";
import storage3 from "@/assets/images/storage3.webp";
import storage4 from "@/assets/images/storage4.webp";
import storage5 from "@/assets/images/storage5.webp";
import storage6 from "@/assets/images/storage6.webp";
import storage7 from "@/assets/images/storage7.webp";
import galleryAddition1 from "@/assets/images/gallery-new-additons/1.webp";
import galleryAddition2 from "@/assets/images/gallery-new-additons/2.webp";
import galleryAddition3 from "@/assets/images/gallery-new-additons/3.webp";
import galleryAddition4 from "@/assets/images/gallery-new-additons/4.webp";
import galleryAddition5 from "@/assets/images/gallery-new-additons/5.webp";

const projects = [
  { id: 1, cat: "Kitchens", title: "Custom Walnut Island Kitchen", desc: "Full kitchen remodel featuring custom walnut island, white perimeter cabinets, plywood construction, and professional lacquer finish.", img: kitchen1, tags: ["Walnut", "White Paint", "Shaker Doors"] },
  { id: 2, cat: "Kitchens", title: "Luxury White Shaker Kitchen", desc: "White lacquer-painted custom kitchen with inset shaker doors, full-height upper cabinets, and custom organization inserts throughout.", img: kitchen2, tags: ["White Lacquer", "Shaker", "Full Height"] },
  { id: 3, cat: "Drawers", title: "Custom Drawer Organizer", desc: "Tiered hardwood drawer organizer with dedicated slots for flatware, utensils, and kitchen tools-built to fit the drawer exactly.", img: storage1, tags: ["Drawer Insert", "Cutlery", "Custom Fit"] },
  { id: 4, cat: "Pull-Out", title: "Pull-Out Spice Rack", desc: "Narrow pull-out spice storage that keeps oils, seasonings, and jars visible and within easy reach while maximizing tight cabinet space.", img: storage2, tags: ["Spice Pull-Out", "Cabinet Storage", "Organization"] },
  { id: 5, cat: "Pull-Out", title: "Waste & Recycling Pull-Out", desc: "Concealed double-bin pull-out system integrated into base cabinetry for cleaner workflow and a clutter-free kitchen.", img: storage3, tags: ["Trash Pull-Out", "Recycling", "Concealed"] },
  { id: 6, cat: "Storage", title: "Kitchen Organization System", desc: "Custom pull-out spice racks, pot and pan dividers, deep drawer organizers, and specialty inserts throughout an entire kitchen.", img: storage4, tags: ["Pull-Outs", "Organization", "Inserts"] },
  { id: 7, cat: "Kitchens", title: "Craftsman Kitchen Remodel", desc: "Warm maple cabinetry with beaded inset doors, custom island with seating overhang, and integrated pantry storage.", img: kitchen3, tags: ["Maple", "Beaded Inset", "Island"] },
  { id: 8, cat: "Storage", title: "Corner Cabinet Organizer", desc: "Swing-out corner cabinet storage with rotating trays that bring deep-cabinet contents into full view and easy access.", img: storage5, tags: ["Corner Storage", "Swing-Out", "Kitchen Organizer"] },
  { id: 9, cat: "Before & After", title: "Kitchen Transformation", desc: "Complete kitchen transformation from outdated cabinetry to custom all-wood construction with modern shaker doors and professional finishes.", img: "https://media.base44.com/images/public/6a2c516b2e53d966d671587c/e94ded35b_generated_716697d4.png", tags: ["Before & After", "Transformation"] },
  { id: 10, cat: "Kitchens", title: "Rustic Entertainer's Kitchen", desc: "A warm, wood-forward kitchen with generous island seating, natural grain character, and custom cabinetry designed around gathering and daily use.", img: galleryAddition1, tags: ["Rustic Wood", "Island Seating", "Custom Kitchen"] },
  { id: 11, cat: "Kitchens", title: "Bright White Family Kitchen", desc: "A clean white kitchen with oversized island, full-height cabinetry, and an open plan layout built for cooking, serving, and everyday family traffic.", img: galleryAddition2, tags: ["White Kitchen", "Large Island", "Open Layout"] },
  
  { id: 12, cat: "Built-Ins", title: "Living Room Media Wall", desc: "Integrated media cabinetry and shelving designed to frame the fireplace wall with balanced storage, display space, and a built-in look.", img: galleryAddition4, tags: ["Media Wall", "Living Room", "Built-In Shelving"] },
  { id: 13, cat: "Storage", title: "Custom Utility Room Cabinetry", desc: "Full-height painted cabinetry in a utility space with durable counters, sink integration, and practical storage built for daily household function.", img: galleryAddition5, tags: ["Utility Room", "Painted Cabinets", "Functional Storage"] },
  // {
  //   id: 14,
  //   cat: "Built-Ins",
  //   title: "Functional Prep Station",
  //   desc: "A versatile prep station featuring custom cabinetry, integrated sink, dishwasher, and ample storage—designed to maximize efficiency while maintaining a clean, modern look.",
  //   img: galleryAddition3,
  //   tags: ["Prep Station", "Custom Cabinetry", "Built-In"]
  // },
];

const cats = ["All", "Kitchens", "Built-Ins", "Drawers", "Pull-Out", "Storage", "Before & After"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === "All" ? projects : projects.filter(p => p.cat === active);

  return (
    <PageLayout title="Project Gallery" description="Browse the Southern Accent Cabinetry project gallery—custom kitchens, bathroom vanities, built-ins, entertainment centers, and storage solutions in North Augusta, SC and Augusta, GA.">
      <PageHero
        eyebrow="Project Gallery"
        title="Custom Cabinetry Projects Across the CSRA"
        subtitle="Browse completed kitchen, bathroom, built-in, and storage projects—each one built with all-wood construction and finished to last for decades."
        image={kitchen2}
        cta={false}
      />
      <TrustBar />

      {/* Filter */}
      <div className="sticky top-[64px] z-30 bg-white border-b border-border shadow-sm">
        <div className="mx-auto max-w-7xl flex gap-1 overflow-x-auto px-5 py-4 lg:px-8">
          {cats.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} className={`shrink-0 px-5 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${active === cat ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article key={p.id} className="group cursor-pointer bg-white" onClick={() => setLightbox(p)}>
                <div className="overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-90" />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex gap-2 flex-wrap">
                    {p.tags.map(t => <span key={t} className="bg-muted px-3 py-1 text-xs text-muted-foreground">{t}</span>)}
                  </div>
                  <h3 className="font-display text-2xl text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground line-clamp-2">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="bg-white px-5 py-12 lg:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Before & after</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">The Transformation Custom Cabinetry Makes</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <div className="relative">
                <img src="https://media.base44.com/images/public/6a2c516b2e53d966d671587c/a2f24d572_generated_8448dae5.png" alt="Kitchen before custom cabinet renovation" className="h-80 w-full object-cover" />
                <span className="absolute left-4 top-4 bg-[#2D241E] px-4 py-2 text-xs uppercase tracking-[0.2em] text-white">Before</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Original cabinetry before renovation</p>
            </div>
            <div>
              <div className="relative">
                <img src="https://media.base44.com/images/public/6a2c516b2e53d966d671587c/e94ded35b_generated_716697d4.png" alt="Kitchen after custom cabinet renovation by Southern Accent Cabinetry" className="h-80 w-full object-cover" />
                <span className="absolute left-4 top-4 bg-[#C8A977] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#2D241E]">After</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Completed custom all-wood cabinetry</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/88 p-5" onClick={() => setLightbox(null)}>
          <button className="absolute right-6 top-6 text-white hover:text-[#C8A977]" aria-label="Close"><X className="h-7 w-7" /></button>
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img src={lightbox.img} alt={lightbox.title} className="max-h-[65vh] w-full object-contain" />
            <div className="bg-background p-7">
              <p className="text-xs uppercase tracking-[0.22em] text-[#8C6A43] mb-2">{lightbox.cat}</p>
              <h3 className="font-display text-3xl text-primary">{lightbox.title}</h3>
              <p className="mt-3 text-muted-foreground leading-7">{lightbox.desc}</p>
              <Link to="/consultation" className="mt-5 inline-block bg-primary px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:bg-[#C8A977] hover:text-[#2D241E] transition-colors">
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      )}

      <ConsultationCTA headline="Inspired by What You've Seen?" sub="Every project in this gallery started with a simple consultation. Let's talk about creating something exceptional for your home." />
    </PageLayout>
  );
}
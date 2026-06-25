import { useState } from "react";
import { X } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function PortfolioGallery({ images }) {
  const [active, setActive] = useState(null);
  const projects = [
    ["Luxury Kitchens", "Walnut island, all-wood construction, premium finish.", images.kitchen, "md:row-span-2"],
    ["Bathroom Vanities", "Tailored storage with refined materials.", images.bath, ""],
    ["Built-Ins", "Architectural storage designed for the room.", images.builtIn, ""],
    ["Entertainment Centers", "Handcrafted media cabinetry with clean integration.", images.entertainment, "md:col-span-2"],
    ["Custom Storage", "Pull-outs, organizers, and specialty solutions.", images.storage, ""]
  ];
  return (
    <section id="portfolio" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Featured work" title="A Portfolio Built for Luxury Homes" text="A photography-led look at kitchens, baths, built-ins, entertainment centers, and specialty storage solutions." />
        <div className="mt-14 grid auto-rows-[280px] gap-5 md:grid-cols-3">
          {projects.map(([title, desc, image, span]) => <button key={title} onClick={() => setActive({ title, desc, image })} className={`group relative overflow-hidden text-left ${span}`}><img src={image} alt={`${title} project`} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" /><div className="absolute bottom-0 p-7 text-white"><p className="text-xs uppercase tracking-[0.25em] text-[#C8A977]">Portfolio</p><h3 className="mt-2 font-display text-3xl">{title}</h3><p className="mt-2 text-sm text-white/75">{desc}</p></div></button>)}
        </div>
      </div>
      {active && <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-5" onClick={() => setActive(null)}><button className="absolute right-6 top-6 text-white" aria-label="Close image"><X /></button><div className="max-w-5xl" onClick={(e) => e.stopPropagation()}><img src={active.image} alt={active.title} className="max-h-[78vh] w-full object-contain" /><div className="bg-background p-6"><h3 className="font-display text-3xl text-primary">{active.title}</h3><p className="text-muted-foreground">{active.desc}</p></div></div></div>}
    </section>
  );
}
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import kitchen1 from "@/assets/images/kitchen1.webp";
import storage1 from "@/assets/images/storage1.webp";
import storage2 from "@/assets/images/storage2.webp";
import kitchen2 from "@/assets/images/kitchen2.webp";
import kitchen3 from "@/assets/images/kitchen3.webp";
import storage3 from "@/assets/images/storage3.webp";

export default function ServicesSection() {
  const services = [
    ["Custom Kitchens", "Luxury kitchen cabinetry tailored to each home.", kitchen1],
    ["Bathroom Vanities", "Beautiful and functional custom bath cabinetry.", storage1],
    ["Built-In Cabinets", "Custom storage solutions for any room.", storage2],
    ["Entertainment Centers", "Handcrafted media and entertainment cabinetry.", kitchen2],
    ["Specialty Storage", "Pull-outs, organizers, spice racks, and drawer inserts.", kitchen3],
    ["Residential & Commercial", "Custom cabinetry solutions for refined spaces.", storage3]
  ];
  return (
    <section id="services" className="bg-white px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader centered eyebrow="Services" title="Cabinetry Designed Around the Way You Live" text="From luxury kitchens to smart storage, every project is built with precision, proportion, and lasting material integrity." />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, desc, image]) => <article key={title} className="group overflow-hidden bg-background"><div className="overflow-hidden"><img src={image} alt={`${title} custom cabinetry`} className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" /></div><div className="p-7"><div className="mb-5 h-px w-12 bg-[#C8A977]" /><h3 className="font-display text-3xl text-primary">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{desc}</p><ArrowUpRight className="mt-6 h-5 w-5 text-[#8C6A43] transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div></article>)}
        </div>
      </div>
    </section>
  );
}
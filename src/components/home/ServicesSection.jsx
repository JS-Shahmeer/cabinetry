import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function ServicesSection({ images }) {
  const services = [
    ["Custom Kitchens", "Luxury kitchen cabinetry tailored to each home.", images.kitchen],
    ["Bathroom Vanities", "Beautiful and functional custom bath cabinetry.", images.bath],
    ["Built-In Cabinets", "Custom storage solutions for any room.", images.builtIn],
    ["Entertainment Centers", "Handcrafted media and entertainment cabinetry.", images.entertainment],
    ["Specialty Storage", "Pull-outs, organizers, spice racks, and drawer inserts.", images.storage],
    ["Residential & Commercial", "Custom cabinetry solutions for refined spaces.", images.grain]
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
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import kitchen1 from "@/assets/images/kitchen1.webp";
import kitchen2 from "@/assets/images/kitchen2.webp";
import storage5 from "@/assets/images/storage5.webp";
import cabinetInsertsHero from "@/assets/images/cabinetinserts1.png";
import bathroomImage from "@/assets/images/new-images/Bathroom-Cabinets_Bathroom-Organizers.webp";
import builtInImage from "@/assets/images/new-images/Built-In-Cabinets_Decorative-Wood-Moulding.webp";

export default function ServicesSection() {
  const services = [
    {
      title: "Kitchen Cabinets",
      desc: "Luxury kitchen cabinetry tailored to your layout, workflow, and finish style.",
      image: kitchen1,
      href: "/kitchen-cabinets",
    },
    {
      title: "Bathroom Cabinets",
      desc: "Beautiful and functional vanity cabinetry designed for real bathroom storage needs.",
      image: bathroomImage,
      href: "/bathroom-cabinets",
    },
    {
      title: "Built-In Cabinets",
      desc: "Custom wall systems, shelving, and architectural storage for living spaces and offices.",
      image: builtInImage,
      href: "/built-ins",
    },
    {
      title: "Walk In Pantry Cabinets",
      desc: "Purpose-built pantry layouts with organizers and pull-outs for daily convenience.",
      image: storage5,
      href: "/walk-in-pantry-cabinets",
    },
    {
      title: "Cabinet Inserts",
      desc: "Drawer and base-cabinet organization upgrades that maximize every inch of storage.",
      image: cabinetInsertsHero,
      href: "/cabinet-inserts",
    },
    {
      title: "Custom Cabinets",
      desc: "Fully custom cabinetry solutions built to exact dimensions for any room in your home.",
      image: kitchen2,
      href: "/custom-cabinets",
    },
  ];
  return (
    <section id="services" className="bg-white px-5 py-12 lg:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeader centered eyebrow="Services" title="Cabinetry Designed Around the Way You Live" text="From luxury kitchens to smart storage, every project is built with precision, proportion, and lasting material integrity." />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, image, href }) => (
            <Link key={title} to={href} className="group block overflow-hidden bg-background">
              <div className="overflow-hidden">
                <img src={image} alt={`${title} custom cabinetry`} className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-7">
                <div className="mb-5 h-px w-12 bg-[#C8A977]" />
                <h3 className="font-display text-3xl text-primary">{title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-[#8C6A43] transition group-hover:text-primary">
                  Explore Service
                  <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
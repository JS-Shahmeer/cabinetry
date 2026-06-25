import { Check } from "lucide-react";
import SectionHeader from "./SectionHeader";

const features = ["No particle board construction", "Premium plywood interiors", "Solid wood components", "Professional finishing process", "Long-lasting durability"];
const quality = ["Over 40 Years of Experience", "All-Wood Construction", "Plywood Cabinet Interiors", "Solid Wood Faces", "Durable Lacquer Finishes", "Custom Design Consultation", "Local CSRA Craftsmen", "No-Pressure Consultation"];

export default function CraftsmanshipSection({ image }) {
  return (
    <section id="craftsmanship" className="bg-primary px-5 py-24 text-primary-foreground lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        <div>
          <SectionHeader inverse eyebrow="Anatomy of quality" title="Quality You Can See. Durability You Can Feel." text="Premium cabinetry starts inside the box: better structure, better materials, better finishes, and better long-term performance." />
          <div className="mt-10 space-y-4">{features.map((item, i) => <div key={item} className="flex gap-5 border-t border-white/15 py-5"><span className="font-display text-3xl text-[#C8A977]">0{i + 1}</span><p className="text-lg text-white/82">{item}</p></div>)}</div>
        </div>
        <div>
          <img src={image} alt="Close up of solid wood cabinetry joinery and premium finish" className="h-[520px] w-full object-cover" />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">{quality.map((item) => <div key={item} className="flex items-center gap-3 bg-white/7 p-4"><Check className="h-4 w-4 text-[#C8A977]" /><span className="text-sm text-white/82">{item}</span></div>)}</div>
        </div>
      </div>
    </section>
  );
}
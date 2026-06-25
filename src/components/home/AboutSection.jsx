import { Check } from "lucide-react";
import SectionHeader from "./SectionHeader";

const points = ["Family-owned feel", "40+ years experience", "Custom design process", "Quality materials", "Attention to detail"];

export default function AboutSection({ image }) {
  return (
    <section id="about" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <img src={image} alt="Craftsman marking raw timber in a woodworking shop" className="h-[520px] w-full object-cover" />
          <div className="absolute -bottom-8 -right-5 bg-primary px-8 py-7 text-primary-foreground shadow-2xl md:-right-8">
            <p className="font-display text-5xl">40+</p><p className="text-xs uppercase tracking-[0.25em] text-[#C8A977]">Years of craft</p>
          </div>
        </div>
        <div>
          <SectionHeader eyebrow="About Southern Accent" title="Built by Craftsmen, Not Mass Producers" text="Southern Accent Cabinetry is a custom woodworking company specializing in handcrafted cabinetry solutions designed around each client’s home, lifestyle, and standards." />
          <p className="mt-6 text-lg leading-8 text-muted-foreground">Every project is built with premium materials including plywood cabinet interiors, solid wood facings, and durable lacquer-based paints or stains for a flawless finish that holds up for years.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((point) => <div key={point} className="flex items-center gap-3 border-l border-[#C8A977] bg-white/60 p-4"><Check className="h-5 w-5 text-[#8C6A43]" /><span>{point}</span></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
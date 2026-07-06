import { Star } from "lucide-react";
import SectionHeader from "./SectionHeader";

const quotes = [
  ["The craftsmanship is outstanding. Every cabinet feels solid, the finish is beautiful, and the kitchen looks like it belongs in a magazine.", "Homeowner in North Augusta"],
  ["They listened carefully, communicated clearly, and built exactly what our home needed. The attention to detail made all the difference.", "Custom Built-In Client"],
  ["Our cabinets still look incredible years later. You can tell Southern Accent uses better materials and takes pride in the work.", "Kitchen Renovation Client"]
];

export default function TestimonialsSection() {
  return (
    <section className="px-5 py-12 lg:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeader centered eyebrow="Testimonials" title="Trusted by Homeowners Who Value the Details" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map(([quote, name]) => <article key={name} className="bg-white p-8 shadow-sm"><div className="mb-7 flex gap-1 text-[#C8A977]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div><p className="text-lg leading-8 text-foreground">“{quote}”</p><p className="mt-8 text-sm uppercase tracking-[0.22em] text-[#8C6A43]">{name}</p></article>)}
        </div>
      </div>
    </section>
  );
}
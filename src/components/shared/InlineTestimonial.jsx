import React from "react";
import { Star } from "lucide-react";

export default function InlineTestimonial({ quote, name, location, inverse = false }) {
  return (
    <div className={`border-l-4 border-[#C8A977] pl-7 py-2 ${inverse ? "" : ""}`}>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-[#C8A977] text-[#C8A977]" />)}
      </div>
      <p className={`text-lg leading-8 italic ${inverse ? "text-white/85" : "text-foreground"}`}>"{quote}"</p>
      <p className={`mt-4 text-xs uppercase tracking-[0.22em] ${inverse ? "text-[#C8A977]" : "text-[#8C6A43]"}`}>{name}{location ? ` — ${location}` : ""}</p>
    </div>
  );
}
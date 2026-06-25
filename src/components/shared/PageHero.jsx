import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PageHero({ eyebrow, title, subtitle, image, cta = true }) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-primary md:min-h-[70vh]">
      {image && (
        <>
          <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A120D]/90 via-[#2D241E]/60 to-transparent" />
        </>
      )}
      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 lg:px-8">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C8A977]">{eyebrow}</p>
        <h1 className="font-display text-5xl leading-tight tracking-tight text-white md:text-7xl max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">{subtitle}</p>}
        {cta && (
          <Link to="/consultation" className="mt-10 inline-flex items-center gap-2 bg-[#C8A977] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#2D241E] hover:bg-white transition-colors">
            Request a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </section>
  );
}
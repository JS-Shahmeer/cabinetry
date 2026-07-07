import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

export default function ConsultationCTA({ headline = "Ready to Start Your Project?", sub = "Tell us what you're envisioning. We'll walk through your space, discuss your options honestly, and give you a clear plan — no pressure, no obligation.", dark = false }) {
  return (
    <section className={`px-5 py-20 lg:px-8 lg:py-28 ${dark ? "bg-primary text-primary-foreground" : "bg-[#2D241E] text-white"}`}>
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#C8A977]">Ready to begin?</p>
        <h2 className="font-display text-4xl leading-tight tracking-tight text-white md:text-6xl">{headline}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">{sub}</p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link to="/consultation" className="inline-flex items-center gap-2 bg-[#C8A977] px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#2D241E] hover:bg-white transition-colors">
            Request a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="tel:+18034423868" className="inline-flex items-center gap-2 border border-white/30 px-8 py-4 text-sm text-white hover:border-[#C8A977] hover:text-[#C8A977] transition-colors">
            <Phone className="h-4 w-4" /> +1 803-442-3868
          </a>
        </div>
      </div>
    </section>
  );
}
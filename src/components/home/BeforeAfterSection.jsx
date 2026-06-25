import { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function BeforeAfterSection({ before, after }) {
  const [value, setValue] = useState(50);
  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader centered eyebrow="Before & after" title="Transforming Ordinary Rooms into Built-In Architecture" text="Slide to compare the difference custom cabinetry can make in proportion, storage, finish, and daily function." />
        <div className="relative mt-14 overflow-hidden border border-[#C8A977]/40">
          <img src={after} alt="After custom cabinetry renovation" className="h-[360px] w-full object-cover md:h-[620px]" />
          <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}><img src={before} alt="Before cabinetry renovation" className="h-full w-full object-cover" /></div>
          <div className="absolute inset-y-0 w-px bg-white" style={{ left: `${value}%` }} />
          <span className="absolute left-5 top-5 bg-primary px-4 py-2 text-xs uppercase tracking-[0.2em] text-white">Before</span>
          <span className="absolute right-5 top-5 bg-[#C8A977] px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary">After</span>
          <input aria-label="Before and after comparison slider" type="range" min="8" max="92" value={value} onChange={(e) => setValue(e.target.value)} className="absolute bottom-6 left-1/2 w-[80%] -translate-x-1/2 accent-[#C8A977]" />
        </div>
      </div>
    </section>
  );
}
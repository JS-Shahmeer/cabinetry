import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HardwareCTASection() {
  return (
    <section className="bg-white py-12 md:pb-12">
      <div className=" border border-[#2D241E]/10 bg-background px-8 py-14 text-center md:px-14 md:py-16">
        {/* <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Complete your project</p> */}
        <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Complete Your Project with Premium Hardware</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          Every cabinetry project can be customized with premium hardware, storage accessories, and organization
          solutions. We&apos;ll help you select products that match your style, improve functionality, and maximize storage.
        </p>
        <a
          href="https://www.hardwareresources.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex h-14 items-center gap-2 bg-[#C8A977] px-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#2D241E] transition-colors hover:bg-primary hover:text-white"
        >
          Explore Hardware Collections
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";

const steps = [["01", "Consultation", "We listen to your goals, assess your space, and answer every question — no pressure, no obligation."], ["02", "Design & Planning", "We develop a custom design tailored to your space and get your approval before anything is built."], ["03", "Build", "Your cabinets are crafted in our shop with all-wood materials and inspected before leaving."], ["04", "Installation", "Our team handles delivery and installation. We walk through every detail together at completion."]];

export default function ProcessSection() {
  return (
    <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Process" title="A Clear Path from Vision to Installation" text="A refined, personal process that keeps your cabinetry project thoughtful, organized, and beautifully executed." />
        <div className="mt-16 grid gap-5 md:grid-cols-4">
          {steps.map(([num, title, desc]) => <div key={title} className="border-l border-[#C8A977] bg-background p-7"><p className="font-display text-5xl text-[#C8A977]">{num}</p><h3 className="mt-8 font-display text-3xl text-primary">{title}</h3><p className="mt-4 leading-7 text-muted-foreground">{desc}</p></div>)}
        </div>
        <div className="mt-10 text-center">
          <Link to="/process" className="text-sm text-[#8C6A43] hover:text-primary transition-colors uppercase tracking-[0.18em]">See the full process →</Link>
        </div>
      </div>
    </section>
  );
}
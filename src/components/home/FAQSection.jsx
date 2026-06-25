import SectionHeader from "./SectionHeader";

const faqs = [["Do you offer free estimates?", "Yes. Call or send the form details and Southern Accent Cabinetry will discuss your project and estimate needs."], ["What materials do you use?", "Cabinets are built with all-wood construction, plywood interiors, solid wood facings, and durable lacquer-based paints or stains."], ["What types of projects do you build?", "Custom kitchens, bathroom vanities, built-ins, entertainment centers, organizers, specialty storage, and custom woodworking."], ["Where are you located?", "Southern Accent Cabinetry is located at 75 Pineview Avenue in North Augusta, South Carolina."]];

export default function FAQSection() {
  return (
    <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader centered eyebrow="FAQ" title="Questions Homeowners Ask First" />
        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map(([q, a]) => <details key={q} className="group py-6"><summary className="cursor-pointer list-none font-display text-2xl text-primary">{q}</summary><p className="mt-4 leading-8 text-muted-foreground">{a}</p></details>)}
        </div>
      </div>
    </section>
  );
}
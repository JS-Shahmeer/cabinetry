import { createElement } from "react";
import { MessageSquare, Ruler, Layers, Hammer, Truck, CheckCircle } from "lucide-react";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import TrustBar from "@/components/shared/TrustBar";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import InlineTestimonial from "@/components/shared/InlineTestimonial";
import { IMG } from "@/components/lib/siteImages";

const steps = [
  {
    num: "01", icon: MessageSquare,
    title: "Initial Consultation",
    duration: "1–2 Hours",
    desc: "The process begins with a conversation—not a sales pitch. We listen to your vision, understand your storage needs, walk through your space, and answer every question you have about materials, timeline, and what's possible.",
    details: ["Project goals and priorities discussion", "Space measurement and assessment", "Style and aesthetic preferences", "Material and finish overview", "Budget range expectations", "Realistic timeline discussion"],
  },
  {
    num: "02", icon: Ruler,
    title: "Design & Planning",
    duration: "1–2 Weeks",
    desc: "Once we understand your project, we develop a custom design tailored to your space. You'll review the plan before anything is built, and we refine it until it's exactly right.",
    details: ["Custom design developed for your space", "Detailed measurements and specifications", "Door style and hardware selection", "Wood species and finish selection", "Design review and approval", "Final quote confirmation"],
  },
  {
    num: "03", icon: Layers,
    title: "Material Selection",
    duration: "Concurrent with Design",
    desc: "With the design approved, we finalize all material selections. We'll guide you through wood species, finish options, hardware styles, and any specialty inserts or accessories to be incorporated.",
    details: ["Wood species final selection", "Paint or stain color finalization", "Hardware style and finish selection", "Specialty insert selections", "Interior accessories and organizers", "Material lead time confirmation"],
  },
  {
    num: "04", icon: Hammer,
    title: "Fabrication",
    duration: "3–6 Weeks",
    desc: "Your cabinets are built in our shop by our craftsmen using all-wood materials, plywood interiors, and solid wood faces. Every joint, door, and drawer is inspected before leaving the shop.",
    details: ["All-wood construction—no particle board", "Plywood box construction", "Solid wood face frame assembly", "Door and drawer front fabrication", "Finish application and curing", "Quality inspection before delivery"],
  },
  {
    num: "05", icon: Truck,
    title: "Installation",
    duration: "1–3 Days",
    desc: "Our installation team handles delivery and setup. Every cabinet is leveled, secured, and aligned with precision. Doors are hung, drawers are adjusted, and hardware is installed.",
    details: ["Protective floor and wall covering", "Precise level and plumb installation", "Cabinet securing and scribing", "Door alignment and adjustment", "Drawer slide adjustment", "Hardware installation"],
  },
  {
    num: "06", icon: CheckCircle,
    title: "Final Walkthrough",
    duration: "1–2 Hours",
    desc: "Before we consider the project complete, we walk through every cabinet with you. Every door, drawer, and detail is reviewed to ensure it meets your expectations and our standards.",
    details: ["Complete door and drawer review", "Soft-close adjustment check", "Touch-up as needed", "Care and maintenance guidance", "Warranty documentation", "Project sign-off"],
  },
];

export default function Process() {
  return (
    <PageLayout title="Our Process" description="From initial consultation to final walkthrough, learn exactly how Southern Accent Cabinetry approaches every custom cabinet project in North Augusta, SC and Augusta, GA.">
      <PageHero
        eyebrow="Our Process"
        title="From Conversation to Complete Cabinetry"
        subtitle="A clear, organized process designed to give you confidence at every stage—from the first consultation to the final installation walkthrough."
        image={IMG.workshop}
      />
      <TrustBar />

      {/* Overview */}
      <section className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-14 lg:grid-cols-2 items-center">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">What to expect</p>
              <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">No Surprises. No Guesswork. Just Quality Work.</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">We've been building custom cabinetry for over 40 years, and the most consistent thing homeowners tell us is that they wish they'd started sooner. The process is clearer than you might expect—and we walk you through every step.</p>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">Every project follows the same six-step framework, with clear communication and approval checkpoints so you always know where your project stands.</p>
            </div>
            <img src={IMG.workshop} alt="Custom cabinetry fabrication process" className="h-[420px] w-full object-cover" />
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map(({ num, icon, title, duration, desc, details }) => (
              <div key={num} className="grid gap-8 border-t-2 border-[#C8A977] bg-white pt-10 md:grid-cols-[auto_1fr_1fr] items-start">
                <div className="flex items-start gap-5">
                  <span className="font-display text-5xl text-[#C8A977] leading-none">{num}</span>
                  {createElement(icon, { className: "h-8 w-8 text-[#8C6A43] mt-1" })}
                </div>
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#8C6A43]">Timeline: {duration}</p>
                  <h3 className="font-display text-3xl text-primary">{title}</h3>
                  <p className="mt-4 leading-8 text-muted-foreground">{desc}</p>
                </div>
                <ul className="space-y-2">
                  {details.map(d => (
                    <li key={d} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A977]" />{d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline expectations */}
      <section className="bg-primary px-5 py-24 text-white lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#C8A977]">Timeline expectations</p>
            <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">Realistic Timelines for Every Project Type</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[["Single Bathroom Vanity", "4–6 Weeks", "Consultation through installation for a single vanity project with standard material selections."], ["Full Kitchen Remodel", "8–12 Weeks", "Complete kitchen cabinetry including design approval, fabrication, and full installation."], ["Built-In or Custom Storage", "5–8 Weeks", "Built-in entertainment center, home office, mudroom, or library wall project."]].map(([type, timeline, note]) => (
              <div key={type} className="border border-white/15 p-8">
                <h3 className="font-display text-2xl text-[#C8A977]">{type}</h3>
                <p className="mt-3 font-display text-4xl text-white">{timeline}</p>
                <p className="mt-4 text-sm leading-7 text-white/65">{note}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-white/50">Note: Timelines are estimates and may vary based on project scope, material availability, and current schedule. We'll provide an accurate timeline during your consultation.</p>
        </div>
      </section>

      <div className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <InlineTestimonial quote="The process was exactly as they described. No surprises, no delays we weren't warned about, and the result was worth every week of the wait." name="Kitchen Client, Martinez, GA" />
        </div>
      </div>

      <ConsultationCTA headline="Start with a Consultation" sub="The first step is a simple conversation. Tell us about your project and we'll walk you through the entire process from design to installation." />
    </PageLayout>
  );
}
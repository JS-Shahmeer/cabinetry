import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Phone, MapPin, Clock, ArrowRight, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/shared/PageLayout";
import TrustBar from "@/components/shared/TrustBar";
import { IMG } from "@/components/lib/siteImages";

const benefits = [
  "Understand your project goals and vision",
  "Assess your space and discuss layout options",
  "Review wood species, door styles, and finish options",
  "Set realistic budget and timeline expectations",
  "Answer every question you have—no pressure, no sales pitch",
];

const projectTypes = ["Custom Kitchen Cabinets", "Bathroom Vanity", "Built-In Entertainment Center", "Home Office Built-In", "Mudroom & Entry Storage", "Library or Bookcase Wall", "Custom Closet System", "Laundry Room Cabinetry", "Multiple Rooms / Whole Home", "Other Custom Woodworking"];

const budgets = ["Under $5,000", "$5,000 – $10,000", "$10,000 – $20,000", "$20,000 – $40,000", "$40,000+", "Not sure yet"];

const timelines = ["As soon as possible", "1–3 months", "3–6 months", "6–12 months", "Exploring options, no firm timeline"];

const testimonials = [
  ["The consultation was completely no-pressure. They listened, gave honest advice, and helped us see possibilities we hadn't considered.", "Sarah M. · North Augusta, SC"],
  ["From the first conversation, we knew they were different. Knowledgeable, professional, and genuinely interested in our project.", "James T. · Augusta, GA"],
  ["I appreciated that they gave us honest budget expectations upfront. No surprises—just clear, straightforward communication.", "Lisa K. · Aiken, SC"],
];

export default function Consultation() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "", budget: "", timeline: "", address: "", message: "" });
  const set = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nProject Type: ${form.projectType}\nBudget Range: ${form.budget}\nTimeline: ${form.timeline}\nAddress/City: ${form.address}\n\nProject Details:\n${form.message}`
    );
    window.location.href = `mailto:southernaccentcabinetry@gmail.com?subject=Consultation Request from ${form.name}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <PageLayout title="Request a Consultation" description="Schedule a no-pressure consultation with Southern Accent Cabinetry in North Augusta, SC. Discuss your custom cabinet project, get design guidance, and understand your options.">
      {/* Hero */}
      <section className="relative bg-primary text-white">
        <img src={IMG.kitchen} alt="Custom kitchen cabinetry" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A120D] to-[#2D241E]/80" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C8A977]">No-pressure consultation</p>
          <h1 className="font-display text-5xl leading-tight text-white md:text-7xl max-w-3xl">Request a Consultation</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">Tell us about your project. We'll listen, walk through your space, and give you honest guidance on design, materials, and timeline — no pressure, no obligation.</p>
        </div>
      </section>
      <TrustBar />

      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-[1fr_1.5fr]">

          {/* Left: Benefits + Contact */}
          <div>
            <div className="mb-10">
              <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">What to expect</p>
              <h2 className="font-display text-4xl leading-tight text-primary">Your Consultation Is a Planning Conversation, Not a Sales Pitch</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">A consultation with Southern Accent Cabinetry is designed to give you clarity and confidence about your project—not pressure you into a purchase.</p>
              <p className="mt-3 text-muted-foreground">We'll listen to your goals, walk through your space, and give you honest information about materials, timeline, and budget. No obligation whatsoever.</p>
            </div>

            <div className="mb-10 space-y-3">
              <p className="text-sm font-semibold text-primary uppercase tracking-[0.15em] mb-4">During your consultation we will:</p>
              {benefits.map(b => (
                <div key={b} className="flex items-start gap-3"><Check className="h-5 w-5 shrink-0 mt-0.5 text-[#8C6A43]" /><span className="leading-7">{b}</span></div>
              ))}
            </div>

            <div className="bg-primary p-7 text-white space-y-4 mb-10">
              <p className="font-display text-2xl text-[#C8A977]">Prefer to call?</p>
              <p className="text-white/75">We're happy to discuss your project by phone. Call us during business hours and we'll answer your questions directly.</p>
              <a href="tel:8034423868" className="flex items-center gap-2 text-lg font-semibold text-white hover:text-[#C8A977] transition-colors"><Phone className="h-5 w-5" />803-442-3868</a>
              <a href="tel:7068295092" className="flex items-center gap-2 text-white/70 hover:text-[#C8A977] transition-colors"><Phone className="h-4 w-4" />706-829-5092 (cell)</a>
              <div className="flex items-center gap-2 text-white/60 text-sm"><Clock className="h-4 w-4" />Mon–Fri 8:00 AM – 4:00 PM</div>
              <div className="flex items-start gap-2 text-white/60 text-sm"><MapPin className="h-4 w-4 mt-0.5" />75 Pineview Ave, North Augusta, SC 29841</div>
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              {testimonials.map(([quote, name]) => (
                <div key={name} className="border-l-4 border-[#C8A977] pl-5 py-1">
                  <div className="flex gap-1 mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-[#C8A977] text-[#C8A977]" />)}</div>
                  <p className="text-sm leading-7 italic text-foreground">"{quote}"</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#8C6A43]">{name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center bg-white p-12 text-center min-h-[500px]">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#C8A977]/20">
                  <Check className="h-10 w-10 text-[#8C6A43]" />
                </div>
                <h2 className="font-display text-4xl text-primary mb-4">Thank You!</h2>
                <p className="text-lg text-muted-foreground mb-3">Your consultation request has been sent. We typically respond within 1 business day.</p>
                <p className="text-muted-foreground mb-8">You can also reach us directly at <a href="tel:8034423868" className="text-[#8C6A43] font-semibold">803-442-3868</a>.</p>
                <Link to="/" className="inline-flex items-center gap-2 bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:bg-[#C8A977] hover:text-[#2D241E] transition-colors">
                  Return Home <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ) : (
              <div className="bg-white p-8 md:p-10 shadow-sm">
                <p className="mb-2 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">No-pressure consultation</p>
                <h2 className="mb-8 font-display text-3xl text-primary">Tell Us About Your Project</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-primary">Name *</label>
                      <Input required value={form.name} onChange={set("name")} placeholder="Your full name" className="rounded-none" />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-primary">Phone *</label>
                      <Input required value={form.phone} onChange={set("phone")} placeholder="Best phone number" className="rounded-none" />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-primary">Email *</label>
                    <Input required type="email" value={form.email} onChange={set("email")} placeholder="Your email address" className="rounded-none" />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-primary">Project Type *</label>
                    <select required value={form.projectType} onChange={set("projectType")} className="h-10 w-full border border-input bg-background px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#C8A977] rounded-none">
                      <option value="">Select project type</option>
                      {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-primary">Budget Range</label>
                      <select value={form.budget} onChange={set("budget")} className="h-10 w-full border border-input bg-background px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#C8A977] rounded-none">
                        <option value="">Select a range</option>
                        {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-primary">Preferred Timeline</label>
                      <select value={form.timeline} onChange={set("timeline")} className="h-10 w-full border border-input bg-background px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#C8A977] rounded-none">
                        <option value="">Select timeline</option>
                        {timelines.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-primary">City / Area</label>
                    <Input value={form.address} onChange={set("address")} placeholder="Your city (e.g. North Augusta, Augusta, Aiken...)" className="rounded-none" />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-primary">Project Details</label>
                    <Textarea value={form.message} onChange={set("message")} placeholder="Tell us about your project—what you're envisioning, any challenges with your space, and what's most important to you." className="min-h-36 rounded-none" />
                  </div>

                  <Button type="submit" className="h-14 w-full rounded-none bg-[#C8A977] text-[#2D241E] font-semibold text-sm uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-colors">
                    Request My Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">No obligation · No pressure · We'll respond within 1 business day</p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
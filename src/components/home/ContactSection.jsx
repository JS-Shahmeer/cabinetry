import { useState } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeader from "./SectionHeader";

export default function ContactSection({ image }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "Custom Kitchen", message: "" });
  const submit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nProject Type: ${form.type}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:ALT64L@yahoo.com?subject=Consultation Request&body=${body}`;
  };
  return (
    <section id="contact" className="bg-primary px-5 py-12 text-primary-foreground lg:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative mb-16 overflow-hidden"><img src={image} alt="Premium cabinetry workshop materials and finished cabinet doors" className="h-[360px] w-full object-cover opacity-75" /><div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent" /><div className="absolute inset-0 flex items-center px-8 md:px-14"><SectionHeader inverse eyebrow="Request a consultation" title="Ready to Build Something Exceptional?" text="Let's create cabinetry that transforms your home and lasts for decades." /></div></div>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6 text-white/82">
            <p className="flex gap-4"><MapPin className="h-5 w-5 text-[#C8A977]" />75 Pineview Avenue, North Augusta, SC 29841</p>
            <p className="flex gap-4"><Phone className="h-5 w-5 text-[#C8A977]" /><span><a href="tel:8034423868">803-442-3868 office</a><br /><a href="tel:7068295092">706-829-5092 cell</a></span></p>
            <p className="flex gap-4"><Mail className="h-5 w-5 text-[#C8A977]" /><a href="mailto:ALT64L@yahoo.com">ALT64L@yahoo.com</a></p>
            <p className="flex gap-4"><Clock className="h-5 w-5 text-[#C8A977]" />Monday–Friday, 8:00 AM – 4:00 PM</p>
            <iframe title="Southern Accent Cabinetry map" className="h-72 w-full border-0 grayscale" loading="lazy" src="https://www.google.com/maps?q=75%20Pineview%20Avenue%2C%20North%20Augusta%2C%20SC%2029841&output=embed" />
          </div>
          <form onSubmit={submit} className="bg-background p-6 text-foreground md:p-10">
            <div className="grid gap-5 md:grid-cols-2"><Input required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /><Input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /><Input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /><select className="h-10 rounded-md border border-input bg-background px-3 text-sm" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}><option>Custom Kitchen</option><option>Bathroom Vanity</option><option>Built-In Cabinetry</option><option>Entertainment Center</option><option>Specialty Storage</option><option>Commercial Project</option></select></div>
            <Textarea required className="mt-5 min-h-36" placeholder="Tell us about your project, timeline, style, and goals." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <Button className="mt-6 h-14 w-full rounded-none bg-[#C8A977] text-primary hover:bg-primary hover:text-white">Request a Consultation</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
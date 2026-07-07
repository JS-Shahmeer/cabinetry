import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/images/logo.png";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Custom Cabinets", href: "/custom-cabinets" },
  { label: "Kitchen Cabinets", href: "/kitchen-cabinets" },
  { label: "Bathroom Cabinets", href: "/bathroom-cabinets" },
  { label: "Built In Cabinets", href: "/built-ins" },
  { label: "Walk In Pantry Cabinets", href: "/walk-in-pantry-cabinets" },
  { label: "Cabinet Inserts", href: "/cabinet-inserts" },
  // { label: "Hardware & Cabinet Inserts", href: "/hardware-cabinet-inserts" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#1A1A1A] px-5 py-8 md:py-10 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="block text-center text-primary-foreground">
            <img src={logo} alt="Southern Accent Cabinetry" className="h-24 w-auto object-contain" />
          </Link>
          <p className="mt-5 text-sm leading-7 text-white/60">Southern Accent Cabinetry -- Custom cabinetry, built ins, entertainment centers, and premium woodworking built with all wood integrity since 1984.</p>
          <Link to="/consultation" className="mt-6 inline-block bg-[#C8A977] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#2D241E] hover:bg-white transition-colors">
            Request a Consultation
          </Link>
        </div>

        <div>
          <h3 className="mb-5 text-xs uppercase tracking-[0.25em] text-[#C8A977]">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}><Link to={l.href} className="text-sm text-white/65 hover:text-[#C8A977] transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xs uppercase tracking-[0.25em] text-[#C8A977]">Service Areas</h3>
          <ul className="space-y-2 text-sm text-white/65">
            <li>North Augusta, SC</li>
            <li>Augusta, GA</li>
            <li>Aiken, SC</li>
            <li>Evans, GA</li>
            <li>Martinez, GA</li>
            <li>Grovetown, GA</li>
            <li>Columbia County, GA</li>
            <li>Richmond County, GA</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xs uppercase tracking-[0.25em] text-[#C8A977]">Contact</h3>
          <ul className="space-y-4 text-sm text-white/65">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#C8A977]" /><span>75 Pineview Ave, North Augusta, SC 29841, United States</span></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-[#C8A977]" /><span><a href="tel:+18034423868" className="hover:text-white">+1 803-442-3868</a></span></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-[#C8A977]" /><a href="mailto:hello@southernaccentcabinetry.com" className="hover:text-white break-all">hello@southernaccentcabinetry.com</a></li>
            <li className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 shrink-0 text-[#C8A977]" /><span>Mon–Fri 8:00 AM – 4:00 PM</span></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 flex flex-col gap-2 md:flex-row md:justify-between text-xs text-white/40">
        <p>© {year} Southern Accent Cabinetry, LLC. All rights reserved.</p>
        <p>Serving North Augusta, SC · Augusta, GA · Aiken, SC and surrounding areas</p>
      </div>
    </footer>
  );
}
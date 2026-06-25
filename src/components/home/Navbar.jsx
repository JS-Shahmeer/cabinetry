import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = ["Portfolio", "Services", "About", "Craftsmanship", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#2D241E]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <button onClick={() => go("home")} className="text-left text-primary-foreground">
          <p className="font-display text-xl tracking-wide">Southern Accent</p>
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#C8A977]">Cabinetry</p>
        </button>
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <button key={link} onClick={() => go(link)} className="text-sm uppercase tracking-[0.2em] text-white/75 transition hover:text-[#C8A977]">
              {link}
            </button>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:8034423868" className="flex items-center gap-2 text-sm text-white/80 hover:text-[#C8A977]"><Phone className="h-4 w-4" />803-442-3868</a>
          <Button onClick={() => go("Contact")} className="rounded-none bg-primary-foreground px-5 text-primary hover:bg-[#C8A977]">Request a Consultation</Button>
        </div>
        <button className="text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-[#2D241E] px-5 py-5 lg:hidden">
          {links.map((link) => <button key={link} onClick={() => go(link)} className="block w-full py-3 text-left text-sm uppercase tracking-[0.2em] text-white/80">{link}</button>)}
        </div>
      )}
    </header>
  );
}
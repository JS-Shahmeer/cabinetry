import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { label: "Custom Cabinets", href: "/custom-cabinets" },
  { label: "Kitchen Cabinets", href: "/kitchen-cabinets" },
  { label: "Bathroom Vanities", href: "/bathroom-vanities" },
  { label: "Built-Ins & Storage", href: "/built-ins" },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", dropdown: services },
  { label: "Our Process", href: "/process" },
  { label: "Gallery", href: "/gallery" },
  { label: "Service Areas", href: "/service-areas" },
];

export default function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setServicesOpen(false); }, [location]);

  const isHome = location.pathname === "/";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || !isHome ? "bg-[#2D241E] shadow-lg" : "bg-[#2D241E]/80 backdrop-blur-xl"} border-b border-white/10`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="text-left text-primary-foreground">
          <p className="font-display text-xl tracking-wide text-white">Southern Accent</p>
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#C8A977]">Cabinetry</p>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className="flex items-center gap-1 text-sm uppercase tracking-[0.2em] text-white/75 transition hover:text-[#C8A977]">
                  {item.label} <ChevronDown className="h-3 w-3" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-[#2D241E] border border-white/10 shadow-xl">
                    {item.dropdown.map((s) => (
                      <Link key={s.href} to={s.href} className="block px-5 py-3 text-sm text-white/75 hover:bg-white/10 hover:text-[#C8A977]">{s.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} to={item.href} className={`text-sm uppercase tracking-[0.2em] transition hover:text-[#C8A977] ${location.pathname === item.href ? "text-[#C8A977]" : "text-white/75"}`}>
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:8034423868" className="flex items-center gap-2 text-sm text-white/80 hover:text-[#C8A977]">
            <Phone className="h-4 w-4" />803-442-3868
          </a>
          <Button asChild className="rounded-none bg-[#C8A977] px-5 text-[#2D241E] font-semibold hover:bg-white">
            <Link to="/consultation">Request a Consultation</Link>
          </Button>
        </div>

        <button className="text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#2D241E] px-5 py-5 lg:hidden">
          {navLinks.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <p className="block py-3 text-sm uppercase tracking-[0.2em] text-white/60">{item.label}</p>
                {item.dropdown.map((s) => (
                  <Link key={s.href} to={s.href} className="block py-2 pl-4 text-sm text-white/80">— {s.label}</Link>
                ))}
              </div>
            ) : (
              <Link key={item.label} to={item.href} className="block py-3 text-sm uppercase tracking-[0.2em] text-white/80">{item.label}</Link>
            )
          )}
          <Link to="/consultation" className="mt-4 block bg-[#C8A977] py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#2D241E]">Request a Consultation</Link>
        </div>
      )}
    </header>
  );
}
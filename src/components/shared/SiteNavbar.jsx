import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/logo.png";

const services = [
  { label: "Kitchen Cabinets", href: "/kitchen-cabinets" },
  { label: "Bathroom Cabinets", href: "/bathroom-cabinets" },
  { label: "Built-In Cabinets", href: "/built-ins" },
  { label: "Walk In Pantry Cabinets", href: "/walk-in-pantry-cabinets" },
  { label: "Cabinet Inserts", href: "/cabinet-inserts" },
  { label: "Custom Cabinets", href: "/custom-cabinets" },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", dropdown: services },
  // { label: "Hardware & Cabinet Inserts", href: "/hardware-cabinet-inserts" },
  { label: "Our Process", href: "/process" },
  { label: "Gallery", href: "/gallery" },
  { label: "Service Areas", href: "/service-areas" },
];

const leftNav = navLinks.slice(0, 4);
const rightNav = navLinks.slice(4);

function DesktopNavItem({ item, location, servicesOpen, setServicesOpen }) {
  if (item.dropdown) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
      >
        <button className="flex items-center gap-1 text-[11px] uppercase tracking-[0.24em] text-white/75 transition hover:text-[#C8A977]">
          {item.label} <ChevronDown className="h-3 w-3" />
        </button>
        {servicesOpen && (
          <div className="absolute left-0 top-full mt-1 w-56 border border-white/10 bg-[#2D241E] shadow-xl">
            {item.dropdown.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="block px-5 py-3 text-sm text-white/75 hover:bg-white/10 hover:text-[#C8A977]"
              >
                {s.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={item.href}
      className={`text-[11px] uppercase tracking-[0.24em] transition hover:text-[#C8A977] ${location.pathname === item.href ? "text-[#C8A977]" : "text-white/75"}`}
    >
      {item.label}
    </Link>
  );
}

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
      <nav className="px-5 lg:px-8 max-w-[1600px] mx-auto">
        <div className="hidden py-2.5 items-center lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex items-center gap-6">
            {leftNav.map((item) => (
              <DesktopNavItem
                key={item.label}
                item={item}
                location={location}
                servicesOpen={servicesOpen}
                setServicesOpen={setServicesOpen}
              />
            ))}
          </div>

          <Link to="/" className="mx-10 block text-center text-primary-foreground">
            <img src={logo} alt="Southern Accent Cabinetry" className="mx-auto h-24 w-auto object-contain" />
          </Link>

          <div className="flex items-center justify-end gap-5">
            {rightNav.map((item) => (
              <DesktopNavItem
                key={item.label}
                item={item}
                location={location}
                servicesOpen={servicesOpen}
                setServicesOpen={setServicesOpen}
              />
            ))}
            <a href="tel:8034423868" className="flex items-center gap-1.5 text-[11px] tracking-[0.04em] text-white/70 hover:text-[#C8A977]">
              <Phone className="h-3.5 w-3.5" />803-442-3868
            </a>
            <Button asChild className="h-9 rounded-none bg-[#C8A977] px-4 text-[11px] uppercase tracking-[0.12em] text-[#2D241E] hover:bg-white">
              <Link to="/consultation">Contact us</Link>
            </Button>
          </div>
        </div>

        <div className="relative flex h-[80px] items-center justify-end lg:hidden">
          <Link to="/" className="absolute left-4 block text-primary-foreground">
            <img src={logo} alt="Southern Accent Cabinetry" className="h-16 w-auto object-contain" />
          </Link>

          <button className="text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#2D241E] px-5 py-5 lg:hidden">
          {/* <Link to="/" className="mb-5 block border-b border-white/10 pb-5 text-center">
            <img src={logo} alt="Southern Accent Cabinetry" className="mx-auto h-16 w-auto object-contain" />
          </Link> */}
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
          <a href="tel:8034423868" className="mt-2 flex items-center gap-2 py-3 text-sm text-white/80">
            <Phone className="h-4 w-4" />803-442-3868
          </a>
          <Link to="/consultation" className="mt-4 block bg-[#C8A977] py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#2D241E]">Contact us</Link>
        </div>
      )}
    </header>
  );
}
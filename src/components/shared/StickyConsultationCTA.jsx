import { CalendarDays, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function StickyConsultationCTA() {
  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 md:flex">
        <a
          href="tel:+18034423868"
          className="inline-flex h-12 items-center justify-center gap-2 bg-primary px-5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-xl transition-colors hover:bg-[#C8A977] hover:text-[#2D241E]"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
        <Link
          to="/consultation"
          className="inline-flex h-12 items-center justify-center gap-2 bg-[#C8A977] px-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#2D241E] shadow-xl transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <CalendarDays className="h-4 w-4" />
          Book Consultation
        </Link>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#2D241E]/15 bg-white/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-3">
          <a
            href="tel:+18034423868"
            className="inline-flex h-12 items-center justify-center gap-2 bg-primary px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-foreground"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
          <Link
            to="/consultation"
            className="inline-flex h-12 items-center justify-center gap-2 bg-[#C8A977] px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2D241E]"
          >
            <CalendarDays className="h-4 w-4" />
            Book Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
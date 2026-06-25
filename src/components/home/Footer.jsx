
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#1A1A1A] px-5 py-12 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div><p className="font-display text-3xl">Southern Accent</p><p className="text-xs uppercase tracking-[0.32em] text-[#C8A977]">Cabinetry</p><p className="mt-5 text-sm leading-7 text-white/60">Custom cabinetry, built-ins, entertainment centers, and premium woodworking built with all-wood integrity.</p></div>
        <div><h4 className="mb-4 text-sm uppercase tracking-[0.22em] text-[#C8A977]">Quick links</h4><p className="space-y-2 text-sm text-white/70">Home<br />Portfolio<br />Services<br />About<br />Contact</p></div>
        <div><h4 className="mb-4 text-sm uppercase tracking-[0.22em] text-[#C8A977]">Services</h4><p className="space-y-2 text-sm text-white/70">Custom Kitchens<br />Bathroom Vanities<br />Built-Ins<br />Entertainment Centers<br />Specialty Storage</p></div>
        <div><h4 className="mb-4 text-sm uppercase tracking-[0.22em] text-[#C8A977]">Contact</h4><p className="text-sm leading-7 text-white/70">75 Pineview Avenue<br />North Augusta, SC 29841<br />803-442-3868<br />706-829-5092</p></div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/45">© {year} Southern Accent Cabinetry, LLC. All rights reserved.</div>
    </footer>
  );
}
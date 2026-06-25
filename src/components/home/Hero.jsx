import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = ["40+ Years Experience", "Custom Built", "All-Wood Construction", "North Augusta, SC"];

export default function Hero({ image }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-primary pt-24 md:pb-20 text-primary-foreground">
      <motion.img src={image} alt="Luxury custom kitchen cabinetry by Southern Accent Cabinetry" className="absolute inset-0 h-full w-full object-cover opacity-75" initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.6 }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A120D]/90 via-[#2D241E]/55 to-transparent" />
      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center px-5 py-20 lg:px-8">
        <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#C8A977]">North Augusta, SC · Serving the CSRA since 1984</p>
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">Custom Cabinetry Crafted for Generations</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">All-wood kitchens, bathroom vanities, and built-ins built the right way — no particle board, no shortcuts, no compromises.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button onClick={() => scrollTo("contact")} className="group h-14 rounded-none bg-[#C8A977] px-8 text-sm uppercase tracking-[0.2em] text-[#2D241E] hover:bg-white">Request a Consultation <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></Button>
            <Button onClick={() => scrollTo("portfolio")} variant="outline" className="h-14 rounded-none border-white/40 bg-white/5 px-8 text-sm uppercase tracking-[0.2em] text-white backdrop-blur hover:bg-white hover:text-[#2D241E]">View Portfolio</Button>
          </div>
        </motion.div>
      </div>
      <div className="relative mx-5 md:-mb-20 mb-0 grid items-center gap-px border border-white/15 bg-white/10 backdrop-blur md:mx-auto md:max-w-5xl md:grid-cols-4">
        {badges.map((badge) => <div key={badge} className="px-5 py-5 text-center text-sm uppercase tracking-[0.18em] text-white/85">{badge}</div>)}
      </div>
    </section>
  );
}
import { Link } from "react-router-dom";
import { Check, Award, Hammer, Shield, Users } from "lucide-react";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import TrustBar from "@/components/shared/TrustBar";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import InlineTestimonial from "@/components/shared/InlineTestimonial";
import { IMG } from "@/components/lib/siteImages";

const values = [
  { icon: Award, title: "40+ Years of Expertise", text: "Since 1984, we've built custom cabinetry for families throughout the CSRA region—each project informed by decades of hands-on experience." },
  { icon: Hammer, title: "All-Wood Construction", text: "No shortcuts. Every cabinet is built with plywood interiors and solid wood facings, then finished to hold up beautifully for decades." },
  { icon: Shield, title: "No Particle Board. Ever.", text: "We refuse to use particle board in our cabinets. Your investment deserves materials that last, not materials designed to be replaced." },
  { icon: Users, title: "Personalized Service", text: "You work directly with our craftsmen from consultation through installation. No middlemen, no miscommunication, no surprises." },
];

const team = [
  { name: "Master Cabinetmaker", role: "Lead Craftsman · 40+ Years Experience", bio: "With four decades building custom cabinetry across the CSRA, our lead craftsman brings unmatched expertise to every kitchen, bathroom, and built-in project." },
  { name: "Project Consultation", role: "Client Experience & Design Planning", bio: "Our consultation process puts listening first. We guide homeowners through material selection, style options, layout optimization, and realistic timeline expectations." },
  { name: "Installation Team", role: "Precision Installation Specialists", bio: "Our dedicated installation crew ensures every cabinet, door, and drawer is level, aligned, and finished to the same standard it was built to in our shop." },
];

const whyUs = [
  "Over 40 years of proven craftsmanship",
  "All-wood construction—no particle board",
  "Plywood cabinet interiors for lasting strength",
  "Solid wood faces for a premium appearance",
  "Durable lacquer finishes that resist wear",
  "Custom design tailored to your home",
  "Local CSRA craftsmen you can trust",
  "No-pressure consultations",
];

export default function About() {
  return (
    <PageLayout title="About Southern Accent Cabinetry | 40+ Years of Craftsmanship" description="Southern Accent Cabinetry has built custom all-wood cabinetry for homeowners in North Augusta, SC and Augusta, GA since 1984. Learn our story, materials, and craftsmanship philosophy.">
      <PageHero
        eyebrow="About Southern Accent Cabinetry"
        title="Built on Craftsmanship. Trusted for Generations."
        subtitle="Since 1984, Southern Accent Cabinetry has been building custom all-wood cabinetry for homeowners in North Augusta, Augusta, and the surrounding CSRA region."
        image={IMG.workshop}
      />
      <TrustBar />

      {/* Our Story */}
      <section className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Our story</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">A Family Tradition of Custom Woodworking</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">Southern Accent Cabinetry began with a simple belief: every homeowner deserves custom cabinetry built the right way, with honest materials and genuine skill.</p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">For over 40 years, we've served homeowners throughout North Augusta, Augusta, Aiken, and the greater CSRA region—one custom project at a time. Our shop produces kitchens, bathrooms, built-ins, entertainment centers, and specialty storage solutions that outlast the homes they're built into.</p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">We're not a big-box store. We're not a franchise. We're a local team of craftsmen who take pride in every door, drawer, and finish we deliver.</p>
            <Link to="/consultation" className="mt-8 inline-block bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:bg-[#C8A977] hover:text-[#2D241E] transition-colors">
              Request a Consultation
            </Link>
          </div>
          <div className="relative">
            <img src={IMG.workshop} alt="Master craftsman at work in the Southern Accent Cabinetry workshop" className="h-[520px] w-full object-cover" />
            <div className="absolute -bottom-8 -right-5 bg-[#2D241E] px-8 py-7 text-white md:-right-8">
              <p className="font-display text-5xl text-[#C8A977]">40+</p>
              <p className="text-xs uppercase tracking-[0.25em] text-white/70">Years of craft</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inline testimonial */}
      <div className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <InlineTestimonial quote="They've been building cabinets the same way for decades—and that's exactly why we chose them. The quality is unmistakable." name="Homeowner, North Augusta, SC" />
        </div>
      </div>

      {/* Craftsmanship Philosophy */}
      <section className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Our philosophy</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">We Build Cabinets the Way They Were Meant to Be Built</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">Our craftsmanship philosophy is straightforward: use the best materials available, apply the same standard to every job, and never cut corners—regardless of project size or budget.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border-t-4 border-[#C8A977] bg-white p-8">
                <Icon className="h-8 w-8 text-[#8C6A43] mb-5" />
                <h3 className="font-display text-2xl text-primary mb-3">{title}</h3>
                <p className="text-muted-foreground leading-7">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary px-5 py-24 text-white lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#C8A977]">Why homeowners choose us</p>
            <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">The Standard We Hold Every Project To</h2>
            <p className="mt-6 text-lg leading-8 text-white/72">We've built our reputation by refusing to compromise. These are the standards every project is held to—no exceptions.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {whyUs.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white/8 px-5 py-4">
                <Check className="h-5 w-5 shrink-0 text-[#C8A977]" />
                <span className="text-white/85">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Materials */}
      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <img src={IMG.grain} alt="Premium plywood interior and solid wood cabinetry detail" className="h-[460px] w-full object-cover" />
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Materials & construction</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Premium Materials. No Shortcuts.</h2>
            <div className="mt-8 space-y-6">
              {[["Plywood Interiors", "We use plywood on every cabinet interior. Plywood holds screws better, resists moisture, and won't sag under load like particle board does."], ["Solid Wood Faces", "Every face frame is built from solid wood—not vinyl-wrapped MDF—for a finish that looks and feels premium for decades."], ["Lacquer Finishes", "Our lacquer-based paints and stains provide a smooth, durable finish that resists chips, scratches, and everyday wear far better than standard paint."], ["Custom Joinery", "Each cabinet is assembled with precision joinery. Every corner, joint, and connection is built to hold up through years of daily use."]].map(([title, text]) => (
                <div key={title} className="border-l-4 border-[#C8A977] pl-6">
                  <h3 className="font-display text-2xl text-primary">{title}</h3>
                  <p className="mt-2 leading-7 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">The team</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Craftsmen Who Take Personal Pride in Every Project</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {team.map(({ name, role, bio }) => (
              <div key={name} className="bg-white p-8">
                <div className="mb-5 h-20 w-20 rounded-full bg-[#2D241E] flex items-center justify-center">
                  <Hammer className="h-8 w-8 text-[#C8A977]" />
                </div>
                <h3 className="font-display text-2xl text-primary">{name}</h3>
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#8C6A43]">{role}</p>
                <p className="leading-7 text-muted-foreground">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary px-5 py-24 text-white lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#C8A977]">What homeowners say</p>
          <h2 className="mb-14 font-display text-4xl text-white md:text-5xl">Trusted by Families Across the CSRA</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[["The craftsmanship is outstanding. Every cabinet feels solid, the finish is beautiful, and the kitchen looks like it belongs in a magazine.", "Homeowner, North Augusta, SC"], ["They listened carefully, communicated clearly, and built exactly what our home needed. The attention to detail made all the difference.", "Built-In Client, Augusta, GA"], ["Our cabinets still look incredible years later. You can tell Southern Accent uses better materials and takes pride in the work.", "Kitchen Renovation, Aiken, SC"]].map(([q, n]) => (
              <InlineTestimonial key={n} quote={q} name={n} inverse />
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
}
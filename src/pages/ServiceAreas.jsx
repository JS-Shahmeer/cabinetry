import { Link } from "react-router-dom";
import { MapPin, Check } from "lucide-react";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import TrustBar from "@/components/shared/TrustBar";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import { IMG } from "@/components/lib/siteImages";

const areas = [
  { city: "North Augusta, SC", state: "South Carolina", desc: "Our home base. Southern Accent Cabinetry has served North Augusta homeowners with custom kitchen, bathroom, and built-in cabinetry since 1984.", highlights: ["Custom kitchen remodels", "Bathroom vanity installations", "Built-in storage solutions", "Entertainment centers", "Specialty woodworking"] },
  { city: "Augusta, GA", state: "Georgia", desc: "We've completed hundreds of custom cabinetry projects across Augusta neighborhoods—from Summerville to West Augusta to the historic Westside.", highlights: ["Custom kitchen cabinets", "Master bath vanities", "Home office built-ins", "Media room entertainment centers", "Mudroom storage systems"] },
  { city: "Aiken, SC", state: "South Carolina", desc: "Aiken's beautiful horse-country homes and historic neighborhoods deserve premium custom cabinetry that matches the quality of the properties themselves.", highlights: ["Luxury kitchen cabinetry", "Custom bathroom vanities", "Library and bookcase walls", "Custom closet systems", "Specialty storage solutions"] },
  { city: "Evans, GA", state: "Georgia", desc: "Evans is one of our most active service areas—Columbia County's growth has brought hundreds of homeowners who want cabinetry built to a higher standard.", highlights: ["New construction cabinetry", "Kitchen remodels", "Bathroom vanities", "Built-in storage", "Home office cabinetry"] },
  { city: "Martinez, GA", state: "Georgia", desc: "Martinez homeowners trust Southern Accent Cabinetry for custom kitchen and bath cabinetry that outperforms and outlasts anything available at home improvement stores.", highlights: ["Kitchen cabinetry", "Bathroom vanities", "Laundry room cabinets", "Built-in entertainment centers", "Custom storage"] },
  { city: "Grovetown, GA", state: "Georgia", desc: "Grovetown's rapidly growing residential communities choose Southern Accent Cabinetry for custom cabinetry that makes new homes feel truly custom.", highlights: ["New construction cabinetry", "Kitchen upgrades", "Bathroom remodels", "Built-in solutions", "Specialty woodworking"] },
];

export default function ServiceAreas() {
  return (
    <PageLayout title="Service Areas | North Augusta, Augusta, Aiken & CSRA" description="Southern Accent Cabinetry serves North Augusta SC, Augusta GA, Aiken SC, Evans GA, Martinez GA, Grovetown GA, and surrounding CSRA communities with custom all-wood cabinetry.">
      <PageHero
        eyebrow="Service Areas · North Augusta, SC &amp; CSRA"
        title="Custom Cabinetry Serving North Augusta, Augusta &amp; the CSRA"
        subtitle="Southern Accent Cabinetry builds custom kitchen cabinets, bathroom vanities, built-ins, and storage solutions for homeowners throughout North Augusta, Augusta, Aiken, Evans, and surrounding communities."
        image={IMG.workshop}
      />
      <TrustBar />

      {/* Overview */}
      <section className="px-5 py-12 lg:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Where we work</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Local Craftsmen. Local Reputation. Local Service.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">Based in North Augusta, SC, Southern Accent Cabinetry has served homeowners throughout the Central Savannah River Area (CSRA) for over 40 years. Our service area spans both sides of the Savannah River—from Aiken County in South Carolina to Columbia, Richmond, and surrounding counties in Georgia.</p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">When you hire Southern Accent Cabinetry, you're working with local craftsmen who know the region, respect your home, and stand behind their work—not a franchise from out of town.</p>
            <div className="mt-8 grid gap-2 sm:grid-cols-2">
              {["North Augusta, SC", "Augusta, GA", "Aiken, SC", "Evans, GA", "Martinez, GA", "Grovetown, GA", "Columbia County, GA", "Richmond County, GA"].map(city => (
                <div key={city} className="flex items-center gap-3"><MapPin className="h-4 w-4 shrink-0 text-[#8C6A43]" /><span className="text-sm">{city}</span></div>
              ))}
            </div>
          </div>
          <div>
            <iframe title="Southern Accent Cabinetry service area map" className="h-[460px] w-full border-0" loading="lazy" src="https://www.google.com/maps?q=North+Augusta+SC&output=embed" />
          </div>
        </div>
      </section>

      {/* Area Cards */}
      <section className="bg-white px-5 py-12 lg:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Cities we serve</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Custom Cabinetry Across the CSRA</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map(({ city, state, desc, highlights }) => (
              <div key={city} className="border-t-4 border-[#C8A977] bg-background p-8">
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#8C6A43]">{state}</p>
                <h3 className="font-display text-3xl text-primary mb-4">{city}</h3>
                <p className="text-sm leading-7 text-muted-foreground mb-5">{desc}</p>
                <ul className="space-y-2 mb-6">
                  {highlights.map(h => (
                    <li key={h} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-[#8C6A43]" />{h}</li>
                  ))}
                </ul>
                <Link to="/consultation" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6A43] hover:text-primary transition-colors">
                  Request Consultation in {city} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why local */}
      <section className="bg-primary px-5 py-12 text-white lg:px-8 md:py-16">
        <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-2 items-center">
          <img src={IMG.workshop} alt="Local CSRA craftsman building custom cabinetry" className="h-[440px] w-full object-cover" />
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#C8A977]">Why local homeowners choose us</p>
            <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">40 Years of CSRA Craftsmanship</h2>
            <p className="mt-6 text-lg leading-8 text-white/72">Southern Accent Cabinetry isn't a chain. We're a local shop with a 40-year reputation built project by project, homeowner by homeowner, across the CSRA region.</p>
            <div className="mt-8 space-y-4">
              {[["Local expertise", "We know the homes, architectural styles, and design preferences of the CSRA region."], ["Accountable service", "We're in your community. Our reputation is built on doing right by every homeowner we work with."], ["Direct access", "You work directly with our craftsmen—no corporate middlemen, no communication breakdowns."], ["Long-term relationship", "Many CSRA homeowners have used us for multiple projects across multiple homes and decades."]].map(([title, text]) => (
                <div key={title} className="flex gap-4">
                  <Check className="h-5 w-5 mt-0.5 shrink-0 text-[#C8A977]" />
                  <div><p className="font-semibold text-white">{title}</p><p className="text-sm leading-7 text-white/65">{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA headline="Serving Your Neighborhood for Over 40 Years" sub="Wherever you are in the CSRA region, we're ready to talk about your custom cabinetry project." />
    </PageLayout>
  );
}
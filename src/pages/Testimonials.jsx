import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import TrustBar from "@/components/shared/TrustBar";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import { IMG } from "@/components/lib/siteImages";

const reviews = [
  { name: "Sarah M.", location: "North Augusta, SC", project: "Full Kitchen Remodel", rating: 5, text: "Southern Accent transformed our kitchen beyond what we imagined. The craftsmanship is outstanding—every cabinet door closes with a satisfying soft click, the finish is flawless, and the storage solutions they designed eliminated every frustration we had with our old kitchen. Worth every penny and then some." },
  { name: "James & Carol T.", location: "Augusta, GA", project: "Custom Bathroom Vanity", rating: 5, text: "We had a challenging bathroom layout and weren't sure custom cabinetry was feasible. They assessed the space, proposed a design that maximized every inch, and built a vanity that fits the room perfectly. The attention to detail is remarkable—even the inside of the drawers is beautifully finished." },
  { name: "Robert H.", location: "Evans, GA", project: "Built-In Home Office", rating: 5, text: "The built-in home office they designed and installed is the best investment we've made in our house. It looks like original architecture, not added furniture. The quality of the wood and finish is exceptional—it will outlast the rest of the house." },
  { name: "Lisa K.", location: "Aiken, SC", project: "Entertainment Center Built-In", rating: 5, text: "From consultation to installation, the process was professional, organized, and surprisingly smooth. The entertainment center is the centerpiece of our living room now. Every guest comments on it. The craftsmanship is genuinely impressive." },
  { name: "David & Michelle P.", location: "Grovetown, GA", project: "Kitchen & Laundry Room", rating: 5, text: "We hired Southern Accent for our kitchen and liked them so much we had them come back for the laundry room. Same quality, same professionalism, same attention to detail both times. They do things right and they back their work." },
  { name: "Tom B.", location: "Martinez, GA", project: "Master Closet System", rating: 5, text: "Our master closet used to be a source of daily frustration. Now it's one of our favorite rooms in the house. Every zone was designed around how we actually use the space. The all-wood construction feels substantial and permanent—this isn't IKEA furniture, it's real cabinetry." },
];

const featured = [
  { title: "A Kitchen That Changed Everything", client: "The Morrison Family · North Augusta, SC", desc: "The Morrisons came to us with a 1980s kitchen that was limiting their family's daily life. We rebuilt it from scratch—custom shaker cabinetry to the ceiling, a custom island, and a full organization system. The result was a kitchen that changed how their family uses their home.", img: IMG.kitchen },
  { title: "From Blank Wall to Architectural Built-In", client: "The Chen Family · Augusta, GA", desc: "A plain living room wall became a floor-to-ceiling built-in library and entertainment center that anchors the entire first floor. All-wood construction, integrated lighting pockets, and matched to the home's existing millwork.", img: IMG.builtIn },
];

export default function Testimonials() {
  return (
    <PageLayout title="Client Reviews & Testimonials | Southern Accent Cabinetry" description="Read what homeowners in North Augusta, SC, Augusta, GA, and across the CSRA say about Southern Accent Cabinetry's craftsmanship, process, and results.">
      <PageHero
        eyebrow="Customer Testimonials"
        title="What Homeowners Say About Our Craftsmanship"
        subtitle="Over 40 years of satisfied homeowners across North Augusta, Augusta, Aiken, and the greater CSRA region."
        image={IMG.cta}
        cta={false}
      />
      <TrustBar />

      {/* Stats */}
      <div className="bg-white border-b border-border">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[["40+", "Years in Business"], ["100%", "All-Wood Construction"], ["5★", "Average Rating"], ["CSRA", "Locally Trusted"]].map(([stat, label]) => (
            <div key={label} className="px-5 py-8 text-center">
              <p className="font-display text-4xl text-primary">{stat}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#8C6A43]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews grid */}
      <section className="px-5 py-12 lg:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Customer reviews</p>
            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Trusted by Homeowners Across the CSRA</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map(({ name, location, project, rating, text }) => (
              <article key={name} className="bg-white p-8">
                <div className="flex gap-1 mb-2">
                  {[...Array(rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-[#C8A977] text-[#C8A977]" />)}
                </div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#8C6A43] mb-5">{project}</p>
                <p className="text-base leading-8 text-foreground italic">"{text}"</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-semibold text-primary text-sm">{name}</p>
                  <p className="text-xs text-muted-foreground">{location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-primary px-5 py-12 text-white lg:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#C8A977]">Featured projects</p>
          <h2 className="mb-14 font-display text-4xl text-white md:text-5xl">Projects Behind the Reviews</h2>
          <div className="grid gap-10 md:grid-cols-2">
            {featured.map(({ title, client, desc, img }) => (
              <div key={title}>
                <img src={img} alt={title} className="h-80 w-full object-cover mb-7" />
                <h3 className="font-display text-3xl text-white">{title}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#C8A977] mb-4">{client}</p>
                <p className="leading-7 text-white/72">{desc}</p>
                <Link to="/consultation" className="mt-6 inline-block border border-[#C8A977] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A977] hover:bg-[#C8A977] hover:text-primary transition-colors">
                  Start Your Project
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridge to Gallery */}
      <div className="bg-white px-5 py-10 lg:px-8 text-center border-t border-border">
        <p className="text-sm text-muted-foreground">Want to see the work behind the reviews?</p>
        <Link to="/gallery" className="mt-2 inline-block text-sm font-semibold text-[#8C6A43] hover:text-primary transition-colors uppercase tracking-[0.18em]">Browse the Project Gallery →</Link>
      </div>

      <ConsultationCTA headline="Join Our List of Happy Homeowners" sub="Schedule a consultation and let's start planning the custom cabinetry project your home deserves." />
    </PageLayout>
  );
}
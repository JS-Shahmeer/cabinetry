import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, ArrowRight } from "lucide-react";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import { IMG } from "@/components/lib/siteImages";

const posts = [
  {
    id: "custom-cabinet-trends-2024",
    title: "Custom Cabinet Trends for CSRA Homeowners in 2024",
    cat: "Design Trends",
    date: "November 2024",
    readTime: "5 min read",
    excerpt: "From warm wood tones making a comeback to the continued dominance of shaker-style doors, here's what CSRA homeowners are choosing for their custom kitchen and bathroom cabinetry projects this year.",
    img: IMG.kitchen,
    featured: true,
  },
  {
    id: "plywood-vs-particle-board",
    title: "Plywood vs. Particle Board: Why Cabinet Material Matters More Than You Think",
    cat: "Materials",
    date: "October 2024",
    readTime: "7 min read",
    excerpt: "The interior of your cabinet box is invisible once installed—but it determines how long your cabinetry will last, how well it holds up to moisture, and whether your shelves sag under load after a few years.",
    img: IMG.grain,
    featured: true,
  },
  {
    id: "kitchen-remodeling-guide",
    title: "The Complete Kitchen Remodeling Guide for North Augusta Homeowners",
    cat: "Kitchen",
    date: "September 2024",
    readTime: "10 min read",
    excerpt: "Planning a kitchen remodel is one of the most exciting—and overwhelming—home improvement projects a homeowner can undertake. Here's a practical guide to approaching it with clarity and confidence.",
    img: IMG.hero,
    featured: false,
  },
  {
    id: "built-in-storage-ideas",
    title: "10 Built-In Storage Ideas That Will Transform Your Home",
    cat: "Built-Ins",
    date: "August 2024",
    readTime: "6 min read",
    excerpt: "Built-in cabinetry isn't just for kitchens and bathrooms anymore. Here are ten ideas for custom built-ins that homeowners across the CSRA are using to maximize storage throughout their homes.",
    img: IMG.builtIn,
    featured: false,
  },
  {
    id: "cabinet-maintenance-guide",
    title: "How to Care for Your Custom Cabinets: A Maintenance Guide",
    cat: "Maintenance",
    date: "July 2024",
    readTime: "5 min read",
    excerpt: "Custom cabinetry built with quality materials and professional finishes is designed to last for decades—but proper care helps you get the most from your investment. Here's how to keep your cabinets looking great year after year.",
    img: IMG.workshop,
    featured: false,
  },
  {
    id: "bathroom-vanity-guide",
    title: "Choosing the Right Custom Bathroom Vanity: A Homeowner's Guide",
    cat: "Bathroom",
    date: "June 2024",
    readTime: "6 min read",
    excerpt: "A custom bathroom vanity is one of the most impactful upgrades you can make to a bathroom—but the options can feel overwhelming. Here's how to approach the selection process with confidence.",
    img: IMG.bath,
    featured: false,
  },
];

const cats = ["All", "Kitchen", "Bathroom", "Built-Ins", "Materials", "Design Trends", "Maintenance"];

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("All");

  const filtered = posts.filter(p => {
    const matchCat = activeCat === "All" || p.cat === activeCat;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = posts.filter(p => p.featured);
  const rest = filtered.filter(p => !p.featured || activeCat !== "All" || search);

  return (
    <PageLayout title="Blog" description="Custom cabinetry tips, design trends, material guides, and home improvement advice from Southern Accent Cabinetry in North Augusta, SC.">
      <PageHero
        eyebrow="The Southern Accent Blog"
        title="Cabinetry Insights for CSRA Homeowners"
        subtitle="Design trends, material guides, remodeling tips, and care advice from our team of craftsmen."
        image={IMG.workshop}
        cta={false}
      />

      {/* Search & Filter */}
      <div className="bg-white border-b border-border px-5 py-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search articles..." className="h-10 w-full border border-input bg-background pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#C8A977]" />
          </div>
          <div className="flex gap-2 flex-wrap">
            {cats.map(c => (
              <button key={c} onClick={() => setActiveCat(c)} className={`px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors ${activeCat === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-border"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured posts */}
      {activeCat === "All" && !search && (
        <section className="px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="mb-8 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Featured articles</p>
            <div className="grid gap-8 md:grid-cols-2">
              {featured.map(p => (
                <Link key={p.id} to={`/blog/${p.id}`} className="group bg-white block overflow-hidden">
                  <div className="overflow-hidden">
                    <img src={p.img} alt={p.title} className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="bg-[#C8A977] px-3 py-1 text-xs font-semibold text-[#2D241E]">{p.cat}</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="h-3 w-3" />{p.date}</span>
                      <span className="text-xs text-muted-foreground">{p.readTime}</span>
                    </div>
                    <h2 className="font-display text-3xl text-primary group-hover:text-[#8C6A43] transition-colors">{p.title}</h2>
                    <p className="mt-4 leading-7 text-muted-foreground">{p.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm text-[#8C6A43]">Read article <ArrowRight className="h-4 w-4" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All posts */}
      <section className={`px-5 pb-24 lg:px-8 lg:pb-32 ${activeCat === "All" && !search ? "bg-white py-0 pt-0" : "py-20 lg:py-28"}`}>
        <div className="mx-auto max-w-7xl">
          {(activeCat !== "All" || search) && <p className="mb-8 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">{filtered.length} article{filtered.length !== 1 ? "s" : ""}</p>}
          {activeCat === "All" && !search && <p className="mb-8 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">All articles</p>}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {(activeCat === "All" && !search ? rest : filtered).map(p => (
              <Link key={p.id} to={`/blog/${p.id}`} className="group bg-background block overflow-hidden">
                <div className="overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#8C6A43]">{p.cat}</span>
                    <span className="text-xs text-muted-foreground">· {p.date}</span>
                  </div>
                  <h3 className="font-display text-xl text-primary group-hover:text-[#8C6A43] transition-colors leading-tight">{p.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground line-clamp-3">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-muted-foreground">No articles found. <button onClick={() => { setSearch(""); setActiveCat("All"); }} className="text-[#8C6A43] hover:underline">Clear filters</button></p>
            </div>
          )}
        </div>
      </section>

      <ConsultationCTA headline="Questions About Your Cabinetry Project?" sub="Skip the research and talk directly with our team. A consultation is free and gives you answers specific to your home and project." />
    </PageLayout>
  );
}
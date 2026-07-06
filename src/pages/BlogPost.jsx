import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import PageLayout from "@/components/shared/PageLayout";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import InlineTestimonial from "@/components/shared/InlineTestimonial";
import { IMG } from "@/components/lib/siteImages";

const articles = {
  "custom-cabinet-trends-2024": {
    title: "Custom Cabinet Trends for CSRA Homeowners in 2024",
    cat: "Design Trends", date: "November 2024", readTime: "5 min read",
    img: IMG.kitchen,
    content: [
      { type: "h2", text: "Warm Wood Tones Are Back—and Better Than Ever" },
      { type: "p", text: "After years of all-white kitchens dominating home design, CSRA homeowners are embracing warm wood tones again. Walnut, white oak, and honey maple are appearing in kitchens that would have been all-white paint just three years ago. The shift reflects a broader move toward warmth, texture, and authenticity in home design." },
      { type: "h2", text: "Shaker Doors Remain the Dominant Style" },
      { type: "p", text: "The shaker door style continues to be the most requested door profile in custom cabinetry. Its clean recessed panel translates beautifully in both traditional and contemporary kitchens, and it ages gracefully across design shifts. If you're unsure what door style to choose, shaker is rarely the wrong answer." },
      { type: "h2", text: "Two-Tone Kitchens: Contrasting Upper and Lower Cabinets" },
      { type: "p", text: "Two-tone cabinetry—a light paint color on upper cabinets and a darker stain or contrasting paint on base cabinets—is one of the most popular design choices we're seeing this year. It adds visual depth and allows homeowners to incorporate both the warmth of wood and the crispness of painted cabinetry." },
      { type: "h2", text: "Maximizing Storage with Thoughtful Interior Features" },
      { type: "p", text: "Homeowners are increasingly focused on what's inside the cabinet, not just the door style. Pull-out shelves, drawer inserts, deep drawer base cabinets, and organization systems are being requested in virtually every kitchen project we build. The goal is a kitchen that works as beautifully as it looks." },
      { type: "cta", text: "Interested in bringing any of these trends into your home? A consultation is the best way to explore what would work for your space." },
    ]
  },
  "plywood-vs-particle-board": {
    title: "Plywood vs. Particle Board: Why Cabinet Material Matters More Than You Think",
    cat: "Materials", date: "October 2024", readTime: "7 min read",
    img: IMG.grain,
    content: [
      { type: "h2", text: "The Hidden Difference in Your Cabinet Box" },
      { type: "p", text: "When most homeowners evaluate cabinetry, they focus on door style, finish color, and hardware. Reasonable choices—but they're missing the most important variable: what the cabinet box itself is made of." },
      { type: "h2", text: "What Is Particle Board?" },
      { type: "p", text: "Particle board is made from compressed wood chips, sawdust, and adhesive. It's cheap, it's consistent, and it's used in the vast majority of stock and semi-custom cabinetry because it reduces manufacturing costs. The problem is its performance over time: particle board degrades under moisture, doesn't hold screws well after initial assembly, and can sag under sustained load." },
      { type: "h2", text: "What Is Plywood?" },
      { type: "p", text: "Cabinet-grade plywood is made from thin layers of wood veneer bonded together with alternating grain directions. This cross-grain construction gives plywood exceptional strength, screw-holding capacity, and resistance to warping and moisture damage. Plywood cabinets outlast particle board cabinets—there's no debate among serious craftsmen." },
      { type: "h2", text: "The Southern Accent Standard" },
      { type: "p", text: "We've used all-plywood box construction since the beginning of Southern Accent Cabinetry. It costs more than particle board, but it's the right material for a product that's supposed to last for decades. Every cabinet we build uses plywood interiors and solid wood face frames—no exceptions." },
      { type: "cta", text: "Ready to see the difference quality materials make? Request a consultation and we'll show you exactly how our cabinets are built." },
    ]
  },
  "kitchen-remodeling-guide": {
    title: "The Complete Kitchen Remodeling Guide for North Augusta Homeowners",
    cat: "Kitchen", date: "September 2024", readTime: "10 min read",
    img: IMG.hero,
    content: [
      { type: "h2", text: "Start with Function, Then Design" },
      { type: "p", text: "The most common mistake homeowners make in kitchen planning is starting with a visual inspiration and working backwards. The better approach is to start with how you use your kitchen—cooking style, storage frustrations, workflow bottlenecks—and let the design solve those problems first. Beautiful cabinets are the result of smart planning." },
      { type: "h2", text: "Understand What 'Custom' Actually Means" },
      { type: "p", text: "Custom cabinetry means every cabinet is built to your space's exact dimensions—not pulled from a catalog of standard sizes. This means no filler strips to cover gaps, no compromise on storage depth, and no cabinets that almost fit. It also means you choose the wood species, finish, door style, and interior configuration." },
      { type: "h2", text: "Budget Realistically for Quality Materials" },
      { type: "p", text: "Custom all-wood cabinetry requires a higher upfront investment than stock cabinets. The difference is durability, performance, and appearance over time. Plywood interiors won't sag or degrade like particle board. Solid wood faces won't chip or delaminate. Professional lacquer finishes hold up to daily use for decades." },
      { type: "h2", text: "Plan the Consultation Before Anything Else" },
      { type: "p", text: "Before you commit to any design or budget, schedule a consultation with us. It's free, there's no obligation, and it gives you accurate information about what's possible in your kitchen. Many homeowners discover that custom cabinetry is within their budget and timeline expectations once they have a direct conversation with our team." },
      { type: "cta", text: "Start your kitchen planning with a free consultation. We'll walk through your kitchen, understand your goals, and give you honest guidance." },
    ]
  },
  "built-in-storage-ideas": {
    title: "10 Built-In Storage Ideas That Will Transform Your Home",
    cat: "Built-Ins", date: "August 2024", readTime: "6 min read",
    img: IMG.builtIn,
    content: [
      { type: "h2", text: "1. Floor-to-Ceiling Living Room Built-In" },
      { type: "p", text: "The most impactful built-in for most homes: a floor-to-ceiling wall unit that combines open shelving, closed lower cabinets, and an integrated entertainment center. It makes a dramatic architectural statement and eliminates the clutter of freestanding furniture." },
      { type: "h2", text: "2. Custom Mudroom Lockers" },
      { type: "p", text: "A mudroom with individual family lockers—each with a hook rail, upper storage, bench seating, and shoe compartments below—transforms the point of entry from a chaos zone into an organized, functional space." },
      { type: "h2", text: "3. Home Office Built-In Desk & Bookcase Wall" },
      { type: "p", text: "A spare bedroom with a built-in desk, overhead cabinets, and flanking bookcase walls becomes a proper, functional home office that feels permanent rather than improvised." },
      { type: "h2", text: "4. Library Wall with Rolling Ladder" },
      { type: "p", text: "Floor-to-ceiling bookshelves with an integrated rolling ladder track make a stunning statement in living rooms, home offices, or dedicated library rooms. Custom height, adjustable shelving, and matching base cabinets complete the look." },
      { type: "h2", text: "5. Master Closet System" },
      { type: "p", text: "A custom closet system with dedicated hanging zones, drawer banks, shoe shelving, and accessories storage organized specifically around your wardrobe makes getting dressed dramatically more pleasant." },
      { type: "cta", text: "Any of these ideas could work in your home. Let's talk about your space in a free consultation." },
    ]
  },
  "cabinet-maintenance-guide": {
    title: "How to Care for Your Custom Cabinets: A Maintenance Guide",
    cat: "Maintenance", date: "July 2024", readTime: "5 min read",
    img: IMG.workshop,
    content: [
      { type: "h2", text: "Daily Cleaning" },
      { type: "p", text: "For lacquer-finished cabinets, a soft, slightly damp microfiber cloth is all you need for daily cleaning. Wipe surfaces dry immediately after. Avoid abrasive cleaners, scrubbing pads, and anything with harsh chemicals—they can dull the finish over time." },
      { type: "h2", text: "Handling Moisture" },
      { type: "p", text: "The biggest enemy of any cabinetry is sustained moisture exposure. Wipe up spills immediately. Use exhaust fans in kitchens and bathrooms. Ensure dishwasher seals are intact. Plywood interiors handle moisture far better than particle board, but no wood product benefits from prolonged moisture exposure." },
      { type: "h2", text: "Hardware Adjustment" },
      { type: "p", text: "Soft-close hinges and drawer slides may need minor adjustment as wood acclimates to seasonal humidity changes. Most adjustments involve a simple screwdriver turn on the hinge mechanism. If you're unsure, call us—we're happy to walk you through it." },
      { type: "h2", text: "Touch-Up for Painted Cabinets" },
      { type: "p", text: "For minor chips or scratches on painted cabinetry, touch-up paint matched to your cabinet finish can address most visible damage. For significant damage to a door or drawer front, replacement is often the cleanest option—we keep records of your finish specifications." },
      { type: "cta", text: "Have questions about caring for your specific cabinetry finish? Give us a call or send us a message." },
    ]
  },
  "bathroom-vanity-guide": {
    title: "Choosing the Right Custom Bathroom Vanity: A Homeowner's Guide",
    cat: "Bathroom", date: "June 2024", readTime: "6 min read",
    img: IMG.bath,
    content: [
      { type: "h2", text: "Start with Your Bathroom's Dimensions" },
      { type: "p", text: "The first step in vanity selection is understanding your bathroom's exact dimensions—including ceiling height, plumbing rough-in locations, door swing clearance, and any architectural features like windows or niches. Custom cabinetry works with these constraints rather than against them." },
      { type: "h2", text: "Single vs. Double Sink" },
      { type: "p", text: "If your bathroom can accommodate a double-sink vanity, it's almost always worth building. The storage real estate of a wider vanity, plus the convenience of two sinks, adds significant daily function to a master bathroom." },
      { type: "h2", text: "Style: Match or Complement Your Bathroom's Architecture" },
      { type: "p", text: "Your vanity doesn't have to match your bathroom tile exactly—but it should complement the overall style of the space. Traditional homes with detailed trim profiles look best with raised panel or beaded inset doors. Contemporary bathrooms pair well with shaker or flat-front profiles." },
      { type: "h2", text: "Think Beyond the Vanity" },
      { type: "p", text: "Custom bathroom cabinetry doesn't end at the vanity. A matching linen tower, medicine cabinet surround, or above-toilet storage cabinet in the same wood species and finish creates a cohesive, built-in feel that stock furniture simply can't achieve." },
      { type: "cta", text: "Ready to explore custom vanity options for your bathroom? A consultation is free and gives you specific design direction for your space." },
    ]
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = articles[slug];

  if (!post) {
    return (
      <PageLayout title="Article Not Found">
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-5 pt-32">
          <p className="font-display text-4xl text-primary">Article not found</p>
          <Link to="/blog" className="text-[#8C6A43] hover:underline">← Back to the blog</Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={post.title} description={post.content.find(c => c.type === "p")?.text?.slice(0, 160)}>
      <div className="relative h-[55vh] min-h-[380px] overflow-hidden bg-primary">
        <img src={post.img} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-3xl flex-col justify-end px-5 pb-14 lg:px-8">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#C8A977]">{post.cat}</p>
          <h1 className="font-display text-4xl leading-tight text-white md:text-6xl">{post.title}</h1>
          <p className="mt-4 flex items-center gap-4 text-sm text-white/60">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{post.date}</span>
            <span>{post.readTime}</span>
          </p>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-12">
        <Link to="/blog" className="mb-10 inline-flex items-center gap-2 text-sm text-[#8C6A43] hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to the blog
        </Link>
        {post.content.map((block, i) => {
          if (block.type === "h2") return <h2 key={i} className="mt-10 mb-4 font-display text-3xl text-primary md:text-4xl">{block.text}</h2>;
          if (block.type === "p") return <p key={i} className="mt-4 text-lg leading-9 text-muted-foreground">{block.text}</p>;
          if (block.type === "cta") return (
            <div key={i} className="my-12 border-l-4 border-[#C8A977] bg-muted p-7">
              <p className="text-lg text-foreground">{block.text}</p>
              <Link to="/consultation" className="mt-5 inline-block bg-primary px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:bg-[#C8A977] hover:text-[#2D241E] transition-colors">
                Request a Consultation
              </Link>
            </div>
          );
          return null;
        })}
        <div className="mt-14">
          <InlineTestimonial quote="Their knowledge of cabinetry materials is what convinced us. They didn't just sell us cabinets—they educated us on why quality materials matter." name="Client, Evans, GA" />
        </div>
      </article>

      <ConsultationCTA />
    </PageLayout>
  );
}
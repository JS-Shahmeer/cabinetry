import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import TrustBar from "@/components/shared/TrustBar";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import InlineTestimonial from "@/components/shared/InlineTestimonial";
import HardwareCarouselSection from "@/components/shared/HardwareCarouselSection";
import walkInPantry1 from "@/assets/images/walkinpantry1.png";
import storage5 from "@/assets/images/storage5.webp";
import pantryOrganizers from "@/assets/images/new-images/Walk-In-Pantry_Pantry-Organizers.jpg";

const pantryBenefits = [
    "Built to ceiling height for full storage",
    "Any door style and finish",
    "Soft close hinges and drawer slides",
    "Pull out baskets and drawer systems",
    "Dedicated zones for appliances and prep",
    "Matching cabinetry to your kitchen",
];

const solutions = [
    {
        title: "Full Height Shelving Systems",
        desc: "Shelving built to the ceiling instead of stopping at a standard cabinet height, so the top of the room isn't wasted space.",
        bullets: [
            "Adjustable shelf spacing throughout",
            "Rolling ladder access for tall pantries",
            "Deep shelving for bulk and small appliance storage",
            "Labeled bin zones for grouped items",
            "Lighting built into upper shelving",
        ],
    },
    {
        title: "Butler's Pantries",
        desc: "A transitional space between kitchen and dining room, built with cabinetry that handles serving, storage, and overflow prep all at once.",
        bullets: [
            "Counter space for staging and serving",
            "Upper and lower cabinet storage",
            "Wine and stemware storage",
            "Matching cabinetry to your kitchen",
            "Pass through or closed layout options",
        ],
    },
    {
        title: "Appliance Garages & Coffee Bars",
        desc: "A dedicated spot for small appliances and coffee gear so countertops stay clear without appliances disappearing into a cabinet you forget about.",
        bullets: [
            "Concealed appliance garage cabinets",
            "Outlet integration behind closed doors",
            "Open shelving for daily use items",
            "Pull out trays for heavy appliances",
            "Matching finish to surrounding cabinetry",
        ],
    },
    {
        title: "Baking & Prep Centers",
        desc: "A dedicated zone built around how you actually bake, with storage sized for the tools and ingredients you use most.",
        bullets: [
            "Pull out flour and sugar bins",
            "Vertical dividers for trays and cutting boards",
            "Drawer storage for mixers and small tools",
            "Dedicated counter space for rolling and mixing",
            "Spice and extract organization",
        ],
    },
    {
        title: "Bulk & Canning Storage",
        desc: "Deep, sturdy shelving built for canned goods, bulk purchases, and home canning, designed to hold weight without sagging over time.",
        bullets: [
            "Reinforced shelving for heavy storage",
            "Forward flow canned goods organizers",
            "Wire basket drawers for produce",
            "Adjustable shelf heights for jars and cans",
            "Ventilated storage for root vegetables",
        ],
    },
];

const spaceOptimization = [
    "Adjustable full height shelving",
    "Pull out baskets for easy visibility",
    "Dedicated appliance and prep zones",
    "Deep storage for bulk goods",
    "Tray and board divider storage",
    "Pantry cabinetry matched to your kitchen",
];

const faqs = [
    ["How much space do I need for a walk in pantry?", "There isn't a strict minimum, since we design around whatever footprint you have. Even a smaller walk in closet can be reworked into an efficient pantry with the right shelving and layout, though larger rooms obviously allow for more elaborate features like a prep counter."],
    ["Can you match pantry cabinetry to my kitchen cabinets?", "Yes, this is one of the most common requests we get. We can match wood species, door style, and finish so the pantry feels like a continuation of the kitchen rather than a separate space."],
    ["Do you install electrical outlets or lighting inside the pantry?", "We can coordinate lighting and outlet placement as part of the design, though the actual electrical work is typically handled by a licensed electrician. We'll work around whatever electrical plan you already have or help you plan one before cabinetry goes in."],
    ["How long does a pantry project take?", "Most pantry projects take between four and seven weeks from final design approval to installation, depending on the size of the room and complexity of the shelving system."],
];

const featuredHardware = [
    {
        title: "Pantry Pull-Outs",
        description: "High-capacity pull-out systems for pantry zones and easy-access daily storage.",
        image: pantryOrganizers,
        href: "https://www.hardwareresources.com/organizers",
    },
    {
        title: "Roll-Out Shelves",
        description: "Smooth roll-out shelves for deep pantry cabinets where visibility matters.",
        image: pantryOrganizers,
        href: "https://www.hardwareresources.com/organizers",
    },
    {
        title: "Wire Basket Systems",
        description: "Ventilated wire basket options for produce, bulk items, and utility categories.",
        image: pantryOrganizers,
        href: "https://www.hardwareresources.com/organizers",
    },
    {
        title: "Drawer Organization",
        description: "Dedicated organizer layouts for pantry drawers and prep-related storage tools.",
        image: pantryOrganizers,
        href: "https://www.hardwareresources.com/organizers",
    },
    {
        title: "Pull-Out Storage",
        description: "Base and tall pull-out formats for easy reach and cleaner pantry workflow.",
        image: pantryOrganizers,
        href: "https://www.hardwareresources.com/organizers",
    },
    {
        title: "Lazy Susan",
        description: "Rotating systems that recover corner pantry storage and improve access.",
        image: pantryOrganizers,
        href: "https://www.hardwareresources.com/organizers",
    },
    {
        title: "Storage Baskets",
        description: "Basket-based organization for grouped goods and category-based pantry zones.",
        image: pantryOrganizers,
        href: "https://www.hardwareresources.com/organizers",
    },
    {
        title: "Pantry Accessories",
        description: "Accessory systems that align with Hardware Resources pantry organizer categories.",
        image: pantryOrganizers,
        href: "https://www.hardwareresources.com/organizers",
    },
];

function FAQ({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-border">
            <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-6 text-left">
                <span className="font-display text-xl text-primary">{q}</span>
                {open ? <ChevronUp className="h-5 w-5 text-[#8C6A43]" /> : <ChevronDown className="h-5 w-5 text-[#8C6A43]" />}
            </button>
            {open && <p className="pb-6 leading-8 text-muted-foreground">{a}</p>}
        </div>
    );
}

export default function WalkInPantryCabinets() {
    return (
        <PageLayout title="Walk In Pantry Cabinets" description="Custom walk in pantry cabinets built to your room dimensions in North Augusta, SC and Augusta, GA. Designed for efficient storage, easy access, and a seamless match with your kitchen cabinetry.">
            <PageHero
                eyebrow="Walk In Pantry Cabinets · North Augusta, SC"
                title="Walk In Pantry Cabinets That Work as Hard as You Do"
                subtitle="Custom pantry cabinetry designed around how your family cooks, shops, and stores food, built with the same all wood craftsmanship as the rest of your home."
                image={walkInPantry1}
            />
            <TrustBar />

            <section className="px-5 py-24 lg:px-8 lg:py-32">
                <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
                    <div>
                        <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Why a custom pantry?</p>
                        <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">A Pantry That's Organized Instead of Overwhelming</h2>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">Most walk in pantries start out with a few wire shelves and end up as a place where things get pushed to the back and forgotten. Custom pantry cabinetry uses the full height and depth of the room on purpose, so every shelf is doing something useful instead of collecting clutter.</p>
                        <p className="mt-4 text-lg leading-8 text-muted-foreground">Whether you're finishing a pantry in a new build or reworking one that never quite worked, Southern Accent Cabinetry designs and builds pantry systems that stay organized long after the excitement of a fresh remodel wears off.</p>
                        <div className="mt-8 space-y-3">
                            {pantryBenefits.map((item) => (
                                <div key={item} className="flex items-center gap-3"><Check className="h-4 w-4 shrink-0 text-[#8C6A43]" /><span>{item}</span></div>
                            ))}
                        </div>
                    </div>
                    <img src={storage5} alt="Custom walk in pantry cabinetry" className="h-[500px] w-full object-cover" />
                </div>
            </section>

            <div className="bg-white px-5 py-14 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <InlineTestimonial quote="We finally have a pantry that looks as good as it works. Everything has a spot and we actually know what we have." name="Pantry Client, Augusta, GA" />
                </div>
            </div>

            {/* Pantry styles */}
            <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-14 max-w-3xl">
                        <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Pantry solutions</p>
                        <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Every Pantry Has More Potential Than You Think</h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {solutions.map((item) => (
                            <div key={item.title} className="border-l-4 border-[#C8A977] bg-background p-7">
                                <h3 className="font-display text-3xl text-primary">{item.title}</h3>
                                <p className="mt-3 leading-8 text-muted-foreground">{item.desc}</p>
                                <div className="mt-6 space-y-2">
                                    {item.bullets.map((bullet) => (
                                        <div key={bullet} className="flex items-center gap-3"><Check className="h-4 w-4 shrink-0 text-[#8C6A43]" /><span>{bullet}</span></div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Space optimization */}
            <section className="bg-primary px-5 py-24 text-white lg:px-8 lg:py-32">
                <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
                    <div>
                        <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#C8A977]">Space optimization</p>
                        <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">A Pantry Layout Built Around How You Actually Use It</h2>
                        <p className="mt-5 text-lg leading-8 text-white/72">A pantry only works when what you use most is easy to see and easy to reach. Custom cabinetry gives everything a place, from everyday snacks and dry goods to heavy small appliances and seasonal storage.</p>
                        <div className="mt-8 space-y-3">
                            {spaceOptimization.map((item) => (
                                <div key={item} className="flex items-center gap-3"><Check className="h-4 w-4 shrink-0 text-[#C8A977]" /><span className="text-white/82">{item}</span></div>
                            ))}
                        </div>
                    </div>
                    <img src={walkInPantry1} alt="Custom pantry storage layout" className="h-[460px] w-full object-cover" />
                </div>
            </section>

            {/* Gallery */}
            <section className="px-5 py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 flex items-end justify-between">
                        <div>
                            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Project gallery</p>
                            <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">Walk In Pantry Projects</h2>
                        </div>
                        <Link to="/gallery" className="hidden text-sm text-[#8C6A43] hover:text-primary md:block">View the full project gallery →</Link>
                    </div>
                    <div className="grid gap-5 md:grid-cols-3">
                        {[walkInPantry1, storage5, walkInPantry1].map((img, i) => (
                            <div key={i} className="group relative overflow-hidden">
                                <img src={img} alt={`Walk in pantry project ${i + 1}`} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center md:hidden">
                        <Link to="/gallery" className="text-sm text-[#8C6A43]">View the full project gallery →</Link>
                    </div>
                </div>
            </section>

            <HardwareCarouselSection
                eyebrow="Featured products"
                title="Pantry Organization Hardware"
                intro="This page focuses almost entirely on organization products aligned with Hardware Resources pantry organizers and storage systems."
                products={featuredHardware}
            />

            {/* FAQ */}
            <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-4xl">
                    <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#8C6A43]">Common questions</p>
                    <h2 className="mb-12 font-display text-4xl leading-tight text-primary md:text-5xl">Walk In Pantry Cabinet Questions</h2>
                    <div className="border-t border-border">
                        {faqs.map(([q, a]) => <FAQ key={q} q={q} a={a} />)}
                    </div>
                </div>
            </section>

            <ConsultationCTA headline="Ready to Design Your Custom Walk In Pantry?" sub="Whether you're starting from an empty room or reworking a pantry that never quite worked, we'll design a layout built around how you actually cook and shop." />
        </PageLayout>
    );
}

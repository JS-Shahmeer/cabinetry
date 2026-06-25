
export default function SectionHeader({ eyebrow, title, text, centered = false, inverse = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`mb-4 text-xs uppercase tracking-[0.32em] ${inverse ? "text-[#C8A977]" : "text-[#8C6A43]"}`}>{eyebrow}</p>
      <h2 className={`font-display text-4xl leading-tight tracking-tight md:text-6xl ${inverse ? "text-white" : "text-primary"}`}>{title}</h2>
      {text && <p className={`mt-5 text-lg leading-8 ${inverse ? "text-white/72" : "text-muted-foreground"}`}>{text}</p>}
    </div>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import atmosphere from "@/assets/journal-atmosphere.jpg";
import architecture from "@/assets/journal-architecture.jpg";
import materials from "@/assets/journal-materials.jpg";
import atelier from "@/assets/atelier.jpg";
import ingredients from "@/assets/ingredients.jpg";

const entries = [
  {
    image: atmosphere,
    eyebrow: "Essay · 04.2026",
    title: "On the smell of weather, and why we keep returning to it.",
    excerpt: "Notes on petrichor, sea fog, and the difficulty of bottling something that is, by definition, in motion.",
    span: "lg",
  },
  {
    image: architecture,
    eyebrow: "Field note · 02.2026",
    title: "Rooms remember us by their air.",
    excerpt: "On the architecture of scent: how plaster, stone and worn wood hold the trace of those who lived among them.",
    span: "sm",
  },
  {
    image: materials,
    eyebrow: "Material · 11.2025",
    title: "Linen, beeswax, paper: the quiet materials.",
    excerpt: "A short list of things that smell of almost nothing — and the way that nothing carries everything else.",
    span: "sm",
  },
  {
    image: atelier,
    eyebrow: "Letter · 09.2025",
    title: "A letter from the atelier, written at the end of summer.",
    excerpt: "On the slowness of distillation, the patience of growers, and the year's first batch of vetiver.",
    span: "lg",
  },
  {
    image: ingredients,
    eyebrow: "Conversation · 06.2025",
    title: "In conversation with Émile Vidal, perfumer and forager.",
    excerpt: "On wild iris in the foothills of the Alps, and what it means to know a material across a decade.",
    span: "sm",
  },
];

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Noct Atelier" },
      { name: "description", content: "Essays and field notes from the Noct Atelier — on scent, memory, architecture and material." },
      { property: "og:title", content: "Journal — Noct Atelier" },
      { property: "og:description", content: "Essays and field notes on scent, memory, and material." },
      { property: "og:url", content: "/journal" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: JournalPage,
});

function JournalPage() {
  return (
    <SiteLayout>
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 pt-40 md:pt-56 pb-20 md:pb-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <div className="eyebrow">— Journal</div>
          </div>
          <div className="col-span-12 md:col-span-9 md:col-start-3">
            <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.98] tracking-[-0.015em] fade-up">
              A notebook,<br />kept in <em className="italic">public.</em>
            </h1>
            <p className="mt-10 max-w-xl text-muted-foreground leading-relaxed">
              Essays, conversations and field notes on the long subject of scent.
              We write infrequently and at length.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-12 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-32">
          {entries.map((e, i) => (
            <article
              key={i}
              className={`group cursor-pointer ${e.span === "lg" ? "md:col-span-2" : ""} ${i % 3 === 1 ? "md:mt-24" : ""}`}
            >
              <div className={`overflow-hidden bg-muted ${e.span === "lg" ? "aspect-[16/9]" : "aspect-[4/5]"}`}>
                <img
                  src={e.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className={`pt-8 ${e.span === "lg" ? "max-w-3xl" : ""}`}>
                <div className="eyebrow mb-4">{e.eyebrow}</div>
                <h2 className={`font-display leading-[1.1] group-hover:italic transition-all duration-500 ${
                  e.span === "lg" ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
                }`}>
                  {e.title}
                </h2>
                <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
                  {e.excerpt}
                </p>
                <div className="mt-6 eyebrow border-b border-foreground/30 inline-block pb-1">
                  Read essay
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

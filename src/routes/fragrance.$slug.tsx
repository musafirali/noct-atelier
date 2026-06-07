import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { fragrances, getFragrance, getRelated } from "@/data/fragrances";

export const Route = createFileRoute("/fragrance/$slug")({
  loader: ({ params }) => {
    const fragrance = getFragrance(params.slug);
    if (!fragrance) throw notFound();
    return { fragrance };
  },
  head: ({ loaderData }) => {
    const f = loaderData?.fragrance;
    if (!f) return { meta: [{ title: "Fragrance — Noct Atelier" }] };
    return {
      meta: [
        { title: `${f.name} — Noct Atelier` },
        { name: "description", content: f.descriptor },
        { property: "og:title", content: `${f.name} — Noct Atelier` },
        { property: "og:description", content: f.descriptor },
        { property: "og:type", content: "product" },
        { property: "og:image", content: f.image },
        { property: "og:url", content: `/fragrance/${f.slug}` },
        { name: "twitter:image", content: f.image },
      ],
      links: [{ rel: "canonical", href: `/fragrance/${f.slug}` }],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-56 pb-40 text-center">
        <div className="eyebrow mb-6">— Not found</div>
        <h1 className="font-display text-5xl md:text-7xl">This fragrance is not in the archive.</h1>
        <Link to="/collection" className="mt-12 inline-block eyebrow border-b border-foreground/40 pb-1">
          Return to the collection
        </Link>
      </div>
    </SiteLayout>
  ),
  component: FragrancePage,
});

function FragrancePage() {
  const { fragrance: f } = Route.useLoaderData() as { fragrance: import("@/data/fragrances").Fragrance };

  const related = getRelated(f.slug, 2);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="grid grid-cols-12 gap-8 items-stretch">
          <div className="col-span-12 md:col-span-7">
            <div className="aspect-[4/5] bg-muted overflow-hidden">
              <img
                src={f.image}
                alt={`${f.name} fragrance bottle`}
                width={1024}
                height={1280}
                className="h-full w-full object-cover image-reveal"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col justify-between py-4">
            <div>
              <div className="eyebrow mb-4">Edition {f.number} · {f.family}</div>
              <h1 className="font-display text-[clamp(3rem,6vw,6rem)] leading-[0.98] tracking-[-0.015em]">
                {f.name}
              </h1>
              <p className="mt-8 text-base md:text-lg leading-relaxed text-foreground/85">
                {f.descriptor}
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-xs tracking-widest text-muted-foreground">EAU DE PARFUM — 50ML</span>
                <span className="font-display text-2xl">₹17,000</span>
              </div>
              <button className="w-full bg-foreground text-background py-5 eyebrow !text-background hover:bg-foreground/90 transition-colors">
                Add to order
              </button>
              <p className="mt-4 text-xs text-muted-foreground text-center">
                Numbered by hand. Ships within five working days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NARRATIVE */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <div className="eyebrow">— Inspiration</div>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-4">
            <p className="font-display text-2xl md:text-4xl italic font-light leading-[1.25] text-foreground/90 mb-12">
              "{f.inspiration}"
            </p>
            <div className="space-y-6 max-w-xl">
              {f.narrative.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOTES */}
      <section className="bg-foreground text-background">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-48">
          <div className="eyebrow !text-background/60 mb-16">— Composition</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
            {[
              { label: "Top", notes: f.notes.top, desc: "The opening — first ten minutes on the skin." },
              { label: "Heart", notes: f.notes.heart, desc: "The body of the fragrance — the second hour." },
              { label: "Base", notes: f.notes.base, desc: "The dry-down — what remains by evening." },
            ].map((g) => (
              <div key={g.label}>
                <div className="eyebrow !text-background/50 mb-6">{g.label} Notes</div>
                <ul className="space-y-4 mb-8">
                  {g.notes.map((n) => (
                    <li key={n} className="font-display text-2xl md:text-3xl text-background">{n}</li>
                  ))}
                </ul>
                <p className="text-sm text-background/60 leading-relaxed border-t border-background/15 pt-6">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SENSORY */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-48">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow mb-6">— Sensory</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1]">How it reads on the skin.</h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <div className="flex flex-wrap gap-x-10 gap-y-6">
              {f.sensory.map((s) => (
                <span key={s} className="font-display text-3xl md:text-5xl italic text-foreground/70">
                  {s}.
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="border-t border-border">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-display text-3xl md:text-4xl">In the same register</h2>
            <Link to="/collection" className="eyebrow border-b border-foreground/40 pb-1">All fragrances</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/fragrance/$slug"
                params={{ slug: r.slug }}
                className="group block"
              >
                <div className="aspect-[5/4] overflow-hidden bg-muted">
                  <img
                    src={r.image}
                    alt={r.name}
                    loading="lazy"
                    width={1024}
                    height={820}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="pt-6 flex items-baseline justify-between">
                  <h3 className="font-display text-2xl md:text-3xl">{r.name}</h3>
                  <div className="eyebrow">{r.family}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

// Ensure all slugs render (for static reference)
export const _slugs = fragrances.map((f) => f.slug);

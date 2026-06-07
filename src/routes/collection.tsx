import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { fragrances } from "@/data/fragrances";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "The Collection — Noct Atelier" },
      { name: "description", content: "Six numbered fragrances composed in small batches at the Noct Atelier in Mumbai." },
      { property: "og:title", content: "The Collection — Noct Atelier" },
      { property: "og:description", content: "Six numbered fragrances. Composed in small batches." },
      { property: "og:url", content: "/collection" },
    ],
    links: [{ rel: "canonical", href: "/collection" }],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  return (
    <SiteLayout>
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 pt-40 md:pt-56 pb-20 md:pb-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <div className="eyebrow">— Volume I</div>
          </div>
          <div className="col-span-12 md:col-span-9 md:col-start-3">
            <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.98] tracking-[-0.015em] fade-up">
              The Collection
            </h1>
            <p className="mt-10 max-w-xl text-muted-foreground leading-relaxed fade-up" style={{ animationDelay: "0.2s" }}>
              Six numbered fragrances released to date, each composed around a
              single sensory idea. Presented here in the order they entered the
              archive.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-12 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-40">
          {fragrances.map((f, i) => (
            <Link
              key={f.slug}
              to="/fragrance/$slug"
              params={{ slug: f.slug }}
              className={`group block ${i % 2 === 1 ? "md:mt-32" : ""}`}
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={f.image}
                  alt={`${f.name} fragrance`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="pt-8 flex items-start justify-between gap-8">
                <div>
                  <div className="eyebrow mb-3">{f.number} · {f.family}</div>
                  <h2 className="font-display text-3xl md:text-5xl leading-[1.05] group-hover:italic transition-all duration-500">
                    {f.name}
                  </h2>
                  <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
                    {f.descriptor}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs tracking-widest text-muted-foreground">50ml</div>
                  <div className="mt-1 font-display text-xl">₹17,000</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

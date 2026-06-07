import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { fragrances } from "@/data/fragrances";
import heroImg from "@/assets/hero.jpg";
import atelierImg from "@/assets/atelier.jpg";
import ingredientsImg from "@/assets/ingredients.jpg";
import journalAtmosphere from "@/assets/journal-atmosphere.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Noct Atelier — Independent Fragrance House" },
      {
        name: "description",
        content:
          "Small-batch fragrances inspired by atmosphere, memory and material. Composed in Mumbai.",
      },
      { property: "og:title", content: "Noct Atelier" },
      {
        property: "og:description",
        content: "Small-batch fragrances inspired by atmosphere, memory and material.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = fragrances.slice(0, 3);
  const signatures = fragrances.slice(0, 4);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[100svh] w-full overflow-hidden bg-foreground text-background">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-90 image-reveal"
          width={1600}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/10 to-foreground/40" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 pt-40 md:pt-48 pb-16 min-h-[100svh] flex flex-col justify-between">
          <div className="max-w-3xl fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="eyebrow !text-background/70 mb-8">Volume I — Winter Releases</div>
            <h1 className="font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[1.02] text-background tracking-[-0.015em]">
              Fragrances composed<br />
              <em className="italic font-light text-background/90">from atmosphere.</em>
            </h1>
          </div>

          <div className="grid grid-cols-12 gap-8 items-end fade-up" style={{ animationDelay: "0.6s" }}>
            <p className="col-span-12 md:col-span-4 md:col-start-8 text-sm leading-relaxed text-background/75">
              Six perfumes drawn from weather, material and memory. Each composed
              by hand in small numbered editions.
            </p>
            <div className="col-span-12 md:col-span-4 md:col-start-8 flex items-center gap-8">
              <Link to="/collection" className="eyebrow !text-background border-b border-background/60 pb-1 hover:border-background transition-colors">
                View the collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-48">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">— Introduction</div>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-4">
            <p className="font-display text-3xl md:text-5xl leading-[1.15] text-foreground">
              Noct Atelier composes perfumes the way a writer keeps a notebook —
              attentively, slowly, and without the need to convince anyone.
            </p>
            <p className="mt-10 max-w-xl text-muted-foreground leading-relaxed">
              Each fragrance is built around a single quiet idea: the cold of an
              open window, the warmth of resin in the hand, the held breath
              before a storm arrives. We work in small batches and number every
              edition by hand.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTION */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 pb-32 md:pb-48">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <div>
            <div className="eyebrow mb-6">— Featured</div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-2xl">
              Three studies for the colder months
            </h2>
          </div>
          <Link to="/collection" className="hidden md:inline-block eyebrow border-b border-foreground/40 pb-1">
            All Six
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {featured.map((f, i) => (
            <Link
              key={f.slug}
              to="/fragrance/$slug"
              params={{ slug: f.slug }}
              className="group block"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={f.image}
                  alt={`${f.name} fragrance bottle`}
                  loading={i === 0 ? "eager" : "lazy"}
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="pt-6 flex items-baseline justify-between">
                <div>
                  <div className="eyebrow mb-2">{f.number} · {f.family}</div>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground">{f.name}</h3>
                </div>
                <span className="text-xs text-muted-foreground tracking-widest">50ml</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-sm">
                {f.descriptor}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-foreground text-background">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-48 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-5">
            <img
              src={atelierImg}
              alt="The Noct Atelier perfumery workbench"
              loading="lazy"
              width={1600}
              height={1100}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div className="eyebrow !text-background/60 mb-6">— Philosophy</div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-background">
              We make perfume the way it was once made — by a few hands, slowly.
            </h2>
            <p className="mt-10 text-background/70 leading-relaxed max-w-lg">
              No marketing fragrance, no seasonal release schedule. Each
              composition begins as a written brief and ends, sometimes years
              later, in a small numbered run of glass bottles.
            </p>
            <Link to="/philosophy" className="mt-10 inline-block eyebrow !text-background border-b border-background/60 pb-1">
              Read the philosophy
            </Link>
          </div>
        </div>
      </section>

      {/* INGREDIENTS / MATERIALS */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-48">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5 order-2 md:order-1">
            <div className="eyebrow mb-6">— Material</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1]">
              We source as we compose — slowly, and only when we know why.
            </h2>
            <div className="mt-12 space-y-8">
              {[
                { name: "Iris Pallida", origin: "Kashmir, India", note: "Aged three years before distillation." },
                { name: "Mysore Sandalwood", origin: "Karnataka, India", note: "Sustainably harvested from cooperative forests." },
                { name: "Nilgiri Vetiver", origin: "Tamil Nadu, India", note: "Single-estate roots, hand-cleaned." },
              ].map((m) => (
                <div key={m.name} className="grid grid-cols-12 gap-4 pb-6 border-b border-border">
                  <div className="col-span-5 font-display text-xl">{m.name}</div>
                  <div className="col-span-4 text-sm text-muted-foreground">{m.origin}</div>
                  <div className="col-span-3 text-sm text-muted-foreground text-right">{m.note}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 order-1 md:order-2">
            <img
              src={ingredientsImg}
              alt="Raw fragrance materials"
              loading="lazy"
              width={1400}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* SIGNATURE INDEX */}
      <section className="border-y border-border">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="eyebrow mb-10">— Signature Scents</div>
          <div className="divide-y divide-border">
            {signatures.map((f) => (
              <Link
                key={f.slug}
                to="/fragrance/$slug"
                params={{ slug: f.slug }}
                className="grid grid-cols-12 gap-4 py-8 md:py-10 items-baseline group"
              >
                <div className="col-span-2 md:col-span-1 eyebrow">{f.number}</div>
                <div className="col-span-10 md:col-span-5 font-display text-3xl md:text-5xl group-hover:italic transition-all duration-500">
                  {f.name}
                </div>
                <div className="col-span-6 md:col-span-3 text-sm text-muted-foreground">{f.family}</div>
                <div className="hidden md:block md:col-span-3 text-sm text-muted-foreground text-right pr-2">
                  {f.sensory.slice(0, 3).join(" · ")}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNAL PREVIEW */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-48">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="eyebrow mb-6">— Journal</div>
            <h2 className="font-display text-4xl md:text-5xl">From the notebook</h2>
          </div>
          <Link to="/journal" className="eyebrow border-b border-foreground/40 pb-1">All entries</Link>
        </div>
        <Link to="/journal" className="group block grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-7">
            <img
              src={journalAtmosphere}
              alt="Coastal cliffs in fog"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <div className="eyebrow mb-4">Essay · 04.2026</div>
            <h3 className="font-display text-3xl md:text-4xl leading-tight group-hover:italic transition-all duration-500">
              On the smell of weather, and why we keep returning to it.
            </h3>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              Notes on petrichor, sea fog, and the difficulty of bottling
              something that is, by definition, in motion.
            </p>
          </div>
        </Link>
      </section>

      {/* FINAL CTA */}
      <section className="bg-foreground text-background">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-48 text-center">
          <div className="eyebrow !text-background/60 mb-8">— By appointment</div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] max-w-4xl mx-auto">
            <em className="italic font-light">Visit</em> the atelier.
          </h2>
          <p className="mt-10 max-w-md mx-auto text-background/70 leading-relaxed">
            Private consultations are offered in our Mumbai studio on
            Wednesdays and by request.
          </p>
          <Link to="/contact" className="mt-12 inline-block eyebrow !text-background border-b border-background/60 pb-1">
            Request an appointment
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

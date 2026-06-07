import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import atelierImg from "@/assets/atelier.jpg";
import ingredientsImg from "@/assets/ingredients.jpg";
import materialsImg from "@/assets/journal-materials.jpg";

export const Route = createFileRoute("/philosophy")({
  head: () => ({
    meta: [
      { title: "Philosophy — Noct Atelier" },
      { name: "description", content: "On atmosphere, material, and the slow craft of composing perfume at Noct Atelier." },
      { property: "og:title", content: "Philosophy — Noct Atelier" },
      { property: "og:description", content: "On atmosphere, material, and the slow craft of composing perfume." },
      { property: "og:url", content: "/philosophy" },
    ],
    links: [{ rel: "canonical", href: "/philosophy" }],
  }),
  component: PhilosophyPage,
});

function PhilosophyPage() {
  return (
    <SiteLayout>
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 pt-40 md:pt-56 pb-24 md:pb-40">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <div className="eyebrow">— On the house</div>
          </div>
          <div className="col-span-12 md:col-span-9 md:col-start-3">
            <h1 className="font-display text-[clamp(3rem,7.5vw,7rem)] leading-[0.98] tracking-[-0.02em] fade-up">
              A perfume is a way<br />of <em className="italic">paying attention.</em>
            </h1>
            <p className="mt-12 max-w-2xl text-lg md:text-xl text-muted-foreground leading-[1.6] fade-up" style={{ animationDelay: "0.2s" }}>
              Noct Atelier was founded in 2019 by a small group of perfumers,
              writers, and one architect, in a workshop above a bookbinder's
              in Mumbai. We compose fragrance as a form of close looking at
              the world.
            </p>
          </div>
        </div>
      </section>

      {/* full bleed image */}
      <section className="w-full">
        <img
          src={atelierImg}
          alt="Inside the Noct Atelier workshop"
          loading="lazy"
          width={1600}
          height={1100}
          className="w-full h-[60vh] md:h-[80vh] object-cover"
        />
      </section>

      {/* THE HOUSE */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-48">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow mb-4">01</div>
            <div className="font-display text-3xl md:text-4xl">The House</div>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-5 space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              We release between one and two fragrances each year. There is no
              roadmap. A composition is finished when it stops asking to be
              changed — which sometimes takes three months, and sometimes
              takes four years.
            </p>
            <p>
              We have no interest in the language of luxury. We are a small
              workshop. We are interested in the long, careful business of
              making something that lasts.
            </p>
          </div>
        </div>
      </section>

      <div className="rule max-w-[1600px] mx-auto" />

      {/* CREATIVE PROCESS */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-48">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-6">
            <img
              src={materialsImg}
              alt="Folded raw linen and silk"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <div className="eyebrow mb-4">02</div>
            <div className="font-display text-3xl md:text-4xl mb-8">The Process</div>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                Every fragrance begins as a written brief — sometimes a
                paragraph, sometimes only a sentence. From there, we work
                outward through dozens of trials, kept in small glass vials
                and labeled by hand.
              </p>
              <p>
                We do not test on machines. A composition is judged on warm
                skin, in different light, across a season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="bg-foreground text-background">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-48">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-5">
              <div className="eyebrow !text-background/60 mb-4">03</div>
              <div className="font-display text-3xl md:text-4xl mb-8">The Materials</div>
              <div className="space-y-6 text-background/75 leading-relaxed text-base md:text-lg">
                <p>
                  We work with around forty natural materials and a small,
                  considered palette of synthetics. Each is selected for the
                  way it behaves over time, not for what it does on first
                  spray.
                </p>
                <p>
                  Our growers and distillers are listed openly. We visit them.
                  We pay them properly.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7">
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
        </div>
      </section>

      {/* SENSORY PHILOSOPHY */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-48">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow mb-4">04</div>
            <div className="font-display text-3xl md:text-4xl">The Senses</div>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-5">
            <p className="font-display text-3xl md:text-5xl italic font-light leading-[1.2] text-foreground/90">
              "A perfume should hold the door open for memory. Nothing more."
            </p>
            <p className="mt-10 max-w-xl text-muted-foreground leading-relaxed">
              We are skeptical of fragrance as performance. The compositions
              we admire most are quiet — close to the skin, slow to reveal
              themselves, generous to the wearer alone.
            </p>
          </div>
        </div>
      </section>

      {/* CRAFTSMANSHIP */}
      <section className="border-t border-border">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { k: "Numbered", v: "Each bottle is filled, labeled and numbered by hand at the Mumbai atelier." },
              { k: "Maturation", v: "Compositions are matured for a minimum of six weeks before bottling." },
              { k: "Refillable", v: "Bottles are designed to be refilled in person at the studio." },
            ].map((c) => (
              <div key={c.k}>
                <div className="font-display text-2xl mb-3">{c.k}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

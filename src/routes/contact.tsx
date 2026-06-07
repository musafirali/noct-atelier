import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Noct Atelier" },
      { name: "description", content: "Visit the Noct Atelier in Mumbai by appointment, or write to us directly." },
      { property: "og:title", content: "Contact — Noct Atelier" },
      { property: "og:description", content: "Visit the Mumbai atelier by appointment, or write to us." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 pt-40 md:pt-56 pb-24 md:pb-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <div className="eyebrow">— Contact</div>
          </div>
          <div className="col-span-12 md:col-span-9 md:col-start-3">
            <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.98] tracking-[-0.015em] fade-up">
              Write to us,<br />or <em className="italic">visit.</em>
            </h1>
            <p className="mt-10 max-w-xl text-muted-foreground leading-relaxed">
              The atelier is open to visitors by appointment on Wednesdays.
              For all other enquiries — press, stockists, private commissions
              — we reply within the week.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-12 pb-40">
        <div className="grid grid-cols-12 gap-12">
          {/* Form */}
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-10">— Enquiry</div>
            {sent ? (
              <div className="border border-border p-10 md:p-16 text-center">
                <div className="font-display text-3xl md:text-4xl mb-4">Thank you.</div>
                <p className="text-muted-foreground max-w-sm mx-auto">
                  Your message has reached the atelier. We will be in touch.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-10"
              >
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Select label="Subject" name="subject" options={["Private appointment", "Stockist enquiry", "Press", "General"]} />
                <Field label="Message" name="message" textarea required />

                <button
                  type="submit"
                  className="bg-foreground text-background px-12 py-5 eyebrow !text-background hover:bg-foreground/90 transition-colors"
                >
                  Send message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <aside className="col-span-12 md:col-span-4 md:col-start-9 space-y-12 md:border-l md:border-border md:pl-12">
            <div>
              <div className="eyebrow mb-5">Atelier</div>
              <div className="font-display text-2xl leading-snug">
                12B, Kala Ghoda Lane<br />
                Fort, Mumbai 400001<br />
                India
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                Wednesdays, 11:00 — 18:00<br />By appointment
              </div>
            </div>

            <div>
              <div className="eyebrow mb-5">Direct</div>
              <ul className="space-y-3">
                <li><a href="mailto:atelier@noct.com" className="font-display text-xl hover:italic transition-all">atelier@noct.com</a></li>
                <li><a href="mailto:press@noct.com" className="font-display text-xl hover:italic transition-all">press@noct.com</a></li>
                <li><a href="tel:+3232256611" className="font-display text-xl hover:italic transition-all">+32 3 225 6611</a></li>
              </ul>
            </div>

            <div>
              <div className="eyebrow mb-5">Elsewhere</div>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:underline">Instagram — @noctatelier</a></li>
                <li><a href="#" className="hover:underline">Stockists worldwide</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  required,
}: { label: string; name: string; type?: string; textarea?: boolean; required?: boolean }) {
  const Cmp: any = textarea ? "textarea" : "input";
  return (
    <label className="block">
      <span className="eyebrow block mb-3">{label}{required && <span className="text-foreground/40"> *</span>}</span>
      <Cmp
        name={name}
        type={textarea ? undefined : type}
        rows={textarea ? 5 : undefined}
        required={required}
        className="w-full bg-transparent border-0 border-b border-border focus:border-foreground focus:outline-none focus:ring-0 py-3 font-display text-xl text-foreground placeholder:text-muted-foreground/50 transition-colors"
      />
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="eyebrow block mb-3">{label}</span>
      <select
        name={name}
        className="w-full bg-transparent border-0 border-b border-border focus:border-foreground focus:outline-none focus:ring-0 py-3 font-display text-xl text-foreground"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

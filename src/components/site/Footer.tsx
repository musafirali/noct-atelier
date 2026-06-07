import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="font-display text-4xl md:text-5xl leading-[1.05]">
              Noct Atelier
            </div>
            <p className="mt-6 max-w-md text-background/70 text-sm leading-relaxed">
              An independent fragrance house composing small-batch perfumes from
              a studio in Mumbai. Distributed through select stockists and by
              private appointment.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <div className="eyebrow !text-background/50 mb-5">Explore</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/collection" className="hover:text-background text-background/80">Collection</Link></li>
              <li><Link to="/philosophy" className="hover:text-background text-background/80">Philosophy</Link></li>
              <li><Link to="/journal" className="hover:text-background text-background/80">Journal</Link></li>
              <li><Link to="/contact" className="hover:text-background text-background/80">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow !text-background/50 mb-5">Atelier</div>
            <ul className="space-y-3 text-sm text-background/80">
              <li>12B, Kala Ghoda Lane</li>
              <li>Fort, Mumbai 400001</li>
              <li>India</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow !text-background/50 mb-5">Elsewhere</div>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-background text-background/80">Instagram</a></li>
              <li><a href="#" className="hover:text-background text-background/80">Journal RSS</a></li>
              <li><a href="#" className="hover:text-background text-background/80">Stockists</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-background/15 flex flex-col md:flex-row gap-4 md:items-center justify-between text-xs text-background/50">
          <div>© {new Date().getFullYear()} Noct Atelier. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background/80">Imprint</a>
            <a href="#" className="hover:text-background/80">Privacy</a>
            <a href="#" className="hover:text-background/80">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

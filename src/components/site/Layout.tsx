import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main id="main" className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

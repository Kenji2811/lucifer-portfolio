import type { Metadata } from "next";
import Link from "next/link";

import RevealOnScroll from "@/components/RevealOnScroll";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a branding, art direction, 3D or spatial visual project with Lucifer.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-[#f5f5f2]">
      <SiteHeader active="contact" />

      <section className="flex min-h-[82vh] flex-col justify-between px-5 pb-12 pt-36 sm:px-8 sm:pb-16 sm:pt-44 lg:px-12">
        <div>
          <p className="reveal-up text-[10px] uppercase tracking-[0.28em] text-white/45">
            Contact / New business
          </p>
          <h1 className="headline-reveal-delayed mt-12 max-w-[11ch] text-[15vw] font-bold uppercase leading-[0.76] tracking-[-0.09em] sm:mt-16 lg:text-[12vw]">
            Make something unforgettable.
          </h1>
        </div>

        <div className="reveal-up-delayed mt-20 grid gap-10 border-t border-white/15 pt-6 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr]">
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
              Email
            </p>
            <a
              href="mailto:hello@lucifer.studio?subject=Project%20enquiry"
              className="mt-3 inline-block text-lg tracking-[-0.03em] transition-opacity hover:opacity-55 sm:text-xl"
            >
              hello@lucifer.studio
            </a>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
              Based
            </p>
            <p className="mt-3 text-lg tracking-[-0.03em] text-white/75 sm:text-xl">
              Vietnam / GMT+7
            </p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
              Availability
            </p>
            <p className="mt-3 flex items-center gap-3 text-lg tracking-[-0.03em] text-white/75 sm:text-xl">
              <span className="size-2 rounded-full bg-[#b8ff5a]" />
              Selected projects / 2026
            </p>
          </div>
        </div>
      </section>

      <RevealOnScroll>
        <section className="grid gap-10 border-t border-white/15 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:px-12">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">
            A useful first message
          </p>
          <div className="max-w-xl">
            <p className="text-2xl leading-snug tracking-[-0.04em] sm:text-3xl">
              Tell me what you&apos;re making, what success looks like and when it
              needs to exist.
            </p>
            <Link
              href="/work"
              className="mt-10 inline-flex border-b border-white/30 pb-2 text-[10px] uppercase tracking-[0.22em] transition-colors hover:border-white"
            >
              View selected work ↗
            </Link>
          </div>
        </section>
      </RevealOnScroll>

      <SiteFooter />
    </main>
  );
}

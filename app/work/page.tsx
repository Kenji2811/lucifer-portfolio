import type { Metadata } from "next";
import Link from "next/link";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WorkGallery from "@/components/WorkGallery";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "A selection of identity, campaign and spatial design work by Lucifer.",
};

export default function WorkPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-[#f5f5f2]">
      <SiteHeader active="work" />

      <section className="px-5 pb-20 pt-36 sm:px-8 sm:pt-44 lg:px-12 lg:pb-28">
        <div className="flex items-end justify-between gap-8">
          <p className="reveal-up text-[10px] uppercase tracking-[0.28em] text-white/45">
            Archive / 2022—2026
          </p>
          <p className="hidden max-w-xs text-right text-xs leading-relaxed text-white/45 md:block">
            Brand communication, campaign art direction and spatial identity
            developed through graphic design, motion and 3D.
          </p>
        </div>

        <h1 className="headline-reveal-delayed mt-12 text-[19vw] font-bold uppercase leading-[0.72] tracking-[-0.09em] sm:mt-16">
          Work
        </h1>

        <div className="mt-14 flex items-end justify-between border-t border-white/15 pt-5 sm:mt-20">
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/40">
            Selected projects
          </span>
          <span className="text-xs text-white/45">(03)</span>
        </div>
      </section>

      <WorkGallery />

      <section className="border-t border-white/15 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="flex items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">
            Start the case studies / 01
          </p>
          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-white/30 sm:block">
            Continue in sequence
          </span>
        </div>
        <Link
          href="/work/morningstar"
          className="group mt-8 flex items-end justify-between gap-8"
        >
          <span className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
            <span className="text-[clamp(3.25rem,8vw,8rem)] font-medium leading-[0.92] tracking-[-0.07em]">
              Brand Communication
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-white/25 sm:text-xs">
              / Morningstar
            </span>
          </span>
          <span className="mb-2 text-3xl transition-transform duration-300 group-hover:translate-x-2 sm:text-5xl">
            →
          </span>
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}

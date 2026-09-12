import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import RevealOnScroll from "@/components/RevealOnScroll";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Lucifer — a marketing communication and visual designer working across brand communication, campaigns, social content and motion.",
};

const focusAreas = [
  "Brand communication",
  "Campaign art direction",
  "Social content",
  "Graphic design",
  "Motion & video",
] as const;

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-[#f0efe9]">
      <SiteHeader active="about" variant="on-light" />

      <section className="about-poster relative isolate min-h-[100svh] overflow-hidden text-[#151515]">
        <div className="reveal-up absolute left-5 top-28 z-20 sm:left-8 sm:top-32 lg:left-12">
          <p className="text-[9px] font-medium uppercase tracking-[0.24em] sm:text-[10px]">
            Marketing communication designer
          </p>
          <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-black/45">
            Vietnam / F&amp;B and hospitality
          </p>
        </div>

        <h1
          aria-label="About me"
          className="about-poster-title headline-reveal-delayed absolute inset-0 z-[1] text-center text-[27vw] font-bold uppercase leading-none tracking-[-0.07em] text-[#292927] sm:text-[22vw] lg:text-[19vw]"
        >
          <span className="absolute inset-x-0 top-[43%] block sm:top-[27%] lg:top-[23%]">
            About
          </span>
          <span className="absolute inset-x-0 top-[62%] block sm:top-[62%] lg:top-[61%]">
            Me.
          </span>
        </h1>

        <div className="about-subject-reveal absolute inset-x-0 bottom-0 z-10 mx-auto h-[86svh] w-[145vw] max-w-none sm:h-[86svh] sm:w-[min(82vw,54rem)] lg:h-[88svh] lg:w-[min(62vw,58rem)]">
          <Image
            src="/lucifer-portfolio/about-portrait-cutout-bw-v2.png"
            alt="Lucifer seated on a stool"
            fill
            preload
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 82vw, 62vw"
            className="object-contain object-bottom"
          />
        </div>

        <div className="about-poster-copy absolute left-1/2 top-[47%] z-20 w-max max-w-[88vw] -translate-x-1/2 text-center text-white sm:top-[46%]">
          <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/80 sm:text-[10px]">
            Lucifer® / 2026
          </p>
          <p className="mt-2 text-3xl font-bold uppercase leading-[0.82] tracking-[-0.055em] drop-shadow-sm sm:text-5xl lg:text-6xl">
            Visual
            <br />
            Communicator
          </p>
          <p className="mt-3 font-serif text-sm italic tracking-[0.16em] text-white/85 sm:text-base">
            Strategy · Design · Motion
          </p>
        </div>

        <div className="reveal-up-delayed absolute inset-x-5 bottom-6 z-20 flex items-end justify-between gap-6 text-[8px] font-medium uppercase tracking-[0.18em] sm:inset-x-8 sm:bottom-8 sm:text-[9px] lg:inset-x-12">
          <p className="max-w-[13rem] leading-relaxed">
            Concept first
            <br />
            Detail obsessed
          </p>
          <p className="max-w-[13rem] text-right leading-relaxed">
            Campaign / Content
            <br />
            Design / Motion
          </p>
        </div>
      </section>

      <RevealOnScroll>
        <section className="grid gap-10 border-y border-white/15 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:px-12">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/35 lg:col-span-3">
            Perspective / 01
          </p>
          <h2 className="max-w-[13ch] text-4xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:col-span-8 lg:col-start-5 lg:text-7xl">
            I turn communication goals into clear visual systems — built for
            campaigns, content and motion.
          </h2>
        </section>
      </RevealOnScroll>

      <section className="grid gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:gap-8 lg:px-12">
        <RevealOnScroll className="lg:col-span-3">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/35">
            Practice / 02
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="lg:col-span-7 lg:col-start-5" delay={100}>
          <p className="max-w-3xl text-xl leading-relaxed tracking-[-0.025em] text-white/78 sm:text-2xl">
            I&apos;m a marketing communication and visual designer working across
            F&amp;B and hospitality. My work connects campaign planning, key
            visuals, social content, menu and print design, and short-form
            motion.
          </p>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/48 sm:text-lg">
            Working closely with restaurant and event brands has taught me to
            move between strategy and hands-on production. I build ideas into
            practical communication systems, adapting each one across digital
            content, on-ground materials and video while keeping the message
            clear and the brand recognisable.
          </p>

          <dl className="mt-16 border-t border-white/15 text-[10px] uppercase tracking-[0.18em] sm:mt-24">
            <div className="grid grid-cols-[6rem_1fr] gap-5 border-b border-white/15 py-5 sm:grid-cols-[9rem_1fr]">
              <dt className="text-white/30">Focus</dt>
              <dd className="flex flex-wrap gap-x-3 gap-y-2 text-white/68">
                {focusAreas.map((area, index) => (
                  <span key={area}>
                    {area}
                    {index < focusAreas.length - 1 ? " /" : ""}
                  </span>
                ))}
              </dd>
            </div>
            <div className="grid grid-cols-[6rem_1fr] gap-5 border-b border-white/15 py-5 sm:grid-cols-[9rem_1fr]">
              <dt className="text-white/30">Approach</dt>
              <dd className="text-white/68">
                Strategy first / System minded / Hands-on production
              </dd>
            </div>
            <div className="grid grid-cols-[6rem_1fr] gap-5 border-b border-white/15 py-5 sm:grid-cols-[9rem_1fr]">
              <dt className="text-white/30">Based</dt>
              <dd className="text-white/68">Vietnam / Open to remote collaboration</dd>
            </div>
          </dl>
        </RevealOnScroll>
      </section>

      <RevealOnScroll>
        <section className="border-t border-white/15 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="flex items-center justify-between gap-6">
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">
              Next / Start a conversation
            </p>
            <Link
              href="/work"
              className="text-[9px] uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-white"
            >
              View work ↗
            </Link>
          </div>
          <Link
            href="/contact"
            className="group mt-8 flex items-end justify-between gap-8"
          >
            <span className="text-[12vw] font-medium leading-none tracking-[-0.07em] sm:text-[9vw]">
              Contact
            </span>
            <span className="mb-2 text-3xl transition-transform duration-300 group-hover:translate-x-2 sm:text-5xl">
              →
            </span>
          </Link>
        </section>
      </RevealOnScroll>

      <SiteFooter />
    </main>
  );
}

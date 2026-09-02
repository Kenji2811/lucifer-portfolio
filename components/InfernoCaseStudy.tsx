import Link from "next/link";

import MotionLoop from "@/components/MotionLoop";
import RevealOnScroll from "@/components/RevealOnScroll";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { infernoBrands } from "@/lib/infernoMedia";
import type { Project } from "@/lib/projects";

type InfernoCaseStudyProps = {
  project: Project;
  nextProject: Project | null;
  currentPosition: number;
  projectCount: number;
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.24em] text-white/38">
      {children}
    </p>
  );
}

function StillFrame({
  src,
  alt,
  index,
  featured = false,
}: {
  src: string;
  alt: string;
  index: string;
  featured?: boolean;
}) {
  return (
    <figure className={featured ? "sm:col-span-2" : ""}>
      <div
        className={[
          "group relative overflow-hidden border border-white/10 bg-[#0d0d0d]",
          featured ? "aspect-[4/5] sm:aspect-[16/10]" : "aspect-[4/5]",
        ].join(" ")}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.04]" />
      </div>
      <figcaption className="mt-3 flex items-center justify-between border-t border-white/10 pt-3 text-[9px] uppercase tracking-[0.18em] text-white/30">
        <span>Selected visual</span>
        <span>{index}</span>
      </figcaption>
    </figure>
  );
}

function VerticalMotion({
  src,
  poster,
  label,
}: {
  src: string | null;
  poster: string;
  label: string;
}) {
  if (src) {
    return (
      <MotionLoop
        src={src}
        poster={poster}
        label={label}
        className="aspect-[9/16]"
      />
    );
  }

  return (
    <div className="relative aspect-[9/16] overflow-hidden border border-white/10 bg-[#0d0d0d]">
      <img
        src={poster}
        alt={`${label} placeholder`}
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-16">
        <p className="text-[9px] uppercase tracking-[0.2em] text-white/65">
          Vertical reel / 9:16
        </p>
      </div>
    </div>
  );
}

export default function InfernoCaseStudy({
  project,
  nextProject,
  currentPosition,
  projectCount,
}: InfernoCaseStudyProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-[#f5f5f2] [&>section]:mx-auto [&>section]:w-full [&>section]:max-w-[1600px]">
      <SiteHeader active="work" />

      <section className="px-5 pb-10 pt-32 sm:px-8 sm:pt-40 lg:px-12">
        <div className="reveal-up grid grid-cols-[1fr_auto] items-end gap-5 border-b border-white/15 pb-5 sm:grid-cols-3">
          <Link
            href="/work"
            className="text-[10px] uppercase tracking-[0.22em] text-white/45 transition-colors hover:text-white"
          >
            ← All work
          </Link>
          <p className="hidden text-center text-[10px] uppercase tracking-[0.2em] text-white/30 sm:block">
            {String(currentPosition).padStart(2, "0")} /{" "}
            {String(projectCount).padStart(2, "0")}
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
            Campaign archive / {project.year}
          </p>
        </div>

        <div className="mt-9 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="headline-reveal-delayed lg:col-span-9">
            <h1 className="max-w-[10ch] text-[clamp(3.4rem,9vw,8.8rem)] font-bold uppercase leading-[0.79] tracking-[-0.085em]">
              Campaign Art Direction
            </h1>
            <p className="mt-5 text-[10px] uppercase tracking-[0.24em] text-white/25 sm:text-xs">
              / {project.codename}
            </p>
          </div>
          <p className="reveal-up-delayed max-w-sm text-sm leading-relaxed text-white/48 lg:col-span-3 lg:pb-2">
            {project.introduction}
          </p>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="grid gap-6 border-y border-white/15 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {infernoBrands.map((brand) => (
            <a
              key={brand.slug}
              href={`#${brand.slug}`}
              className="group flex items-center justify-between gap-5 py-2 text-[9px] uppercase tracking-[0.2em] text-white/42 transition-colors hover:text-white"
            >
              <span>
                <span className="mr-2 text-white/18 group-hover:text-[#654ee8]">
                  {brand.number}
                </span>
                {brand.name}
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↘
              </span>
            </a>
          ))}
        </div>
      </section>

      <RevealOnScroll>
        <section className="grid gap-10 border-t border-white/15 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:px-12">
          <SectionLabel>Overview / 00</SectionLabel>
          <div className="lg:col-span-7 lg:col-start-5">
            <p className="text-2xl leading-[1.15] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              Four hospitality brands, each with its own visual rhythm.
            </p>
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-white/52 sm:text-lg">
              The archive is organised by brand rather than by medium. Each
              section keeps the edit deliberately compact: five selected stills
              and one vertical motion slot, so campaign thinking stays visible
              without turning the page into a long image dump.
            </p>
          </div>
        </section>
      </RevealOnScroll>

      {infernoBrands.map((brand) => (
        <section
          key={brand.slug}
          id={brand.slug}
          className="scroll-mt-20 border-t border-white/15 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
        >
          <RevealOnScroll>
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <SectionLabel>
                  {brand.name} / {brand.number}
                </SectionLabel>
                <h2 className="mt-5 text-[clamp(3.2rem,7vw,7rem)] font-medium leading-[0.86] tracking-[-0.075em]">
                  {brand.name}
                </h2>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                  {brand.descriptor}
                </p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/48">
                  {brand.note}
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-9">
              <div className="grid gap-6 sm:grid-cols-2">
                {brand.images.map((image, index) => (
                  <RevealOnScroll
                    key={image.src}
                    className={index === 0 ? "sm:col-span-2" : ""}
                    delay={(index % 3) * 45}
                  >
                    <StillFrame
                      src={image.src}
                      alt={image.alt}
                      index={`${brand.number}.${String(index + 1).padStart(2, "0")}`}
                      featured={index === 0}
                    />
                  </RevealOnScroll>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-24">
                <RevealOnScroll delay={90}>
                  <VerticalMotion
                    src={brand.motion.src}
                    poster={brand.motion.poster}
                    label={brand.motion.label}
                  />
                  <div className="mt-4 flex items-start justify-between gap-4 border-t border-white/10 pt-4">
                    <div>
                      <p className="text-sm tracking-[-0.02em] text-white/78">
                        Selected motion
                      </p>
                      <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/30">
                        Vertical / Social reel
                      </p>
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.18em] text-white/22">
                      {brand.number}.06
                    </span>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-white/15 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="flex items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">
            {nextProject
              ? `Next case study / ${nextProject.number}`
              : "End of selected work"}
          </p>
          <Link
            href="/work"
            className="text-[9px] uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-white"
          >
            All work ↗
          </Link>
        </div>

        <Link
          href={nextProject ? `/work/${nextProject.slug}` : "/contact"}
          className="group mt-8 flex items-end justify-between gap-8"
        >
          <span className="flex min-w-0 flex-wrap items-baseline gap-x-5 gap-y-2">
            <span className="break-words text-[clamp(3.1rem,8vw,8rem)] font-medium leading-[0.92] tracking-[-0.07em]">
              {nextProject ? nextProject.title : "Start a project"}
            </span>
            {nextProject ? (
              <span className="text-[10px] uppercase tracking-[0.22em] text-white/25 sm:text-xs">
                / {nextProject.codename}
              </span>
            ) : null}
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

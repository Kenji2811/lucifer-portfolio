import Image from "next/image";
import Link from "next/link";

import RevealOnScroll from "@/components/RevealOnScroll";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import type { Project } from "@/lib/projects";

const assetRoot = "/lucifer-portfolio/projects/talata";

type TalataCaseStudyProps = {
  project: Project;
  nextProject: Project | null;
  currentPosition: number;
  projectCount: number;
};

type ProjectImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
};

function ProjectImage({
  src,
  alt,
  className = "aspect-square",
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: ProjectImageProps) {
  return (
    <div className={`group relative overflow-hidden bg-white/[0.04] ${className}`}>
      <Image
        src={`${assetRoot}/${src}`}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
      />
    </div>
  );
}

function AssetPlaceholder({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex aspect-[4/3] flex-col justify-between border border-dashed border-white/20 bg-white/[0.025] p-5 sm:p-6">
      <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-white/35">
        <span>{index}</span>
        <span>Open slot</span>
      </div>
      <div className="relative mx-auto size-14 rounded-full border border-white/15">
        <span className="absolute left-1/2 top-0 h-full w-px bg-white/15" />
        <span className="absolute left-0 top-1/2 h-px w-full bg-white/15" />
      </div>
      <div>
        <p className="text-xl tracking-[-0.04em] text-white/75 sm:text-2xl">
          {title}
        </p>
        <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/30">
          Add design later
        </p>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.24em] text-white/38">
      {children}
    </p>
  );
}

type CollectionGridProps = {
  mainSrc: string;
  mainAlt: string;
  compositeSrc: string;
  compositeAlt: string;
};

function CollectionGrid({
  mainSrc,
  mainAlt,
  compositeSrc,
  compositeAlt,
}: CollectionGridProps) {
  return (
    <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:items-start">
      <RevealOnScroll className="lg:col-span-5">
        <ProjectImage
          src={mainSrc}
          alt={mainAlt}
          className="aspect-[2/3]"
          sizes="(max-width: 1024px) 100vw, 42vw"
        />
      </RevealOnScroll>
      <RevealOnScroll className="lg:col-span-7" delay={90}>
        <ProjectImage
          src={compositeSrc}
          alt={compositeAlt}
          className="aspect-square"
          sizes="(max-width: 1024px) 100vw, 58vw"
        />
      </RevealOnScroll>
    </div>
  );
}

export default function MorningstarCaseStudy({
  project,
  nextProject,
  currentPosition,
  projectCount,
}: TalataCaseStudyProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-[#f5f5f2]">
      <SiteHeader active="work" />

      <section className="px-5 pb-12 pt-36 sm:px-8 sm:pt-44 lg:px-12">
        <div className="reveal-up grid grid-cols-[1fr_auto] items-end gap-5 border-b border-white/15 pb-5 sm:grid-cols-3">
          <Link
            href="/work"
            className="text-[10px] uppercase tracking-[0.22em] text-white/45 transition-colors hover:text-white"
          >
            ← All work
          </Link>
          <p className="hidden text-center text-[10px] uppercase tracking-[0.2em] text-white/30 sm:block">
            {String(currentPosition).padStart(2, "0")} / {String(projectCount).padStart(2, "0")}
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
            Brand archive / {project.year}
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <h1 className="headline-reveal-delayed break-words text-[15vw] font-bold uppercase leading-[0.76] tracking-[-0.09em] lg:col-span-9 lg:text-[11vw]">
            {project.title}
          </h1>
          <p className="reveal-up-delayed max-w-xs text-sm leading-relaxed text-white/46 lg:col-span-3 lg:pb-2">
            A growing archive of identity, brand communication, campaigns and
            motion.
          </p>
        </div>
      </section>

      <RevealOnScroll>
        <section className="grid gap-10 border-t border-white/15 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:px-12">
          <SectionLabel>Brand group / 01</SectionLabel>
          <div className="lg:col-span-8 lg:col-start-5">
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/38">
              Talata Seafood / Brand communication
            </p>
            <h2 className="mt-5 text-[18vw] font-semibold uppercase leading-[0.78] tracking-[-0.08em] sm:text-[13vw] lg:text-[10vw]">
              Talata
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/48 sm:text-lg">
              A focused group within Morningstar, shaped through coastal colour,
              food-led storytelling and motion.
            </p>
          </div>
        </section>
      </RevealOnScroll>

      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="project-hero-panel relative overflow-hidden bg-[#0a6d72]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={`${assetRoot}/brand-motion-poster.jpg`}
            className="aspect-video w-full object-cover"
            aria-label="Talata reservation campaign motion graphic"
          >
            <source src={`${assetRoot}/brand-motion.mp4`} type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/55 to-transparent px-5 pb-5 pt-16 text-[9px] uppercase tracking-[0.2em] text-white/75 sm:px-7 sm:pb-7">
            <span>Motion opening / 00:06</span>
            <span>Ha Long / Hai Phong</span>
          </div>
        </div>
      </section>

      <RevealOnScroll>
        <section className="grid gap-12 border-t border-white/15 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:px-12">
          <SectionLabel>Talata overview / 02</SectionLabel>
          <div className="lg:col-span-7 lg:col-start-5">
            <p className="text-3xl leading-[1.12] tracking-[-0.05em] sm:text-4xl lg:text-5xl">
              A coastal communication system translating the atmosphere of Hạ
              Long into campaign visuals, food imagery and motion.
            </p>
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
              Talata is an ongoing body of communication work for a seafood
              restaurant. The visual language moves between coastal
              storytelling, product-led campaigns, seasonal moments and
              short-form motion while keeping the brand recognisable across
              social channels.
            </p>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="grid gap-10 border-t border-white/15 px-5 py-16 sm:grid-cols-3 sm:px-8 lg:px-12">
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">Role</p>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Art direction / Graphic design / Motion
            </p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">Scope</p>
            <ul className="mt-3 space-y-1 text-sm text-white/75">
              <li>Campaign system</li>
              <li>Food visual</li>
              <li>Social content</li>
              <li>Motion</li>
            </ul>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">Duration</p>
            <p className="mt-3 text-sm text-white/75">Ongoing / 2025—2026</p>
          </div>
        </section>
      </RevealOnScroll>

      <section className="border-t border-white/15 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <RevealOnScroll>
          <div className="flex items-end justify-between gap-8">
            <div>
              <SectionLabel>Foundation / 03</SectionLabel>
              <h2 className="mt-5 text-4xl tracking-[-0.06em] sm:text-6xl">
                Build the system.
              </h2>
            </div>
            <p className="hidden max-w-xs text-right text-xs leading-relaxed text-white/35 sm:block">
              These open slots reserve the rhythm of the case study until the
              identity assets are ready.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <RevealOnScroll><AssetPlaceholder index="03.1" title="Logo system" /></RevealOnScroll>
          <RevealOnScroll delay={80}><AssetPlaceholder index="03.2" title="Type & colour" /></RevealOnScroll>
          <RevealOnScroll delay={160}><AssetPlaceholder index="03.3" title="Brand guideline" /></RevealOnScroll>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12">
        <RevealOnScroll>
          <div className="grid gap-5 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <ProjectImage
                src="coastal-campaign.webp"
                alt="Talata illustrated Hạ Long coastal campaign artwork"
                className="aspect-[3/4]"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <div className="flex flex-col justify-between border border-white/15 p-6 sm:p-8 lg:col-span-7">
              <SectionLabel>Key visual / 04</SectionLabel>
              <p className="my-16 max-w-[12ch] text-4xl leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Hạ Long, told as a visual destination.
              </p>
              <div className="grid gap-5 border-t border-white/15 pt-5 text-xs leading-relaxed text-white/45 sm:grid-cols-2">
                <p>Illustration / Collage / Social campaign</p>
                <p>
                  The coastal setting becomes part of the message, connecting
                  the restaurant to place before introducing the menu.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="border-t border-white/15 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <RevealOnScroll>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-4">
              <SectionLabel>Campaign system / 05</SectionLabel>
              <h2 className="mt-5 text-4xl tracking-[-0.06em] sm:text-6xl">
                Ấn Tượng Tiệc Sang.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/45 lg:col-span-5 lg:col-start-8">
              Food becomes the headline. The portrait key visual introduces the
              campaign, followed by a composite grid that gathers the finished
              dishes into one clear visual system.
            </p>
          </div>
        </RevealOnScroll>

        <CollectionGrid
          mainSrc="dinner-main.webp"
          mainAlt="Talata Ấn Tượng Tiệc Sang main campaign poster"
          compositeSrc="dinner-composite-v2.webp"
          compositeAlt="Talata Ấn Tượng Tiệc Sang composite campaign grid"
        />
      </section>

      <section className="border-t border-white/15 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <RevealOnScroll>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-4">
              <SectionLabel>Product storytelling / 06</SectionLabel>
              <h2 className="mt-5 text-4xl tracking-[-0.06em] sm:text-6xl">
                Sang Từ Tâm Ý.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/45 lg:col-span-5 lg:col-start-8">
              The same grid logic moves from the main campaign artwork to the
              finished abalone dish and its ingredient story, keeping the
              product sequence easy to read.
            </p>
          </div>
        </RevealOnScroll>

        <CollectionGrid
          mainSrc="abalone-main.webp"
          mainAlt="Talata Sang Từ Tâm Ý abalone main poster"
          compositeSrc="abalone-composite.webp"
          compositeAlt="Talata abalone finished dish and ingredient composite grid"
        />
      </section>

      <section className="border-t border-white/15 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <RevealOnScroll className="lg:col-span-4">
            <SectionLabel>Motion / 07</SectionLabel>
            <h2 className="mt-5 max-w-[9ch] text-4xl tracking-[-0.06em] sm:text-6xl">
              A moving menu, not a static post.
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/45">
              Short-form motion turns menu information into a paced sequence
              made for vertical screens. The second slot is reserved for your
              next animation.
            </p>
          </RevealOnScroll>
          <RevealOnScroll className="lg:col-span-4 lg:col-start-6" delay={80}>
            <div className="relative mx-auto max-w-md overflow-hidden bg-[#d9f2ef] p-3 sm:p-4">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={`${assetRoot}/event-motion-poster.jpg`}
                className="aspect-[9/16] w-full object-cover"
                aria-label="Talata vertical menu motion graphic"
              >
                <source src={`${assetRoot}/event-motion.mp4`} type="video/mp4" />
              </video>
            </div>
          </RevealOnScroll>
          <RevealOnScroll className="lg:col-span-3" delay={160}>
            <div className="flex h-full min-h-[28rem] flex-col justify-between border border-dashed border-white/20 bg-white/[0.025] p-6">
              <div className="flex justify-between text-[9px] uppercase tracking-[0.2em] text-white/35">
                <span>06.2</span><span>9:16</span>
              </div>
              <div className="relative mx-auto size-16 rounded-full border border-white/15">
                <span className="absolute left-1/2 top-0 h-full w-px bg-white/15" />
                <span className="absolute left-0 top-1/2 h-px w-full bg-white/15" />
              </div>
              <div>
                <p className="text-2xl tracking-[-0.04em] text-white/75">Next motion</p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/30">Add video later</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12">
        <RevealOnScroll>
          <div className="flex items-end justify-between border-t border-white/15 pt-5">
            <SectionLabel>Seasonal communication / 08</SectionLabel>
            <p className="hidden max-w-sm text-right text-xs leading-relaxed text-white/35 sm:block">
              One brand voice adapting to moments across the calendar.
            </p>
          </div>
        </RevealOnScroll>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <RevealOnScroll><ProjectImage src="mid-autumn.webp" alt="Talata Mid-Autumn seasonal poster" className="aspect-[2/3]" /></RevealOnScroll>
          <RevealOnScroll delay={80}><ProjectImage src="new-year.webp" alt="Talata New Year seasonal poster" className="aspect-[2/3]" /></RevealOnScroll>
          <RevealOnScroll delay={160}><ProjectImage src="travel-season.webp" alt="Talata Hạ Long travel season poster" className="aspect-[2/3]" /></RevealOnScroll>
        </div>
      </section>

      <section className="border-t border-white/15 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="flex items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">
            {nextProject ? `Next case study / ${nextProject.number}` : "End of selected work"}
          </p>
          <Link href="/work" className="text-[9px] uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-white">
            All work ↗
          </Link>
        </div>
        <Link href={nextProject ? `/work/${nextProject.slug}` : "/contact"} className="group mt-8 flex items-end justify-between gap-8">
          <span className="break-words text-[12vw] font-medium leading-none tracking-[-0.07em] sm:text-[9vw]">
            {nextProject ? nextProject.title : "Start a project"}
          </span>
          <span className="mb-2 text-3xl transition-transform duration-300 group-hover:translate-x-2 sm:text-5xl">→</span>
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}

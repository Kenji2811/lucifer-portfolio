import Image from "next/image";
import Link from "next/link";

import RevealOnScroll from "@/components/RevealOnScroll";
import SeasonalCarousel from "@/components/SeasonalCarousel";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import type { Project } from "@/lib/projects";

const assetRoot = "/lucifer-portfolio/projects/talata";
const menuPdf = `${assetRoot}/menu-talata-hai-phong.pdf`;

const menuPages = [
  { page: "01", title: "Món khai vị" },
  { page: "02", title: "Signature dish" },
  { page: "03", title: "Món ăn nhẹ" },
  { page: "04", title: "Hải sản có vỏ" },
  { page: "07", title: "Tôm — Bề bề" },
  { page: "08", title: "Các món cá" },
  { page: "10", title: "Sashimi" },
  { page: "11", title: "Cua — Ghẹ" },
  { page: "12", title: "Lẩu" },
  { page: "13", title: "Các món thịt" },
  { page: "15", title: "Đồ uống — Tráng miệng" },
] as const;

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
  imageClassName?: string;
  sizes?: string;
};

function ProjectImage({
  src,
  alt,
  className = "aspect-square",
  imageClassName = "object-cover",
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: ProjectImageProps) {
  return (
    <div className={`group relative overflow-hidden bg-white/[0.04] ${className}`}>
      <Image
        src={`${assetRoot}/${src}`}
        alt={alt}
        fill
        sizes={sizes}
        className={`${imageClassName} transition-transform duration-700 ease-out group-hover:scale-[1.015]`}
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
  detailImages: readonly {
    src: string;
    alt: string;
  }[];
};

function CollectionGrid({
  mainSrc,
  mainAlt,
  detailImages,
}: CollectionGridProps) {
  return (
    <RevealOnScroll className="mx-auto mt-10 max-w-5xl">
      <div className="grid aspect-square grid-cols-3 grid-rows-3 gap-2 sm:gap-3 lg:gap-4">
        <div className="group relative col-span-2 row-span-3 overflow-hidden bg-white/[0.04]">
          <Image
            src={`${assetRoot}/${mainSrc}`}
            alt={mainAlt}
            fill
            sizes="(max-width: 1024px) 66vw, 62vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        </div>

        {detailImages.map((image, index) => (
          <div
            key={image.src}
            className="group relative col-span-1 row-span-1 overflow-hidden bg-white/[0.04]"
          >
            <Image
              src={`${assetRoot}/${image.src}`}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 33vw, 31vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
            <span className="pointer-events-none absolute right-3 top-3 text-[8px] uppercase tracking-[0.18em] text-white/55 mix-blend-difference sm:right-4 sm:top-4 sm:text-[9px]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </RevealOnScroll>
  );
}

export default function MorningstarCaseStudy({
  project,
  nextProject,
  currentPosition,
  projectCount,
}: TalataCaseStudyProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-[#f5f5f2] [&>section]:mx-auto [&>section]:w-full [&>section]:max-w-[1440px]">
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
            {String(currentPosition).padStart(2, "0")} / {String(projectCount).padStart(2, "0")}
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
            Brand communication / {project.year}
          </p>
        </div>

        <div className="mt-9 grid gap-7 lg:grid-cols-12 lg:items-end">
          <div className="headline-reveal-delayed flex flex-wrap items-baseline gap-x-4 gap-y-2 lg:col-span-9">
            <h1 className="text-[clamp(2.8rem,7vw,5.25rem)] font-bold uppercase leading-[0.82] tracking-[-0.08em] sm:whitespace-nowrap">
              {project.title}
            </h1>
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/25 sm:text-xs">
              / {project.codename}
            </p>
          </div>
          <p className="reveal-up-delayed max-w-xs text-sm leading-relaxed text-white/46 lg:col-span-3 lg:pb-2">
            {project.introduction}
          </p>
        </div>
      </section>

      <RevealOnScroll>
        <section className="mx-auto grid w-full max-w-[1440px] gap-8 border-t border-white/15 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:px-12">
          <SectionLabel>Brand communication / 01</SectionLabel>
          <div className="lg:col-span-8 lg:col-start-5">
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/38">
              Talata Seafood / Brand communication
            </p>
            <h2 className="mt-5 text-[clamp(3.4rem,10vw,6.75rem)] font-semibold uppercase leading-[0.82] tracking-[-0.075em]">
              Talata
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/48 sm:text-lg">
              The first hospitality case group in this archive, connecting
              campaign art direction, menu design, food-led storytelling,
              seasonal content and motion.
            </p>
          </div>
        </section>
      </RevealOnScroll>

      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="project-hero-panel relative mx-auto max-w-6xl overflow-hidden bg-[#0a6d72]">
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
        <section className="mx-auto grid w-full max-w-[1440px] gap-10 border-t border-white/15 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:px-12">
          <SectionLabel>Talata overview / 02</SectionLabel>
          <div className="lg:col-span-7 lg:col-start-5">
            <p className="text-2xl leading-[1.15] tracking-[-0.045em] sm:text-3xl lg:text-4xl">
              A hospitality communication system translating Talata&apos;s seafood
              positioning into campaigns, menu design, food stories and motion.
            </p>
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
              Talata is an ongoing body of communication work across Hải Phòng
              and Hạ Long. The visual language moves between local brand
              stories, product-led campaigns, seasonal moments and short-form
              motion while remaining recognisable across digital touchpoints.
            </p>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="mx-auto grid w-full max-w-[1440px] gap-10 border-t border-white/15 px-5 py-16 sm:grid-cols-3 sm:px-8 lg:px-12">
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
              <li>Menu design</li>
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

      <section className="border-t border-white/15 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <RevealOnScroll>
          <div className="flex items-end justify-between gap-8">
            <div>
              <SectionLabel>Identity system / 03</SectionLabel>
              <h2 className="mt-5 text-3xl tracking-[-0.055em] sm:text-5xl">
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

      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <RevealOnScroll>
          <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <ProjectImage
                src="coastal-campaign.webp"
                alt="Talata 9th anniversary campaign poster for the Hai Phong restaurant"
                className="aspect-[3/4]"
                imageClassName="object-contain"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <div className="flex flex-col justify-between border border-white/15 p-6 sm:p-8 lg:col-span-7">
              <SectionLabel>Key visual / 04</SectionLabel>
              <p className="my-12 max-w-[13ch] text-3xl leading-[1] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                Nine years of local brand storytelling.
              </p>
              <div className="grid gap-5 border-t border-white/15 pt-5 text-xs leading-relaxed text-white/45 sm:grid-cols-2">
                <p>Campaign key visual / Anniversary communication</p>
                <p>
                  Local architecture, address cues and brand history are brought
                  together in a vertical anniversary visual for Hải Phòng.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="border-t border-white/15 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <RevealOnScroll>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <SectionLabel>Menu design / 05</SectionLabel>
              <h2 className="mt-5 max-w-[13ch] text-3xl tracking-[-0.055em] sm:text-5xl">
                Food first, prices in context.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="max-w-xl text-sm leading-relaxed text-white/45">
                Eleven selected spreads pair food photography with menu
                information. Price-only pages are excluded, keeping the
                portfolio edit visual and concise.
              </p>
              <Link
                href={menuPdf}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-3 border-b border-white/30 pb-2 text-[10px] uppercase tracking-[0.2em] text-white/65 transition-colors hover:border-white hover:text-white"
              >
                View selected menu <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </RevealOnScroll>

        <div className="mt-10 overflow-x-auto pb-5 [scrollbar-color:rgba(255,255,255,0.28)_transparent] [scrollbar-width:thin]">
          <div className="flex w-max snap-x snap-mandatory gap-4 sm:gap-5">
            {menuPages.map((item, index) => (
              <Link
                key={item.page}
                href={`${menuPdf}#page=${index + 1}`}
                target="_blank"
                rel="noreferrer"
                className="group block w-[82vw] max-w-[760px] shrink-0 snap-start"
              >
                <div className="relative aspect-[1190/842] overflow-hidden bg-white/[0.04]">
                  <Image
                    src={`${assetRoot}/menu/page-${item.page}.webp`}
                    alt={`Talata Hải Phòng menu — ${item.title}`}
                    fill
                    sizes="(max-width: 900px) 82vw, 760px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.012]"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3 text-[9px] uppercase tracking-[0.18em] text-white/40">
                  <span>{String(index + 1).padStart(2, "0")} / {menuPages.length}</span>
                  <span>{item.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/15 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <RevealOnScroll>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-4">
              <SectionLabel>Campaign system / 06</SectionLabel>
              <h2 className="mt-5 text-3xl tracking-[-0.055em] sm:text-5xl">
                Ấn Tượng Tiệc Sang.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/45 lg:col-span-5 lg:col-start-8">
              Food becomes the headline. The portrait key visual introduces the
              campaign, followed by three supporting visuals that gather the
              finished dishes into one clear system.
            </p>
          </div>
        </RevealOnScroll>

        <CollectionGrid
          mainSrc="dinner-main.webp"
          mainAlt="Talata Ấn Tượng Tiệc Sang main campaign poster"
          detailImages={[
            {
              src: "dinner-detail-a.webp",
              alt: "Talata noodle-wrapped seafood dish",
            },
            {
              src: "dinner-detail-b.webp",
              alt: "Talata plated seafood tartlets",
            },
            {
              src: "dinner-detail-c.webp",
              alt: "Talata raw crab salad dish",
            },
          ]}
        />
      </section>

      <section className="border-t border-white/15 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <RevealOnScroll>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-4">
              <SectionLabel>Product storytelling / 07</SectionLabel>
              <h2 className="mt-5 text-3xl tracking-[-0.055em] sm:text-5xl">
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
          detailImages={[
            {
              src: "abalone-c.webp",
              alt: "Fresh abalone ingredient visual",
            },
            {
              src: "abalone-b.webp",
              alt: "Talata finished abalone soup dish",
            },
            {
              src: "abalone-a.webp",
              alt: "Cordyceps ingredient visual",
            },
          ]}
        />
      </section>

      <section className="border-t border-white/15 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <RevealOnScroll className="lg:col-span-4">
            <SectionLabel>Motion / 08</SectionLabel>
            <h2 className="mt-5 max-w-[11ch] text-3xl tracking-[-0.055em] sm:text-5xl">
              Social stories in motion.
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/45">
              Short-form animation gives seasonal messages and dining offers a
              clear rhythm for vertical social formats, from event storytelling
              to an after-work dining moment.
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
            <div className="relative mx-auto max-w-md overflow-hidden bg-[#d9f2ef] p-3 sm:p-4">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={`${assetRoot}/next-motion-poster.jpg`}
                className="aspect-[9/16] w-full object-cover"
                aria-label="Talata after-work dining motion graphic"
              >
                <source src={`${assetRoot}/next-motion.mp4`} type="video/mp4" />
              </video>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <RevealOnScroll>
          <div className="flex items-end justify-between border-t border-white/15 pt-5">
            <SectionLabel>Seasonal communication / 09</SectionLabel>
            <p className="hidden max-w-sm text-right text-xs leading-relaxed text-white/35 sm:block">
              One brand voice adapting to moments across the calendar.
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <SeasonalCarousel />
        </RevealOnScroll>
      </section>

      <section className="border-t border-white/15 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="flex items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">
            {nextProject ? `Next case study / ${nextProject.number}` : "End of selected work"}
          </p>
          <Link href="/work" className="text-[9px] uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-white">
            All work ↗
          </Link>
        </div>
        <Link href={nextProject ? `/work/${nextProject.slug}` : "/contact"} className="group mt-8 flex items-end justify-between gap-8">
          <span className="flex min-w-0 flex-wrap items-baseline gap-x-5 gap-y-2">
            <span className="break-words text-[clamp(3rem,7vw,6.5rem)] font-medium leading-[0.94] tracking-[-0.065em]">
              {nextProject ? nextProject.title : "Start a project"}
            </span>
            {nextProject ? (
              <span className="text-[10px] uppercase tracking-[0.22em] text-white/25 sm:text-xs">
                / {nextProject.codename}
              </span>
            ) : null}
          </span>
          <span className="mb-2 text-3xl transition-transform duration-300 group-hover:translate-x-2 sm:text-5xl">→</span>
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}

import Link from "next/link";

import MotionLoop from "@/components/MotionLoop";
import RevealOnScroll from "@/components/RevealOnScroll";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import type { Project } from "@/lib/projects";

const assetRoot = "/lucifer-portfolio/projects/motion";

const socialWork = [
  {
    number: "01",
    title: "Mỹ Vị",
    descriptor: "Food motion / Product story",
    src: "myvi-motion.mp4",
    poster: "myvi-motion-poster.webp",
  },
  {
    number: "02",
    title: "Lẩu Tứ Xuyên",
    descriptor: "Menu launch / Social reel",
    src: "tuxuyen-menu.mp4",
    poster: "tuxuyen-menu-poster.webp",
  },
  {
    number: "03",
    title: "Gia Viên",
    descriptor: "Wedding offer / Venue story",
    src: "giavien-hall.mp4",
    poster: "giavien-hall-poster.webp",
  },
  {
    number: "04",
    title: "Lẩu Dê",
    descriptor: "TikTok content / Food campaign",
    src: "laude-social.mp4",
    poster: "laude-social-poster.webp",
  },
] as const;

type MotionCaseStudyProps = {
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

function WorkCaption({
  index,
  title,
  descriptor,
}: {
  index: string;
  title: string;
  descriptor: string;
}) {
  return (
    <div className="mt-4 flex items-start justify-between gap-5 border-t border-white/15 pt-4">
      <div>
        <p className="text-base tracking-[-0.03em] text-white/85 sm:text-lg">
          {title}
        </p>
        <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/35">
          {descriptor}
        </p>
      </div>
      <span className="text-[9px] uppercase tracking-[0.18em] text-white/28">
        {index}
      </span>
    </div>
  );
}

export default function MotionCaseStudy({
  project,
  nextProject,
  currentPosition,
  projectCount,
}: MotionCaseStudyProps) {
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
            {String(currentPosition).padStart(2, "0")} / {String(projectCount).padStart(2, "0")}
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
            Motion archive / {project.year}
          </p>
        </div>

        <div className="mt-9 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="headline-reveal-delayed lg:col-span-9">
            <h1 className="max-w-[11ch] text-[clamp(3.4rem,9vw,8.8rem)] font-bold uppercase leading-[0.79] tracking-[-0.085em]">
              Motion Design &amp; Film
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
        <div className="project-hero-panel relative mx-auto max-w-6xl overflow-hidden">
          <MotionLoop
            src={`${assetRoot}/motion-reel.mp4`}
            poster={`${assetRoot}/motion-reel-poster.webp`}
            label="Selected motion work reel preview"
            className="aspect-video"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent px-5 pb-5 pt-20 text-[9px] uppercase tracking-[0.2em] text-white/70 sm:px-7 sm:pb-7">
            <span>Selected motion / Reel 00:33</span>
            <span className="hidden sm:block">Film / Editorial / Performance</span>
          </div>
        </div>
      </section>

      <section className="border-y border-white/15 px-5 sm:px-8 lg:px-12">
        <nav
          aria-label="Motion case study sections"
          className="flex gap-x-7 gap-y-3 overflow-x-auto py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {[
            ["01", "Films", "featured-films"],
            ["02", "Social", "social-short-form"],
            ["03", "YouTube", "youtube-editorial"],
            ["04", "Gaming & Web3", "gaming-web3"],
          ].map(([number, label, anchor]) => (
            <a
              key={anchor}
              href={`#${anchor}`}
              className="group flex shrink-0 items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/42 transition-colors hover:text-white"
            >
              <span className="text-white/20 group-hover:text-[#dbe93c]">{number}</span>
              {label}
            </a>
          ))}
        </nav>
      </section>

      <RevealOnScroll>
        <section className="mx-auto grid w-full max-w-[1600px] gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:px-12">
          <SectionLabel>Overview / 00</SectionLabel>
          <div className="lg:col-span-7 lg:col-start-5">
            <p className="text-2xl leading-[1.15] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              Editing for rhythm, clarity and the way each audience actually watches.
            </p>
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-white/52 sm:text-lg">
              This selection moves from narrative film to vertical social,
              long-form editorial and performance-led game or Web3 content.
              The format changes, but the focus stays consistent: establish a
              visual hook, control the pace and make the message easy to follow.
            </p>
          </div>
        </section>
      </RevealOnScroll>

      <section
        id="featured-films"
        className="scroll-mt-20 border-t border-white/15 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      >
        <RevealOnScroll>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <SectionLabel>Featured films / 01</SectionLabel>
              <h2 className="mt-5 max-w-[10ch] text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.88] tracking-[-0.07em]">
                Stories built frame by frame.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-white/45 lg:col-span-4 lg:col-start-9">
              A campaign film study alongside two cinematic food pieces. The
              edit balances narrative progression, atmosphere and product detail.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mt-14">
          <MotionLoop
            src={`${assetRoot}/campaign-film.mp4`}
            poster={`${assetRoot}/campaign-film-poster.webp`}
            label="Toxic Beauty campaign film study preview"
            className="aspect-video"
          />
          <WorkCaption
            index="01.1"
            title="Toxic Beauty — Campaign Film Study"
            descriptor="Narrative editing / Beauty & social impact"
          />
        </RevealOnScroll>

        <div className="mx-auto mt-16 grid max-w-4xl gap-10 sm:grid-cols-2 sm:gap-6 lg:gap-12">
          <RevealOnScroll>
            <MotionLoop
              src={`${assetRoot}/cinematic-goat.mp4`}
              poster={`${assetRoot}/cinematic-goat-poster.webp`}
              label="Cinematic goat dish film preview"
              className="aspect-[9/16]"
            />
            <WorkCaption
              index="01.2"
              title="Ingredient to Plate"
              descriptor="Cinematic food film / Lẩu Dê"
            />
          </RevealOnScroll>
          <RevealOnScroll delay={90}>
            <MotionLoop
              src={`${assetRoot}/hotpot-film.mp4`}
              poster={`${assetRoot}/hotpot-film-poster.webp`}
              label="Cinematic hotpot film preview"
              className="aspect-[9/16]"
            />
            <WorkCaption
              index="01.3"
              title="Heat & Craft"
              descriptor="Cinematic food film / Kitchen process"
            />
          </RevealOnScroll>
        </div>
      </section>

      <section
        id="social-short-form"
        className="scroll-mt-20 border-t border-white/15 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      >
        <RevealOnScroll>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionLabel>Social &amp; short-form / 02</SectionLabel>
              <h2 className="mt-5 max-w-[12ch] text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.88] tracking-[-0.07em]">
                Four brands. Four content rhythms.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-white/45 lg:col-span-4 lg:col-start-9">
              Product-led reels for Mỹ Vị and Lẩu Tứ Xuyên, wedding and venue
              communication for Gia Viên, plus food campaigns and TikTok content
              for Lẩu Dê.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-14 grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {socialWork.map((item, index) => (
            <RevealOnScroll key={item.title} delay={index * 65}>
              <MotionLoop
                src={`${assetRoot}/${item.src}`}
                poster={`${assetRoot}/${item.poster}`}
                label={`${item.title} social motion preview`}
                className="aspect-[9/16]"
              />
              <WorkCaption
                index={`02.${item.number}`}
                title={item.title}
                descriptor={item.descriptor}
              />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section
        id="youtube-editorial"
        className="scroll-mt-20 border-t border-white/15 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <RevealOnScroll className="lg:col-span-8">
            <MotionLoop
              src={`${assetRoot}/finance-editorial.mp4`}
              poster={`${assetRoot}/finance-editorial-poster.webp`}
              label="Phiếm Tài Chính YouTube editorial video preview"
              className="aspect-video"
            />
          </RevealOnScroll>
          <RevealOnScroll className="lg:col-span-3 lg:col-start-10" delay={90}>
            <SectionLabel>YouTube &amp; editorial / 03</SectionLabel>
            <h2 className="mt-5 text-4xl leading-[0.95] tracking-[-0.06em] sm:text-5xl">
              Phiếm Tài Chính
            </h2>
            <p className="mt-7 text-sm leading-relaxed text-white/48">
              A long-form finance series shaped through chapter structure,
              archival material, graphic explainers and a consistent visual host.
            </p>
            <div className="mt-8 border-t border-white/15 pt-5 text-[9px] uppercase leading-loose tracking-[0.18em] text-white/35">
              <p>Series editing</p>
              <p>Editorial pacing</p>
              <p>Graphic explanation</p>
              <p>Four selected episodes</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section
        id="gaming-web3"
        className="scroll-mt-20 border-t border-white/15 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      >
        <RevealOnScroll>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionLabel>Gaming &amp; Web3 / 04</SectionLabel>
              <h2 className="mt-5 max-w-[12ch] text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.88] tracking-[-0.07em]">
                Hooks made for fast attention.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-white/45 lg:col-span-4 lg:col-start-9">
              Performance-focused edits combine interface demonstrations,
              kinetic typography, product benefits and game mechanics across
              horizontal, square and vertical placements.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start">
          <RevealOnScroll className="lg:col-span-7">
            <MotionLoop
              src={`${assetRoot}/crypto-market.mp4`}
              poster={`${assetRoot}/crypto-market-poster.webp`}
              label="Crypto market editorial video preview"
              className="aspect-video"
            />
            <WorkCaption
              index="04.1"
              title="Prediction Market"
              descriptor="Editorial motion / Product-led explainer"
            />
          </RevealOnScroll>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5">
            <RevealOnScroll delay={70}>
              <MotionLoop
                src={`${assetRoot}/web3-product.mp4`}
                poster={`${assetRoot}/web3-product-poster.webp`}
                label="Web3 product motion preview"
                className="aspect-[9/16]"
              />
              <WorkCaption
                index="04.2"
                title="Web3 Product"
                descriptor="App demo / Motion graphics"
              />
            </RevealOnScroll>
            <RevealOnScroll delay={140}>
              <MotionLoop
                src={`${assetRoot}/game-edit.mp4`}
                poster={`${assetRoot}/game-edit-poster.webp`}
                label="Mobile game advertising edit preview"
                className="aspect-[9/16]"
              />
              <WorkCaption
                index="04.3"
                title="Mobile Game Edit"
                descriptor="Performance creative / Vertical ad"
              />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <RevealOnScroll>
        <section className="mx-auto grid w-full max-w-[1600px] gap-10 border-t border-white/15 px-5 py-16 sm:grid-cols-3 sm:px-8 lg:px-12">
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">Role</p>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Video editing / Motion design / Art direction
            </p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">Formats</p>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Campaign / Product / Social / Editorial / Performance
            </p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">Output</p>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              16:9 / 1:1 / 9:16 / Multi-platform
            </p>
          </div>
        </section>
      </RevealOnScroll>

      <section className="border-t border-white/15 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="flex items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">
            {nextProject ? `Next case study / ${nextProject.number}` : "End of selected work"}
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

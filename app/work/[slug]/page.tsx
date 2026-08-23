import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import RevealOnScroll from "@/components/RevealOnScroll";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getNextProject, getProject, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.introduction,
    openGraph: {
      title: `${project.title} — Lucifer`,
      description: project.introduction,
      images: [],
    },
    twitter: {
      title: `${project.title} — Lucifer`,
      description: project.introduction,
      images: [],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const nextProject = getNextProject(slug);
  const currentPosition = projects.findIndex((item) => item.slug === slug) + 1;

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
            {String(currentPosition).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
            {project.category} / {project.year}
          </p>
        </div>

        <h1 className="headline-reveal-delayed mt-10 break-words text-[15vw] font-bold uppercase leading-[0.78] tracking-[-0.09em] lg:text-[12vw]">
          {project.title}
        </h1>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div
          className="project-hero-panel relative aspect-[4/5] overflow-hidden sm:aspect-[16/9]"
          style={{ backgroundColor: project.background, color: project.foreground }}
        >
          <span className="absolute left-5 top-5 text-[9px] uppercase tracking-[0.2em] opacity-55 sm:left-7 sm:top-7">
            Lucifer / Case study
          </span>
          <span className="absolute right-5 top-5 text-[9px] uppercase tracking-[0.2em] opacity-55 sm:right-7 sm:top-7">
            {project.discipline}
          </span>
          <span className="absolute inset-x-0 bottom-[-0.19em] text-center text-[83vw] font-bold leading-none tracking-[-0.14em] opacity-90 sm:text-[48vw]">
            {project.mark}
          </span>
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between border-t border-current/25 pt-4 text-[9px] uppercase tracking-[0.18em] opacity-65 sm:bottom-7 sm:left-7 sm:right-7">
            <span>{project.keywords.join(" / ")}</span>
            <span>{project.year}</span>
          </div>
        </div>
      </section>

      <RevealOnScroll>
        <section className="grid gap-12 border-t border-white/15 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:px-12">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/40 lg:col-span-3">
            Overview
          </p>
          <div className="lg:col-span-7 lg:col-start-5">
            <p className="text-3xl leading-[1.12] tracking-[-0.05em] sm:text-4xl lg:text-5xl">
              {project.introduction}
            </p>
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
              {project.overview}
            </p>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="grid gap-10 border-t border-white/15 px-5 py-16 sm:grid-cols-3 sm:px-8 lg:px-12">
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">Role</p>
            <p className="mt-3 text-sm text-white/75">{project.role}</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">Scope</p>
            <ul className="mt-3 space-y-1 text-sm text-white/75">
              {project.scope.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">Duration</p>
            <p className="mt-3 text-sm text-white/75">{project.duration}</p>
          </div>
        </section>
      </RevealOnScroll>

      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="grid gap-5 lg:grid-cols-2">
          <RevealOnScroll className="min-h-full">
            <div
              className="flex aspect-square flex-col justify-between p-5 sm:p-7"
              style={{ backgroundColor: project.foreground, color: project.background }}
            >
              <div className="flex justify-between text-[9px] uppercase tracking-[0.2em] opacity-55">
                <span>System / A</span>
                <span>{project.number}</span>
              </div>
              <p className="max-w-[7ch] text-[12vw] font-bold uppercase leading-[0.75] tracking-[-0.09em] lg:text-[6vw]">
                {project.keywords[0]} {project.keywords[1]}
              </p>
              <p className="text-right text-[9px] uppercase tracking-[0.2em] opacity-55">
                Lucifer — {project.year}
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="min-h-full" delay={90}>
            <div
              className="relative flex aspect-square items-center justify-center overflow-hidden p-7"
              style={{ backgroundColor: project.background, color: project.foreground }}
            >
              <div className="absolute inset-[7%] border border-current/25" />
              <div className="absolute inset-[15%] rounded-full border border-current/25" />
              <span className="text-[34vw] font-bold leading-none tracking-[-0.14em] opacity-90 lg:text-[18vw]">
                {project.mark}
              </span>
              <span className="absolute bottom-7 left-7 text-[9px] uppercase tracking-[0.2em] opacity-55">
                Construction / 02
              </span>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll className="mt-5" delay={60}>
          <div
            className="relative flex aspect-[4/5] items-end overflow-hidden p-5 sm:aspect-[16/7] sm:p-8"
            style={{ backgroundColor: project.background, color: project.foreground }}
          >
            <p className="max-w-[9ch] text-[16vw] font-medium uppercase leading-[0.78] tracking-[-0.09em] sm:text-[9vw]">
              {project.keywords[2]}
            </p>
            <div className="absolute right-5 top-5 text-right text-[9px] uppercase leading-relaxed tracking-[0.2em] opacity-55 sm:right-8 sm:top-8">
              <p>{project.title}</p>
              <p>{project.discipline}</p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

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
          <span className="break-words text-[12vw] font-medium leading-none tracking-[-0.07em] sm:text-[9vw]">
            {nextProject ? nextProject.title : "Start a project"}
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

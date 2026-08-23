import Link from "next/link";

import ProjectCard from "@/components/ProjectCard";
import SiteHeader from "@/components/SiteHeader";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <SiteHeader active="home" />

      <section className="flex min-h-screen flex-col justify-center px-5 pb-16 pt-28 sm:px-8 lg:px-12">
        <p className="mb-6 text-xs tracking-[0.3em] text-gray-400">
          GRAPHIC DESIGNER / 3D ARTIST
        </p>

        <h1 className="headline-reveal text-[18vw] font-bold leading-none tracking-[-0.08em]">
          LUCIFER
        </h1>

        <p className="mt-8 text-xs tracking-[0.2em] text-gray-400">
          SELECTED WORKS — 2022 / 2026
        </p>

        <div className="mt-32 space-y-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              number={project.number}
              title={project.title}
              category={project.category}
              year={project.year}
              href={`/work/${project.slug}`}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="/work"
            className="border-b border-white/25 pb-2 text-[10px] uppercase tracking-[0.22em] text-white/55 transition-colors hover:border-white hover:text-white"
          >
            Explore all work ↗
          </Link>
        </div>
      </section>
    </main>
  );
}

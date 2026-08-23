"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

import { projects, type ProjectCategory } from "@/lib/projects";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", "Branding", "Campaign", "Interior"];

export default function WorkGallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const galleryRef = useRef<HTMLDivElement>(null);

  const visibleProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  useEffect(() => {
    const cards = galleryRef.current?.querySelectorAll<HTMLElement>(
      "[data-reveal-card]",
    );

    if (!cards?.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cards.forEach((card) => card.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [activeFilter]);

  return (
    <section aria-labelledby="work-index-title" className="px-5 pb-28 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-6 border-y border-white/15 py-5 sm:flex-row sm:items-center sm:justify-between">
        <h2
          id="work-index-title"
          className="text-[10px] uppercase tracking-[0.24em] text-white/45"
        >
          Project index / {String(visibleProjects.length).padStart(2, "0")}
        </h2>

        <div className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Filter projects">
          {filters.map((filter) => {
            const isActive = filter === activeFilter;

            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`cursor-pointer text-[10px] uppercase tracking-[0.2em] transition-colors ${
                  isActive ? "text-white" : "text-white/35 hover:text-white/75"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      <div
        ref={galleryRef}
        className="mt-12 grid grid-cols-1 gap-x-5 gap-y-16 lg:grid-cols-12 lg:gap-y-24"
      >
        {visibleProjects.map((project, index) => (
          <article
            id={project.slug}
            key={`${activeFilter}-${project.slug}`}
            data-reveal-card
            style={{ transitionDelay: `${index * 90}ms` }}
            className={`project-reveal group scroll-mt-24 ${
              visibleProjects.length === 1
                ? "lg:col-span-8 lg:col-start-3"
                : index === 0
                  ? "lg:col-span-8"
                  : index === 1
                    ? "lg:col-span-4 lg:mt-28"
                    : "lg:col-span-8 lg:col-start-5"
            }`}
          >
            <Link
              href={`/work/${project.slug}`}
              aria-label={`View ${project.title} case study`}
              className="project-cover relative block aspect-[4/3] overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[0.985]"
              style={{
                backgroundColor: project.background,
                color: project.foreground,
              }}
            >
              <span className="absolute left-5 top-5 text-[10px] font-medium uppercase tracking-[0.2em] opacity-55">
                Lucifer / {project.number}
              </span>
              <span className="absolute right-5 top-5 text-[10px] font-medium uppercase tracking-[0.2em] opacity-55">
                Selected work
              </span>

              <span className="project-mark absolute inset-x-0 bottom-[-0.16em] text-center text-[35vw] font-bold leading-none tracking-[-0.12em] opacity-90 transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:scale-[1.025] lg:text-[21vw]">
                {project.mark}
              </span>

              <span className="absolute bottom-5 left-5 rounded-full border border-current/30 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] opacity-70">
                {project.category}
              </span>
            </Link>

            <div className="mt-5 grid grid-cols-[1fr_auto] gap-4 border-t border-white/20 pt-4">
              <div>
                <h3>
                  <Link
                    href={`/work/${project.slug}`}
                    className="text-3xl font-medium tracking-[-0.05em] transition-opacity hover:opacity-60 sm:text-4xl"
                  >
                    {project.title}
                  </Link>
                </h3>
                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/40">
                  {project.discipline}
                </p>
              </div>
              <span className="pt-1 text-xs text-white/45">{project.year}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

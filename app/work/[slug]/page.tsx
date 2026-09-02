import type { Metadata } from "next";
import { notFound } from "next/navigation";

import InfernoCaseStudy from "@/components/InfernoCaseStudy";
import MotionCaseStudy from "@/components/MotionCaseStudy";
import MorningstarCaseStudy from "@/components/TalataCaseStudy";
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
    title: `${project.title} — ${project.codename}`,
    description: project.introduction,
    openGraph: {
      title: `${project.title} / ${project.codename} — Lucifer`,
      description: project.introduction,
      images: [],
    },
    twitter: {
      title: `${project.title} / ${project.codename} — Lucifer`,
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

  if (project.slug === "morningstar") {
    return (
      <MorningstarCaseStudy
        project={project}
        nextProject={nextProject}
        currentPosition={currentPosition}
        projectCount={projects.length}
      />
    );
  }

  if (project.slug === "inferno") {
    return (
      <InfernoCaseStudy
        project={project}
        nextProject={nextProject}
        currentPosition={currentPosition}
        projectCount={projects.length}
      />
    );
  }

  if (project.slug === "pandemonium") {
    return (
      <MotionCaseStudy
        project={project}
        nextProject={nextProject}
        currentPosition={currentPosition}
        projectCount={projects.length}
      />
    );
  }

  return notFound();
}

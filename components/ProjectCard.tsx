import Link from "next/link";

type ProjectCardProps = {
  number: string;
  title: string;
  category: string;
  year: string;
  href: string;
};

export default function ProjectCard({
  number,
  title,
  category,
  year,
  href,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group grid grid-cols-[3rem_1fr] items-center border-t border-white/20 py-6 transition-colors hover:border-white/60 md:grid-cols-[4rem_1fr_auto]"
    >
      <span className="text-xs text-gray-500">{number}</span>

      <h2 className="text-3xl font-medium tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">
        {title}
      </h2>

      <span className="col-start-2 mt-2 text-[10px] uppercase tracking-widest text-gray-400 md:col-start-auto md:mt-0 md:text-xs">
        {category} / {year}
      </span>
    </Link>
  );
}

export const projects = [
  {
    number: "01",
    slug: "talata",
    title: "Talata",
    category: "Branding",
    discipline: "Brand communication / Motion",
    year: "2025—2026",
    mark: "T",
    background: "#0a6d72",
    foreground: "#f1ead9",
    introduction:
      "A coastal communication system translating the atmosphere of Hạ Long into campaign visuals, food imagery and motion.",
    overview:
      "Talata is an ongoing body of communication work for a seafood restaurant. The visual language moves between coastal storytelling, product-led campaigns, seasonal moments and short-form motion while keeping the brand recognisable across social channels.",
    role: "Art direction / Graphic design / Motion",
    scope: ["Campaign system", "Food visual", "Social content", "Motion"],
    duration: "Ongoing",
    keywords: ["Coast", "Taste", "Motion"],
  },
  {
    number: "02",
    slug: "inferno",
    title: "Inferno",
    category: "Campaign",
    discipline: "Art direction / 3D",
    year: "2026",
    mark: "I",
    background: "#654ee8",
    foreground: "#100b25",
    introduction:
      "A high-energy campaign where heat, speed and digital matter collide.",
    overview:
      "Inferno turns a launch campaign into a sequence of controlled visual impacts. Graphic typography, metallic CGI and saturated violet light create a flexible language for social, motion and large-format communication.",
    role: "Art direction / 3D design",
    scope: ["Campaign system", "CGI assets", "Motion direction"],
    duration: "06 weeks",
    keywords: ["Heat", "Velocity", "Impact"],
  },
  {
    number: "03",
    slug: "pandemonium",
    title: "Pandemonium",
    category: "Interior",
    discipline: "Spatial identity / CGI",
    year: "2026",
    mark: "P",
    background: "#d6d0c7",
    foreground: "#16130f",
    introduction:
      "A spatial identity shaped through brutal geometry, silence and controlled disorder.",
    overview:
      "Pandemonium translates a graphic system into an imagined interior. Monumental type, pale mineral surfaces and dark thresholds guide the experience across environmental graphics, wayfinding and a suite of atmospheric CGI frames.",
    role: "Spatial direction / CGI",
    scope: ["Spatial identity", "Wayfinding", "CGI visualization"],
    duration: "10 weeks",
    keywords: ["Scale", "Order", "Silence"],
  },
] as const;

export type Project = (typeof projects)[number];
export type ProjectCategory = Project["category"];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0 || index === projects.length - 1) return null;
  return projects[index + 1] ?? null;
}

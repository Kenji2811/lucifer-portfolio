export const projects = [
  {
    number: "01",
    slug: "morningstar",
    title: "Brand Communication",
    codename: "Morningstar",
    category: "Branding",
    discipline: "Art direction / Campaign / Editorial / Motion",
    year: "2022—2026",
    mark: "M",
    background: "#b65b2b",
    foreground: "#1b0c06",
    introduction:
      "An evolving portfolio of hospitality brand communication spanning campaign systems, menu design, food storytelling and motion.",
    overview:
      "This archive documents how a hospitality brand is translated across practical communication touchpoints. The first case group focuses on Talata Seafood, connecting visual direction, campaign key visuals, menu and editorial design, seasonal content and short-form motion within one recognisable system.",
    role: "Art direction / Graphic design / Motion design",
    scope: ["Brand communication", "Campaign systems", "Menu & editorial", "Motion content"],
    duration: "Ongoing archive / 2022—2026",
    keywords: ["Brand", "Campaign", "Motion"],
  },
  {
    number: "02",
    slug: "inferno",
    title: "Campaign Art Direction",
    codename: "Inferno",
    category: "Campaign",
    discipline: "Campaign / Key visual / Social / Motion",
    year: "2026",
    mark: "I",
    background: "#654ee8",
    foreground: "#100b25",
    introduction:
      "Selected campaign art direction across Gia Viên, Lẩu Dê, Mỹ Vị and Tứ Xuyên, built through key visuals, social systems and vertical motion.",
    overview:
      "The archive is grouped by brand rather than by medium. Each section keeps the edit concise with five selected stills and one vertical motion slot, preserving each brand's visual identity while making the overall body of work easy to scan.",
    role: "Art direction / Graphic design / Motion",
    scope: ["Campaign key visual", "Social communication", "Visual systems", "Vertical motion"],
    duration: "Selected work / 2026",
    keywords: ["Campaign", "Visual", "Motion"],
  },
  {
    number: "03",
    slug: "pandemonium",
    title: "Motion Design & Film",
    codename: "Pandemonium",
    category: "Motion",
    discipline: "Film editing / Motion graphics / Branded content",
    year: "2024—2026",
    mark: "P",
    background: "#dbe93c",
    foreground: "#11120a",
    introduction:
      "Selected motion work across campaign film, cinematic food, social content, editorial YouTube and gaming.",
    overview:
      "The archive brings together narrative editing, motion graphics and format-aware storytelling. Each piece is shaped for its viewing context, from longer campaign and editorial films to compact vertical stories and performance-led game or Web3 content.",
    role: "Video editing / Motion design / Art direction",
    scope: ["Campaign film", "Product film", "Short-form content", "Editorial video"],
    duration: "Selected work / 2024—2026",
    keywords: ["Film", "Motion", "Editing"],
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

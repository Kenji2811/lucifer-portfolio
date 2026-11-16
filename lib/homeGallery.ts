import { infernoBrands } from "@/lib/infernoMedia";

export type GalleryImage = {
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type GalleryVideo = {
  title: string;
  src: string;
  poster: string;
  width: number;
  height: number;
};

const talataRoot = "/lucifer-portfolio/projects/talata";
const motionRoot = "/lucifer-portfolio/projects/motion";

const talataWork = [
  ["brand-guideline", "Brand guidelines", 1448, 1086],
  ["logo-system", "Logo system", 1448, 1086],
  ["type-colour", "Type & colour", 1448, 1086],
  ["abalone-composite", "Abalone collection", 1800, 1800],
  ["dinner-composite-v2", "Dinner collection", 1800, 1800],
  ["coastal-campaign", "Coastal campaign", 1066, 1600],
  ["travel-season", "Travel season", 1200, 1500],
  ["mid-autumn", "Mid-Autumn", 1133, 1700],
  ["new-year", "New Year", 1133, 1700],
  ["seasonal-national-day", "National Day", 1000, 1500],
  ["seasonal-new-year-2026", "New Year 2026", 1000, 1500],
] as const;

export const talataImages: GalleryImage[] = talataWork.map(
  ([file, title, width, height]) => ({
    title,
    src: `${talataRoot}/${file}.webp`,
    alt: `Talata Seafood — ${title}`,
    width,
    height,
  }),
);

export const talataMenu: GalleryImage[] = [
  "01", "02", "03", "04", "07", "08", "10", "11", "12", "13", "15",
].map((page) => ({
  title: `Menu / ${page}`,
  src: `${talataRoot}/menu/page-${page}.webp`,
  alt: `Talata Seafood menu — page ${page}`,
  width: 2000,
  height: 1415,
}));

export const campaignCollections = infernoBrands.map((brand) => ({
  id: brand.slug,
  title: brand.name,
  images: brand.images.map((image, index) => ({
    ...image,
    title: `${brand.name} / ${String(index + 1).padStart(2, "0")}`,
  })),
}));

export const motionVideos: GalleryVideo[] = [
  {
    title: "Talata — Brand motion",
    src: `${talataRoot}/brand-motion.mp4`,
    poster: `${talataRoot}/brand-motion-poster.jpg`,
    width: 16,
    height: 9,
  },
  {
    title: "Talata — Event motion",
    src: `${talataRoot}/event-motion.mp4`,
    poster: `${talataRoot}/event-motion-poster.jpg`,
    width: 9,
    height: 16,
  },
  {
    title: "Talata — Social motion",
    src: `${talataRoot}/next-motion.mp4`,
    poster: `${talataRoot}/next-motion-poster.jpg`,
    width: 9,
    height: 16,
  },
  ...([
    ["campaign-film", "Toxic Beauty", 16, 9],
    ["cinematic-goat", "Ingredient to Plate", 9, 16],
    ["hotpot-film", "Heat & Craft", 9, 16],
    ["myvi-motion", "Mỹ Vị", 9, 16],
    ["tuxuyen-menu", "Lẩu Tứ Xuyên", 9, 16],
    ["giavien-hall", "Gia Viên", 9, 16],
    ["laude-social", "Lẩu Dê", 9, 16],
    ["finance-editorial", "Phiếm Tài Chính", 16, 9],
    ["crypto-market", "Prediction Market", 16, 9],
    ["web3-product", "Web3 Product", 9, 16],
    ["game-edit", "Mobile Game Edit", 9, 16],
  ] as const).map(([file, title, width, height]) => ({
    title,
    src: `${motionRoot}/${file}.mp4`,
    poster: `${motionRoot}/${file}-poster.webp`,
    width,
    height,
  })),
];

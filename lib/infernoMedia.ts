export type InfernoMediaItem = {
  src: string;
  alt: string;
};

export type InfernoBrand = {
  number: string;
  slug: string;
  name: string;
  descriptor: string;
  note: string;
  images: InfernoMediaItem[];
  motion: {
    src: string | null;
    poster: string;
    label: string;
  };
};

const assetRoot = "/lucifer-portfolio/projects/inferno";

/**
 * Replace the placeholder SVG paths below with the real exports from the
 * four archive folders. The page is intentionally structured around
 * 5 still images + 1 vertical reel per brand.
 */
export const infernoBrands: InfernoBrand[] = [
  {
    number: "01",
    slug: "gia-vien",
    name: "Gia Viên",
    descriptor: "Wedding / Venue / Campaign",
    note:
      "Wedding and venue communication built around atmosphere, scale and event-led storytelling.",
    images: [1, 2, 3, 4, 5].map((index) => ({
      src: `${assetRoot}/gia-vien/0${index}-placeholder.svg`,
      alt: `Gia Viên selected campaign visual ${index}`,
    })),
    motion: {
      src: null,
      poster: `${assetRoot}/gia-vien/reel-poster.svg`,
      label: "Gia Viên vertical reel",
    },
  },
  {
    number: "02",
    slug: "lau-de",
    name: "Lẩu Dê",
    descriptor: "Food campaign / Seasonal / Social",
    note:
      "Product-led campaign visuals balancing heritage cues, seasonal moments and direct food communication.",
    images: [1, 2, 3, 4, 5].map((index) => ({
      src: `${assetRoot}/lau-de/0${index}-placeholder.svg`,
      alt: `Lẩu Dê selected campaign visual ${index}`,
    })),
    motion: {
      src: null,
      poster: `${assetRoot}/lau-de/reel-poster.svg`,
      label: "Lẩu Dê vertical reel",
    },
  },
  {
    number: "03",
    slug: "my-vi",
    name: "Mỹ Vị",
    descriptor: "Vietnamese dining / Food storytelling",
    note:
      "A softer visual rhythm for contemporary Vietnamese dining, combining food stories, seasonal campaigns and refined social communication.",
    images: [1, 2, 3, 4, 5].map((index) => ({
      src: `${assetRoot}/my-vi/0${index}-placeholder.svg`,
      alt: `Mỹ Vị selected campaign visual ${index}`,
    })),
    motion: {
      src: null,
      poster: `${assetRoot}/my-vi/reel-poster.svg`,
      label: "Mỹ Vị vertical reel",
    },
  },
  {
    number: "04",
    slug: "tu-xuyen",
    name: "Tứ Xuyên",
    descriptor: "Menu launch / Promotion / Social",
    note:
      "High-energy visual communication for menu launches, promotional moments and fast-moving social formats.",
    images: [1, 2, 3, 4, 5].map((index) => ({
      src: `${assetRoot}/tu-xuyen/0${index}-placeholder.svg`,
      alt: `Tứ Xuyên selected campaign visual ${index}`,
    })),
    motion: {
      src: null,
      poster: `${assetRoot}/tu-xuyen/reel-poster.svg`,
      label: "Tứ Xuyên vertical reel",
    },
  },
];

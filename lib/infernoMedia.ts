export type InfernoMediaItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type InfernoBrand = {
  number: string;
  slug: string;
  name: string;
  descriptor: string;
  note: string;
  images: InfernoMediaItem[];
  motion: {
    src: string;
    poster: string;
    label: string;
    width: number;
    height: number;
  };
};

const assetRoot = "/lucifer-portfolio/projects/inferno";
const motionRoot = "/lucifer-portfolio/projects/motion";

export const infernoBrands: InfernoBrand[] = [
  {
    number: "01",
    slug: "gia-vien",
    name: "Gia Viên",
    descriptor: "Wedding / Venue / Campaign",
    note:
      "Wedding and venue communication built around atmosphere, scale and event-led storytelling.",
    images: [
      {
        src: `${assetRoot}/gia-vien/01.webp`,
        alt: "Gia Viên The Vow ceremony campaign",
        width: 1200,
        height: 1800,
      },
      {
        src: `${assetRoot}/gia-vien/02.webp`,
        alt: "Gia Viên wedding venue campaign",
        width: 1920,
        height: 1080,
      },
      {
        src: `${assetRoot}/gia-vien/03.webp`,
        alt: "Gia Viên wedding story campaign",
        width: 1200,
        height: 1800,
      },
      {
        src: `${assetRoot}/gia-vien/04.webp`,
        alt: "Gia Viên wedding ceremony story",
        width: 1920,
        height: 1080,
      },
      {
        src: `${assetRoot}/gia-vien/05.webp`,
        alt: "Gia Viên wedding venue selected visual",
        width: 1200,
        height: 1800,
      },
    ],
    motion: {
      src: `${motionRoot}/giavien-hall.mp4`,
      poster: `${motionRoot}/giavien-hall-poster.webp`,
      label: "Gia Viên vertical reel",
      width: 9,
      height: 16,
    },
  },
  {
    number: "02",
    slug: "lau-de",
    name: "Lẩu Dê Nhất Ly",
    descriptor: "Food campaign / Seasonal / Social",
    note:
      "Product-led campaign visuals balancing heritage cues, seasonal moments and direct food communication.",
    images: [
      {
        src: `${assetRoot}/lau-de/01.webp`,
        alt: "Lẩu Dê Nhất Ly Teachers' Day campaign",
        width: 1000,
        height: 2000,
      },
      {
        src: `${assetRoot}/lau-de/02.webp`,
        alt: "Lẩu Dê Nhất Ly Teachers' Day selected visual",
        width: 1200,
        height: 1200,
      },
      {
        src: `${assetRoot}/lau-de/03.webp`,
        alt: "Lẩu Dê Nhất Ly beer campaign",
        width: 1200,
        height: 1800,
      },
      {
        src: `${assetRoot}/lau-de/04.webp`,
        alt: "Lẩu Dê Nhất Ly Lunar New Year campaign",
        width: 2000,
        height: 1667,
      },
      {
        src: `${assetRoot}/lau-de/05.webp`,
        alt: "Lẩu Dê Nhất Ly food campaign",
        width: 1200,
        height: 1800,
      },
    ],
    motion: {
      src: `${motionRoot}/laude-social.mp4`,
      poster: `${motionRoot}/laude-social-poster.webp`,
      label: "Lẩu Dê Nhất Ly vertical reel",
      width: 9,
      height: 16,
    },
  },
  {
    number: "03",
    slug: "my-vi",
    name: "Mỹ Vị",
    descriptor: "Vietnamese dining / Food storytelling",
    note:
      "A softer visual rhythm for contemporary Vietnamese dining, combining food stories, seasonal campaigns and refined social communication.",
    images: [
      {
        src: `${assetRoot}/my-vi/01.webp`,
        alt: "Mỹ Vị autumn menu campaign",
        width: 1584,
        height: 2000,
      },
      {
        src: `${assetRoot}/my-vi/02.webp`,
        alt: "Mỹ Vị jellyfish salad campaign",
        width: 1200,
        height: 1200,
      },
      {
        src: `${assetRoot}/my-vi/03.webp`,
        alt: "Mỹ Vị crab vermicelli campaign",
        width: 1200,
        height: 1800,
      },
      {
        src: `${assetRoot}/my-vi/04.webp`,
        alt: "Mỹ Vị tea promotion campaign",
        width: 1200,
        height: 1200,
      },
      {
        src: `${assetRoot}/my-vi/05.webp`,
        alt: "Mỹ Vị birthday campaign",
        width: 1200,
        height: 1800,
      },
    ],
    motion: {
      src: `${motionRoot}/myvi-motion.mp4`,
      poster: `${motionRoot}/myvi-motion-poster.webp`,
      label: "Mỹ Vị vertical reel",
      width: 9,
      height: 16,
    },
  },
  {
    number: "04",
    slug: "tu-xuyen",
    name: "Nướng Lẩu Tứ Xuyên",
    descriptor: "Menu launch / Promotion / Social",
    note:
      "High-energy visual communication for menu launches, promotional moments and fast-moving social formats.",
    images: [
      {
        src: `${assetRoot}/tu-xuyen/01.webp`,
        alt: "Nướng Lẩu Tứ Xuyên national holiday campaign",
        width: 1280,
        height: 1920,
      },
      {
        src: `${assetRoot}/tu-xuyen/02.webp`,
        alt: "Nướng Lẩu Tứ Xuyên National Day campaign",
        width: 1200,
        height: 1200,
      },
      {
        src: `${assetRoot}/tu-xuyen/03.webp`,
        alt: "Nướng Lẩu Tứ Xuyên menu campaign",
        width: 1280,
        height: 1920,
      },
      {
        src: `${assetRoot}/tu-xuyen/04.webp`,
        alt: "Nướng Lẩu Tứ Xuyên spicy hotpot campaign",
        width: 1280,
        height: 1920,
      },
      {
        src: `${assetRoot}/tu-xuyen/05.webp`,
        alt: "Nướng Lẩu Tứ Xuyên seasonal hotpot campaign",
        width: 1280,
        height: 1920,
      },
    ],
    motion: {
      src: `${motionRoot}/tuxuyen-menu.mp4`,
      poster: `${motionRoot}/tuxuyen-menu-poster.webp`,
      label: "Nướng Lẩu Tứ Xuyên vertical reel",
      width: 9,
      height: 16,
    },
  },
];

# Inferno package — Lucifer Portfolio

This package replaces the current generic Inferno detail page with the structure
agreed in the portfolio review:

- 4 real hospitality brands: Gia Viên, Lẩu Dê, Mỹ Vị, Tứ Xuyên
- 5 selected still images per brand
- 1 dedicated vertical 9:16 motion slot per brand
- generous spacing between preview frames
- no forced horizontal treatment for vertical reels
- Inferno becomes its own component, matching the architecture already used by
  Morningstar and Pandemonium

## Files to copy to the repo root

- components/InfernoCaseStudy.tsx
- lib/infernoMedia.ts
- lib/projects.ts
- app/work/[slug]/page.tsx
- public/projects/inferno/**

## Replacing placeholders with real media

Edit `lib/infernoMedia.ts`.

For each brand:
1. replace the five `*-placeholder.svg` image paths with the real `.webp/.jpg/.png` exports;
2. set `motion.src` to the real `.mp4` path;
3. replace `reel-poster.svg` with the real poster image if available.

Recommended file structure:

public/projects/inferno/
  gia-vien/
    01.webp ... 05.webp
    reel.mp4
    reel-poster.webp
  lau-de/
  my-vi/
  tu-xuyen/

The source archives mentioned in the earlier chat were:
- Gia-vien.rar
- Lau-de.rar
- My-vi.rar
- Tu-xuyen(1).rar

Those archive binaries are not embedded in this ZIP; this package contains the
page structure and visible placeholders so the layout can be reviewed immediately.

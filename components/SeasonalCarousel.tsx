"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

const assetRoot = "/lucifer-portfolio/projects/talata";

const slides = [
  {
    src: "mid-autumn.webp",
    alt: "Talata Mid-Autumn seasonal poster",
    label: "Mid-Autumn",
  },
  {
    src: "new-year.webp",
    alt: "Talata New Year seasonal poster",
    label: "New Year",
  },
  {
    src: "travel-season.webp",
    alt: "Talata Hạ Long travel season poster",
    label: "Travel season",
  },
  {
    src: "seasonal-national-day.webp",
    alt: "Talata poster celebrating 80 years of Vietnam National Day",
    label: "National Day",
  },
  {
    src: "seasonal-new-year-2026.webp",
    alt: "Talata 2026 New Year seasonal poster",
    label: "New Year 2026",
  },
] as const;

export default function SeasonalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [canAutoPlay, setCanAutoPlay] = useState(true);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const syncPreferences = () => {
      setVisibleCount(desktopQuery.matches ? 3 : 1);
      setCanAutoPlay(!reducedMotionQuery.matches);
    };

    syncPreferences();
    desktopQuery.addEventListener("change", syncPreferences);
    reducedMotionQuery.addEventListener("change", syncPreferences);

    return () => {
      desktopQuery.removeEventListener("change", syncPreferences);
      reducedMotionQuery.removeEventListener("change", syncPreferences);
    };
  }, []);

  const maxIndex = Math.max(0, slides.length - visibleCount);
  const safeIndex = Math.min(currentIndex, maxIndex);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(safeIndex <= 0 ? maxIndex : safeIndex - 1);
  }, [maxIndex, safeIndex]);

  const goToNext = useCallback(() => {
    setCurrentIndex(safeIndex >= maxIndex ? 0 : safeIndex + 1);
  }, [maxIndex, safeIndex]);

  useEffect(() => {
    if (!canAutoPlay || isPaused || maxIndex === 0) return;

    const timer = window.setInterval(goToNext, 5000);
    return () => window.clearInterval(timer);
  }, [canAutoPlay, goToNext, isPaused, maxIndex]);

  const trackStyle = useMemo(
    () => ({
      width: `${(slides.length / visibleCount) * 100}%`,
      transform: `translate3d(-${safeIndex * (100 / slides.length)}%, 0, 0)`,
    }),
    [safeIndex, visibleCount],
  );

  const firstVisible = safeIndex + 1;
  const lastVisible = Math.min(safeIndex + visibleCount, slides.length);

  return (
    <div
      className="mx-auto mt-8 max-w-6xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="mb-5 flex items-center justify-between border-b border-white/15 pb-4">
        <p
          className="text-[9px] uppercase tracking-[0.2em] text-white/38"
          aria-live="polite"
        >
          {String(firstVisible).padStart(2, "0")}—
          {String(lastVisible).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous seasonal designs"
            className="flex size-10 items-center justify-center border border-white/20 text-sm text-white/65 transition-colors hover:border-white/55 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            disabled={maxIndex === 0}
          >
            ←
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next seasonal designs"
            className="flex size-10 items-center justify-center border border-white/20 text-sm text-white/65 transition-colors hover:border-white/55 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            disabled={maxIndex === 0}
          >
            →
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={trackStyle}
        >
          {slides.map((slide, index) => (
            <article
              key={slide.src}
              className="shrink-0 px-1.5 sm:px-2.5"
              style={{ width: `${100 / slides.length}%` }}
              aria-hidden={
                index < safeIndex || index >= safeIndex + visibleCount
              }
            >
              <div className="group relative aspect-[2/3] overflow-hidden bg-[#f3f1ec]">
                <Image
                  src={`${assetRoot}/${slide.src}`}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.012]"
                />
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-white/12 pt-3 text-[9px] uppercase tracking-[0.18em] text-white/38">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{slide.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

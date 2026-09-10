"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import type { InfernoBrand, InfernoMediaItem } from "@/lib/infernoMedia";

type InfernoCarouselProps = {
  brand: InfernoBrand;
};

type StillSlide = InfernoMediaItem & {
  kind: "still";
};

type MotionSlide = InfernoBrand["motion"] & {
  kind: "motion";
  alt: string;
};

type Slide = StillSlide | MotionSlide;

function widthClass(width: number, height: number) {
  const ratio = width / height;

  if (ratio > 1.2) return "w-[90vw]";
  if (ratio > 0.9) return "w-[82vw]";
  return "w-[72vw]";
}

export default function InfernoCarousel({ brand }: InfernoCarouselProps) {
  const slides: Slide[] = [
    ...brand.images.map((image) => ({ ...image, kind: "still" as const })),
    {
      ...brand.motion,
      kind: "motion" as const,
      alt: brand.motion.label,
    },
  ];
  const trackRef = useRef<HTMLDivElement>(null);
  const frameRefs = useRef<(HTMLElement | null)[]>([]);
  const scrollFrame = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function goTo(index: number) {
    const track = trackRef.current;
    const frame = frameRefs.current[index];

    if (!track || !frame) return;

    const trackBounds = track.getBoundingClientRect();
    const frameBounds = frame.getBoundingClientRect();

    track.scrollTo({
      left: track.scrollLeft + frameBounds.left - trackBounds.left,
      behavior: "smooth",
    });
    setActiveIndex(index);
  }

  function syncActiveFrame() {
    if (scrollFrame.current !== null) {
      window.cancelAnimationFrame(scrollFrame.current);
    }

    scrollFrame.current = window.requestAnimationFrame(() => {
      const track = trackRef.current;
      if (!track) return;

      const trackBounds = track.getBoundingClientRect();
      const viewportCenter = track.scrollLeft + track.clientWidth / 2;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      frameRefs.current.forEach((frame, index) => {
        if (!frame) return;
        const frameBounds = frame.getBoundingClientRect();
        const frameCenter =
          track.scrollLeft +
          frameBounds.left -
          trackBounds.left +
          frame.offsetWidth / 2;
        const distance = Math.abs(frameCenter - viewportCenter);

        if (distance < nearestDistance) {
          nearestIndex = index;
          nearestDistance = distance;
        }
      });

      setActiveIndex(nearestIndex);
    });
  }

  return (
    <div className="mt-14 border-t border-white/15 pt-3">
      <div className="flex flex-col gap-4 border-b border-white/15 pb-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5 text-[9px] uppercase tracking-[0.2em] text-white/34">
          <span>Viewing</span>
          <span className="text-white/70">
            {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <span className="hidden h-px w-28 bg-white/20 sm:block" />
        </div>

        <div className="grid grid-cols-2 border border-white/20 text-[9px] uppercase tracking-[0.18em] text-white/45">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="min-w-32 cursor-pointer border-r border-white/20 px-5 py-3 text-left disabled:cursor-default disabled:opacity-25"
          >
            ← Previous
          </button>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === slides.length - 1}
            className="min-w-32 cursor-pointer px-5 py-3 text-right disabled:cursor-default disabled:opacity-25"
          >
            Next →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={syncActiveFrame}
        className="inferno-carousel relative -mx-5 flex snap-x snap-mandatory items-start gap-5 overflow-x-auto px-5 pb-4 pt-6 sm:-mx-8 sm:gap-6 sm:px-8 lg:-mx-12 lg:px-12"
      >
        {slides.map((slide, index) => (
          <figure
            key={`${slide.kind}-${slide.src}`}
            ref={(element) => {
              frameRefs.current[index] = element;
            }}
            className={`${widthClass(slide.width, slide.height)} flex-none snap-start sm:h-[58vh] sm:min-h-[430px] sm:max-h-[650px] sm:w-auto`}
            style={{ aspectRatio: `${slide.width} / ${slide.height}` }}
          >
            <div className="relative h-full w-full overflow-hidden border border-white/10 bg-[#0d0d0d]">
              {slide.kind === "still" ? (
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={slide.width}
                  height={slide.height}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              ) : (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={slide.poster}
                  className="h-full w-full object-contain"
                  aria-label={slide.label}
                >
                  <source src={slide.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <figcaption className="mt-3 flex items-center justify-between border-t border-white/10 pt-3 text-[9px] uppercase tracking-[0.18em] text-white/30">
              <span>{slide.kind === "still" ? "Selected visual" : "Vertical motion"}</span>
              <span>
                {brand.number}.{String(index + 1).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

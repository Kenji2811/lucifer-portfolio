"use client";

import { useEffect, useRef, useState } from "react";

type MotionLoopProps = {
  src: string;
  poster: string;
  label: string;
  className?: string;
  videoClassName?: string;
};

export default function MotionLoop({
  src,
  poster,
  label,
  className = "",
  videoClassName = "",
}: MotionLoopProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (prefersReducedMotion.matches) {
      videoRef.current?.pause();
    }
  }, []);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
      setIsPlaying(true);
      return;
    }

    video.pause();
    setIsPlaying(false);
  }

  return (
    <div className={`group relative overflow-hidden bg-white/[0.04] ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        className={`h-full w-full object-cover ${videoClassName}`}
        aria-label={label}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={togglePlayback}
        className="absolute bottom-3 right-3 flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-black/45 text-[8px] uppercase tracking-[0.12em] text-white/80 backdrop-blur-md transition-colors hover:border-white/60 hover:bg-black/75 sm:bottom-4 sm:right-4"
        aria-label={`${isPlaying ? "Pause" : "Play"} ${label}`}
      >
        {isPlaying ? "II" : "▶"}
      </button>
    </div>
  );
}

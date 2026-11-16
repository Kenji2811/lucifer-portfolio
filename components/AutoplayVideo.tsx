"use client";

import { useEffect, useRef } from "react";
import type { GalleryVideo } from "@/lib/homeGallery";

export default function AutoplayVideo({
  src,
  poster,
  title,
  width,
  height,
}: GalleryVideo) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const element = videoRef.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const video: HTMLVideoElement = element;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;
    let hovered = false;
    let manuallyPaused = false;
    let automaticPause = false;
    let observer: IntersectionObserver | undefined;

    function pauseAutomatically() {
      if (video.paused) return;
      automaticPause = true;
      video.pause();
    }

    function syncPlayback() {
      if (document.hidden || (!inView && !hovered)) {
        pauseAutomatically();
        return;
      }

      if (reducedMotion.matches || manuallyPaused || !video.paused) return;

      void video.play().catch(() => {
        // Native controls remain available if the browser blocks autoplay.
      });
    }

    function observeVisibility() {
      observer?.disconnect();
      const visibleHeight = Math.max(1, window.innerHeight - 72);
      const videoHeight = Math.max(1, video.getBoundingClientRect().height);
      // Tall portrait clips can start without fitting fully on the screen.
      const threshold = Math.min(0.5, (visibleHeight * 0.65) / videoHeight);

      observer = new IntersectionObserver(
        ([entry]) => {
          inView = entry.isIntersecting && entry.intersectionRatio >= threshold;
          if (!entry.isIntersecting) hovered = false;
          syncPlayback();
        },
        { threshold: [0, threshold], rootMargin: "-72px 0px 0px 0px" },
      );
      observer.observe(video);
    }

    function handlePointerEnter(event: PointerEvent) {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
      hovered = true;
      manuallyPaused = false;
      syncPlayback();
    }

    function handlePointerLeave() {
      hovered = false;
      syncPlayback();
    }

    function handlePause() {
      if (automaticPause) automaticPause = false;
      else manuallyPaused = true;
    }

    function handlePlay() {
      manuallyPaused = false;
    }

    function handleMotionChange() {
      if (reducedMotion.matches) pauseAutomatically();
      else syncPlayback();
    }

    video.addEventListener("pointerenter", handlePointerEnter);
    video.addEventListener("pointerleave", handlePointerLeave);
    video.addEventListener("pause", handlePause);
    video.addEventListener("play", handlePlay);
    document.addEventListener("visibilitychange", syncPlayback);
    window.addEventListener("resize", observeVisibility);
    reducedMotion.addEventListener("change", handleMotionChange);
    observeVisibility();

    return () => {
      observer?.disconnect();
      video.removeEventListener("pointerenter", handlePointerEnter);
      video.removeEventListener("pointerleave", handlePointerLeave);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("play", handlePlay);
      document.removeEventListener("visibilitychange", syncPlayback);
      window.removeEventListener("resize", observeVisibility);
      reducedMotion.removeEventListener("change", handleMotionChange);
      video.pause();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      controls
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-label={title}
      style={{ aspectRatio: `${width} / ${height}` }}
      className="block h-auto w-full bg-white/[0.04]"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support video playback.
    </video>
  );
}

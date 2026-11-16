import Image from "next/image";
import Link from "next/link";
import HomeArrow from "@/components/HomeArrow";

export default function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="home-hero-inner">
        <div className="home-hero-topline reveal-up">
          <p>Marketing communication / Visual design</p>
          <span>Portfolio / 2026</span>
        </div>

        <div className="home-hero-content">
          <h1 id="home-title" className="headline-reveal">LUCIFER</h1>
          <div className="home-hero-copy reveal-up-delayed">
            <h2>Visual<br />communicator.</h2>
            <p>
              I turn communication goals into clear visual systems — built for
              campaigns, content and motion.
            </p>
            <div className="home-hero-links">
              <a href="#selected-work">Explore the work <HomeArrow direction="down" /></a>
              <Link href="/about">About me <HomeArrow /></Link>
            </div>
          </div>
        </div>

        <div className="home-hero-portrait about-subject-reveal">
          <Image
            src="/lucifer-portfolio/about-portrait-cutout-bw-v2.png"
            alt="Lucifer seated on a stool, looking towards the introduction"
            fill
            preload
            sizes="(max-width: 767px) 760px, (max-width: 1600px) 82vw, 1400px"
            className="home-hero-portrait-image"
          />
        </div>

        <div className="home-hero-bottomline">
          <span>Selected works / 2022—2026</span>
          <span>Based in Vietnam</span>
        </div>
      </div>
    </section>
  );
}

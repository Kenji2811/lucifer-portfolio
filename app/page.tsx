import HomeGallery from "@/components/HomeGallery";
import HomeArrow from "@/components/HomeArrow";
import HomeHero from "@/components/HomeHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page relative min-h-screen bg-[#080808] text-[#f5f5f2]">
      <SiteHeader active="home" fixed />
      <HomeHero />
      <HomeGallery />
      <section className="home-contact" aria-labelledby="home-contact-title">
        <p className="home-eyebrow">Have a project in mind?</p>
        <Link href="/contact" className="home-contact-link">
          <h2 id="home-contact-title">Let&apos;s work<br />together.</h2>
          <span><HomeArrow /></span>
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}

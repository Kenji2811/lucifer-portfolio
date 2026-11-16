import Image from "next/image";
import Link from "next/link";
import HomeArrow from "@/components/HomeArrow";

import {
  campaignCollections,
  motionVideos,
  talataImages,
  talataMenu,
  type GalleryImage,
} from "@/lib/homeGallery";

function ImageGrid({
  images,
  href,
  featureFirst = false,
  layout = "",
}: {
  images: GalleryImage[];
  href: string;
  featureFirst?: boolean;
  layout?: "" | "menu";
}) {
  return (
    <div className={`home-gallery-grid ${layout === "menu" ? "home-gallery-grid--menu" : ""}`}>
      {images.map((image, index) => (
        <figure
          key={image.src}
          className={`home-gallery-item ${featureFirst && index === 0 ? "home-gallery-item--wide" : ""}`}
        >
          <Link
            href={href}
            className="home-gallery-image block overflow-hidden bg-white/[0.04]"
            aria-label={`View ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes={featureFirst && index === 0 ? "100vw" : "(max-width: 767px) 100vw, 50vw"}
              loading="lazy"
              className="block h-auto w-full"
            />
          </Link>
          <figcaption className="home-gallery-caption">
            <span>{image.title}</span>
            <span className="home-gallery-caption-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function HomeGallery() {
  return (
    <div id="selected-work" className="home-gallery">
      <div className="home-work-index home-eyebrow">
        <p>Selected work / 2022—2026</p>
        <nav aria-label="Portfolio chapters">
          <a href="#brand-communication">01 Brand</a>
          <a href="#campaign-art-direction">02 Campaign</a>
          <a href="#motion-design-film">03 Motion</a>
        </nav>
      </div>

      <section id="brand-communication" className="home-chapter" aria-labelledby="home-brand-title">
        <div className="home-chapter-heading">
          <span className="home-chapter-number">01</span>
          <h2 id="home-brand-title" className="home-gallery-title">
            <Link href="/work/morningstar">Brand<br />communication.</Link>
          </h2>
          <span className="home-chapter-arrow"><HomeArrow direction="down-right" /></span>
        </div>
        <h3 className="home-gallery-label">Talata Seafood</h3>
        <ImageGrid images={talataImages} href="/work/morningstar" featureFirst />

        <h3 className="home-gallery-label home-collection-heading">Menu design</h3>
        <ImageGrid images={talataMenu} href="/work/morningstar" layout="menu" />
      </section>

      <section
        id="campaign-art-direction"
        aria-labelledby="home-campaign-title"
        className="home-chapter home-gallery-section"
      >
        <div className="home-chapter-heading">
          <span className="home-chapter-number">02</span>
          <h2 id="home-campaign-title" className="home-gallery-title">
            <Link href="/work/inferno">Campaign<br />art direction.</Link>
          </h2>
          <span className="home-chapter-arrow"><HomeArrow direction="down-right" /></span>
        </div>
        <div className="home-campaign-collections">
          {campaignCollections.map((collection) => (
            <div key={collection.id}>
              <h3 className="home-gallery-label">{collection.title}</h3>
              <ImageGrid
                images={collection.images}
                href={`/work/inferno#${collection.id}`}
              />
            </div>
          ))}
        </div>
      </section>

      <section
        id="motion-design-film"
        aria-labelledby="home-motion-title"
        className="home-chapter home-gallery-section"
      >
        <div className="home-chapter-heading">
          <span className="home-chapter-number">03</span>
          <h2 id="home-motion-title" className="home-gallery-title">
            <Link href="/work/pandemonium">Motion<br />&amp; film.</Link>
          </h2>
          <span className="home-chapter-arrow"><HomeArrow direction="down-right" /></span>
        </div>
        <div className="home-gallery-grid">
          {motionVideos.map((video, index) => (
            <figure
              key={video.src}
              className={`home-gallery-item ${index === 0 ? "home-gallery-item--wide" : ""}`}
            >
              <video
                controls
                playsInline
                preload="none"
                poster={video.poster}
                aria-label={video.title}
                style={{ aspectRatio: `${video.width} / ${video.height}` }}
                className="block h-auto w-full bg-white/[0.04]"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support video playback.
              </video>
              <figcaption className="home-gallery-caption">
                <span>{video.title}</span>
                <span className="home-gallery-caption-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}

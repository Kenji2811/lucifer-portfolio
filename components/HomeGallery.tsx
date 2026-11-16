import Image from "next/image";
import Link from "next/link";

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
  eager = false,
}: {
  images: GalleryImage[];
  href: string;
  eager?: boolean;
}) {
  return (
    <div className="home-gallery-grid">
      {images.map((image, index) => (
        <figure key={image.src} className="home-gallery-item">
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
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              loading={eager && index === 0 ? "eager" : "lazy"}
              className="block h-auto w-full"
            />
          </Link>
          <figcaption className="home-gallery-caption">
            {image.title}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function HomeGallery() {
  return (
    <div className="home-gallery px-5 pb-12 pt-28 sm:px-8 sm:pt-32 lg:px-12">
      <section id="brand-communication" aria-labelledby="home-brand-title">
        <h2 id="home-brand-title" className="home-gallery-title">
          <Link href="/work/morningstar">Brand communication</Link>
        </h2>
        <h3 className="home-gallery-label">Talata Seafood</h3>
        <ImageGrid images={talataImages} href="/work/morningstar" eager />

        <h3 className="home-gallery-label mt-10 sm:mt-14">Menu design</h3>
        <ImageGrid images={talataMenu} href="/work/morningstar" />
      </section>

      <section
        id="campaign-art-direction"
        aria-labelledby="home-campaign-title"
        className="home-gallery-section"
      >
        <h2 id="home-campaign-title" className="home-gallery-title">
          <Link href="/work/inferno">Campaign art direction</Link>
        </h2>
        <div className="space-y-10 sm:space-y-14">
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
        className="home-gallery-section"
      >
        <h2 id="home-motion-title" className="home-gallery-title">
          <Link href="/work/pandemonium">Motion design &amp; film</Link>
        </h2>
        <div className="home-gallery-grid">
          {motionVideos.map((video) => (
            <figure key={video.src} className="home-gallery-item">
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
                {video.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}

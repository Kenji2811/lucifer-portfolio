import type { Metadata } from "next";
import Link from "next/link";

import RevealOnScroll from "@/components/RevealOnScroll";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand communication, campaign art direction, social content and motion design services by Lucifer.",
};

const services = [
  {
    number: "01",
    title: "Brand communication",
    description:
      "Communication systems that keep a brand recognisable across campaigns, social content, menus, print and digital touchpoints.",
    deliverables: "Brand direction / Communication system / Guidelines / Applications",
  },
  {
    number: "02",
    title: "Campaign art direction",
    description:
      "Campaign ideas translated into clear key visuals and adaptable formats — from the first concept to the final rollout.",
    deliverables: "Concept / Key visual / Launch / Seasonal campaign",
  },
  {
    number: "03",
    title: "Social content & design",
    description:
      "Always-on content shaped around brand voice, audience behaviour and the rhythm of each social platform.",
    deliverables: "Content planning / Social design / Copy direction / Format adaptation",
  },
  {
    number: "04",
    title: "Motion design & film",
    description:
      "Short-form motion and video editing that turn campaign ideas, products and brand stories into engaging moving images.",
    deliverables: "Reels / Video editing / Motion graphics / Post-production",
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-[#f5f5f2]">
      <SiteHeader active="services" />

      <section className="px-5 pb-20 pt-36 sm:px-8 sm:pt-44 lg:px-12 lg:pb-28">
        <div className="flex items-end justify-between gap-8">
          <p className="reveal-up text-[10px] uppercase tracking-[0.28em] text-white/45">
            Practice / Capabilities
          </p>
          <p className="hidden max-w-xs text-right text-xs leading-relaxed text-white/45 md:block">
            Strategy, design and motion for F&amp;B, hospitality and
            experience-led brands.
          </p>
        </div>

        <h1 className="headline-reveal-delayed mt-12 text-[16vw] font-bold uppercase leading-[0.78] tracking-[-0.09em] sm:mt-16">
          Services
        </h1>
      </section>

      <section className="px-5 pb-28 sm:px-8 lg:px-12">
        <div className="border-t border-white/15">
          {services.map((service, index) => (
            <RevealOnScroll key={service.number} delay={index * 70}>
              <article className="group grid gap-5 border-b border-white/15 py-8 sm:grid-cols-[4rem_1fr] lg:grid-cols-[5rem_0.8fr_1fr] lg:items-start lg:py-11">
                <span className="text-[10px] tracking-[0.2em] text-white/35">
                  / {service.number}
                </span>
                <h2 className="text-3xl font-medium tracking-[-0.05em] transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                  {service.title}
                </h2>
                <div className="sm:col-start-2 lg:col-start-3">
                  <p className="max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
                    {service.description}
                  </p>
                  <p className="mt-6 text-[9px] uppercase leading-relaxed tracking-[0.18em] text-white/35">
                    {service.deliverables}
                  </p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <RevealOnScroll>
        <section className="border-t border-white/15 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">
            Have a project in mind?
          </p>
          <Link href="/contact" className="group mt-8 flex items-end justify-between gap-8">
            <span className="text-[12vw] font-medium leading-none tracking-[-0.07em] sm:text-[9vw]">
              Let&apos;s talk
            </span>
            <span className="mb-2 text-3xl transition-transform duration-300 group-hover:translate-x-2 sm:text-5xl">
              →
            </span>
          </Link>
        </section>
      </RevealOnScroll>

      <SiteFooter />
    </main>
  );
}

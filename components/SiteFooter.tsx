import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/15 px-5 py-7 text-[9px] uppercase tracking-[0.18em] text-white/35 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-white/70">Lucifer — Graphic designer / 3D artist</p>
          <p className="mt-2">Vietnam / Working worldwide</p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <span>© 2026 / All rights reserved</span>
      </div>
    </footer>
  );
}

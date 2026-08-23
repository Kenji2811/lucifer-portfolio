import Link from "next/link";

type SiteHeaderProps = {
  active: "home" | "work" | "services" | "about" | "contact";
  variant?: "on-dark" | "on-light";
};

const navItems = [
  { label: "Work", href: "/work", id: "work" },
  { label: "Services", href: "/services", id: "services" },
  { label: "About", href: "/about", id: "about" },
  { label: "Contact", href: "/contact", id: "contact" },
] as const;

export default function SiteHeader({
  active,
  variant = "on-dark",
}: SiteHeaderProps) {
  const isOnLight = variant === "on-light";

  return (
    <header className="site-header-reveal absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
      <Link
        href="/"
        aria-current={active === "home" ? "page" : undefined}
        className={`text-sm font-semibold tracking-[-0.04em] ${
          isOnLight ? "text-black" : "text-white"
        }`}
      >
        LUCIFER
        <span
          className={`ml-0.5 text-[8px] align-top ${
            isOnLight ? "text-black/40" : "text-white/40"
          }`}
        >
          ®
        </span>
      </Link>

      <div className="flex items-center gap-6 sm:gap-10">
        <nav aria-label="Primary navigation" className="flex gap-3 sm:gap-6 lg:gap-8">
          {navItems.map((item) => {
            const isActive = active === item.id;

            return (
              <Link
                key={item.id}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-[9px] uppercase tracking-[0.14em] transition-colors sm:text-xs sm:tracking-[0.18em] ${
                  isOnLight
                    ? isActive
                      ? "text-black"
                      : "text-black/45 hover:text-black"
                    : isActive
                      ? "text-white"
                      : "text-white/45 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <span
          className={`hidden items-center gap-2 text-[10px] uppercase tracking-[0.18em] md:flex ${
            isOnLight ? "text-black/45" : "text-white/45"
          }`}
        >
          <span
            className={`size-1.5 rounded-full ${
              isOnLight ? "bg-[#d9cb93]" : "bg-[#b8ff5a]"
            }`}
          />
          Available
        </span>
      </div>
    </header>
  );
}

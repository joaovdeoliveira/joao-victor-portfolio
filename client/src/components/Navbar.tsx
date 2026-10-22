import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { usePreferences } from "@/lib/preferences";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t, locale, theme, toggleLocale, toggleTheme } = usePreferences();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const iconButton =
    "inline-flex h-9 items-center justify-center rounded-md px-2.5 text-muted transition-colors hover:bg-foreground/5 hover:text-foreground";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-medium"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-8 place-items-center rounded-md border border-border-strong font-mono text-xs">
            {site.initials}
          </span>
          <span className="hidden sm:inline">{site.shortName}</span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="mr-2 hidden items-center gap-1 md:flex">
            {t.nav.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleLocale}
            className={cn(iconButton, "font-mono text-xs")}
            aria-label={t.a11y.toggleLanguage}
            title={t.a11y.toggleLanguage}
          >
            <span className={locale === "pt" ? "text-foreground" : undefined}>
              PT
            </span>
            <span className="mx-1 text-subtle">/</span>
            <span className={locale === "en" ? "text-foreground" : undefined}>
              EN
            </span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className={iconButton}
            aria-label={t.a11y.toggleTheme}
            title={t.a11y.toggleTheme}
          >
            {theme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setOpen(prev => !prev)}
            className={cn(iconButton, "md:hidden")}
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="container-page flex flex-col pb-4 md:hidden"
        >
          {t.nav.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-3 text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

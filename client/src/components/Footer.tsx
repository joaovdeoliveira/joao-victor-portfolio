import { ArrowUp } from "lucide-react";
import { site } from "@/data/site";
import { usePreferences } from "@/lib/preferences";

export function Footer() {
  const { t } = usePreferences();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page flex flex-col gap-3 py-8 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. {t.footer.rights}
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
        >
          {t.footer.backToTop}
          <ArrowUp className="size-3" />
        </a>
      </div>
    </footer>
  );
}

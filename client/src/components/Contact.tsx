import { Check, Copy, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { site } from "@/data/site";
import { usePreferences } from "@/lib/preferences";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t } = usePreferences();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  const linkButton =
    "inline-flex h-11 items-center gap-2 rounded-md border border-border-strong px-4 text-sm font-medium transition-colors hover:bg-foreground/5";

  return (
    <section
      id="contato"
      className="border-t border-border bg-background py-24 md:py-32"
    >
      <Reveal className="container-page">
        <p className="eyebrow mb-3">{t.contact.label}</p>
        <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
          {t.contact.title}
        </h2>
        <p className="mt-6 max-w-xl text-muted md:text-lg">{t.contact.text}</p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            <Mail className="size-4" />
            {site.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className={linkButton}
            aria-live="polite"
          >
            {copied ? (
              <Check className="size-4 text-accent" />
            ) : (
              <Copy className="size-4" />
            )}
            {copied ? t.contact.copied : t.contact.copy}
          </button>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className={linkButton}
          >
            <FaLinkedin className="size-4" />
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className={linkButton}
          >
            <SiGithub className="size-4" />
            GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}

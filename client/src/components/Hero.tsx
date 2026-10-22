import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { site } from "@/data/site";
import { usePreferences } from "@/lib/preferences";

export function Hero() {
  const { t } = usePreferences();
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  });

  return (
    <section id="top" className="relative flex min-h-[100svh] items-end">
      <div className="container-page pt-32 pb-16 md:pb-24">
        <motion.p
          {...fadeUp(0)}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted backdrop-blur"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          {t.hero.status}
        </motion.p>

        <motion.p {...fadeUp(0.05)} className="eyebrow mb-4">
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          {...fadeUp(0.1)}
          className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
        >
          {t.hero.lead}
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contato"
            className="inline-flex h-11 items-center rounded-md bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            {t.hero.primaryCta}
          </a>
          <a
            href="#experiencia"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-border-strong bg-background/40 px-5 text-sm font-medium backdrop-blur transition-colors hover:bg-foreground/5"
          >
            {t.hero.secondaryCta}
            <ArrowDownRight className="size-4" />
          </a>
          {site.cvPath && (
            <a
              href={`${import.meta.env.BASE_URL}${site.cvPath}`}
              download
              className="inline-flex h-11 items-center gap-2 rounded-md px-3 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <Download className="size-4" />
              {t.hero.cvCta}
            </a>
          )}

          <span
            className="mx-1 hidden h-6 w-px bg-border-strong sm:block"
            aria-hidden="true"
          />

          <div className="flex items-center gap-1">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid size-11 place-items-center rounded-md text-muted transition-colors hover:text-foreground"
            >
              <SiGithub className="size-5" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid size-11 place-items-center rounded-md text-muted transition-colors hover:text-foreground"
            >
              <FaLinkedin className="size-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

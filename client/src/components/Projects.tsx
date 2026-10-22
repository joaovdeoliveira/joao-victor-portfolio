import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { MouseEvent } from "react";
import { usePreferences } from "@/lib/preferences";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

// Brilho que segue o cursor, inspirado no SpotlightCard da React Bits.
function trackSpotlight(event: MouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty(
    "--x",
    `${event.clientX - rect.left}px`
  );
  event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
}

export function Projects() {
  const { t } = usePreferences();
  const { projects } = t;

  return (
    <Section id="projetos" label={projects.label} title={projects.title}>
      <p className="-mt-6 mb-10 max-w-xl text-muted">{projects.intro}</p>
      <div className="grid gap-4 md:grid-cols-3">
        {projects.items.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.06} className="h-full">
            <article
              onMouseMove={trackSpotlight}
              className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-border-strong"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(320px circle at var(--x) var(--y), color-mix(in srgb, var(--foreground) 7%, transparent), transparent 70%)",
                }}
                aria-hidden="true"
              />
              <p className="eyebrow">{project.kind}</p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                {project.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-1.5">
                {project.stack.map(tech => (
                  <li
                    key={tech}
                    className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="relative mt-6 flex gap-4 border-t border-border pt-4 text-sm">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
                  >
                    <SiGithub className="size-3.5" />
                    {projects.repo}
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-muted transition-colors hover:text-foreground"
                  >
                    {projects.live}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

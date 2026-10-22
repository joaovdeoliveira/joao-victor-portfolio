import { usePreferences } from "@/lib/preferences";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Experience() {
  const { t } = usePreferences();
  const { experience } = t;

  return (
    <Section id="experiencia" label={experience.label} title={experience.title}>
      <ol className="space-y-16">
        {experience.items.map(item => (
          <li key={item.company}>
            <Reveal className="grid gap-4 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-10">
              <div className="font-mono text-xs text-muted md:pt-1.5">
                <p className="text-foreground">
                  {item.current
                    ? `${item.period} – ${experience.present}`
                    : item.period}
                </p>
                <p className="mt-1">{item.location}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {item.role}
                  <span className="text-muted"> · {item.company}</span>
                </h3>
                <ul className="mt-4 space-y-2.5 text-muted">
                  {item.highlights.map(highlight => (
                    <li
                      key={highlight}
                      className="relative pl-5 leading-relaxed"
                    >
                      <span
                        className="absolute top-[0.7em] left-0 h-px w-2.5 bg-subtle"
                        aria-hidden="true"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {item.clients && (
                  <div className="mt-8">
                    <p className="eyebrow mb-3">{experience.clientsLabel}</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {item.clients.map(client => (
                        <article
                          key={client.name}
                          className="rounded-lg border border-border bg-card p-5"
                        >
                          <h4 className="font-medium">{client.name}</h4>
                          <p className="mt-0.5 text-sm text-subtle">
                            {client.summary}
                          </p>
                          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                            {client.highlights.map(highlight => (
                              <li key={highlight}>{highlight}</li>
                            ))}
                          </ul>
                        </article>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

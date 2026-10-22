import { site } from "@/data/site";
import { usePreferences } from "@/lib/preferences";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function About() {
  const { t } = usePreferences();

  return (
    <Section id="sobre" label={t.about.label} title={t.about.title}>
      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
        <Reveal>
          <img
            src={`${import.meta.env.BASE_URL}img/Eu.jpeg`}
            alt={site.name}
            width={480}
            height={480}
            loading="lazy"
            className="aspect-square w-full max-w-xs rounded-xl border border-border object-cover"
          />
          <dl className="mt-8 max-w-xs space-y-4 text-sm">
            {t.about.facts.map(fact => (
              <div key={fact.label}>
                <dt className="eyebrow mb-1">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal
          delay={0.1}
          className="space-y-5 text-base leading-relaxed text-muted md:text-lg"
        >
          {t.about.paragraphs.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}

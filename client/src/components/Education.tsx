import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { certificates } from "@/data/certificates";
import { usePreferences } from "@/lib/preferences";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const VISIBLE_CERTIFICATES = 8;

export function Education() {
  const { t, locale } = usePreferences();
  const { education } = t;
  const [showAll, setShowAll] = useState(false);

  const formatDate = (value: string) => {
    const [year, month] = value.split("-").map(Number);
    return new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", {
      month: "short",
      year: "numeric",
    }).format(new Date(year, month - 1));
  };

  const visible = showAll
    ? certificates
    : certificates.slice(0, VISIBLE_CERTIFICATES);

  return (
    <Section id="formacao" label={education.label} title={education.title}>
      <ol className="divide-y divide-border border-y border-border">
        {education.items.map(item => (
          <li key={item.course}>
            <Reveal className="grid gap-1 py-5 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-10">
              <p className="font-mono text-xs text-muted md:pt-1">
                {item.current
                  ? `${item.period} – ${t.experience.present}`
                  : item.period}
              </p>
              <div>
                <h3 className="font-medium">{item.course}</h3>
                <p className="text-sm text-muted">{item.institution}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <h3 className="eyebrow mt-16 mb-4">
        {education.certificatesTitle}{" "}
        <span className="text-subtle">({certificates.length})</span>
      </h3>
      <ul className="grid gap-x-10 sm:grid-cols-2">
        {visible.map(cert => (
          <li
            key={`${cert.title}-${cert.issuer}`}
            className="border-b border-border"
          >
            <a
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-baseline justify-between gap-4 py-3 text-sm"
            >
              <span>
                <span className="transition-colors group-hover:text-foreground">
                  {cert.title}
                </span>
                <span className="text-muted"> · {cert.issuer}</span>
              </span>
              <span className="flex shrink-0 items-center gap-1 font-mono text-xs text-subtle">
                {formatDate(cert.date)}
                <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
              </span>
            </a>
          </li>
        ))}
      </ul>
      {certificates.length > VISIBLE_CERTIFICATES && (
        <button
          type="button"
          onClick={() => setShowAll(prev => !prev)}
          className="mt-6 text-sm text-muted underline underline-offset-4 transition-colors hover:text-foreground"
        >
          {showAll
            ? education.showLess
            : `${education.showAll} (${certificates.length})`}
        </button>
      )}
    </Section>
  );
}

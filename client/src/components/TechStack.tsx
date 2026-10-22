import type { IconType } from "react-icons";
import { FaAws, FaJava } from "react-icons/fa";
import {
  SiAngular,
  SiDocker,
  SiNextdotjs,
  SiPostgresql,
  SiQuarkus,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import { usePreferences } from "@/lib/preferences";
import { Reveal } from "./Reveal";

const technologies: { name: string; icon: IconType }[] = [
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Quarkus", icon: SiQuarkus },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Redis", icon: SiRedis },
  { name: "RabbitMQ", icon: SiRabbitmq },
  { name: "Docker", icon: SiDocker },
  { name: "AWS", icon: FaAws },
  { name: "Angular", icon: SiAngular },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
];

// Grade de logos no estilo dos "logo clouds" da Aceternity UI.
export function TechStack() {
  const { t } = usePreferences();

  return (
    <section
      aria-labelledby="stack-title"
      className="relative bg-background pt-12 pb-20 md:pt-16 md:pb-28"
    >
      {/* Dissolve as linhas do fundo do hero em vez de cortá-las. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-full h-40 bg-gradient-to-b from-transparent to-background"
        aria-hidden="true"
      />
      <div className="container-page">
        <Reveal>
          <h2 id="stack-title" className="eyebrow mb-6 text-center">
            {t.stack.title}
          </h2>
          <ul className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4 lg:grid-cols-6">
            {technologies.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className="group flex flex-col items-center justify-center gap-2.5 bg-background px-2 py-6 transition-colors hover:bg-card"
              >
                <Icon
                  className="size-7 text-subtle transition-colors duration-300 group-hover:text-foreground"
                  aria-hidden="true"
                />
                <span className="text-xs text-muted">{name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

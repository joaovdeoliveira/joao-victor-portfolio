import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  label,
  title,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("border-t border-border py-20 md:py-28", className)}
    >
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-3">{label}</p>
          <h2 className="mb-12 max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

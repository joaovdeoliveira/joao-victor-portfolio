import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  createScrollThreads,
  type ScrollThreadsOptions,
} from "./threadsEngine";

interface ScrollThreadsProps extends ScrollThreadsOptions {
  className?: string;
}

/**
 * Fundo Threads guiado pelo scroll: descer a página avança a animação,
 * subir faz ela voltar. Fica fixo atrás de todo o conteúdo.
 */
export default function ScrollThreads({
  className,
  ...options
}: ScrollThreadsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<ReturnType<typeof createScrollThreads> | null>(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    const engine = createScrollThreads(containerRef.current, options);
    engineRef.current = engine;
    return () => {
      engine.destroy();
      engineRef.current = null;
    };
    // Monta uma vez; mudanças de props passam pelo update() abaixo.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    engineRef.current?.update(options);
  });

  return (
    <div
      ref={containerRef}
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 h-lvh w-full",
        className
      )}
      aria-hidden="true"
    />
  );
}

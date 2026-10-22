import { usePreferences } from "@/lib/preferences";
import ScrollThreads from "./backgrounds/ScrollThreads";

// Fundo fixo da página inteira: as linhas avançam ao descer e voltam ao subir.
export function PageBackground() {
  const { theme } = usePreferences();
  const dark = theme === "dark";

  return (
    <ScrollThreads
      color={dark ? "#e4e4e7" : "#18181b"}
      amplitude={1.2}
      amplitudeTo={2.4}
      angle={18}
      angleTo={-12}
      scrollSpeed={3}
      smoothing={5}
      opacity={dark ? 0.5 : 0.35}
    />
  );
}

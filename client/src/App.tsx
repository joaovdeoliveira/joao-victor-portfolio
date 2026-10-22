import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { TechStack } from "./components/TechStack";
import { PreferencesProvider } from "./lib/preferences";

export default function App() {
  return (
    <PreferencesProvider>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <About />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </PreferencesProvider>
  );
}

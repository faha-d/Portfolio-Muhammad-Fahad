import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import ExperienceSection from "../components/ExperienceSection";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <footer className="border-t border-white/[0.055] px-5 py-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
          <span>© 2026 Muhammad Fahad</span>
          <span className="mono flex items-center gap-2">
            <span className="status-dot" /> Built with ♡ by Muhammad Fahad
          </span>
        </div>
      </footer>
    </main>
  );
}

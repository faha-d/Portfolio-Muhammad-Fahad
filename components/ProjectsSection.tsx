"use client";
import { projects } from "./site-data";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import SectionLabel from "./ui/SectionLabel";
export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-dark border-y border-white/[0.055] px-5 py-24 lg:px-8 lg:py-32"
    >
      <Reveal className="mx-auto max-w-7xl">
        <SectionLabel number="03" title="SELECTED WORK" />
        <div className="mt-4 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <h2 className="section-title text-3xl font-semibold tracking-tight sm:text-5xl">
              Products, not practice projects.
            </h2>
            <p className="mt-4 max-w-2xl text-slate-400">
              A closer look at production systems and frontend experiences
              I&apos;ve helped build.
            </p>
          </div>
          <span className="mono text-xs text-slate-600">03 CASE STUDIES</span>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

"use client";
import Reveal from "./Reveal";
import SectionLabel from "./ui/SectionLabel";
import { skills } from "./site-data";
export default function SkillsSection() {
  return (
    <section id="skills" className="px-5 pb-8 pt-12 lg:px-8 lg:pb-12 lg:pt-16">
      <Reveal className="mx-auto max-w-7xl">
        <SectionLabel number="02" title="TOOLKIT" />
        <h2 className="section-title mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
          Technologies I use to ship.
        </h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {skills.map((item) => (
            <span
              key={item}
              className="skill-pill rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-sm text-slate-300 transition hover:border-[#5cff9a]/20 hover:bg-[#5cff9a]/[0.04]"
            >
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

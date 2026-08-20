"use client";
import { ArrowUpRight } from "lucide-react";
import { experience } from "./site-data";
import Reveal from "./Reveal";
import SectionLabel from "./ui/SectionLabel";
export default function ExperienceSection() {
  return (
    <section id="experience" className="px-5 py-24 lg:px-8 lg:py-32">
      <Reveal className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <SectionLabel number="02" title="EXPERIENCE" />
            <h2 className="section-title mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Production experience.
            </h2>
            <p className="mt-4 max-w-2xl text-slate-400">
              The work that shaped how I build, test, optimize and ship frontend
              systems.
            </p>
          </div>
          <div className="mono flex items-center gap-2 text-xs text-slate-600">
            <span className="status-dot" /> 2023 — Present
          </div>
        </div>
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#080e19] p-5 sm:p-8">
          <div className="flex flex-col gap-5 border-b border-white/[0.07] pb-7 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="mono text-[10px] tracking-[0.18em] text-[#5cff9a]">
                CURRENT ROLE
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                Frontend Developer
              </h3>
              <p className="mt-1 text-slate-400">
                PureSquare <span className="text-slate-700">·</span> Disrupt
                Formerly Gaditek
              </p>
            </div>
            <div className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-2 text-xs text-slate-500">
              React · Next.js · TypeScript
            </div>
          </div>
          <div className="experience-grid mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {experience.map((item) => (
              <article
                key={item.number}
                className="experience-card group rounded-xl border border-white/[0.07] bg-[#0b1220] p-5 transition hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <span className="mono text-[10px] text-slate-700">
                    {item.number}
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="text-slate-700 transition group-hover:text-[#5cff9a]"
                  />
                </div>
                <h4 className="mt-6 text-base font-semibold text-slate-100">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
                <div className="mt-5 border-t border-white/[0.055] pt-4">
                  <p className="mono text-[10px] uppercase tracking-wide text-slate-700">
                    Result
                  </p>
                  <p className="mt-1 text-xs font-medium leading-5 text-[#8dffb6]">
                    {item.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

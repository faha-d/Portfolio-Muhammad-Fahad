"use client";
import { Layers3 } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./ui/SectionLabel";
export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-dark border-y border-white/[0.055] px-5 py-24 lg:px-8 lg:py-28"
    >
      <Reveal className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <SectionLabel number="01" title="ABOUT" />
        <div>
          <h2 className="section-title max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Engineering with product thinking.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m a frontend developer focused on building reliable,
            high-quality web experiences with React, Next.js and TypeScript.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-500">
            Over 2+ years, I&apos;ve worked on production applications in the
            consumer security and fintech space, contributing to checkout
            experiences, product addons, API integrations, testing,
            accessibility and frontend performance.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              "Clean interfaces",
              "Reusable components",
              "Performance-minded",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"
              >
                <Layers3 size={17} className="text-[#5cff9a]" />
                <p className="mt-3 text-sm text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

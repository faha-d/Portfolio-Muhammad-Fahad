"use client";
import { ArrowUpRight, Zap } from "lucide-react";
import { projects } from "./site-data";
type Project = (typeof projects)[number];
function MockField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/[0.05] bg-[#050a14] p-2">
      <p className="text-[7px] text-slate-700">{label}</p>
      <p className="mt-1 truncate text-[8px] text-slate-400">{value}</p>
    </div>
  );
}
function SummaryRow({ a, b }: { a: string; b: string }) {
  return (
    <div className="flex justify-between gap-2 text-[8px]">
      <span className="text-slate-600">{a}</span>
      <span className="text-slate-300">{b}</span>
    </div>
  );
}
function CheckoutMockup() {
  return (
    <div className="mockup-grid grid h-full gap-3 sm:grid-cols-[1.35fr_.65fr]">
      <div className="rounded-lg border border-white/[0.06] bg-[#080e19] p-3 sm:p-5">
        <div className="flex items-center justify-between">
          <span className="mono text-[8px] text-slate-600">CHECKOUT</span>
          <span className="rounded-full bg-[#5cff9a]/10 px-2 py-1 text-[7px] text-[#8dffb6]">
            STEP 2 / 3
          </span>
        </div>
        <div className="mt-4 h-1 rounded-full bg-white/[0.05]">
          <div className="h-full w-2/3 rounded-full bg-[#5cff9a]/70" />
        </div>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          <MockField label="Product" value="Premium Plan" />
          <MockField label="Addon" value="Dark Web Monitoring" />
        </div>
        <div className="mt-2">
          <MockField label="Email" value="customer@example.com" />
        </div>
        <div className="mt-4 flex justify-end">
          <span className="rounded-md bg-[#5cff9a] px-3 py-1.5 text-[8px] font-semibold text-[#06100b]">
            Continue →
          </span>
        </div>
      </div>
      <div className="rounded-lg border border-white/[0.06] bg-[#0b1220] p-3 sm:p-5">
        <span className="mono text-[8px] text-slate-600">ORDER SUMMARY</span>
        <div className="mt-4 space-y-3">
          <SummaryRow a="Premium" b="$12.95" />
          <SummaryRow a="Addon" b="$2.00" />
          <div className="border-t border-white/[0.06] pt-3">
            <SummaryRow a="Total" b="$14.95" />
          </div>
        </div>
      </div>
    </div>
  );
}
function EsimMockup() {
  return (
    <div className="grid h-full place-items-center">
      <div className="w-full max-w-sm rounded-lg border border-white/[0.07] bg-[#080e19] p-4 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#5cff9a]/10 text-[#5cff9a]">
            <Zap size={17} />
          </div>
          <div>
            <p className="text-xs font-semibold">Travel eSIM</p>
            <p className="text-[9px] text-slate-600">Ready to activate</p>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {["10 GB", "30 Days", "5G"].map((x) => (
            <div
              key={x}
              className="rounded-md border border-white/[0.06] p-2 text-center"
            >
              <p className="mono text-[8px] text-[#8dffb6]">{x}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 h-8 rounded-md bg-[#5cff9a]/10" />
      </div>
    </div>
  );
}
function AddonMockup() {
  return (
    <div className="grid h-full grid-cols-2 gap-3">
      {[
        ["ADDON 01", "Dark Web Monitoring", "Protection enabled"],
        ["ADDON 02", "Residential Network", "Connected"],
      ].map(([label, title, status], index) => (
        <div
          key={label}
          className="rounded-lg border border-white/[0.07] bg-[#080e19] p-3 sm:p-4"
        >
          <p className="mono text-[8px] text-slate-600">{label}</p>
          <p className="mt-4 text-xs font-semibold">{title}</p>
          <div
            className={`mt-3 h-1 ${index ? "bg-sky-300/30" : "bg-[#5cff9a]/40"}`}
          />
          <p className="mt-2 text-[8px] text-slate-600">{status}</p>
        </div>
      ))}
    </div>
  );
}
export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className={`project-card group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1220] transition hover:-translate-y-1 ${project.large ? "md:col-span-2" : ""}`}
    >
      <div
        className={`project-visual relative overflow-hidden border-b border-white/[0.06] bg-[#070d18] ${project.large ? "aspect-[16/8]" : "aspect-[16/10]"}`}
      >
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="project-glow absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#5cff9a]/[0.06] blur-[80px]" />
        <div className="absolute inset-[8%] overflow-hidden rounded-xl border border-white/[0.09] bg-[#050a14] shadow-2xl transition duration-500 group-hover:scale-[1.015]">
          <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-2">
            <div className="flex gap-1.5">
              <i className="terminal-dot bg-red-400/50" />
              <i className="terminal-dot bg-yellow-400/50" />
              <i className="terminal-dot bg-green-400/50" />
            </div>
            <span className="mono text-[8px] text-slate-700">
              fahad / project-{index + 1}
            </span>
          </div>
          <div className="relative h-[calc(100%-31px)] p-4 sm:p-7">
            {project.large ? (
              <CheckoutMockup />
            ) : index === 1 ? (
              <EsimMockup />
            ) : (
              <AddonMockup />
            )}
          </div>
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <p className="mono text-[9px] tracking-[0.12em] text-[#5cff9a]">
          {project.eyebrow}
        </p>
        <div className="mt-3 flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-white sm:text-xl">
            {project.title}
          </h3>
          <ArrowUpRight
            size={17}
            className="mt-1 shrink-0 text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#5cff9a]"
          />
        </div>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.07] bg-white/[0.02] px-2.5 py-1 text-[10px] text-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="mono text-[10px] text-[#8dffb6]">
            {project.metric}
          </span>
        </div>
      </div>
    </article>
  );
}

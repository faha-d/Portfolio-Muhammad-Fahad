"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Check,
  Code2,
  Command,
  Download,
  Terminal,
  Zap,
} from "lucide-react";
import Reveal from "./Reveal";
import { Blue, CodeLine, Green, Keyword, Orange } from "./ui/CodePrimitives";

export default function Hero() {
  return (
    <section
      id="top"
      className="hero-grid relative flex items-center px-5 py-24 lg:px-8 lg:py-28"
    >
      <div className="hero-orb absolute left-1/2 top-16 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#5cff9a]/[0.065] blur-[130px]" />
      <div className="absolute left-[10%] top-[28%] hidden h-px w-32 bg-gradient-to-r from-transparent via-[#5cff9a]/30 to-transparent lg:block" />
      <div className="absolute right-[8%] top-[35%] hidden h-px w-44 bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

      <Reveal className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="text-center lg:text-left"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#5cff9a]/15 bg-[#5cff9a]/[0.05] px-3 py-1.5">
              <span className="status-dot" />
              <span className="mono text-[11px] text-[#8dffb6]">
                FRONTEND DEVELOPER · 3+ YEARS · OPEN TO ROLES
              </span>
            </div>
            <p className="mono text-sm text-[#5cff9a]">Hello, I&apos;m</p>
            <h1 className="hero-title mt-3 text-5xl font-semibold tracking-[-0.055em] sm:text-7xl lg:text-[5.4rem]">
              Muhammad
              <br />
              <span className="text-gradient">Fahad</span>
            </h1>
            <p className="mt-5 text-2xl font-medium text-slate-200 sm:text-3xl">
              Frontend Developer
            </p>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400 lg:mx-0 sm:text-lg">
              Frontend Developer building production-ready React and Next.js
              applications with TypeScript, responsive UI, accessible
              interfaces, state management, and API integrations.
            </p>
            <div className="mono mt-5 flex flex-wrap justify-center gap-x-3 gap-y-2 text-xs text-slate-500 lg:justify-start">
              <span>React</span>
              <span className="text-[#5cff9a]">·</span>
              <span>Next.js</span>
              <span className="text-[#5cff9a]">·</span>
              <span>TypeScript</span>
              <span className="text-[#5cff9a]">·</span>
              <span>Redux</span>
              <span className="text-[#5cff9a]">·</span>
              <span>Node.js</span>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="#experience"
                className="primary-btn inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
              >
                See Experience <ArrowDown size={16} />
              </a>
              <a
                href="/resume"
                download="Muhammad_Fahad_Resume.pdf"
                className="secondary-btn inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white"
              >
                Download Resume <Download size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.75 }}
            className="relative"
          >
            <div className="workspace-label absolute -top-4 left-5 z-10 hidden items-center gap-2 rounded-full border border-white/10 bg-[#0a111e] px-3 py-1.5 sm:flex">
              <Terminal size={13} className="text-[#5cff9a]" />
              <span className="mono text-[10px] text-slate-500">
                fahad@workspace / portfolio
              </span>
            </div>
            <div className="terminal-shell glow overflow-hidden rounded-2xl border border-white/10 bg-[#080e19]/95 text-left">
              <div className="terminal-bar flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
                <div className="flex gap-1.5">
                  <i className="terminal-dot bg-red-400/70" />
                  <i className="terminal-dot bg-yellow-400/70" />
                  <i className="terminal-dot bg-green-400/70" />
                </div>
                <div className="mono flex items-center gap-2 text-[10px] text-slate-600">
                  <Command size={12} /> main.tsx
                </div>
                <span className="w-8" />
              </div>
              <div className="grid gap-0 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="terminal-pane p-5 sm:p-7">
                  <p className="mono text-xs text-slate-600">01</p>
                  <p className="mono mt-2 text-sm">
                    <span className="text-slate-600">$</span>{" "}
                    <span className="text-slate-300">whoami</span>
                  </p>
                  <p className="mono mt-1 text-sm text-white">Muhammad Fahad</p>
                  <p className="mono text-xs text-[#5cff9a]">
                    Frontend Developer
                  </p>
                  <p className="mono mt-6 text-sm">
                    <span className="text-slate-600">$</span>{" "}
                    <span className="text-slate-300">stack</span>
                  </p>
                  <div className="mt-2 space-y-1 font-mono text-xs">
                    {["React", "Next.js", "TypeScript", "Redux", "Node.js"].map(
                      (item) => (
                        <p
                          key={item}
                          className="flex items-center justify-between border-b border-white/[0.035] py-1.5"
                        >
                          <span className="text-slate-400">{item}</span>
                          <span className="text-[#5cff9a]">
                            <Check size={13} />
                          </span>
                        </p>
                      ),
                    )}
                  </div>
                  <p className="mono mt-6 text-sm">
                    <span className="text-slate-600">$</span>{" "}
                    <span className="text-slate-300">status</span>
                  </p>
                  <p className="mono mt-1 flex items-center gap-2 text-xs text-slate-400">
                    <span className="status-dot" /> Building production
                    experiences<span className="cursor">_</span>
                  </p>
                </div>
                <div className="code-pane border-t border-white/[0.06] bg-[#050a14] p-5 sm:border-l sm:border-t-0 sm:p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="mono text-[10px] text-slate-600">
                      developer.tsx
                    </span>
                    <Code2 size={14} className="text-slate-700" />
                  </div>
                  <CodeLine n="1">
                    <Keyword>const</Keyword> <Blue>Developer</Blue> = () =&gt;{" "}
                    {"{"}
                  </CodeLine>
                  <CodeLine n="2">
                    &nbsp;&nbsp;<Keyword>return</Keyword> (
                  </CodeLine>
                  <CodeLine n="3">
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;<Blue>ProductionReady</Blue>
                  </CodeLine>
                  <CodeLine n="4">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Orange>stack</Orange>=
                    {"{"}[<Green>&quot;React&quot;</Green>,{" "}
                    <Green>&quot;Next.js&quot;</Green>]{"}"}
                  </CodeLine>
                  <CodeLine n="5">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Orange>experience</Orange>=
                    <Green>&quot;3+ years&quot;</Green>
                  </CodeLine>
                  <CodeLine n="6">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Orange>focus</Orange>=
                    <Green>&quot;shipping&quot;</Green>
                  </CodeLine>
                  <CodeLine n="7">&nbsp;&nbsp;&nbsp;&nbsp;/&gt;</CodeLine>
                  <CodeLine n="8">&nbsp;&nbsp;);</CodeLine>
                  <CodeLine n="9">{"}"};</CodeLine>
                  <div className="mt-7 rounded-lg border border-[#5cff9a]/10 bg-[#5cff9a]/[0.035] p-3">
                    <p className="mono text-[10px] text-slate-600">
                      // principle
                    </p>
                    <p className="mt-1 font-mono text-xs text-slate-300">
                      Good UI → Good UX → Good engineering
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-2 hidden rounded-xl border border-white/10 bg-[#0b1220]/95 p-3 shadow-2xl sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#5cff9a]/10 text-[#5cff9a]">
                  <Zap size={16} />
                </div>
                <div>
                  <p className="mono text-[9px] text-slate-600">BUILD STATUS</p>
                  <p className="text-xs font-medium text-slate-200">
                    Production focused
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        </Reveal>
    </section>
  );
}

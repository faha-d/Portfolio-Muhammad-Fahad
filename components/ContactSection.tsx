"use client";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./ui/SectionLabel";
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-dark border-t border-white/[0.055] px-5 py-28 text-center lg:px-8"
    >
      <Reveal className="mx-auto max-w-4xl">
        <SectionLabel number="05" title="CONTACT" centered />
        <h2 className="section-title mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
          Let&apos;s build something great.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-slate-400">
          Looking for a frontend developer, need help turning a design into a
          production interface, or want to improve an existing React
          application?
        </p>
        <a
          href="mailto:codesfahad@gmail.com"
          className="primary-btn mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold"
        >
          Start a Conversation <ArrowUpRight size={17} />
        </a>
        <div className="mt-10 flex justify-center gap-5 text-slate-600">
          <a
            aria-label="GitHub"
            href="https://github.com/faha-d"
            className="transition hover:text-white"
          >
            <Github size={19} />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/faha-dy"
            className="transition hover:text-white"
          >
            <Linkedin size={19} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const items = ["Skills", "Experience", "Contact"];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-shell fixed top-0 z-50 w-full border-b border-white/[0.06] bg-[#050a14]/65 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a
          href="#top"
          className="mono flex items-center gap-2 text-sm font-bold tracking-tight"
        >
          <span className="text-[#5cff9a]">&lt;/&gt;</span> FAHAD
        </a>
        <div className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
          {items.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link transition hover:text-white"
            >
              {item}
            </a>
          ))}
          <a
            href="/resume"
            download
            className="rounded-full border border-[#5cff9a]/25 bg-[#5cff9a]/10 px-4 py-2 text-[#8dffb6] transition hover:border-[#5cff9a]/50 hover:bg-[#5cff9a]/15"
          >
            Download Resume
          </a>
        </div>
        <button
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 p-2 text-slate-200 md:hidden"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-white/[0.06] bg-[#070c16] px-5 py-3 md:hidden"
        >
          {items.map((item) => (
            <a
              onClick={() => setOpen(false)}
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-3 text-slate-300"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

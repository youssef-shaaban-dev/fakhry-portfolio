"use client";

import { useState } from "react";
import { FadeUp } from "@/components/animations/FadeUp";
import clsx from "clsx";

const SKILLS = {
  video: [
    { name: "Premiere Pro", short: "Pr", color: "bg-[#9999ff] text-black" },
    { name: "After Effects", short: "Ae", color: "bg-[#9999ff] text-black" },
    { name: "DaVinci Resolve", short: "Dv", color: "bg-orange-500 text-white" },
    { name: "CapCut", short: "Cc", color: "bg-black text-white border border-white/20" },
  ],
  data: [
    { name: "Excel", short: "XL", color: "bg-green-600 text-white" },
    { name: "Power BI", short: "Bi", color: "bg-yellow-500 text-black" },
    { name: "Python", short: "Py", color: "bg-blue-500 text-yellow-300" },
    { name: "SQL", short: "Sq", color: "bg-orange-400 text-white" },
  ]
};

type FilterType = 'All' | 'Video' | 'Data';

export function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const totalSkills = SKILLS.video.length + SKILLS.data.length;

  return (
    <section id="skills" className="w-full py-32 px-6 lg:px-12 relative z-10 overflow-hidden bg-[var(--background)]">
      <div className="max-w-[1200px] mx-auto w-full">
        <FadeUp>
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-bold font-heading tracking-[0.2em] text-[var(--foreground)]/50 uppercase">02 &middot; SKILLS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-heading">
              What I Use
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 min-h-[300px]">
          {/* Editing Tools */}
          <div className={clsx("transition-all duration-500", activeFilter === 'Data' ? 'opacity-0 scale-95 pointer-events-none absolute' : 'opacity-100 scale-100 relative')}>
            <FadeUp delay={0.1}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.6)]"></div>
                <h3 className="text-2xl font-bold font-heading text-[var(--foreground)]">Editing Tools</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {SKILLS.video.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 bg-card border border-[var(--foreground)]/5 rounded-full pl-2 pr-5 py-2 transition-colors hover:border-orange-500/50 hover:bg-panel">
                    <div className={clsx("w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold font-heading", skill.color)}>
                      {skill.short}
                    </div>
                    <span className="text-sm font-semibold text-[var(--foreground)]/80">{skill.name}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Data Tools */}
          <div className={clsx("transition-all duration-500", activeFilter === 'Video' ? 'opacity-0 scale-95 pointer-events-none absolute' : 'opacity-100 scale-100 relative')}>
            <FadeUp delay={0.2}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"></div>
                <h3 className="text-2xl font-bold font-heading text-[var(--foreground)]">Data Tools</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {SKILLS.data.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 bg-card border border-[var(--foreground)]/5 rounded-full pl-2 pr-5 py-2 transition-colors hover:border-cyan-400/50 hover:bg-panel">
                    <div className={clsx("w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold font-heading", skill.color)}>
                      {skill.short}
                    </div>
                    <span className="text-sm font-semibold text-[var(--foreground)]/80">{skill.name}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Filters */}
        <FadeUp delay={0.3}>
          <div className="mt-20 flex justify-center">
            <div className="flex gap-2 bg-card border border-[var(--foreground)]/5 p-1.5 rounded-full">
              <button 
                onClick={() => setActiveFilter('All')}
                className={clsx("flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all", activeFilter === 'All' ? 'bg-[var(--foreground)]/10 text-[var(--foreground)]' : 'text-[var(--foreground)]/40 hover:text-[var(--foreground)]/80')}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                All <span className="text-[10px] opacity-50 ml-1 font-mono">{totalSkills}</span>
              </button>
              
              <button 
                onClick={() => setActiveFilter('Video')}
                className={clsx("flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all", activeFilter === 'Video' ? 'bg-[var(--foreground)]/10 text-[var(--foreground)]' : 'text-[var(--foreground)]/40 hover:text-[var(--foreground)]/80')}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                Video <span className="text-[10px] opacity-50 ml-1 font-mono">{SKILLS.video.length}</span>
              </button>
              
              <button 
                onClick={() => setActiveFilter('Data')}
                className={clsx("flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all", activeFilter === 'Data' ? 'bg-[var(--foreground)]/10 text-[var(--foreground)]' : 'text-[var(--foreground)]/40 hover:text-[var(--foreground)]/80')}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                Data <span className="text-[10px] opacity-50 ml-1 font-mono">{SKILLS.data.length}</span>
              </button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

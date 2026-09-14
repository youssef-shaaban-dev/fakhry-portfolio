"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FadeUp } from '@/components/animations/FadeUp';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function JourneySection() {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.journey-card');
      const nodes = gsap.utils.toArray<HTMLElement>('.journey-node');
      
      // 1. Scrub the center line downwards as we scroll through the section
      if (lineRef.current) {
        gsap.fromTo(lineRef.current, 
          { scaleY: 0, transformOrigin: "top" },
          { 
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 1
            }
          }
        );
      }

      // 2. Scrub each card sliding in from its side
      cards.forEach((card, i) => {
        // Even indices are on the left (translate from left), odds are on the right
        const isLeft = i % 2 === 0;
        const xOffset = isLeft ? -50 : 50;

        gsap.fromTo(card,
          { opacity: 0, x: xOffset, y: 30 },
          {
            opacity: 1, 
            x: 0, 
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%", // starts fading when top of card hits 85% of viewport
              end: "top 50%",   // fully visible when it hits middle of viewport
              scrub: 1
            }
          }
        );
      });

      // 3. Scrub nodes popping in
      nodes.forEach((node) => {
        gsap.fromTo(node,
          { scale: 0, opacity: 0 },
          {
            scale: 1, 
            opacity: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: node,
              start: "top 85%",
              end: "top 60%",
              scrub: 1
            }
          }
        );
      });

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="journey" className="w-full py-32 px-6 lg:px-12 relative z-10 flex flex-col items-center bg-[var(--background)]">
      <FadeUp>
        <h2 className="text-5xl md:text-7xl font-bold font-heading mb-4 text-center">
          My <span className="text-[var(--accent)]">Journey</span>
        </h2>
        <p className="text-[var(--foreground)]/60 text-center mb-24 max-w-2xl text-lg">
          A seven-year arc from creating content to streaming live and shipping full products end to end.
        </p>
      </FadeUp>

      <div className="relative w-full max-w-[1000px] mx-auto pb-32">
        {/* Center Line */}
        <div 
          ref={lineRef}
          className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-[var(--accent)] -translate-x-1/2 hidden md:block opacity-50"
        ></div>
        
        <div className="space-y-24 relative z-10">
          {/* 2019 */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
            <div className="w-full md:w-[45%] flex justify-end">
              <div className="journey-card bg-[#111116] border border-blue-500/20 p-8 rounded-2xl shadow-xl hover:border-blue-500/40 transition-colors w-full text-right group">
                <div className="flex items-center justify-end gap-3 mb-4">
                  <h3 className="text-3xl font-bold text-blue-500 font-heading">2019</h3>
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center">f</div>
                </div>
                <h4 className="text-xl font-bold mb-2">Facebook Beginnings</h4>
                <p className="text-sm text-[var(--foreground)]/60">Started creating content on Facebook and growing an audience from zero.</p>
              </div>
            </div>
            {/* Center Node */}
            <div className="journey-node absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-blue-500 bg-black hidden md:block shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            <div className="hidden md:block w-[45%]"></div>
          </div>

          {/* 2020 */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
            <div className="hidden md:block w-[45%]"></div>
            {/* Center Node */}
            <div className="journey-node absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-indigo-500 bg-black hidden md:block shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
            <div className="w-full md:w-[45%] flex justify-start">
              <div className="journey-card bg-[#111116] border border-indigo-500/20 p-8 rounded-2xl shadow-xl hover:border-indigo-500/40 transition-colors w-full text-left group">
                <div className="flex items-center justify-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center text-xs">🏆</div>
                  <h3 className="text-3xl font-bold text-indigo-500 font-heading">2020</h3>
                </div>
                <h4 className="text-xl font-bold mb-2">Facebook Partner</h4>
                <p className="text-sm text-[var(--foreground)]/60">Became an official Facebook content partner.</p>
              </div>
            </div>
          </div>

          {/* 2022 */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
            <div className="w-full md:w-[45%] flex justify-end">
              <div className="journey-card bg-[#111116] border border-purple-500/20 p-8 rounded-2xl shadow-xl hover:border-purple-500/40 transition-colors w-full text-right group">
                <div className="flex items-center justify-end gap-3 mb-4">
                  <h3 className="text-3xl font-bold text-purple-500 font-heading">2022</h3>
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">W</div>
                </div>
                <h4 className="text-xl font-bold mb-2">Streaming on Twitch</h4>
                <p className="text-sm text-[var(--foreground)]/60">Left Facebook and moved to live streaming on Twitch.</p>
              </div>
            </div>
            {/* Center Node */}
            <div className="journey-node absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-purple-500 bg-black hidden md:block shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
            <div className="hidden md:block w-[45%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

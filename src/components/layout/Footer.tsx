"use client";

import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { useEffect } from 'react';

export function Footer() {
  const year = new Date().getFullYear();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollToPlugin);
    }
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: id, autoKill: false },
      ease: "power3.inOut"
    });
  };

  const scrollToTop = () => {
    gsap.to(window, { duration: 1.5, scrollTo: 0, ease: "power3.inOut" });
  };

  return (
    <footer className="relative w-full bg-[var(--background)] pt-32 pb-8 overflow-hidden border-t border-[var(--foreground)]/5">
      
      {/* Background Giant Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.02]">
        <h2 className="text-[14vw] font-black font-heading whitespace-nowrap">
          LET&apos;S WORK TOGETHER
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col">
        
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-12 mb-10">
          
          {/* Left: Brand */}
          <div className="flex flex-col items-center lg:items-start gap-1">
            <h3 className="text-3xl font-black font-heading tracking-widest uppercase">
              FAKHR<span className="text-[var(--accent)]">Y</span>
            </h3>
            <p className="text-[11px] text-[var(--foreground)]/40 tracking-wide mt-1">
              Content Creator, Video Editor & Data Analyst
            </p>
          </div>

          {/* Center: Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {['About', 'Skills', 'Projects', 'Journey', 'Connect'].map((item) => {
              const targetId = `#${item.toLowerCase().replace(' ', '-')}`;
              return (
                <a 
                  key={item} 
                  href={targetId} 
                  onClick={(e) => handleNavClick(e, targetId)}
                  className="text-xs font-semibold text-[var(--foreground)]/50 hover:text-white transition-colors tracking-wider"
                >
                  {item}
                </a>
              );
            })}
          </nav>

          {/* Right: Social Icons */}
          <div className="flex gap-3">
            {/* LinkedIn */}
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[var(--accent)] hover:text-white transition-all flex items-center justify-center text-[var(--foreground)]/60">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            {/* Behance */}
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[var(--accent)] hover:text-white transition-all flex items-center justify-center text-[var(--foreground)]/60">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.546-1.436-2.352-2.461-2.352-1.502 0-2.322.995-2.504 2.352zm-8.904 6h-7.136v-14h7.492c3.484 0 4.5 1.832 4.5 3.352 0 1.341-1.01 2.21-2.128 2.504 1.637.28 2.569 1.488 2.569 3.129 0 3.163-2.607 5.015-5.297 5.015zm-4.303-6.262h3.298c1.347 0 1.932-.731 1.932-1.597 0-1.096-.757-1.545-1.956-1.545h-3.274v3.142zm0 3.738h3.535c1.472 0 2.228-.795 2.228-1.803 0-1.077-.822-1.764-2.28-1.764h-3.483v3.567z"/></svg>
            </a>
            {/* Telegram */}
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[var(--accent)] hover:text-white transition-all flex items-center justify-center text-[var(--foreground)]/60">
              <svg className="w-4 h-4 ml-[-2px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.962-.924c-.643-.204-.658-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.939z"/></svg>
            </a>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="w-full h-px bg-white/5 mb-8"></div>

        {/* Footer Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-[var(--foreground)]/40 font-mono relative">
          
          <div className="w-full text-center">
            <p>© {year} Mohamed Fathy. Crafted with passion in Cairo, Egypt.</p>
          </div>
          
          <div className="absolute right-0 bottom-0 md:-bottom-2">
            <button 
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-[var(--accent)] hover:brightness-110 transition-all flex items-center justify-center text-white shadow-[0_0_20px_var(--accent)] shadow-[var(--accent)]/40 hover:-translate-y-1 transform duration-300"
              aria-label="Scroll to top"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

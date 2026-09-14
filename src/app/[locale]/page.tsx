"use client";

import { useTranslations } from 'next-intl';
import { FadeUp } from '@/components/animations/FadeUp';

export default function Home() {
  const t = useTranslations('Hero');

  return (
    <div className="flex flex-col items-center w-full relative">
      
      {/* Hero Section */}
      <section className="min-h-screen w-full flex items-center px-6 lg:px-12 pt-32 pb-20 relative z-10">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start space-y-8 relative z-10">
            <FadeUp delay={0.2} y={20}>
              <div className="flex items-center gap-4 bg-[#0a0a0c]/80 backdrop-blur border border-[var(--foreground)]/10 pr-6 rounded-full overflow-hidden">
                <div className="w-16 h-16 bg-black flex items-center justify-center shrink-0">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=transparent" alt="Profile" className="w-full h-full object-cover opacity-80 mix-blend-screen" />
                </div>
                <div className="flex flex-col py-2">
                  <span className="text-[10px] font-bold text-[var(--accent)] tracking-[0.2em] uppercase">Hey, I'm</span>
                  <span className="text-xs text-[var(--foreground)]/70">Video Editor & Data, based in Cairo.</span>
                </div>
              </div>
            </FadeUp>

            <div className="space-y-4 w-full">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading tracking-tight leading-[0.9]">
                <FadeUp delay={0.4} y={30}>
                  <div className="flex flex-wrap items-baseline gap-4">
                    <span>Fakhry</span>
                    <span className="text-[var(--accent)]">Dev<span className="text-[var(--foreground)]">.</span></span>
                  </div>
                </FadeUp>
              </h1>
              
              <FadeUp delay={0.6} y={30}>
                <div className="space-y-4 max-w-xl">
                  <h2 className="text-3xl font-heading font-semibold text-[var(--foreground)] border-l-2 border-[var(--accent)] pl-4">
                    Ideas brought to life.
                  </h2>
                  <p className="text-lg text-[var(--foreground)]/60 leading-relaxed font-sans">
                    Websites, apps and intelligent systems. I bring the design, the code and the attention to detail: from your first idea to the final experience.
                  </p>
                </div>
              </FadeUp>
            </div>
            
            <FadeUp delay={0.8} y={30} className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#projects" className="group flex items-center gap-2 px-8 py-4 font-semibold text-white bg-[var(--accent)] rounded-full transition-all duration-300 shadow-[0_0_20px_var(--accent)] shadow-[var(--accent)]/20 hover:shadow-[0_0_30px_var(--accent)] hover:shadow-[var(--accent)]/40 hover:-translate-y-1 active:translate-y-0">
                <span>View My Work</span>
                <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 19L20 5M20 5H10M20 5V15" />
                </svg>
              </a>
              <a href="mailto:contact@fakhry.com" className="px-8 py-4 font-semibold text-[var(--foreground)] bg-transparent border border-[var(--foreground)]/10 rounded-full hover:bg-[var(--foreground)]/5 transition-colors duration-300">
                Start a project
              </a>
            </FadeUp>
            
            <FadeUp delay={1.0} y={20}>
              <div className="text-xs text-[var(--foreground)]/40 mt-8">
                Cairo, Egypt • Working worldwide
              </div>
            </FadeUp>
          </div>

          {/* Right Content - 3D Graphic Placeholder */}
          <div className="hidden lg:flex justify-end relative h-full min-h-[600px] w-full">
            <FadeUp delay={0.5} y={50} duration={1.5} className="w-full h-full absolute inset-0 flex items-center justify-center">
              {/* Complex 3D Placeholder mimicking the iso factory */}
              <div className="relative w-full max-w-[800px] aspect-[4/3] perspective-[1000px] group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/10 to-transparent blur-3xl rounded-full transform scale-110"></div>
                <div className="absolute inset-0 border border-[var(--foreground)]/10 bg-[#0f0f13]/80 backdrop-blur-md rounded-2xl shadow-2xl transform rotateX-[20deg] rotateY-[-15deg] rotateZ-[5deg] transition-transform duration-1000 group-hover:rotateX-[15deg] group-hover:rotateY-[-10deg] flex flex-col p-8 overflow-hidden">
                  <div className="text-[var(--accent)] font-heading text-xl font-bold mb-8">FAKHRY <span className="text-[var(--foreground)]">STUDIO</span></div>
                  
                  {/* Fake 3D objects */}
                  <div className="flex-1 relative">
                    <div className="absolute bottom-10 left-10 w-32 h-8 bg-[#1a1a24] rounded border border-[var(--accent)]/30 transform -skew-x-12 flex items-center justify-center text-[10px] text-[var(--foreground)]/50 tracking-widest shadow-[0_0_15px_var(--accent)] shadow-[var(--accent)]/20">WEBSITE</div>
                    <div className="absolute bottom-10 left-48 w-24 h-8 bg-[var(--accent)] rounded border border-[var(--foreground)]/20 transform -skew-x-12 flex items-center justify-center text-[10px] text-white tracking-widest shadow-[0_0_30px_var(--accent)] shadow-[var(--accent)]/40">APP</div>
                    
                    <div className="absolute top-10 right-10 w-64 h-64 border border-[var(--foreground)]/10 bg-[#14141d] rounded-xl transform rotate-12 shadow-2xl overflow-hidden">
                      <div className="h-6 w-full border-b border-[var(--foreground)]/10 bg-[#0a0a0c] flex items-center px-3 gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-[var(--foreground)]/20"></div>
                        <div className="w-2 h-2 rounded-full bg-[var(--foreground)]/20"></div>
                        <div className="w-2 h-2 rounded-full bg-[var(--foreground)]/20"></div>
                      </div>
                      <div className="p-4 h-full flex flex-col justify-center items-center opacity-50">
                        <div className="w-24 h-2 bg-[var(--foreground)]/10 rounded mb-4"></div>
                        <div className="w-32 h-2 bg-[var(--accent)]/30 rounded mb-2"></div>
                        <div className="w-20 h-2 bg-[var(--foreground)]/10 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative lines */}
                  <div className="absolute bottom-0 right-8 w-px h-32 bg-gradient-to-t from-[var(--accent)] to-transparent"></div>
                  <div className="absolute top-0 right-16 w-px h-16 bg-gradient-to-b from-[var(--accent)] to-transparent opacity-50"></div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen w-full py-32 px-6 lg:px-12 relative z-10">
        <div className="max-w-[1400px] mx-auto w-full">
          <FadeUp>
            <h2 className="text-5xl md:text-7xl font-bold font-heading mb-16">About <span className="text-[var(--accent)]">Me</span></h2>
          </FadeUp>
          
          <FadeUp delay={0.2} y={50}>
            {/* Terminal Window Card */}
            <div className="w-full bg-[#111116] border border-[var(--foreground)]/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Window Header */}
              <div className="h-12 bg-[#1a1a24] border-b border-[var(--foreground)]/10 flex items-center px-6 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-[10px] font-mono text-[var(--foreground)]/40 tracking-widest uppercase">fakhry@studio ~/about-me</div>
                <div className="text-[10px] font-mono text-[var(--foreground)]/40 tracking-widest uppercase hidden md:block">PERSONAL README</div>
              </div>
              
              {/* Window Body */}
              <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-12">
                
                {/* Left Profile Card */}
                <div className="w-full lg:w-1/3 space-y-6">
                  <div className="aspect-[4/5] bg-[#0a0a0c] rounded-xl border border-[var(--foreground)]/10 overflow-hidden relative group">
                    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" alt="Setup" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent"></div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-heading font-bold mb-2">Fakhry<span className="text-[var(--accent)]">.</span></h3>
                    <p className="text-sm text-[var(--foreground)]/50 mb-4">Developer • Creator • Architect</p>
                    <p className="text-xs text-[var(--accent)]">Cairo, Egypt - Since 2019</p>
                  </div>
                </div>
                
                {/* Right Content */}
                <div className="w-full lg:w-2/3 space-y-8">
                  <div className="text-sm font-mono text-[var(--foreground)]/50 flex items-center gap-2">
                    <span className="text-[var(--accent)]">{'>'}</span> cat about-me.md
                  </div>
                  
                  <h3 className="text-4xl font-heading font-bold">Content Creator. <span className="text-[var(--accent)]">Developer</span></h3>
                  
                  <div className="space-y-6 text-[var(--foreground)]/70 leading-relaxed">
                    <p>
                      I started creating content and developing systems years ago. Today I'm building high-performance websites, complex web apps, and intelligent systems for brands worldwide.
                    </p>
                    <p>
                      Whether I'm shipping production code or designing a new interface, every project gets the same energy: built from scratch, done right, and delivered on time.
                    </p>
                  </div>
                  
                  <div className="bg-black/50 border border-[var(--foreground)]/5 p-4 rounded-lg border-l-4 border-l-[var(--accent)]">
                    <code className="text-sm font-mono text-[var(--foreground)]/80"><span className="text-[var(--accent)]">{'>'}</span> Automating the repetitive work. <span className="animate-pulse">_</span></code>
                  </div>
                  
                  {/* Toolkit */}
                  <div>
                    <h4 className="text-[10px] font-bold text-[var(--foreground)]/50 tracking-widest uppercase mb-6">MY TOOLKIT / BUILT AROUND YOUR IDEA</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Web & App Development', 'Systems Architecture', 'UI/UX Design', 'AI Integrations'].map((tool, i) => (
                        <div key={i} className="p-5 rounded-xl border border-[var(--foreground)]/10 bg-[#16161d] hover:bg-[#1a1a24] hover:border-[var(--accent)]/30 transition-all group">
                          <div className="text-sm font-bold mb-1 group-hover:text-[var(--accent)] transition-colors">{tool}</div>
                          <div className="text-xs text-[var(--foreground)]/50">Modern tech stack solutions</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Dev Work Section */}
      <section id="dev-work" className="min-h-screen w-full py-32 px-6 lg:px-12 relative z-10">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <FadeUp>
              <h2 className="text-5xl md:text-7xl font-bold font-heading mb-4">My <span className="text-[var(--accent)]">Dev Work</span></h2>
              <p className="text-[var(--foreground)]/60 max-w-2xl text-lg">
                From responsive websites and web apps to complex systems. Real products, shipped to real clients and used in production.
              </p>
            </FadeUp>
            <FadeUp delay={0.2} className="flex gap-4">
              <button className="px-6 py-3 rounded-full border border-[var(--foreground)]/10 text-sm font-semibold hover:bg-[var(--foreground)]/5 transition-colors flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--foreground)]/50"></span> Featured <span className="ml-2 bg-[#1a1a24] px-2 py-0.5 rounded text-xs">5</span>
              </button>
              <button className="px-6 py-3 rounded-full bg-[var(--accent)] text-white text-sm font-semibold shadow-[0_0_20px_var(--accent)] shadow-[var(--accent)]/20 hover:shadow-[0_0_30px_var(--accent)] hover:shadow-[var(--accent)]/40 transition-shadow flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white"></span> All Work <span className="ml-2 bg-black/20 px-2 py-0.5 rounded text-xs">19</span>
              </button>
            </FadeUp>
          </div>

          <FadeUp delay={0.4} y={50}>
            {/* Interactive Showcase Placeholder */}
            <div className="w-full aspect-video min-h-[600px] max-h-[800px] bg-[#111116] border border-[var(--foreground)]/10 rounded-2xl overflow-hidden flex shadow-2xl relative">
              {/* Left Side (Main Viewer) */}
              <div className="w-full lg:w-2/3 h-full relative border-r border-[var(--foreground)]/10 flex items-center justify-center p-12 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]">
                <div className="w-full max-w-3xl aspect-[16/10] bg-black rounded-xl border border-[var(--foreground)]/20 shadow-2xl overflow-hidden relative group">
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--foreground)]/20 font-heading text-4xl">PROJECT VIEWER</div>
                  {/* Fake UI header */}
                  <div className="absolute top-0 left-0 w-full h-8 bg-[#1a1a24] border-b border-[var(--foreground)]/20 flex items-center px-4 gap-2">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <button className="px-6 py-2 bg-[var(--accent)] text-white font-semibold rounded-full text-sm">View Project Details</button>
                  </div>
                </div>
                
                {/* Floating controls */}
                <div className="absolute top-6 left-6 right-6 flex justify-between">
                  <div className="text-[10px] font-bold text-[var(--accent)] tracking-[0.2em] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span> INTERACTIVE / READY
                  </div>
                  <div className="text-[10px] font-mono text-[var(--foreground)]/30 tracking-widest">FAKHRY STUDIO / 001</div>
                </div>
              </div>
              
              {/* Right Side (Sidebar) */}
              <div className="hidden lg:flex w-1/3 h-full flex-col bg-[#0a0a0c]">
                <div className="p-8 border-b border-[var(--foreground)]/10">
                  <h3 className="text-2xl font-heading font-bold mb-2">Choose your experience.</h3>
                  <p className="text-sm text-[var(--foreground)]/50 mb-6">Same workspace. A different world.</p>
                  
                  <div className="relative">
                    <input type="text" placeholder="Search projects..." className="w-full bg-[#16161d] border border-[var(--foreground)]/10 rounded-lg py-3 px-10 text-sm focus:outline-none focus:border-[var(--accent)]/50 transition-colors" />
                    <svg className="w-4 h-4 absolute left-3 top-3.5 text-[var(--foreground)]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </div>
                </div>
                
                <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`p-4 rounded-xl border transition-all cursor-pointer flex gap-4 items-center ${i === 1 ? 'bg-[#16161d] border-[var(--accent)]/30' : 'border-transparent hover:bg-[#16161d] hover:border-[var(--foreground)]/10'}`}>
                      <div className="w-16 h-16 rounded-lg bg-black shrink-0 border border-[var(--foreground)]/10 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-[var(--foreground)]/10 to-transparent"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-base font-bold font-heading ${i === 1 ? 'text-[var(--accent)]' : ''}`}>Project Alpha {i}</h4>
                        <p className="text-xs text-[var(--foreground)]/50">Web experience</p>
                      </div>
                      <div className="text-[10px] font-mono text-[var(--foreground)]/30">0{i}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}

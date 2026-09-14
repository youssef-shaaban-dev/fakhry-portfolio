"use client";

import { useTranslations } from 'next-intl';
import { FadeUp } from '@/components/animations/FadeUp';
import { TextReveal } from '@/components/animations/TextReveal';
import { WorkCarousel } from '@/components/ui/WorkCarousel';

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
                  <span className="text-[10px] font-bold text-[var(--accent)] tracking-[0.2em] uppercase">Hey, I&apos;m</span>
                  <span className="text-xs text-[var(--foreground)]/70">Video Editor & Data, based in Cairo.</span>
                </div>
              </div>
            </FadeUp>

            <div className="space-y-4 w-full">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading tracking-tight leading-[0.9]">
                <FadeUp delay={0.4} y={30}>
                  <div className="flex flex-wrap items-baseline gap-4">
                    <span>Fakhry</span>
                    <span className="text-[var(--accent)]">.<span className="text-[var(--foreground)]"></span></span>
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
                    <p className="text-sm text-[var(--foreground)]/50 mb-4">Video Editor • Data Analyst</p>
                    <p className="text-xs text-[var(--accent)]">Cairo, Egypt - Since 2019</p>
                  </div>
                </div>
                
                {/* Right Content */}
                <div className="w-full lg:w-2/3 space-y-8">
                  <div className="text-sm font-mono text-[var(--foreground)]/50 flex items-center gap-2">
                    <span className="text-[var(--accent)]">{'>'}</span> cat about-me.md
                  </div>
                  
                  <h3 className="text-4xl font-heading font-bold">Video Editor. <span className="text-[var(--accent)]">Data Analyst</span></h3>
                  
                  <div className="space-y-6 text-[var(--foreground)]/70 leading-relaxed">
                    <p>
                      I started editing videos and analyzing data years ago. Today I&apos;m crafting high-end visual content and intelligent data systems for brands worldwide.
                    </p>
                    <p>
                      Whether I&apos;m cutting a cinematic sequence or designing a data pipeline, every project gets the same energy: built from scratch, done right, and delivered on time.
                    </p>
                  </div>
                  
                  <div className="bg-black/50 border border-[var(--foreground)]/5 p-4 rounded-lg border-l-4 border-l-[var(--accent)]">
                    <code className="text-sm font-mono text-[var(--foreground)]/80"><span className="text-[var(--accent)]">{'>'}</span> Automating the repetitive work. <span className="animate-pulse">_</span></code>
                  </div>
                  
                  {/* Toolkit */}
                  <div>
                    <h4 className="text-[10px] font-bold text-[var(--foreground)]/50 tracking-widest uppercase mb-6">MY TOOLKIT / BUILT AROUND YOUR IDEA</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Video Editing', 'Data Analysis', 'Motion Graphics', 'AI Integrations'].map((tool, i) => (
                        <div key={i} className="p-5 rounded-xl border border-[var(--foreground)]/10 bg-[#16161d] hover:bg-[#1a1a24] hover:border-[var(--accent)]/30 transition-all group">
                          <div className="text-sm font-bold mb-1 group-hover:text-[var(--accent)] transition-colors">{tool}</div>
                          <div className="text-xs text-[var(--foreground)]/50">Modern workflow solutions</div>
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

      {/* Video Work Section */}
      <WorkCarousel 
        title="Video Projects"
        subtitle="Cinematic AI-generated video ads and visual content crafted for global brands."
        items={[
          {
            id: "v1",
            title: "JETOUR T2 Car Showcase",
            tags: ["AI VIDEO", "RunwayML"],
            image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200"
          },
          {
            id: "v2",
            title: "RAYCON VIDEO AD BY AI",
            tags: ["AI VIDEO", "Premiere"],
            image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1200"
          },
          {
            id: "v3",
            title: "BMW Video AD By AI",
            tags: ["AI VIDEO", "Kling AI"],
            image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1200"
          }
        ]}
      />

      {/* Data Work Section */}
      <WorkCarousel 
        title="Data Analytics"
        subtitle="Complex data pipelines, visualizations, and intelligent systems."
        items={[
          {
            id: "d1",
            title: "E-Commerce Pipeline Analytics",
            tags: ["PYTHON", "POWER BI"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
          },
          {
            id: "d2",
            title: "Predictive Sales Modeling",
            tags: ["MACHINE LEARNING", "SQL"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
          },
          {
            id: "d3",
            title: "Real-time Operations Dashboard",
            tags: ["TABLEAU", "DATA WAREHOUSING"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
          }
        ]}
      />

    </div>
  );
}

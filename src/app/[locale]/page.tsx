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
      {/* Journey Section */}
      <section id="journey" className="w-full py-32 px-6 lg:px-12 relative z-10 flex flex-col items-center">
        <FadeUp>
          <h2 className="text-5xl md:text-7xl font-bold font-heading mb-4 text-center">
            My <span className="text-[var(--accent)]">Journey</span>
          </h2>
          <p className="text-[var(--foreground)]/60 text-center mb-24 max-w-2xl text-lg">
            A seven-year arc from creating content to streaming live and shipping full products end to end.
          </p>
        </FadeUp>

        <div className="relative w-full max-w-[1000px] mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-[var(--accent)] -translate-x-1/2 hidden md:block opacity-50"></div>
          
          <div className="space-y-24 relative z-10">
            {/* 2019 */}
            <FadeUp delay={0.1} y={30}>
              <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
                <div className="w-full md:w-[45%] flex justify-end">
                  <div className="bg-[#111116] border border-blue-500/20 p-8 rounded-2xl shadow-xl hover:border-blue-500/40 transition-colors w-full text-right group">
                    <div className="flex items-center justify-end gap-3 mb-4">
                      <h3 className="text-3xl font-bold text-blue-500 font-heading">2019</h3>
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center">f</div>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Facebook Beginnings</h4>
                    <p className="text-sm text-[var(--foreground)]/60">Started creating content on Facebook and growing an audience from zero.</p>
                  </div>
                </div>
                {/* Center Node */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-blue-500 bg-black hidden md:block shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                <div className="hidden md:block w-[45%]"></div>
              </div>
            </FadeUp>

            {/* 2020 */}
            <FadeUp delay={0.2} y={30}>
              <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
                <div className="hidden md:block w-[45%]"></div>
                {/* Center Node */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-indigo-500 bg-black hidden md:block shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                <div className="w-full md:w-[45%] flex justify-start">
                  <div className="bg-[#111116] border border-indigo-500/20 p-8 rounded-2xl shadow-xl hover:border-indigo-500/40 transition-colors w-full text-left group">
                    <div className="flex items-center justify-start gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center text-xs">🏆</div>
                      <h3 className="text-3xl font-bold text-indigo-500 font-heading">2020</h3>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Facebook Partner</h4>
                    <p className="text-sm text-[var(--foreground)]/60">Became an official Facebook content partner.</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* 2022 */}
            <FadeUp delay={0.3} y={30}>
              <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
                <div className="w-full md:w-[45%] flex justify-end">
                  <div className="bg-[#111116] border border-purple-500/20 p-8 rounded-2xl shadow-xl hover:border-purple-500/40 transition-colors w-full text-right group">
                    <div className="flex items-center justify-end gap-3 mb-4">
                      <h3 className="text-3xl font-bold text-purple-500 font-heading">2022</h3>
                      <div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">W</div>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Streaming on Twitch</h4>
                    <p className="text-sm text-[var(--foreground)]/60">Left Facebook and moved to live streaming on Twitch.</p>
                  </div>
                </div>
                {/* Center Node */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-purple-500 bg-black hidden md:block shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                <div className="hidden md:block w-[45%]"></div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
      
      {/* Connect Section */}
      <section id="connect" className="w-full py-32 px-6 lg:px-12 relative z-10 flex flex-col items-center">
        <FadeUp>
          <h2 className="text-5xl md:text-7xl font-bold font-heading mb-4 text-center">
            Stay <span className="text-[var(--accent)]">Connected</span>
          </h2>
          <p className="text-[var(--foreground)]/60 text-center mb-16 text-lg">
            Find me across the web. Let&apos;s build something great together.
          </p>
        </FadeUp>

        <div className="max-w-[1200px] w-full space-y-8">
          
          {/* Project Request Card */}
          <FadeUp delay={0.2} y={30}>
            <div className="w-full bg-[#111116] border border-[var(--foreground)]/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
              {/* Decorative glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-[80px] group-hover:bg-green-500/10 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-[80px] group-hover:bg-[var(--accent)]/10 transition-colors"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="text-[10px] font-bold text-[var(--accent)] tracking-[0.2em] uppercase mb-4">PREMIUM PROJECT REQUEST</div>
                    <h3 className="text-4xl md:text-5xl font-heading font-bold mb-4">Your next project starts with a better brief.</h3>
                    <p className="text-[var(--foreground)]/60 max-w-xl">A focused private intake that turns your idea into clear scope, timing and next steps.</p>
                  </div>
                  <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-500 text-xs font-bold uppercase tracking-widest">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> BOOKING OPEN
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {[
                    { num: "01", title: "Tell me what you need", desc: "Website • video • data • automation" },
                    { num: "02", title: "Define scope and timing", desc: "Arabic or English - four quick steps" },
                    { num: "03", title: "Choose your contact channel", desc: "WhatsApp username • Telegram" }
                  ].map((step, i) => (
                    <div key={i} className="bg-[#16161d] border border-[var(--foreground)]/10 rounded-2xl p-6 relative">
                      <div className="text-[10px] font-bold text-[var(--accent)] absolute top-6 right-6">{step.num}</div>
                      <div className="w-10 h-10 rounded-lg bg-[#1a1a24] border border-[var(--foreground)]/10 mb-12 flex items-center justify-center text-[var(--accent)]">
                        {/* Placeholder icons */}
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <h4 className="font-bold mb-2">{step.title}</h4>
                      <p className="text-xs text-[var(--foreground)]/50">{step.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-[var(--foreground)]/10 pt-8">
                  <div className="flex items-center gap-2 text-xs text-[var(--foreground)]/50">
                    <span className="text-green-500">🛡️</span> Private contact - no account required
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button className="px-6 py-3 rounded-full border border-[var(--foreground)]/20 text-sm font-semibold hover:bg-[var(--foreground)]/5 transition-colors">
                      Open Concept Studio ✦
                    </button>
                    <button className="px-6 py-3 rounded-full bg-[var(--accent)] text-white text-sm font-semibold hover:shadow-[0_0_20px_var(--accent)] shadow-[var(--accent)]/30 transition-shadow">
                      Build your project brief {'>'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Secure Dev Terminal Card */}
          <FadeUp delay={0.4} y={30}>
            <div className="w-full bg-[#111116] border border-[var(--foreground)]/10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
              
              <div className="flex items-center gap-6 relative z-10 w-full md:w-auto">
                <div className="w-24 h-24 rounded-2xl bg-black border border-[var(--accent)]/30 shadow-[0_0_20px_var(--accent)] shadow-[var(--accent)]/20 flex items-center justify-center p-2 relative">
                  <div className="absolute -bottom-2 -right-2 w-4 h-6 bg-green-500 rounded-sm animate-pulse"></div>
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=transparent" alt="Profile" className="w-full h-full object-cover rounded-xl opacity-80 mix-blend-screen" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[var(--accent)] tracking-[0.2em] uppercase mb-2">SECURE DEV TERMINAL</div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">Enter the Fakhry developer mainframe.</h3>
                  <p className="text-xs text-[var(--foreground)]/50 max-w-sm mb-4">Authenticate into a cinematic local shell with a live boot sequence, project intelligence and direct portfolio commands.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 rounded bg-[#1a1a24] text-[8px] tracking-widest text-[var(--foreground)]/60 border border-[var(--foreground)]/10">LIVE BOOT</span>
                    <span className="px-2 py-1 rounded bg-[#1a1a24] text-[8px] tracking-widest text-[var(--foreground)]/60 border border-[var(--foreground)]/10">BILINGUAL SHELL</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full md:w-auto px-8 py-3 rounded-xl bg-[var(--accent)] text-white text-sm font-semibold hover:scale-105 transition-transform shrink-0 relative z-10">
                Initialize Terminal {'->'}
              </button>
            </div>
          </FadeUp>

          {/* Social Links Grid */}
          <FadeUp delay={0.6} y={30}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {/* Highlighted Kick Bar (spans full width on sm, col-span-2 on lg) */}
              <a href="#" className="col-span-1 sm:col-span-2 lg:col-span-3 flex items-center justify-between p-4 rounded-2xl border border-green-500/30 bg-green-500/5 hover:bg-green-500/10 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="bg-green-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div> WATCH LIVE
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center font-bold text-2xl text-black">K</div>
                  <div>
                    <h4 className="font-bold text-green-500">Kick</h4>
                    <p className="text-xs text-green-500/60">@fakhry</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-black/40 border border-green-500/30 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                  {'>'}
                </div>
              </a>

              {/* Standard Social Links */}
              {[
                { name: "LinkedIn", user: "@fakhry", color: "#0A66C2", letter: "in" },
                { name: "Behance", user: "@fakhry", color: "#1769ff", letter: "Bē" },
                { name: "Instagram", user: "@fakhry", color: "#E4405F", letter: "Ig" },
                { name: "TikTok", user: "@fakhry", color: "#fff", letter: "tk", bg: "#000" },
                { name: "Facebook", user: "@fakhry", color: "#1877F2", letter: "f" },
                { name: "Discord", user: "Join My Server", color: "#5865F2", letter: "Dc" },
                { name: "Telegram", user: "Contact me", color: "#0088cc", letter: "Tg" },
                { name: "Email", user: "contact@fakhry.com", color: "#ea4335", letter: "@" }
              ].map((social, i) => (
                <a key={i} href="#" className="flex items-center justify-between p-4 rounded-2xl bg-[#111116] border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/30 hover:bg-[#16161d] transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: social.bg || social.color }}>
                      {social.letter}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{social.name}</h4>
                      <p className="text-xs text-[var(--foreground)]/50">{social.user}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#1a1a24] border border-[var(--foreground)]/10 flex items-center justify-center text-[var(--foreground)]/50 group-hover:text-[var(--foreground)] group-hover:scale-110 transition-transform">
                    {'>'}
                  </div>
                </a>
              ))}
              
            </div>
          </FadeUp>
          
        </div>
      </section>

    </div>
  );
}

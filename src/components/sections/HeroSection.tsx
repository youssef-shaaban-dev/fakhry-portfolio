import { FadeUp } from '@/components/animations/FadeUp';
import { Typewriter } from '@/components/ui/Typewriter';

export function HeroSection() {
  return (
    <section className="min-h-screen w-full flex items-center px-6 lg:px-12 pt-32 pb-20 sticky top-0 z-0">
      <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-start space-y-8 relative z-10">
          <FadeUp delay={0.2} y={20}>
            <div className="flex items-center gap-4 bg-deep/80 backdrop-blur border border-[var(--foreground)]/10 pr-6 rounded-full overflow-hidden">
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-[1.1]">
              <FadeUp delay={0.4} y={30}>
                <div className="flex flex-col gap-2">
                  <div>
                    <span>Mohamed Fathy</span><span className="text-[var(--accent)]">.</span>
                  </div>
                  <div className="text-3xl md:text-5xl lg:text-6xl mt-2 md:mt-4 h-[1.2em]">
                    <Typewriter words={["Video Editor", "Data Analyst", "Content Creator"]} />
                  </div>
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
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                import('gsap').then(({ default: gsap }) => {
                  gsap.to(window, { duration: 1.5, scrollTo: { y: '#projects', autoKill: false }, ease: "power3.inOut" });
                });
              }}
              className="group flex items-center gap-2 px-8 py-4 font-semibold text-white bg-[var(--accent)] rounded-full transition-all duration-300 shadow-[0_0_20px_var(--accent)] shadow-[var(--accent)]/20 hover:shadow-[0_0_30px_var(--accent)] hover:shadow-[var(--accent)]/40 hover:-translate-y-1 active:translate-y-0"
            >
              <span>View My Work</span>
              <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 19L20 5M20 5H10M20 5V15" />
              </svg>
            </a>
            <a 
              href="#connect" 
              onClick={(e) => {
                e.preventDefault();
                import('gsap').then(({ default: gsap }) => {
                  gsap.to(window, { duration: 1.5, scrollTo: { y: '#connect', autoKill: false }, ease: "power3.inOut" });
                });
              }}
              className="px-8 py-4 font-semibold text-[var(--foreground)] bg-transparent border border-[var(--foreground)]/10 rounded-full hover:bg-[var(--foreground)]/5 transition-colors duration-300"
            >
              Start a project
            </a>
          </FadeUp>
          
          <FadeUp delay={1.0} y={20}>
            <div className="text-xs text-[var(--foreground)]/40 mt-8">
              Cairo, Egypt • Working worldwide
            </div>
          </FadeUp>
        </div>

        {/* Right Content - 3D Graphic */}
        <div className="hidden lg:flex justify-end relative h-full min-h-[600px] w-full">
          <FadeUp delay={0.5} y={50} duration={1.5} className="w-full h-full absolute inset-0 flex items-center justify-center">
            
            <div className="relative w-full max-w-[600px] aspect-[4/3] perspective-[1500px] group flex items-center justify-center mt-10">
              
              {/* Background ambient light */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/20 to-transparent blur-[80px] rounded-full transform scale-110 pointer-events-none"></div>
              
              <div 
                className="relative w-full h-full rotate-x-[15deg] rotate-y-[-15deg] group-hover:rotate-x-[5deg] group-hover:rotate-y-[-5deg] transition-transform duration-1000 ease-out"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Main Player Window */}
                <div 
                  className="absolute inset-0 bg-black/40 backdrop-blur-2xl border border-[var(--foreground)]/10 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col"
                  style={{ transform: "translateZ(0px)" }}
                >
                  {/* Top Bar */}
                  <div className="h-10 border-b border-[var(--foreground)]/10 bg-[var(--foreground)]/5 flex items-center justify-between px-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="text-[10px] md:text-xs font-mono text-[var(--foreground)]/40 tracking-widest uppercase">Fathy_Showreel_2026.mp4</div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-[var(--foreground)]/30"></div>
                      <div className="w-1 h-1 rounded-full bg-[var(--foreground)]/30"></div>
                      <div className="w-1 h-1 rounded-full bg-[var(--foreground)]/30"></div>
                    </div>
                  </div>
                  
                  {/* Video/Image Area */}
                  <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200" 
                      alt="Abstract Tech" 
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[20s] ease-linear"
                    />
                    
                    {/* Glowing Play Button */}
                    <div className="w-20 h-20 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_var(--accent)] shadow-[var(--accent)]/30 group-hover:scale-110 transition-transform duration-500 cursor-pointer z-10">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                    </div>

                    {/* Overlay Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none mix-blend-overlay"></div>
                  </div>

                  {/* Bottom Controls / Data timeline */}
                  <div className="h-16 border-t border-[var(--foreground)]/10 bg-black/40 flex items-center px-6 gap-4">
                    <div className="text-xs font-mono text-[var(--accent)]">00:01:24</div>
                    <div className="flex-1 h-1.5 bg-[var(--foreground)]/10 rounded-full relative overflow-hidden flex items-center">
                      <div className="absolute top-0 left-0 bottom-0 w-[45%] bg-[var(--accent)] rounded-full"></div>
                      <div className="absolute left-[45%] w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_white] -translate-x-1/2"></div>
                    </div>
                    <div className="text-xs font-mono text-[var(--foreground)]/40">00:03:00</div>
                  </div>
                </div>

                {/* Floating Data Analytics Card */}
                <div 
                  className="absolute -right-8 -bottom-16 w-64 h-auto bg-card/90 backdrop-blur-xl border border-[var(--foreground)]/10 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] p-5 flex flex-col gap-4"
                  style={{ transform: "translateZ(80px)" }}
                >
                  <div className="flex items-center justify-between border-b border-[var(--foreground)]/10 pb-2">
                    <span className="text-[10px] font-bold text-[var(--foreground)]/50 tracking-widest uppercase">Performance Data</span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
                    </span>
                  </div>
                  
                  {/* Fake Audio/Data Waves */}
                  <div className="flex items-end gap-1.5 h-12 w-full mt-2">
                    {[40, 70, 45, 90, 60, 30, 80, 50, 100, 65, 30, 85].map((val, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-[var(--accent)] rounded-t-sm transition-all duration-300"
                        style={{ height: `${val}%`, opacity: 0.3 + (val/150) }}
                      ></div>
                    ))}
                  </div>

                  <div className="text-[10px] font-mono text-[var(--foreground)]/60 flex justify-between mt-2">
                    <span>Render: 4K 60fps</span>
                    <span className="text-[var(--accent)]">Active</span>
                  </div>
                </div>

                {/* Floating Tool Icons */}
                <div 
                  className="absolute -left-6 top-16 w-14 h-14 bg-black/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl flex items-center justify-center shadow-2xl"
                  style={{ transform: "translateZ(120px)" }}
                >
                  <span className="text-lg font-bold text-purple-400 tracking-tighter">Pr</span>
                </div>
                
                <div 
                  className="absolute left-8 -top-8 w-12 h-12 bg-black/80 backdrop-blur-xl border border-green-500/30 rounded-2xl flex items-center justify-center shadow-2xl"
                  style={{ transform: "translateZ(60px)" }}
                >
                  <span className="text-sm font-bold text-green-400 tracking-tighter">Py</span>
                </div>

              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

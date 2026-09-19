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

        {/* Right Content - 3D Graphic Placeholder */}
        <div className="hidden lg:flex justify-end relative h-full min-h-[600px] w-full">
          <FadeUp delay={0.5} y={50} duration={1.5} className="w-full h-full absolute inset-0 flex items-center justify-center">
            {/* Complex 3D Placeholder mimicking the iso factory */}
            <div className="relative w-full max-w-[800px] aspect-[4/3] perspective-[1000px] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/10 to-transparent blur-3xl rounded-full transform scale-110"></div>
              <div className="absolute inset-0 border border-[var(--foreground)]/10 bg-deep/80 backdrop-blur-md rounded-2xl shadow-2xl transform rotateX-[20deg] rotateY-[-15deg] rotateZ-[5deg] transition-transform duration-1000 group-hover:rotateX-[15deg] group-hover:rotateY-[-10deg] flex flex-col p-8 overflow-hidden">
                <div className="text-[var(--accent)] font-heading text-xl font-bold mb-8">FATHY <span className="text-[var(--foreground)]">STUDIO</span></div>
                
                {/* Fake 3D objects */}
                <div className="flex-1 relative">
                  <div className="absolute bottom-10 left-10 w-32 h-8 bg-panel rounded border border-[var(--accent)]/30 transform -skew-x-12 flex items-center justify-center text-[10px] text-[var(--foreground)]/50 tracking-widest shadow-[0_0_15px_var(--accent)] shadow-[var(--accent)]/20">WEBSITE</div>
                  <div className="absolute bottom-10 left-48 w-24 h-8 bg-[var(--accent)] rounded border border-[var(--foreground)]/20 transform -skew-x-12 flex items-center justify-center text-[10px] text-white tracking-widest shadow-[0_0_30px_var(--accent)] shadow-[var(--accent)]/40">APP</div>
                  
                  <div className="absolute top-10 right-10 w-64 h-64 border border-[var(--foreground)]/10 bg-card rounded-xl transform rotate-12 shadow-2xl overflow-hidden">
                    <div className="h-6 w-full border-b border-[var(--foreground)]/10 bg-deep flex items-center px-3 gap-1.5">
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
  );
}

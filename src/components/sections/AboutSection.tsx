import { FadeUp } from '@/components/animations/FadeUp';

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen w-full py-32 px-6 lg:px-12 relative z-10 bg-[var(--background)] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-t border-[var(--foreground)]/5">
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
  );
}

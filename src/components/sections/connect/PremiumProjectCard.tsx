import { FadeUp } from '@/components/animations/FadeUp';

export function PremiumProjectCard() {
  return (
    <FadeUp delay={0.2} y={30}>
      <div className="w-full bg-card border border-[var(--foreground)]/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
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
              <div key={i} className="bg-card-hover border border-[var(--foreground)]/10 rounded-2xl p-6 relative">
                <div className="text-[10px] font-bold text-[var(--accent)] absolute top-6 right-6">{step.num}</div>
                <div className="w-10 h-10 rounded-lg bg-panel border border-[var(--foreground)]/10 mb-12 flex items-center justify-center text-[var(--accent)]">
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
  );
}

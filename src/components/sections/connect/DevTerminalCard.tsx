import { FadeUp } from '@/components/animations/FadeUp';

export function DevTerminalCard() {
  return (
    <FadeUp delay={0.4} y={30}>
      <div className="w-full bg-card border border-[var(--foreground)]/10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden group">
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
              <span className="px-2 py-1 rounded bg-panel text-[8px] tracking-widest text-[var(--foreground)]/60 border border-[var(--foreground)]/10">LIVE BOOT</span>
              <span className="px-2 py-1 rounded bg-panel text-[8px] tracking-widest text-[var(--foreground)]/60 border border-[var(--foreground)]/10">BILINGUAL SHELL</span>
            </div>
          </div>
        </div>
        
        <button className="w-full md:w-auto px-8 py-3 rounded-xl bg-[var(--accent)] text-white text-sm font-semibold hover:scale-105 transition-transform shrink-0 relative z-10">
          Initialize Terminal {'->'}
        </button>
      </div>
    </FadeUp>
  );
}

import { FadeUp } from '@/components/animations/FadeUp';

export function SocialLinksGrid() {
  return (
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
  );
}

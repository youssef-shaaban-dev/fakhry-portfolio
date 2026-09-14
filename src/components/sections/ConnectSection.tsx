import { FadeUp } from '@/components/animations/FadeUp';
import { PremiumProjectCard } from './connect/PremiumProjectCard';
import { DevTerminalCard } from './connect/DevTerminalCard';
import { SocialLinksGrid } from './connect/SocialLinksGrid';

export function ConnectSection() {
  return (
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
        <PremiumProjectCard />
        <DevTerminalCard />
        <SocialLinksGrid />
      </div>
    </section>
  );
}

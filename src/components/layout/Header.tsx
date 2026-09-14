"use client";

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export function Header() {
  const t = useTranslations('Hero');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 lg:px-12 py-6 flex justify-between items-center pointer-events-none">
      {/* Logo */}
      <div className="flex items-center gap-3 pointer-events-auto">
        <div className="w-10 h-10 rounded-full border-2 border-[var(--foreground)]/20 overflow-hidden flex items-center justify-center bg-black/50">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=transparent" alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <Link href={`/${locale}`} className="text-2xl font-bold font-heading tracking-widest uppercase">
          Fakhry<span className="text-[var(--accent)]">.</span>
        </Link>
      </div>
      
      {/* Centered Navigation */}
      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 pointer-events-auto gap-8">
        {['About', 'Dev Work', 'Projects', 'Design', 'Connect'].map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-semibold tracking-wide hover:text-[var(--accent)] transition-colors">
            {item}
          </a>
        ))}
      </nav>

      {/* Right Settings (Will be handled by CustomizationPanel but we need to place it here if we move it, or just let CustomizationPanel handle its own absolute positioning) */}
      <div className="pointer-events-auto flex items-center justify-end w-10">
        {/* The CustomizationPanel will be rendered outside the Header in layout.tsx, but we can position its trigger to top-right corner to match */}
      </div>
    </header>
  );
}

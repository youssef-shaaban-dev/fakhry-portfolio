"use client";

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export function Footer() {
  const t = useTranslations('Hero');
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-[var(--foreground)]/10 text-center text-sm text-[var(--foreground)]/60">
      <p>© {year} Fakhry. All rights reserved.</p>
    </footer>
  );
}

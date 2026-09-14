"use client";

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useConfigStore } from '@/store/useConfigStore';
import * as Dialog from '@radix-ui/react-dialog';
import { Settings, Moon, Sun, Monitor, Check } from 'lucide-react';
import { usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import clsx from 'clsx';
import dynamic from 'next/dynamic';

const COLORS = [
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Purple', value: '#a855f7' },
  { name: 'Emerald', value: '#10b981' },
  { name: 'Rose', value: '#f43f5e' },
  { name: 'Amber', value: '#f59e0b' }
];

export function CustomizationPanelBase() {
  const t = useTranslations('Settings');
  const { theme, setTheme } = useTheme();
  const { accentColor, setAccentColor } = useConfigStore();

  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale as string;

  const toggleLanguage = (newLocale: 'en' | 'ar') => {
    router.replace(
      // @ts-expect-error -- dynamically resolving path
      { pathname, params },
      { locale: newLocale }
    );
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="fixed top-6 right-6 lg:right-12 z-50 p-2.5 rounded-full border border-[var(--foreground)]/10 bg-black/40 backdrop-blur-md text-[var(--foreground)]/70 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 pointer-events-auto"
          aria-label={t('title')}
        >
          <Settings className="w-5 h-5 animate-spin-slow" />
        </button>
      </Dialog.Trigger>
      
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed right-4 md:right-8 top-24 bottom-24 w-[340px] bg-[#0f0f13]/90 backdrop-blur-xl border border-[var(--foreground)]/10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] p-6 z-50 overflow-y-auto data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right-1/2 data-[state=open]:slide-in-from-right-1/2 transition-transform duration-300">
          
          <div className="flex justify-between items-center mb-8">
            <Dialog.Title className="text-sm font-bold font-heading tracking-[0.2em] text-[var(--accent)] uppercase">
              {t('title')}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="p-1 rounded-full text-[var(--foreground)]/50 hover:text-white transition-colors" aria-label="Close">
                <span className="sr-only">Close</span>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.50001L3.21846 10.9684C2.99391 11.193 2.99391 11.5571 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31319L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.5571 12.0062 11.193 11.7816 10.9684L8.31322 7.50001L11.7816 4.03157Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </button>
            </Dialog.Close>
          </div>
          
          <div className="space-y-8">
            {/* Language Switcher */}
            <div className="space-y-4">
              <label className="text-[10px] font-bold text-[var(--foreground)]/50 uppercase tracking-[0.2em]">{t('language')}</label>
              <div className="flex bg-[#1a1a24] rounded-lg p-1.5 border border-[var(--foreground)]/5">
                <button
                  onClick={() => toggleLanguage('en')}
                  className={clsx("flex-1 py-2 text-xs font-semibold rounded-md transition-all duration-300", locale === 'en' ? 'bg-[var(--accent)] text-white shadow-[0_0_15px_var(--accent)] shadow-[var(--accent)]/40' : 'text-[var(--foreground)]/60 hover:text-white')}
                >
                  English
                </button>
                <button
                  onClick={() => toggleLanguage('ar')}
                  className={clsx("flex-1 py-2 text-xs font-semibold rounded-md transition-all duration-300", locale === 'ar' ? 'bg-[var(--accent)] text-white shadow-[0_0_15px_var(--accent)] shadow-[var(--accent)]/40' : 'text-[var(--foreground)]/60 hover:text-white')}
                >
                  عربى
                </button>
              </div>
            </div>

            {/* Theme Switcher */}
            <div className="space-y-4">
              <label className="text-[10px] font-bold text-[var(--foreground)]/50 uppercase tracking-[0.2em]">THEME MODE</label>
              <div className="flex bg-[#1a1a24] rounded-lg p-1.5 border border-[var(--foreground)]/5">
                <button
                  onClick={() => setTheme('dark')}
                  className={clsx("flex-1 py-2 text-xs font-semibold rounded-md transition-all duration-300", theme !== 'light' ? 'bg-[var(--accent)] text-white shadow-[0_0_15px_var(--accent)] shadow-[var(--accent)]/40' : 'text-[var(--foreground)]/60 hover:text-white')}
                >
                  Dark
                </button>
                <button
                  onClick={() => setTheme('light')}
                  className={clsx("flex-1 py-2 text-xs font-semibold rounded-md transition-all duration-300", theme === 'light' ? 'bg-[var(--accent)] text-white shadow-[0_0_15px_var(--accent)] shadow-[var(--accent)]/40' : 'text-[var(--foreground)]/60 hover:text-white')}
                >
                  Light
                </button>
              </div>
            </div>

            {/* Accent Color */}
            <div className="space-y-4">
              <label className="text-[10px] font-bold text-[var(--foreground)]/50 uppercase tracking-[0.2em]">{t('accent')}</label>
              <div className="grid grid-cols-4 gap-3">
                {COLORS.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setAccentColor(c.value)}
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none"
                    style={{ 
                      backgroundColor: c.value,
                      boxShadow: accentColor === c.value ? `0 0 20px ${c.value}80, inset 0 0 0 2px #0f0f13, inset 0 0 0 4px white` : 'none'
                    }}
                    title={c.name}
                  >
                    {/* Inner dot for active state is handled via boxShadow inset */}
                  </button>
                ))}
              </div>
            </div>

            {/* Placeholder FX Level */}
            <div className="space-y-4 opacity-50 pointer-events-none">
              <label className="text-[10px] font-bold text-[var(--foreground)]/50 uppercase tracking-[0.2em]">FX LEVEL</label>
              <div className="flex bg-[#1a1a24] rounded-lg p-1.5 border border-[var(--foreground)]/5">
                <button className="flex-1 py-2 text-xs font-semibold rounded-md text-[var(--foreground)]/60">Low</button>
                <button className="flex-1 py-2 text-xs font-semibold rounded-md bg-[var(--accent)] text-white shadow-[0_0_15px_var(--accent)] shadow-[var(--accent)]/40">Mid</button>
                <button className="flex-1 py-2 text-xs font-semibold rounded-md text-[var(--foreground)]/60">High</button>
              </div>
            </div>
            
            {/* Placeholder Hover SFX */}
            <div className="space-y-4 opacity-50 pointer-events-none">
              <label className="text-[10px] font-bold text-[var(--foreground)]/50 uppercase tracking-[0.2em]">HOVER SFX</label>
              <div className="flex bg-[#1a1a24] rounded-lg p-1.5 border border-[var(--foreground)]/5">
                <button className="flex-1 py-2 text-xs font-semibold rounded-md text-[var(--foreground)]/60">On</button>
                <button className="flex-1 py-2 text-xs font-semibold rounded-md bg-[var(--accent)] text-white shadow-[0_0_15px_var(--accent)] shadow-[var(--accent)]/40">Off</button>
              </div>
            </div>
            
            <button className="w-full py-3 mt-4 text-xs font-semibold rounded-lg bg-[#1a1a24] text-[var(--foreground)]/50 hover:text-white transition-colors border border-[var(--foreground)]/5">
              Reset to default
            </button>

          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export const CustomizationPanel = dynamic(() => Promise.resolve(CustomizationPanelBase), { ssr: false });

import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ClientProviders } from '@/components/providers/ClientProviders';
import { SmoothScroll } from '@/components/providers/SmoothScroll';
import { CustomizationPanel } from '@/components/ui/CustomizationPanel';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '@/app/globals.css';
import { Inter, Rajdhani, Cairo } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const rajdhani = Rajdhani({ weight: ['400', '500', '600', '700'], subsets: ['latin'], variable: '--font-heading' });
const cairo = Cairo({ subsets: ['arabic'], variable: '--font-arabic' });

export const metadata: Metadata = {
  title: 'Fakhry - Frontend Architect',
  description: 'Premium interactive portfolio',
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const isRtl = locale === 'ar';
  const dir = isRtl ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={`${inter.variable} ${rajdhani.variable} ${cairo.variable} font-sans antialiased overflow-x-hidden min-h-screen bg-[var(--background)] text-[var(--foreground)]`}>
        {/* Diagonal Streaks Background */}
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-[linear-gradient(45deg,transparent_45%,var(--accent)_49%,transparent_51%)] opacity-[0.03] transform -rotate-12 scale-150 blur-[2px]"></div>
          <div className="absolute top-[-30%] left-[20%] w-[120%] h-[120%] bg-[linear-gradient(45deg,transparent_45%,var(--accent)_49%,transparent_51%)] opacity-[0.02] transform -rotate-12 scale-150 blur-[4px]"></div>
        </div>
        <ClientProviders locale={locale} messages={messages}>
          <SmoothScroll>
            <Header />
            <main>{children}</main>
            <Footer />
            <CustomizationPanel />
          </SmoothScroll>
        </ClientProviders>
      </body>
    </html>
  );
}

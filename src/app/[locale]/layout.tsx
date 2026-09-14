import { Metadata } from 'next';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ClientProviders } from '@/components/providers/ClientProviders';
import { SmoothScroll } from '@/components/providers/SmoothScroll';
import { CustomizationPanel } from '@/components/ui/CustomizationPanel';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ShootingStars } from '@/components/animations/ShootingStars';
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
  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const isRtl = locale === 'ar';
  const dir = isRtl ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={`${inter.variable} ${rajdhani.variable} ${cairo.variable} font-sans antialiased overflow-x-hidden min-h-screen bg-transparent text-[var(--foreground)]`}>
        <ShootingStars />
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

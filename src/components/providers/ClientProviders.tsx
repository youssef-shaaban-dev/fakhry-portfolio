"use client";

import { ThemeProvider } from "next-themes";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { useEffect } from "react";
import { useConfigStore } from "@/store/useConfigStore";

export function ClientProviders({
  children,
  messages,
  locale
}: {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
  locale: string;
}) {
  const { accentColor } = useConfigStore();

  useEffect(() => {
    // Inject accent color globally
    document.documentElement.style.setProperty("--accent", accentColor);
  }, [accentColor]);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}

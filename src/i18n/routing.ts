import {createNavigation} from 'next-intl/navigation';

export const routing = {
  locales: ['en', 'ar'],
  defaultLocale: 'en'
} as const;

export type Locale = (typeof routing.locales)[number];

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);

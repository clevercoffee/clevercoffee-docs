export { middleware } from "nextra/locales";
import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n";

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png|manifest|_pagefind).*)"]
};

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed"
});

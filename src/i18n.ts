import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ["de", "en"];
export const defaultLocale = "de";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: {}
  };
});

import "server-only";
import { Dictionaries, Dictionary, Locale } from "./i18n-config";

// We enumerate all dictionaries here for better linting and TypeScript support
// We also get the default import for cleaner types
const dictionaries: Dictionaries = {
  en: () => import("./en"),
  de: () => import("./de")
};

export async function getDictionary(locale: string): Promise<Dictionary> {
  const { default: dictionary } = await (dictionaries[locale as keyof typeof dictionaries] || dictionaries.de)();

  return dictionary;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getDirection(locale: Locale): "ltr" | "rtl" {
  return "ltr";
}

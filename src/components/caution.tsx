import { Callout } from "nextra/components";
import { getDictionary } from "@/dictionaries/get-dictionary";
import { Locale } from "@/dictionaries/i18n-config";
import { FC } from "react";


export const Caution: FC<{
  lang: Locale;
}> = async ({ lang }) => {
  const dictionary = await getDictionary(lang);
  return (
    <Callout type="error" emoji="⚠️">
      <div dangerouslySetInnerHTML={{__html: dictionary.danger.text }} />
    </Callout>
    );
};

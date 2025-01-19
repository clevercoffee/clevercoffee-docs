import type { Metadata } from "next";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./styles.css";
import { PageMapItem, Folder, MdxFile } from "nextra";
import { getDictionary } from "@/dictionaries/get-dictionary";
import Image from "next/image";
import logo from "../../public/logo.png";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "de" }];
}

export const metadata: Metadata = {
  description: "DIY PID Controller für deine Espressomaschine",
  title: {
    absolute: "",
    template: "%s | CC"
  },
  other: {
    "msapplication-TileColor": "#fff"
  }
};

function isFolder(item: PageMapItem): item is Folder {
  return (item as Folder).children !== undefined;
}

function hasRoute(item: PageMapItem): item is Folder | MdxFile {
  return "route" in item;
}

function localizeRoute(item: PageMapItem, lang: string): PageMapItem {
  const result = { ...item };
  if (hasRoute(result)) {
    result.route = result.route.replace("/", `/${lang}/`);
  }
  if (isFolder(result)) {
    result.children = result.children.map((child) => localizeRoute(child, lang));
  }
  return result;
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ lang?: string }>;
}) {
  const lang = (await params).lang ?? "de";
  let pageMap = await getPageMap(`/${lang}`);
  const dictionary = await getDictionary(lang);

  // Localize routes (TODO: This should be done in the page-map module by nextra)
  pageMap = [...pageMap.map((page: PageMapItem) => localizeRoute(page, lang))];

  const navbar = (
    <Navbar
      logo={
        <>
          <Image height={48} width={48} src={logo} alt="CleverCoffee Logo" />
          <span className="ms-2 font-extrabold select-none max-md:hidden" title={`${dictionary.logo.title}`}>
            <b>{dictionary.logo.title}</b> <span style={{ opacity: "60%" }}>{dictionary.logo.claim}</span>
          </span>
        </>
      }
      projectLink="https://github.com/rancilio-pid/clevercoffee"
      // Clevercoffee discord server
      chatLink="https://discord.com/invite/Kq5RFznuU4"
    />
  );
  return (
    <html lang={lang} dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="☕" />
      <body>
        <Layout
          banner={<Banner storageKey="Clevercoffee 4">CleverCoffee 4</Banner>}
          navbar={navbar}
          footer={<Footer />}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/cellcortex"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
          i18n={[
            { locale: "de", name: "Deutsch" },
            { locale: "en", name: "English" }
          ]}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}

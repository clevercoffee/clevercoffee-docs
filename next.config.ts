import nextra from "nextra";
import { locales, defaultLocale } from "./src/i18n";

const withNextra = nextra({
  contentDirBasePath: "/"
});

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/clevercoffee-docs" : "";

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  i18n: {
    locales,
    defaultLocale
  },
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix,
  basePath: assetPrefix
});

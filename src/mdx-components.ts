import { useMDXComponents as getDocsMDXComponents } from "nextra-theme-docs";
import { Pre, withIcons } from "nextra/components";
import { GitHubIcon } from "nextra/icons";
import { Caution } from "@/components/caution";
import KiCAD from "@/components/kicad";

const docsComponents = getDocsMDXComponents({
  pre: withIcons(Pre, { js: GitHubIcon }),
});

export const useMDXComponents: typeof getDocsMDXComponents = (components) => ({
  ...docsComponents,
  ...components,
  Caution,
  KiCAD
});

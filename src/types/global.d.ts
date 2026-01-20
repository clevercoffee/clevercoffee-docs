import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "kicanvas-embed": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        controls?: string;
      };
    }
  }
}

// So this file is treated as a module and doesn't pollute the global scope (important for Next.js):
export {};
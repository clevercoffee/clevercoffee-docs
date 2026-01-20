import Script from "next/script";
import { addBasePath } from 'next/dist/client/add-base-path';
export default async function KiCAD({
  src,
  controls = "none",
  width = "100%",
  height = "600px"
}) {
  // If src is a local path (starts with "/"), prepend the basePath.
  // If src is an external URL (e.g., "https://..."), leave it as-is.
  return (
    <>
      {/* Load the KiCanvas script from the CDN */}
      <Script
        id="kicanvas-script"
        src={addBasePath("/kicanvas.js")}
        type="module"
      />

      {/* The custom element <kicanvas-embed> */}
      <kicanvas-embed
        src={src}
        controls={controls}
        style={{
          display: "block",
          width,
          height,
          margin: "1rem auto"
        }}
      />
    </>
  );
}
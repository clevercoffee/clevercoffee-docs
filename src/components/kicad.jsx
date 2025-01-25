import Script from "next/script";

export default function KiCAD({
  src,
  controls = "none",
  width = "100%",
  height = "600px"
}) {
  return (
    <>
      {/* Load the KiCanvas script from the CDN */}
      <Script
        id="kicanvas-script"
        src="/kicanvas.js"
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
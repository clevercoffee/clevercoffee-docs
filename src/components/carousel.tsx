"use client"; // Ensure this runs on the client side (App Router)
import { ImageZoom } from "nextra/components";
import React, { ReactNode, ReactElement } from "react";

/**
 * The minimal shape of an image object extracted from MDX or Next Image components.
 */
export interface ImageInfo {
  src: string;  // always a string after extraction
  alt?: string; // optional
  width?: number; // optional
  height?: number; // optional
  blurDataURL?: string; // optional
  blurWidth?: number; // optional
  blurHeight?: number; // optional
}

/**
 * The props we check for "image-likeness".
 */
interface ImageChildProps {
  src?: string | { src: string; [key: string]: any };
  alt?: string;
  // MDX might store these if it's a raw <img>
  originalType?: string;
  mdxType?: string;
  children?: ReactNode;
}

/**
 * Determines if a React element is "image-like," i.e. a Next.js image, 
 * a Nextra Zoom image, or a raw <img> with `props.src`.
 */
function isImageLike(child: ReactElement<any>): child is ReactElement<ImageChildProps> {
  // Must be a valid React element
  if (!React.isValidElement(child)) return false;

  const { src, originalType, mdxType } = child.props as ImageChildProps;

  // For Nextra or raw <img>, they might set originalType="img" or mdxType="img"
  if (originalType === "img" || mdxType === "img") {
    return true;
  }

  // For Next.js or other custom images, check if there's a `src` prop
  if (src) {
    // If it's a plain string: definitely an image
    if (typeof src === "string") return true;

    // If it's an object with a .src property, also likely an image
    if (typeof src.src === "string") return true;
  }

  return false;
}

/**
 * Extract the src/alt from an "image-like" element (raw <img>, Next <Image>, etc.).
 */
function getImageProps(child: ReactElement<ImageChildProps>): ImageInfo {
  const { alt, src } = child.props;

  // If src is a string
  if (typeof src === "string") {
    return { src, alt };
  } 
  // If src is an object with { src: string }
  else if (src && typeof src === "object" && typeof src.src === "string") {
    return { ...src, alt };
  }
}

/**
 * deepFindImages
 * --------------
 * Recursively traverse the React node tree and return all discovered images.
 */
export function deepFindImages(node: ReactNode): ImageInfo[] {
  const results: ImageInfo[] = [];

  React.Children.forEach(node, (child) => {
    if (!React.isValidElement(child)) return;

    // If this element is recognized as "image-like," extract its props
    if (isImageLike(child)) {
      results.push(getImageProps(child));
    }

    // Recurse into child.props.children if present
    const { children } = child.props as ImageChildProps;
    if (children) {
      results.push(...deepFindImages(children));
    }
  });

  return results;
}

interface CarouselProps {
  children: React.ReactNode;
}

/**
 * Carousel
 * --------
 * Scans MDX children for <img> elements (e.g. from `![alt](url)`) and renders them
 * in a daisyUI carousel. If you need advanced controls, see daisyUI docs for more.
 */

export default function Carousel({ children }: CarouselProps) {
    // Recursively find all <img> elements
    const images = deepFindImages(children);
  
    return (
      <div className="carousel carousel-center rounded-box w-full space-x-4 p-4">
        {images.map((img, idx) => (
          <div key={idx} className="carousel-item">
            <ImageZoom src={img.src} alt={img.alt} className="w-auto max-h-[200px]" width={img.width} height={img.height} />
          </div>
        ))}
      </div>
    );
  }
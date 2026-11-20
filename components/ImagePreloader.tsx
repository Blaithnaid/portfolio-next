"use client";

import { useEffect } from "react";
import { getImageProps } from "next/image";
import AboutBg from "@/public/about.webp";
import WorkBg from "@/public/work.webp";
import ContactBg from "@/public/contact.webp";

const IMAGES_TO_PRELOAD = [
  // Page Backgrounds for /about, /work, /contact
  {
    src: AboutBg,
    sizes: "100vw",
  },
  {
    src: WorkBg,
    sizes: "100vw",
  },
  {
    src: ContactBg,
    sizes: "100vw",
  },
  // Top project preview images on /work
  {
    src: "/projects/tinahely-pet-lodge-1.webp",
    width: 600,
    height: 400,
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px",
  },
  {
    src: "/projects/wick-1.webp",
    width: 600,
    height: 400,
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px",
  },
];

export default function ImagePreloader() {
  useEffect(() => {
    const preload = () => {
      IMAGES_TO_PRELOAD.forEach((imgConfig) => {
        try {
          const { props } = getImageProps({
            ...imgConfig,
            alt: "",
          });

          // 1. Instantiate browser Image object to trigger native responsive candidate selection
          const img = new window.Image();
          if (props.sizes) {
            img.sizes = props.sizes;
          }
          if (props.srcSet) {
            img.srcset = props.srcSet;
          }
          img.src = props.src;

          // 2. Add head link prefetch tag for HTTP cache persistence
          const link = document.createElement("link");
          link.rel = "prefetch";
          link.as = "image";
          if (props.srcSet) {
            link.setAttribute("imagesrcset", props.srcSet);
          }
          if (props.sizes) {
            link.setAttribute("imagesizes", props.sizes);
          }
          link.href = props.src;
          document.head.appendChild(link);
        } catch {
          // Gracefully continue if an individual image cannot be preloaded
        }
      });
    };

    // Defer preloading until the homepage is fully idle so initial LCP is never delayed
    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        const idleId = window.requestIdleCallback(preload, { timeout: 2000 });
        return () => {
          if ("cancelIdleCallback" in window) {
            window.cancelIdleCallback(idleId);
          }
        };
      } else {
        const timerId = setTimeout(preload, 1200);
        return () => clearTimeout(timerId);
      }
    }
  }, []);

  return null;
}

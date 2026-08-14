"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { SiteLoaderVisual } from "./site-loader-visual";

const LOADER_DURATION_MS = 1700;

export function SiteLoaderOverlay() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setVisible(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setVisible(false);
    }, LOADER_DURATION_MS);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [pathname]);

  if (!visible) {
    return null;
  }

  return <SiteLoaderVisual />;
}

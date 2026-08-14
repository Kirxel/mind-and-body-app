"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { ImageAsset } from "@/lib/content";
import styles from "./space-slider.module.css";

type SpaceSliderProps = {
  images: readonly ImageAsset[];
};

const SLIDE_INTERVAL_MS = 5000;

export function SpaceSlider({ images }: SpaceSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, SLIDE_INTERVAL_MS);

    return () => {
      window.clearInterval(timer);
    };
  }, [images.length]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className={styles.slider}>
      <div className={styles.viewport}>
        {images.map((image, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={image.src}
              className={`${styles.slide} ${isActive ? styles.slideActive : ""}`}
              aria-hidden={!isActive}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 74rem"
                className={styles.backdrop}
                aria-hidden="true"
              />
              <div className={styles.imageShell}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 74rem"
                  className={styles.image}
                  priority={index === 0}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.footer}>
        <p className={styles.caption}>{images[activeIndex]?.alt}</p>
        <div className={styles.dots} aria-label="Навигация по фотографиям пространства">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Показать изображение ${index + 1}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

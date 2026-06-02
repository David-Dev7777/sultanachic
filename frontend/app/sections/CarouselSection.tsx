"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

import { getStrapiImage } from "@/lib/get-strapi-images";
import { CarouselSection as CarouselSectionType } from "@/types/carousel";




interface CarouselSectionProps {
  readonly data: CarouselSectionType;
}

const styles = {
  section:
    "relative overflow-hidden border-y border-[#C8A96B]/10 bg-black py-24",

  glow:
    "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,107,0.12),transparent_60%)]",

  container:
    "relative z-10 mx-auto max-w-7xl px-6 lg:px-10",

  header:
    "mb-14 text-center",

  subtitle:
    "mb-4 text-sm uppercase tracking-[0.35em] text-[#C8A96B]/80",

  title:
    "font-serif text-4xl italic text-[#F5F0E6] md:text-5xl",

  description:
    "mx-auto mt-5 max-w-2xl text-[#F5F0E6]/60",

  carouselWrapper:
    "relative flex items-center",

  navButton:
    "absolute z-20 hidden h-14 w-14 items-center justify-center rounded-full border border-[#C8A96B]/40 bg-black/70 text-[#C8A96B] backdrop-blur-xl transition-all duration-300 hover:bg-[#C8A96B] hover:text-black lg:flex",

  leftButton:
    "-left-7",

  rightButton:
    "-right-7",

  carousel:
    "scrollbar-hide flex gap-5 overflow-x-auto scroll-smooth pb-4",

  card:
    "group relative h-[330px] min-w-[240px] overflow-hidden rounded-[28px] border border-[#C8A96B]/10 bg-[#111]",

  image:
    "object-cover transition-transform duration-700 group-hover:scale-105",

  overlay:
    "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent",

  shine:
    "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100",

  goldBorder:
    "absolute inset-0 rounded-[28px] border border-[#C8A96B]/0 transition-all duration-500 group-hover:border-[#C8A96B]/40",

  bottomContent:
    "absolute bottom-0 left-0 right-0 p-6",

  cardTitle:
    "font-serif text-lg text-[#F5F0E6]",

  cardSubtitle:
    "mt-2 text-sm text-[#F5F0E6]/60",
};

export function CarouselSection({
  data,
}: CarouselSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const amount = 300;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };


  const images = data.carrusel_imagenes?.imagenes ?? [];


  return (
    <section className={styles.section}>
      <div className={styles.glow} />

      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <span className={styles.subtitle}>
            {data.title}
          </span>

          <h2 className={styles.title}>
            {data.subtitle}
          </h2>

          {data.text && (
            <p className={styles.description}>
              {data.text}
            </p>
          )}
        </div>

        {/* CAROUSEL */}
        <div className={styles.carouselWrapper}>
          {/* LEFT */}
          <button
            onClick={() => scroll("left")}
            className={`${styles.navButton} ${styles.leftButton}`}
          >
            <ArrowLeft size={20} />
          </button>

          {/* SLIDER */}
          <div
            ref={scrollRef}
            className={styles.carousel}
          >
            {images.map((item) => {
              const imageUrl = getStrapiImage(item, "large");

              return (
                <div
                  key={item.id}
                  className={styles.card}
                >
                  <Image
                    src={imageUrl}
                    alt={
                      item.alternativeText ||
                      item.name ||
                      "Perfume Árabe"
                    }
                    fill
                    quality={85}
                    sizes="300px"
                    className={styles.image}
                    onError={() => {
                      console.error(
                        "Error loading image:",
                        imageUrl
                      );
                    }}
                  />

                  <div className={styles.overlay} />
                  <div className={styles.shine} />
                  <div className={styles.goldBorder} />

                  <div className={styles.bottomContent}>



                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT */}
          <button
            onClick={() => scroll("right")}
            className={`${styles.navButton} ${styles.rightButton}`}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";

import { LayoutCard } from "@/types/layout_card";
import { getStrapiImage } from "@/lib/get-strapi-images";

const styles = {
  section:
    "relative overflow-hidden bg-black py-24 lg:py-32",

  overlay:
    "absolute inset-0 bg-black/85",

  glowTop:
    "absolute top-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#C8A96B]/10 blur-[120px]",

  glowBottom:
    "absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#C8A96B]/10 blur-[120px]",

  container:
    "relative z-10 mx-auto max-w-7xl px-6 lg:px-10",

  header:
    "mb-16 text-center",

  subtitle:
    "mb-4 block text-sm uppercase tracking-[0.35em] text-[#C8A96B]",

  title:
    "font-serif text-4xl leading-tight text-[#F5F0E6] md:text-6xl",

  description:
    "mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[#F5F0E6]/70",

  divider:
    "mx-auto mt-10 h-[2px] w-24 bg-[#C8A96B]",

  grid:
    "mt-20 grid gap-10 lg:grid-cols-3",

  card:
    "group relative overflow-hidden rounded-[36px] border border-[#C8A96B]/20 bg-black/40 shadow-[0_0_60px_rgba(200,169,107,0.15)] backdrop-blur-sm",

  imageWrapper:
    "relative h-[520px] w-full overflow-hidden",

  image:
    "object-cover object-center transition-transform duration-700 group-hover:scale-105",

  overlayCard:
    "absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent",

  content:
    "absolute inset-x-0 bottom-0 z-10 p-8 md:p-10",

  cardTitle:
    "mb-4 font-serif text-3xl text-[#F5F0E6]",

  cardText:
    "mb-8 max-w-lg text-base leading-relaxed text-[#F5F0E6]/75",

  button:
    "inline-flex items-center rounded-md bg-[#C8A96B] px-7 py-3 text-sm font-medium uppercase tracking-wide text-black transition hover:bg-[#d8b97e]",
};

interface LayoutCardSectionProps {
  readonly data: LayoutCard | null;
}

export function LayoutCardSection({
  data,
}: LayoutCardSectionProps) {
  if (!data) return null;

  return (
    <section className={styles.section}>
      
      {/* Background */}
      <div className={styles.overlay} />
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />

      <div className={styles.container}>
        
        {/* HEADER */}
        <div className={styles.header}>
          <span className={styles.subtitle}>
            {data.title}
          </span>

          <h2 className={styles.title}>
            {data.text}
          </h2>

          <div className={styles.divider} />
        </div>

        {/* CARDS */}
        <div className={styles.grid}>
          {data.cards?.map((card) => {
            const imageUrl = card.imagen
              ? getStrapiImage(card.imagen, "large")
              : "/placeholder-product.png";

            return (
              <article
                key={card.id}
                className={styles.card}
              >
                
                {/* IMAGE */}
                <div className={styles.imageWrapper}>
                  <Image
                    src={imageUrl}
                    alt={
                      card.imagen?.alternativeText ||
                      card.title
                    }
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.image}
                  />

                  {/* Overlay */}
                  <div className={styles.overlayCard} />

                  {/* Glow */}
                  <div className="absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#C8A96B]/20 blur-3xl" />
                </div>

                {/* CONTENT */}
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>
                    {card.title}
                  </h3>

                  <p className={styles.cardText}>
                    {card.text}
                  </p>

                  {card.link && (
                    <Link
                      href={card.link.href}
                      target={
                        card.link.isExternal
                          ? "_blank"
                          : "_self"
                      }
                      className={styles.button}
                    >
                      {card.link.label}
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
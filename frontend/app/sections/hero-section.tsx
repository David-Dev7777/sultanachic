import { getStrapiImage } from "@/lib/get-strapi-images";
import Link from "next/link";
import Image from "next/image"
import { ArrowRight } from "lucide-react";
import { HeroSection as heroData } from "@/types/heroSection";


const styles = {
  header:
    "relative min-h-screen overflow-hidden bg-black pt-28 text-white lg:pt-32",

  subtitle:
    "mb-4 block text-sm uppercase tracking-[0.35em] text-[#C8A96B]",

  backgroundWrapper:
    "absolute inset-0",

  backgroundImage:
  "absolute inset-0 h-full w-full object-cover scale-[1.05]",

  backgroundOverlay:
    "absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/40",

  goldGlow:
    "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,107,0.18),transparent_35%)]",

  content:
    "relative z-20 flex h-full items-center",

  container:
    "mx-auto w-full max-w-7xl px-6 lg:px-12",

  contentWrapper:
    "max-w-3xl",


  topLabel:
    "mb-6 text-sm uppercase tracking-[0.45em] text-[#C8A96B]/90",

  heading:
    "font-serif text-5xl font-semibold leading-[0.9] tracking-tight text-[#F5F0E6] md:text-7xl lg:text-8xl",

  headingAccent:
    "bg-gradient-to-r from-[#C8A96B] via-[#E5C98A] to-[#C8A96B] bg-clip-text text-transparent",

  dividerWrapper:
    "mt-8 flex items-center gap-4",

  divider:
    "h-px w-28 bg-[#C8A96B]/70",

  dividerIcon:
    "text-[#C8A96B] text-lg",

  badgesWrapper:
    "mt-8 flex flex-wrap items-center gap-4",

  badge:
    "inline-flex items-center gap-2 border border-[#C8A96B]/25 bg-black/30 px-5 py-2 text-xs uppercase tracking-[0.28em] text-[#D4B06A] backdrop-blur-md transition-all duration-300 hover:border-[#C8A96B]/60 hover:bg-[#C8A96B]/10",

  subheading:
    "mt-8 max-w-xl text-base leading-relaxed text-[#E7DED1]/80 md:text-lg",


  buttonGroup:
    "mt-12 flex flex-col gap-4 sm:flex-row",

  primaryButton:
    "group inline-flex items-center justify-center gap-2 rounded-md border border-[#C8A96B] bg-[#C8A96B] px-8 py-4 text-sm font-medium uppercase tracking-widest text-black transition-all duration-300 hover:bg-[#d8b77b] hover:shadow-[0_0_30px_rgba(200,169,107,0.35)]",

  secondaryButton:
    "inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-8 py-4 text-sm font-medium uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:border-[#C8A96B]/50 hover:bg-white/10",

  bottomFade:
    "absolute bottom-0 left-0 z-10 h-40 w-full bg-gradient-to-t from-black to-transparent",
};

interface HeroSectionProps {
  readonly data: heroData | null;
}

export function HeroSection({
  data,
}: HeroSectionProps) {
  if (!data) return null;

  const {
    title,
    subTitle,
    text,
    link,
    imagen,
    etiquetas,
  } = data;

  const image = imagen?.[0];

  const imageURL = getStrapiImage(
    image,
    "large"
  );

  return (
    <header className={styles.header}>
      {/* Background */}
      <div className={styles.backgroundWrapper}>
        {imageURL && (
          <Image
            src={imageURL}
            alt={
              image?.alternativeText ??
              "Luxury Arabic Perfume"
            }
            fill
            priority
            quality={85}
            placeholder="blur"
            blurDataURL={getStrapiImage(
              image,
              "thumbnail"
            )}
            sizes="100vw"
            className={styles.backgroundImage}
          />
        )}

        {/* Dark cinematic overlay */}
        <div className={styles.backgroundOverlay} />

        {/* Golden luxury glow */}
        <div className={styles.goldGlow} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>

            {/* Heading */}
            <h1 className={styles.heading}>
              {title}{" "}
              <span className={styles.headingAccent}>
                {subTitle}
              </span>
            </h1>

            {/* Decorative Divider */}
            <div className={styles.dividerWrapper}>
              <div className={styles.divider} />

              <div className={styles.dividerIcon}>
                ✦
              </div>

              <div className={styles.divider} />
            </div>

            {/* Badges */}
            {etiquetas &&
              etiquetas.length > 0 && (
                <div className={styles.badgesWrapper}>
                  {etiquetas.map((badge) => (
                    <div
                      key={badge.id}
                      className={styles.badge}
                    >
                      ✦ {badge.text}
                    </div>
                  ))}
                </div>
              )}

            {/* Subtitle */}
            <p className={styles.subheading}>
              {text}
            </p>




            {/* CTA Buttons */}
            <div className={styles.buttonGroup}>
              {link && (
                <Link
                  className={styles.secondaryButton}
                  href={link.href}
                >
                  {link.label}

                  <ArrowRight
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    size={18}
                  />
                </Link>
              )}


            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className={styles.bottomFade} />
    </header>
  );
}
import Image from "next/image";

import { getStrapiImage } from "@/lib/get-strapi-images";
import { StorySectionProps } from "@/types/story-sections";

const styles = {
  section:
    "relative overflow-hidden bg-black py-28",

  backgroundGlow:
    "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,107,0.12),transparent_60%)]",

  container:
    "relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10",

  imageWrapper:
    "group relative overflow-hidden rounded-[32px] border border-[#C8A96B]/20 bg-white/5 shadow-[0_0_40px_rgba(200,169,107,0.08)]",

  image:
    "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",

  content:
    "flex flex-col justify-center",

  subtitle:
    "mb-4 text-sm uppercase tracking-[0.35em] text-[#C8A96B]/80",

  title:
    "font-serif text-4xl uppercase tracking-[0.15em] text-[#F5F0E6] md:text-5xl",

  divider:
    "mt-6 h-px w-28 bg-[#C8A96B]/40",

  description:
    "mt-8 max-w-2xl text-lg leading-relaxed text-[#F5F0E6]/70",
};

export default function StorySection({
  data,
}: Readonly<StorySectionProps>) {
  const imageUrl = getStrapiImage(
    data.imagen,
    "large"
  );

  return (
    <section className={styles.section}>
      <div className={styles.backgroundGlow} />

      <div className={styles.container}>
        {/* IMAGE */}
        <div className={styles.imageWrapper}>
          <Image
            src={imageUrl}
            alt={
              data.imagen.alternativeText ||
              data.title
            }
            width={800}
            height={800}
            className={styles.image}
          />
        </div>

        {/* CONTENT */}
        <div className={styles.content}>
          <span className={styles.subtitle}>
            {data.subtitle}
          </span>

          <h2 className={styles.title}>
            {data.title}
          </h2>

          <div className={styles.divider} />

          <p className={styles.description}>
            {data.descripcion}
          </p>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";

const BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

interface StrapiImage {
  id: number;
  url: string;
  alternativeText?: string | null;
}

interface TestimonialCard {
  id: number;
  nombre: string;
  texto: string;
  raiting: number;
  destacado: boolean;
  imagen?: StrapiImage;
}

interface TestimonialsProps {
  title: string;
  subtitle: string;
  card: TestimonialCard[];
}

const styles = {
  section:
    "relative overflow-hidden bg-black py-28",

  backgroundGlow:
    "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,107,0.12),transparent_60%)]",

  container:
    "relative mx-auto max-w-7xl px-6 lg:px-10",

  header:
    "mb-20 text-center",

  subtitle:
    "mb-4 text-sm uppercase tracking-[0.35em] text-[#C8A96B]/80",

  title:
    "font-serif text-4xl uppercase tracking-[0.15em] text-[#F5F0E6] md:text-5xl",

  divider:
    "mx-auto mt-6 h-px w-28 bg-[#C8A96B]/40",

  grid:
    "grid gap-8 md:grid-cols-3 xl:grid-cols-3",

  card:
    "group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A96B]/40 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(200,169,107,0.12)]",

  featuredCard:
    "group relative overflow-hidden rounded-[32px] border border-[#C8A96B]/40 bg-[#C8A96B]/10 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(200,169,107,0.18)]",

  cardGlow:
    "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,107,0.15),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100",

  userRow:
    "relative z-10 mb-6 flex items-center gap-4",

  avatarWrapper:
    "relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-[#C8A96B]/40 bg-black shadow-[0_0_25px_rgba(200,169,107,0.18)]",

  avatar:
    "h-[115%] w-[115%] rounded-full object-cover scale-125 transition-transform duration-500 group-hover:scale-[1.35]",

  userInfo:
    "flex flex-col",

  name:
    "font-serif text-lg uppercase tracking-[0.12em] text-[#F5F0E6]",

  stars:
    "mt-2 text-sm tracking-[0.2em] text-[#C8A96B]",

  text:
    "relative z-10 leading-relaxed text-[#F5F0E6]/75",

  badge:
    "relative z-10 mt-6 inline-flex items-center rounded-full border border-[#C8A96B]/30 bg-[#C8A96B]/10 px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-[#C8A96B]",
};

export function TestimonialsSection({
  data,
}: {
  readonly data: TestimonialsProps;
}) {
  const { title, subtitle, card } = data;

  return (
    <section className={styles.section}>
      {/* Background */}
      <div className={styles.backgroundGlow} />

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.subtitle}>
            {subtitle}
          </p>

          <h2 className={styles.title}>
            {title}
          </h2>

          <div className={styles.divider} />
        </div>

        {/* Testimonials */}
        <div className={styles.grid}>
          {card?.map((item) => {
            const imageUrl = item.imagen?.url
              ? `${BASE_URL}${item.imagen.url}`
              : "/placeholder-user.jpg";

            return (
              <article
                key={item.id}
                className={
                  item.destacado
                    ? styles.featuredCard
                    : styles.card
                }
              >
                {/* Glow */}
                <div className={styles.cardGlow} />

                {/* User */}
                <div className={styles.userRow}>
                  <div className={styles.avatarWrapper}>
                    <img
                      src={imageUrl}
                      alt={item.nombre}
                      className={styles.avatar}
                    />
                  </div>

                  <div className={styles.userInfo}>
                    <h3 className={styles.name}>
                      {item.nombre}
                    </h3>

                    <div className={styles.stars}>
                      {"★".repeat(item.raiting || 5)}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <p className={styles.text}>
                  “{item.texto}”
                </p>

                {/* Featured Badge */}
                {item.destacado && (
                  <div className={styles.badge}>
                    Cliente Destacado
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
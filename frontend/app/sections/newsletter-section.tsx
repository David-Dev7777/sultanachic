// components/sections/contact-section.tsx

import { FaInstagram, FaWhatsapp } from "react-icons/fa";



interface ContactSectionProps {
  data: {
    title: string;
    descripcion: string;

    whatsapp: string; // ej: 56912345678
    instagram: string; // ej: https://instagram.com/tu_perfil
  };
}

const styles = {
  section:
    "relative overflow-hidden bg-black py-28",

  backgroundGlow:
    "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,107,0.15),transparent_70%)]",

  container:
    "relative mx-auto max-w-4xl px-6 text-center lg:px-10",

  subtitle:
    "mb-4 text-sm uppercase tracking-[0.35em] text-[#C8A96B]/80",

  title:
    "font-serif text-4xl uppercase tracking-[0.15em] text-[#F5F0E6] md:text-5xl",

  description:
    "mx-auto mt-8 max-w-2xl leading-relaxed text-[#F5F0E6]/70",

  buttons:
    "mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row",

  whatsappButton:
    "flex h-14 items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(37,211,102,0.35)]",

  instagramButton:
    "flex h-14 items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium uppercase tracking-[0.15em] text-[#F5F0E6] backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-[#C8A96B]/40 hover:bg-white/10",
};

export default function ContactSection({
  data,
}: ContactSectionProps) {
  const whatsappLink = `https://wa.me/${data.whatsapp}`;

  return (
    <section className={styles.section}>
      <div className={styles.backgroundGlow} />

      <div className={styles.container}>
        <span className={styles.subtitle}>
          Contacto
        </span>

        <h2 className={styles.title}>
          {data.title}
        </h2>

        <p className={styles.description}>
          {data.descripcion}
        </p>

        <div className={styles.buttons}>
          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </a>

          {/* Instagram */}
          <a
            href={data.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramButton}
          >
            <FaInstagram size={20} />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
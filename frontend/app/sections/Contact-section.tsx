// components/sections/contact-section.tsx

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ContactSectionProps as ContactSectiontype } from "@/types/contactSection";



interface ContactSectionProps {
    readonly data: ContactSectiontype | null;

}

const styles = {
  section:
    "relative overflow-hidden bg-black py-28",

  backgroundGlow:
    "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,107,0.15),transparent_70%)]",

  container:
    "relative mx-auto max-w-4xl px-6 text-center lg:px-10",

  subtitle:
        "mb-4 block text-sm uppercase tracking-[0.35em] text-[#C8A96B]",

    title:
        "font-serif text-4xl leading-tight text-[#F5F0E6] md:text-6xl",

description:
  "mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-[#F5F0E6]/70",

  buttons:
    "mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row",

  whatsappButton:
    "flex h-14 items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(37,211,102,0.35)]",

instagramButton:
  "flex h-14 items-center justify-center gap-3 rounded-full border border-[#DD2A7B]/30 bg-gradient-to-r from-[#F58529]/20 via-[#DD2A7B]/20 to-[#8134AF]/20 px-8 text-sm font-medium uppercase tracking-[0.15em] text-white backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(221,42,123,0.35)]",
};

export function ContactSection({
  data,
}: ContactSectionProps) {

  if (!data) return null;

  const whatsappMessage = encodeURIComponent(
    `Hola Sultana chic vengo desde la página y me gustaría recibir más información sobre sus fragancias.`
  );

  const whatsappLink = `https://wa.me/${data.telefono}?text=${whatsappMessage}`;

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
          {data.description}
        </p>

        <div className={styles.buttons}>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </a>

          <a
            href={data.Instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramButton}
          >
            <FaInstagram size={22}
            className="text-[#DD2A7B]"
             />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
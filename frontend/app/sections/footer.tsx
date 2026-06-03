import { Footer as FooterType} from "@/types/footer";
import { getStrapiImage } from "@/lib/get-strapi-images";
import Image from "next/image";

interface FooterProps {
  readonly data: FooterType;

}

const styles = {
  footer:
    "relative overflow-hidden border-t border-[#C8A96B]/20 bg-black",

  backgroundGlow:
    "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,107,0.08),transparent_65%)]",

  container:
    "relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-1 py-1 lg:flex-row lg:px-10",

  // BRAND
  brand:
    "flex items-center gap-4",

  logoWrapper:
    "flex items-center justify-center overflow-hidden",

  logo:
    "h-10 w-auto object-contain",

  brandContent:
    "flex flex-col leading-none",

  title:
    "font-serif text-xl uppercase tracking-[0.18em] text-[#C8A96B]",

  subtitle:
    "mt-1 text-[10px] uppercase tracking-[0.35em] text-[#F5F0E6]/50",

  // NAVIGATION
  nav:
    "flex flex-wrap items-center justify-center gap-8",

  link:
    "text-sm text-[#F5F0E6]/70 transition-all duration-300 hover:text-[#C8A96B]",

  // SOCIALS
  socials:
    "flex items-center gap-5",

  social:
    "text-[#F5F0E6]/80 transition-all duration-300 hover:scale-110 hover:text-[#C8A96B]",

  icon:
    "h-5 w-5",

  // COPYRIGHT
  copyright:
    "border-t border-white/5 py-2 text-center text-xs tracking-[0.12em] text-[#F5F0E6]/35",
};

export function Footer({
  data,
}: FooterProps) {
  if (!data) return null;

  const {
    title,
    icono,
    link,
  } = data;

  const logoUrl = icono
    ? getStrapiImage(icono)
    : null;
  return (
    <footer className={styles.footer}>
      {/* Glow */}
      <div className={styles.backgroundGlow} />

      {/* Main Content */}
      <div className={styles.container}>
        {/* LOGO */}
        <div className={styles.brand}>
          {logoUrl && (
            <div className={styles.logoWrapper}>
              <Image
                src={logoUrl}
                alt={icono?.alternativeText || title}
                width={120}
                height={120}
                className={styles.logo}
              />
            </div>
          )}

          <div className={styles.brandContent}>
            <h2 className={styles.title}>
              {data.title}
            </h2>

            <p className={styles.subtitle}>
              PERFUMES ÁRABES
            </p>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className={styles.nav}>
          {link?.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target={
                item.isExternal
                  ? "_blank"
                  : "_self"
              }
              rel={
                item.isExternal
                  ? "noopener noreferrer"
                  : undefined
              }
              className={styles.link}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* SOCIALS */}
        <div className={styles.socials}>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/sultanachicfragancias/"
            className={styles.social}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className={styles.icon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 8.25v7.5a4.5 4.5 0 004.5 4.5h7.5a4.5 4.5 0 004.5-4.5v-7.5a4.5 4.5 0 00-4.5-4.5h-7.5a4.5 4.5 0 00-4.5 4.5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 8.25h.008v.008h-.008V8.25z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
              />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/Sultana Chic Fragancias "
            className={styles.social}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className={styles.icon}
            >
              <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.88 3.77-3.88 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.25 0-1.64.77-1.64 1.57V12h2.79l-.45 2.89h-2.34v6.99A10 10 0 0022 12z" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@sultanachicfragancias"
            className={styles.social}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className={styles.icon}
            >
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.35h-3.3v13.3a2.89 2.89 0 11-2-2.75V9.5a6.29 6.29 0 104.38 6V9.9a8.16 8.16 0 004.69 1.48V6.69z" />
            </svg>
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className={styles.copyright}>
        © {new Date().getFullYear()}{" "}
        {data.title} — Todos los derechos
        reservados
      </div>
    </footer>
  );
}
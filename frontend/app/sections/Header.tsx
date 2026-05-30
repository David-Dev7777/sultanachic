import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Search, Menu } from "lucide-react";
import { getStrapiImage } from "@/lib/get-strapi-images";


interface StrapiImage {
  id: number;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
  formats?: {
    thumbnail?: {
      url: string;
      width: number;
      height: number;
    };
    small?: {
      url: string;
      width: number;
      height: number;
    };
  };
}

interface HeaderProps {
  title: string;
  icono: StrapiImage;
  sectionLink: {
    id: number;
    href: string;
    label: string;
    isExternal: boolean | null;
  }[];
}

const styles = {
  header:
    "fixed top-0 left-0 z-50 w-full border-b border-[#C8A96B]/10 bg-black/70 backdrop-blur-xl transition-all duration-300",

  nav: "mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10",

  logoWrapper:
    "group flex items-center gap-5 transition-all duration-300",

  // MÁS GRANDE + MÁS ELEGANTE
  logoContainer:
    "relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-[#C8A96B]/40 bg-black shadow-[0_0_35px_rgba(200,169,107,0.25)]",

  logoGlow:
    "absolute inset-0 bg-[radial-gradient(circle,rgba(200,169,107,0.25),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100",

  // RECORTE + ZOOM PARA ELIMINAR BORDES BLANCOS
  logoImg:
    "relative z-10 h-[115%] w-[115%] rounded-full object-cover scale-125 transition-transform duration-500 group-hover:scale-135",

  logoTextWrapper:
    "flex flex-col",

  logoTitle:
    "font-serif text-xl tracking-[0.25em] text-[#F5F0E6] uppercase",

  logoSubtitle:
    "text-[11px] uppercase tracking-[0.35em] text-[#C8A96B]/70",

  navLinks:
    "hidden items-center gap-10 lg:flex",

  navLink:
    "group relative text-sm uppercase tracking-[0.2em] text-[#F5F0E6]/70 transition-colors duration-300 hover:text-[#C8A96B]",

  navLinkUnderline:
    "absolute -bottom-2 left-0 h-px w-0 bg-[#C8A96B] transition-all duration-300 group-hover:w-full",

  rightSection:
    "hidden items-center gap-4 lg:flex",

  iconButton:
    "flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#F5F0E6]/70 backdrop-blur-sm transition-all duration-300 hover:border-[#C8A96B]/40 hover:bg-[#C8A96B]/10 hover:text-[#C8A96B] hover:shadow-[0_0_20px_rgba(200,169,107,0.15)]",

  mobileButton:
    "flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#F5F0E6] lg:hidden",

  ctaButton:
    "inline-flex items-center justify-center rounded-md border border-[#C8A96B] bg-[#C8A96B] px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#d4b483] hover:shadow-[0_0_30px_rgba(200,169,107,0.35)]",
};

export function Header({
  data,
}: {
  readonly data: HeaderProps;
}) {
  const { icono, title, sectionLink } = data;

  const iconURL = getStrapiImage(
    icono,
    "thumbnail"
  );
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Logo */}
        <Link href="/" className={styles.logoWrapper}>
          <div className={styles.logoContainer}>
            <div className={styles.logoGlow} />

            <Image
              src={iconURL}
              alt={icono.alternativeText ?? title}
              fill
              priority
              sizes="80px"
              className={styles.logoImg}
            />
          </div>

          <div className={styles.logoTextWrapper}>
            <span className={styles.logoTitle}>
              {title}
            </span>

            <span className={styles.logoSubtitle}>
              Perfumes Árabes
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <ul className={styles.navLinks}>
          {sectionLink?.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                target={link.isExternal ? "_blank" : "_self"}
                className={styles.navLink}
              >
                {link.label}

                <span className={styles.navLinkUnderline} />
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className={styles.rightSection}>
        


        </div>

        {/* Mobile Menu */}
        <button className={styles.mobileButton}>
          <Menu size={20} />
        </button>
      </nav>
    </header>
  );
}
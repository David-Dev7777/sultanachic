"use client";

import Image from "next/image";
import {
    Clock3,
    Leaf,
    BadgeCheck,
    ShieldCheck,
} from "lucide-react";

import { ObjetiveSection as ObjetiveSectionType } from "@/types/objetiveSection";
import { getStrapiImage } from "@/lib/get-strapi-images";




const styles = {
    section:
        "relative overflow-hidden bg-black py-24 lg:py-32",

    background:
        "absolute inset-0",

    overlay:
        "absolute inset-0 bg-black/85",

    glowTop:
        "absolute top-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#C8A96B]/10 blur-[120px]",

    glowBottom:
        "absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#C8A96B]/10 blur-[120px]",

    container:
        "relative z-10 mx-auto max-w-7xl px-6 lg:px-10",

    grid:
        "grid items-center gap-16 lg:grid-cols-2",

    imageWrapper:
        "relative h-[560px] w-full max-w-[420px] overflow-hidden rounded-[36px] border border-[#C8A96B]/20 bg-black/40 shadow-[0_0_60px_rgba(200,169,107,0.15)] backdrop-blur-sm",

    image:
        "h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105",

    backgroundImage:
        "absolute inset-0 h-full w-full object-cover scale-[1.05]",


    subtitle:
        "mb-4 block text-sm uppercase tracking-[0.35em] text-[#C8A96B]",

    title:
        "font-serif text-4xl leading-tight text-[#F5F0E6] md:text-6xl",

    accent:
        "italic text-[#C8A96B]",

    description:
        "mt-8 max-w-2xl text-lg leading-relaxed text-[#F5F0E6]/70",

    divider:
        "mt-10 h-[2px] w-24 bg-[#C8A96B]",

    features:
        "mt-16 grid grid-cols-2 gap-y-10 md:grid-cols-4",

    feature:
        "flex flex-col items-center text-center px-4",

    icon:
        "mb-4 h-10 w-10 text-[#C8A96B]",

    featureTitle:
        "text-base text-[#F5F0E6]",

    featureSubtitle:
        "text-base text-[#F5F0E6]",
};

interface ObjetiveSectionProps {
    readonly data: ObjetiveSectionType | null;
}

export function ObjetiveSection({
    data,
}: ObjetiveSectionProps) {
    if (!data) return null;

    const {
        title,
        subtitle,
        text,
        imagen,
    } = data;

    const imageUrl = getStrapiImage(data.imagen, "large");

    const features = [
        {
            icon: Clock3,
            title: "Aromas de",
            subtitle: "larga duración",
        },
        {
            icon: Leaf,
            title: "Ingredientes",
            subtitle: "premium",
        },
        {
            icon: BadgeCheck,
            title: "Fragancias",
            subtitle: "100% originales",
        },
        {
            icon: ShieldCheck,
            title: "Experiencia de compra",
            subtitle: "segura y confiable",
        },
    ];

    return (
        <section className={styles.section}>
          

            <div className={styles.overlay} />
            <div className={styles.glowTop} />
            <div className={styles.glowBottom} />

            <div className={styles.container}>
                <div className={styles.grid}>


                    {/* CONTENT */}
                    <div>
                        <h2 className={styles.subtitle}>
                            {data.title}
                        </h2>

                        <span className={styles.title}>
                            {data.subtitle}
                        </span>

                        <p className={styles.description}>
                            {data.text}
                        </p>

                        <div className={styles.divider} />

                        {/* FEATURES */}
                        <div className={styles.features}>
                            {features.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className={`${styles.feature}
                    ${index !== features.length - 1
                                                ? "md:border-r md:border-[#C8A96B]/15"
                                                : ""
                                            }`}
                                    >
                                        <Icon
                                            strokeWidth={1.5}
                                            className={styles.icon}
                                        />

                                        <p className={styles.featureTitle}>
                                            {item.title}
                                        </p>

                                        <p className={styles.featureSubtitle}>
                                            {item.subtitle}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div className="flex justify-center lg:justify-end">
                        {imageUrl && (
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={imageUrl}
                                    alt={data.title}
                                    fill
                                    quality={100}
                                    sizes="(max-width: 168px) 100vw, 420px"
                                    className={styles.image}
                                />

                                {/* GOLD OVERLAY */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                {/* GLOW */}
                                <div className="absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#C8A96B]/20 blur-3xl" />
                            </div>
                        )}
                    </div>

                </div>

            </div>
        </section>
    );
}
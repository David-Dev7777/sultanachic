"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Product } from "@/types/product";

const BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  "http://localhost:1337";

interface ProductSectionProps {
  title: string;
  subtitle: string;
  productos: Product[];
  fondo: string;
    isCatalog?: boolean;
}

export function ProductsSection({
  data,
}: {
  readonly data: ProductSectionProps;
}) {
  const { title, subtitle, productos, fondo } = data;

  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const isDark = fondo === "negro";

  const sectionStyles = isDark
    ? "bg-[#050505] text-white"
    : "bg-[#F5F1EA] text-[#2B2118]";

  const titleStyles = isDark
    ? "text-[#F5F0E6]"
    : "text-[#2B2118]";

  const subtitleStyles = isDark
    ? "text-[#F5F0E6]/60"
    : "text-[#6B5B4D]";

  const cardStyles = isDark
    ? "border-white/5 bg-gradient-to-b from-[#16110D] to-[#0B0B0B]"
    : "border-[#E8DED1] bg-[#FCFAF7] shadow-[0_4px_20px_rgba(0,0,0,0.04)]";

  const cardTitleStyles = isDark
    ? "text-[#F5F0E6]"
    : "text-[#2B2118]";

  const cardTextStyles = isDark
    ? "text-[#C8A96B]/70"
    : "text-[#8B7355]";

  const buttonStyles = isDark
    ? "border-[#C8A96B]/20 bg-[#C8A96B]/10 text-[#F5F0E6] hover:border-[#C8A96B]/50 hover:bg-[#C8A96B]/20"
    : "border-[#C8A96B]/30 bg-[#C8A96B]/5 text-[#2B2118] hover:bg-[#C8A96B]/10";

  return (
    <>
      <section
        className={`relative -mt-10 overflow-hidden rounded-t-[40px] py-28 transition-colors duration-500 ${sectionStyles}`}
      >
        {isDark && (
          <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(200,169,107,0.12),transparent_70%)]" />
        )}

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Header */}
          <div className="mb-16 text-center">
            <span className="mb-5 inline-block rounded-full border border-[#C8A96B]/20 bg-[#C8A96B]/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#C8A96B]">
              Colección Premium
            </span>

            <h2
              className={`font-serif text-4xl md:text-5xl ${titleStyles}`}
            >
              {title}
            </h2>

            <p
              className={`mx-auto mt-6 max-w-2xl text-lg ${subtitleStyles}`}
            >
              {subtitle}
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-3 xl:grid-cols-4">
            {productos?.map((product) => {
              const image = product.imagen;

              const imageURL = image?.url
                ? image.url.startsWith("http")
                  ? image.url
                  : `${BASE_URL}${image.url}`
                : "/placeholder.jpg";

              return (
                <article
                  key={product.id}
                  className={`group overflow-hidden rounded-[28px] border transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A96B]/30 hover:shadow-[0_0_40px_rgba(200,169,107,0.15)] ${cardStyles}`}
                >
                  {/* Image */}
                  <div className="relative h-[380px] overflow-hidden">
                    <Image
                      src={imageURL}
                      alt={
                        image?.alternativeText ??
                        product.nombre
                      }
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3
                      className={`mt-3 font-serif text-2xl ${cardTitleStyles}`}
                    >
                      {product.nombre}
                    </h3>

                    <span
                      className={`mt-3 flex text-xs uppercase tracking-[0.3em] ${cardTextStyles}`}
                    >
                      {product?.marca || "Perfume Árabe"}
                    </span>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-xl text-[#C8A96B]">
                        ${product.precio}
                      </span>

                      <button
                        onClick={() =>
                          setSelectedProduct(product)
                        }
                        className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-all duration-300 ${buttonStyles}`}
                      >
                        Ver Más
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[32px] border border-[#C8A96B]/20 bg-[#0B0B0B] shadow-[0_0_60px_rgba(0,0,0,0.7)]">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-5 top-5 z-10 rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-2">
              {/* IMAGE */}
              <div className="relative h-[500px]">
                <Image
                  src={
                    selectedProduct.imagen?.url?.startsWith(
                      "http"
                    )
                      ? selectedProduct.imagen.url
                      : `${BASE_URL}${selectedProduct.imagen?.url}`
                  }
                  alt={selectedProduct.nombre}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-center p-10 text-white">
                <span className="mb-4 text-xs uppercase tracking-[0.4em] text-[#C8A96B]">
                  {selectedProduct.marca ||
                    "Perfume Premium"}
                </span>

                <h2 className="font-serif text-5xl text-[#F5F0E6]">
                  {selectedProduct.nombre}
                </h2>

                <p className="mt-6 leading-relaxed text-white/70">
                  {selectedProduct.descripcion ||
                    "Fragancia exclusiva con notas sofisticadas y una esencia elegante de larga duración."}
                </p>

                <div className="mt-8 text-3xl text-[#C8A96B]">
                  ${selectedProduct.precio}
                </div>

                <a
                  href={selectedProduct.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex w-fit items-center justify-center rounded-full bg-[#C8A96B] px-8 py-4 text-sm uppercase tracking-[0.3em] text-black transition-all duration-300 hover:scale-105 hover:bg-[#d8b97b]"
                >
                  Comprar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
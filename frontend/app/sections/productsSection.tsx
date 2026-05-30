"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Product } from "@/types/product";
import { getStrapiImage } from "@/lib/get-strapi-images";


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

  //estado para el producto seleccionado en el modal
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  //estado para mostrar el modal de redirección a la tienda
  const [showRedirectModal, setShowRedirectModal] =
    useState(false);

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
        {/* Glow Background */}
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

          {/* Responsive Adaptive Grid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,320px))] justify-center gap-8">
            {productos?.map((product) => {
              const image = product.imagen;

              const imageURL = getStrapiImage(
                product.imagen,
                "medium"
              );

              return (
                <article
                  key={product.id}
                  className={`group overflow-hidden rounded-[28px] border transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A96B]/30 hover:shadow-[0_0_40px_rgba(200,169,107,0.15)] ${cardStyles}`}
                >
                  {/* IMAGE */}
                  <div className="relative aspect-[4/4] overflow-hidden">
                    <Image
                      src={imageURL}
                      alt={
                        image?.alternativeText ??
                        product.nombre
                      }
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col p-6">
                    <div>
                      <h3
                        className={`mt-3 line-clamp-2 font-serif text-2xl ${cardTitleStyles}`}
                      >
                        {product.nombre}
                      </h3>

                      <span
                        className={`mt-3 flex text-xs uppercase tracking-[0.3em] ${cardTextStyles}`}
                      >
                        {product?.marca || "Perfume Árabe"}
                      </span>
                    </div>

                    {/* FOOTER */}
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <span className="text-xl font-medium text-[#C8A96B]">
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

          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[32px] border border-[#C8A96B]/20 bg-[#0B0B0B] shadow-[0_0_60px_rgba(0,0,0,0.7)]">

            {/* CLOSE */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-5 top-5 z-10 rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
            >
              <X size={18} />
            </button>

            <div className="grid items-center md:grid-cols-2">

              {/* IMAGE */}
              <div className="relative h-[360px] md:h-[500px]">
                <Image
                  src={getStrapiImage(
                    selectedProduct.imagen,
                    "medium"
                  )}
                  alt={selectedProduct.nombre}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="flex min-h-full flex-col justify-center p-8 md:p-10 text-white">

                <span className="mb-4 text-xs uppercase tracking-[0.4em] text-[#C8A96B]">
                  {selectedProduct.marca ||
                    "Perfume Premium"}
                </span>

                <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0E6]">
                  {selectedProduct.nombre}
                </h2>

                <p className="mt-6 leading-relaxed text-white/70">
                  {selectedProduct.descripcion ||
                    "Fragancia exclusiva con notas sofisticadas y una esencia elegante de larga duración."}
                </p>

                <div className="mt-8 text-3xl text-[#C8A96B]">
                  ${selectedProduct.precio}
                </div>

                {/* Comprar Ahora Button */}
                <button
                  onClick={() => setShowRedirectModal(true)}
                  className="mt-10 inline-flex w-fit items-center justify-center rounded-full bg-[#C8A96B] px-8 py-4 text-sm uppercase tracking-[0.3em] text-black transition-all duration-300 hover:scale-105 hover:bg-[#d8b97b]"
                >
                  Comprar Ahora
                </button>

              </div>
            </div>
          </div>
        </div>
      )
      }

      {/* REDIRECT MODAL */}
      {showRedirectModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">

          <div className="w-full max-w-md rounded-[28px] border border-[#C8A96B]/20 bg-[#0B0B0B] p-8 text-center shadow-[0_0_50px_rgba(0,0,0,0.7)]">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A96B]/10 text-3xl text-[#C8A96B]">
              ✦
            </div>

            <h3 className="font-serif text-3xl text-[#F5F0E6]">
              Redirección
            </h3>

            <p className="mt-4 leading-relaxed text-white/70">
              Serás dirigido a la página de compra
              para continuar con tu pedido.
            </p>

            <button
              onClick={() => {
                if (selectedProduct?.link) {
                  window.open(
                    selectedProduct.link,
                    "_blank"
                  );
                }

                setShowRedirectModal(false);
              }}
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#C8A96B] px-6 py-4 text-sm uppercase tracking-[0.3em] text-black transition-all duration-300 hover:scale-[1.02] hover:bg-[#d8b97b]"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  );
}


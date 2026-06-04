"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Product } from "@/types/product";
import { getStrapiImage } from "@/lib/get-strapi-images";
import { ProductSection as ProductSectionType } from "@/types/ProductSection";

const styles = {
  section:
    "relative overflow-hidden bg-black py-28",

  glow:
    "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,107,0.10),transparent_60%)]",

  container:
    "relative z-10 mx-auto max-w-7xl rounded-[40px] border border-[#C8A96B]/10 bg-black/40 p-8 backdrop-blur-sm lg:p-12",

  header:
    "mb-20 text-center",

  badge:
    "mb-5 block text-sm uppercase tracking-[0.4em] text-[#C8A96B]",

  title:
    "font-serif text-3xl text-[#F5F0E6] md:text-6xl",

  subtitle:
    "mx-auto mt-6 max-w-3xl text-lg text-[#F5F0E6]/60",

  grid:
    "grid gap-12 md:grid-cols-3 xl:grid-cols-3",

  card:
    "overflow-hidden rounded-[32px] border border-[#C8A96B]/10 bg-[#050505] transition-all duration-500 hover:border-[#C8A96B]/30 hover:shadow-[0_0_30px_rgba(200,169,107,0.08)]",

  cardImageContainer:
    "relative aspect-[3/3] overflow-hidden",

  cardImage:
    "object-cover transition-transform duration-700 hover:scale-105",

  cardContent:
    "flex flex-col gap-4 p-9",

  cardTitle:
    "font-serif text-4xl text-[#F5F0E6]",

  cardBrand:
    "text-sm uppercase tracking-[0.35em] text-[#C8A96B]",

  cardFooter:
    "mt-4 flex items-center justify-between",

    cardOverlay: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent",


  price:
    "text-4xl font-light text-[#C8A96B]",

  viewButton:
    "rounded-full border border-[#C8A96B]/20 bg-[#1A140A] px-8 py-3 text-sm uppercase tracking-[0.25em] text-[#F5F0E6] transition-all duration-300 hover:border-[#C8A96B] hover:bg-[#C8A96B] hover:text-black",

  /* Modal Producto */

  modalBackdrop:
    "fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-md",

  modalContainer:
   "relative w-full max-w-3xl rounded-[24px] border border-[#C8A96B]/20 bg-[#0B0B0B] shadow-[0_0_40px_rgba(0,0,0,0.6)]",


  closeButton:
    "absolute right-5 top-5 z-10 rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10",

  modalGrid: 
  "grid md:grid-cols-[1fr_2fr] gap-6",


 modalImage: 
  "relative w-full h-full object-cover rounded-l-[25px]",


 modalContent:
  "flex flex-col justify-center p-6 text-white",


  modalBrand:
    "mb-4 text-xs uppercase tracking-[0.4em] text-[#C8A96B]",

  modalTitle:
    "font-serif text-4xl text-[#F5F0E6]",

  modalDescription:
    "mt-6 leading-relaxed text-white/70",

  modalPrice:
    "mt-8 text-2xl text-[#C8A96B]",

  buyButton:
    "mt-6 inline-flex w-fit items-center justify-center rounded-full bg-[#C8A96B] px-6 py-3 text-sm uppercase tracking-[0.3em] text-black transition-all duration-300 hover:scale-105 hover:bg-[#d8b97b]",

  /* Redirect Modal */

  redirectBackdrop:
    "fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 backdrop-blur-md",

  redirectContainer:
    "w-full max-w-md rounded-[32px] border border-[#C8A96B]/20 bg-[#0B0B0B] p-8 text-center shadow-[0_0_50px_rgba(0,0,0,0.7)]",

  redirectIcon:
    "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A96B]/10 text-3xl text-[#C8A96B]",

  redirectTitle:
    "font-serif text-3xl text-[#F5F0E6]",

  redirectText:
    "mt-4 leading-relaxed text-white/70",

  redirectButton:
    "mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#C8A96B] px-6 py-4 text-sm uppercase tracking-[0.3em] text-black transition-all duration-300 hover:bg-[#d8b97b]",
};


interface ProductSectionProps {
  readonly data: ProductSectionType;
}
export function ProductsSection({
  data,
}: ProductSectionProps) {



  const { title, subtitle, productos = [], coleccion } = data;

  //estado para el producto seleccionado en el modal
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  //estado para mostrar el modal de redirección a la tienda
  const [showRedirectModal, setShowRedirectModal] =
    useState(false);



  return (
    <>
      <section className={styles.section}>
      <div className={styles.glow} />
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.header}>
            <span className={styles.badge}>
              {coleccion || "Colección Premium"}
            </span>

            <h2 className={styles.title}>
              {title}
            </h2>

            <p className={styles.subtitle}>
              {subtitle}
            </p>
          </div>

          {/* Products Grid */}
          <div className={styles.grid}>
            {productos?.map((product) => {
              const image = product.imagen;

              const imageURL = getStrapiImage(
                product.imagen,
                "medium"
              );

              return (
                <article
                  key={product.id}
                  className={styles.card}
                >
                  {/* IMAGE */}
                  <div
                    className={
                      styles.cardImageContainer
                    }
                  >
                    <Image
                      src={imageURL}
                      alt={
                        image?.alternativeText ??
                        product.nombre
                      }
                      fill
                      className={styles.cardImage}
                    />

                    <div
                      className={
                        styles.cardOverlay
                      }
                    />
                  </div>

                  {/* CONTENT */}
                  <div
                    className={
                      styles.cardContent
                    }
                  >
                    <div>
                      <h3
                        className={
                          styles.cardTitle
                        }
                      >
                        {product.nombre}
                      </h3>

                      <span
                        className={
                          styles.cardBrand
                        }
                      >
                        {product?.marca ||
                          "Perfume Árabe"}
                      </span>
                    </div>

                    {/* FOOTER */}
                    <div
                      className={
                        styles.cardFooter
                      }
                    >
                      <span
                        className={
                          styles.price
                        }
                      >
                        ${product.precio}
                      </span>

                      <button
                        onClick={() =>
                          setSelectedProduct(
                            product
                          )
                        }
                        className={
                          styles.viewButton
                        }
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

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <div
          className={styles.modalBackdrop}
        >
          <div
            className={
              styles.modalContainer
            }
          >
            <button
              onClick={() =>
                setSelectedProduct(null)
              }
              className={
                styles.closeButton
              }
            >
              <X size={18} />
            </button>

            <div className={styles.modalGrid}>
              {/* IMAGE */}
              <div
                className={
                  styles.modalImage
                }
              >
                <Image
                  src={getStrapiImage(
                    selectedProduct.imagen,
                    "medium"
                  )}
                  alt={
                    selectedProduct.nombre
                  }
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div
                className={
                  styles.modalContent
                }
              >
                <span
                  className={
                    styles.modalBrand
                  }
                >
                  {selectedProduct.marca ||
                    "Perfume Premium"}
                </span>

                <h2
                  className={
                    styles.modalTitle
                  }
                >
                  {selectedProduct.nombre}
                </h2>

                <p
                  className={
                    styles.modalDescription
                  }
                >
                  {selectedProduct.descripcion ||
                    "Fragancia exclusiva con notas sofisticadas y una esencia elegante de larga duración."}
                </p>

                <div
                  className={
                    styles.modalPrice
                  }
                >
                  ${selectedProduct.precio}
                </div>

                <button
                  onClick={() =>
                    setShowRedirectModal(
                      true
                    )
                  }
                  className={
                    styles.buyButton
                  }
                >
                  Comprar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* REDIRECT MODAL */}
      {showRedirectModal && (
        <div
          className={
            styles.redirectBackdrop
          }
        >
          <div
            className={
              styles.redirectContainer
            }
          >
            <div
              className={
                styles.redirectIcon
              }
            >
              ✦
            </div>

            <h3
              className={
                styles.redirectTitle
              }
            >
              Redirección
            </h3>

            <p
              className={
                styles.redirectText
              }
            >
              Serás dirigido a la página
              de compra para continuar
              con tu pedido.
            </p>

            <button
              onClick={() => {
                if (
                  selectedProduct?.link
                ) {
                  window.open(
                    selectedProduct.link,
                    "_blank"
                  );
                }

                setShowRedirectModal(
                  false
                );
              }}
              className={
                styles.redirectButton
              }
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  );

}
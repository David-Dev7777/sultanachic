"use client";

import { useMemo, useState } from "react";

import { Product } from "@/types/product";

import { FiltersSidebar } from "@/components/FiltersSidebar";
import { ProductsSection } from "@/app/sections/productsSection";

interface CatalogClientProps {
  data: any;
}

export function CatalogClient({
  data,
}: CatalogClientProps) {

  // sección real
  const productSection =
    data?.productSection;

  // productos
  const productos: Product[] =
    productSection?.productos || [];

  // filtros
  const [genero, setGenero] =
    useState("");

  const [marca, setMarca] =
    useState("");

  const [aroma, setAroma] =
    useState("");

  const [precioMax, setPrecioMax] =
    useState(300);

  // filtrado
  const productosFiltrados =
    useMemo(() => {

      return productos.filter(
        (product: Product) => {

          const matchGenero =
            !genero ||
            product.genero === genero;

          const matchMarca =
            !marca ||
            product.marca === marca;

          const matchAroma =
            !aroma ||
            product.aroma === aroma;

          const matchPrecio =
  Number(product.precio) <= precioMax;

          return (
            matchGenero &&
            matchMarca &&
            matchAroma &&
            matchPrecio
          );
        }
      );

    }, [
      productos,
      genero,
      marca,
      aroma,
      precioMax,
    ]);

  // data final
  const filteredData = {
    ...productSection,
    productos: productosFiltrados,
    isCatalog: true,
  };

  return (
    <section className="bg-[#F8F5F0]">

      <div className="container mx-auto px-4 py-10">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">

          {/* SIDEBAR */}
          <div className="h-fit lg:sticky lg:top-24">

            <FiltersSidebar
              genero={genero}
              setGenero={setGenero}
              marca={marca}
              setMarca={setMarca}
              aroma={aroma}
              setAroma={setAroma}
              precioMax={precioMax}
              setPrecioMax={setPrecioMax}
            />

          </div>

          {/* PRODUCTOS */}
          <div className="min-w-0">

            {/* HEADER */}
            <div className="mb-8 flex items-center justify-between">

              <div>
                <h2 className="font-serif text-4xl text-[#2B2118]">
                  Catálogo
                </h2>

                <p className="mt-2 text-[#6B5B4D]">
                  Descubre nuestra colección premium
                </p>
              </div>

              <span className="text-sm text-[#8B7355]">
                {productosFiltrados.length} productos
              </span>

            </div>

            {/* GRID */}
            <ProductsSection
              data={filteredData}
            />

          </div>

        </div>

      </div>

    </section>
  );
}
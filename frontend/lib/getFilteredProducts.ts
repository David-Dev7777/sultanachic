import qs from "qs";

import { ProductFilters } from "@/types/productFilters";

export async function getFilteredProducts(filtersSection: ProductFilters) {
  const filters: Record<string, any> = {};

  const BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  "http://localhost:1337";

  if (filtersSection.usarFiltros) {
    if (filtersSection.genero.length > 0) {
      filters.genero = {
        $eq: filtersSection.genero,
      };
    }

    if (filtersSection.marca) {
      filters.marca = {
        $eq: filtersSection.marca,
      };
    }

    if (filtersSection.destacado) {
      filters.destacado = {
        $eq: true,
      };
    }
  }

  const query = qs.stringify(
    {
      filters,
      populate: {
        imagen: true,
      },
      pagination: {
        pageSize: filtersSection.limit,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const response = await fetch(
    `${BASE_URL}/api/productos?${query}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const data = await response.json();

  return data.data;
}
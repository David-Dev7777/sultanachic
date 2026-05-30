import { ProductFilters as ProductFiltersType } from "@/types/productFilters";
import { getFilteredProducts } from "@/lib/getFilteredProducts";

interface Props {
  data: ProductFiltersType;
}

export  async function ProductFilters({ data }: Props) {
  const products = data.usarFiltros
    ? await getFilteredProducts(data)
    : data.productos || [];

  return (

    
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">
            {data.title}
          </h2>

          <p className="text-muted-foreground">
            {data.subtitle}
          </p>
        </div>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product: any) => (
            <div
              key={product.documentId}
              className="rounded-lg border p-4"
            >
              <img
                src={product.imagen?.url}
                alt={product.nombre}
                className="w-full aspect-square object-cover"
              />

              <h3 className="mt-3 font-semibold">
                {product.nombre}
              </h3>

              <p className="text-sm text-gray-500">
                {product.marca}
              </p>

              <p className="font-bold">
                ${product.precio}
              </p>
            </div>

            
          ))}
        </div>
      </div>
    </section>

    
  );
}
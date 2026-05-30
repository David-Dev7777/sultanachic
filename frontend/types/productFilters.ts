import { Product } from"@/types/product";

export interface ProductFilters {
    _component: "layout.product-filters";

    id: number;
    title: string;
    subtitle: string;
    usarFiltros: boolean;
    genero: ("Hombre" | "Mujer" | "Unisex")[];
    marca: ("Armaf" | "Lattafa" | "Afnan" | "Maison Alhambra" | "Fragance World" | "Alhambra" | "Al Haramain" | "Volare" | "Hoco")[];
    destacado: boolean;
    limit: number;
    productos: Product[];

}
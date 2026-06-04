


export interface Product {
  id: number

  nombre: string
  precio: number
  stock?: number

  slug: string


  descripcion?: string

  destacado?: boolean


  link?: string

  aroma?: "Floral" | "Amaderado" | "Citrico" | "Oriental" | "Fresco"

  genero?: "Hombre" | "Mujer" | "Unisex"

  marca?: "Armaf" | "Lattafa" | "Afnan" | "Maison Alhambra" | "Fragance World" | "Alhambra" | "Al Haramain" | "Volare" | "Hoco"

  volumen?: "ml50" | "ml100" | "ml150"

  imagen?: {
    url: string
    alternativeText?: string
  }

}
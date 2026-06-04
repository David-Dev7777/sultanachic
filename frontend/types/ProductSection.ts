import { Product } from "./product";

export interface ProductSection {
  title: string;
  subtitle: string;
  productos: Product[];
  coleccion: string;
}


export interface TestimonialCard {
  id: number;
  nombre: string;
  texto: string;
  raiting: number;
  destacado: boolean;
  imagen?: StrapiImage; // Assuming the image is stored in Strapi and you want to use the getStrapiImage function to retrieve it
}

export interface TestimonialsProps {
  title: string;
  subtitle: string;
  card: TestimonialCard[];
}

export interface StrapiImage {
  url: string;
  alternativeText?: string | null;
  formats?: Record<string, { url: string }>;
}
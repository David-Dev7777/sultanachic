

export interface TestimonialCard {
  id: number;
  nombre: string;
  texto: string;
  raiting: number;
  destacado: boolean;
  imagen?: TestimonialsImagen; 
}

export interface TestimonialsProps {
  title: string;
  subtitle: string;
  card: TestimonialCard[];
}

export interface TestimonialsImagen {
  url: string;
  alternativeText?: string | null;
  formats?: Record<string, { url: string }>;
}
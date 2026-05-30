export interface ObjetiveSection {
  _component: "layout.objetive-section";
  id: number;

  title: string;
  subtitle: string;
  text: string;
  imagen: Media;
  card_person: CardPerson;
}

export interface CardPerson {
  id: number;
  title: string;
  text: string;

  imagen?: Media | null;
}

export interface Media {
  id: number;
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: MediaFormat;
    small?: MediaFormat;
    medium?: MediaFormat;
    large?: MediaFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string | null;
  provider: string;
  createdAt: string;
  updatedAt: string;
}

export interface MediaFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: string | null;
  size: number;
  width: number;
  height: number;
}

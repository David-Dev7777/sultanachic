export interface LayoutCard {
  __component: "layout.layout-card";

  id: number;
  title: string;
  text: string;

  cards: Card[];
}

export interface Card {
  id: number;

  title: string;
  text: string;

  imagen?: Media | null;
  link?: Link | null;
}

export interface Link {
  id: number;

  href: string;
  label: string;

  isExternal?: boolean;
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
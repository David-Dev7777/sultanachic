import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentBadge extends Struct.ComponentSchema {
  collectionName: 'components_component_badges';
  info: {
    displayName: 'badge';
    icon: 'crop';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface ComponentCard extends Struct.ComponentSchema {
  collectionName: 'components_component_cards';
  info: {
    displayName: 'card';
    icon: 'alien';
  };
  attributes: {
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'component.link', false>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentCardTestimonio extends Struct.ComponentSchema {
  collectionName: 'components_component_card_testimonios';
  info: {
    displayName: 'card-testimonio';
    icon: 'pencil';
  };
  attributes: {
    destacado: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    imagen: Schema.Attribute.Media<'images'>;
    nombre: Schema.Attribute.String & Schema.Attribute.Required;
    rating: Schema.Attribute.Integer & Schema.Attribute.Required;
    texto: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentCarrusel extends Struct.ComponentSchema {
  collectionName: 'components_component_carrusels';
  info: {
    displayName: 'carrusel';
    icon: 'landscape';
  };
  attributes: {
    imagenes: Schema.Attribute.Media<'images', true>;
  };
}

export interface ComponentFormularioContacto extends Struct.ComponentSchema {
  collectionName: 'components_component_formulario_contactos';
  info: {
    displayName: 'formulario-contacto';
    icon: 'discuss';
  };
  attributes: {
    correo: Schema.Attribute.Email & Schema.Attribute.Required;
    nombre: Schema.Attribute.String & Schema.Attribute.Required;
    telefono: Schema.Attribute.String;
  };
}

export interface ComponentLink extends Struct.ComponentSchema {
  collectionName: 'components_component_links';
  info: {
    displayName: 'link';
    icon: 'paperPlane';
  };
  attributes: {
    href: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
  };
}

export interface LayoutCarousel extends Struct.ComponentSchema {
  collectionName: 'components_layout_carousels';
  info: {
    displayName: 'carousel';
    icon: 'store';
  };
  attributes: {
    carrusel_imagenes: Schema.Attribute.Component<'component.carrusel', false>;
    subtitle: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface LayoutContactSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_contact_sections';
  info: {
    displayName: 'contact-section';
    icon: 'phone';
  };
  attributes: {
    description: Schema.Attribute.Text;
    facebook: Schema.Attribute.String;
    Instagram: Schema.Attribute.String;
    telefono: Schema.Attribute.BigInteger;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'footer';
    icon: 'chartCircle';
  };
  attributes: {
    icono: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'component.link', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'header';
    icon: 'calendar';
  };
  attributes: {
    icono: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    sectionLink: Schema.Attribute.Component<'component.link', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero_section';
    icon: 'dashboard';
  };
  attributes: {
    etiquetas: Schema.Attribute.Component<'component.badge', true>;
    imagen: Schema.Attribute.Media<'images', true>;
    link: Schema.Attribute.Component<'component.link', false>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutLayoutCard extends Struct.ComponentSchema {
  collectionName: 'components_layout_layout_cards';
  info: {
    displayName: 'layout_card';
    icon: 'collapse';
  };
  attributes: {
    cards: Schema.Attribute.Component<'component.card', true>;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutNeswletter extends Struct.ComponentSchema {
  collectionName: 'components_layout_neswletters';
  info: {
    displayName: 'neswletter';
    icon: 'book';
  };
  attributes: {
    descripcion: Schema.Attribute.String & Schema.Attribute.Required;
    email: Schema.Attribute.Email &
      Schema.Attribute.DefaultTo<'ejemplo@gmail.com'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutObjetiveSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_objetive_sections';
  info: {
    displayName: 'objetive-section';
    icon: 'handHeart';
  };
  attributes: {
    imagen: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface LayoutProductFilters extends Struct.ComponentSchema {
  collectionName: 'components_layout_product_filters';
  info: {
    displayName: 'product-filters';
    icon: 'filter';
  };
  attributes: {
    destacado: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    genero: Schema.Attribute.Enumeration<['Hombre', 'Mujer', 'Unisex']>;
    limit: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<5>;
    marca: Schema.Attribute.Enumeration<['lattafa', 'arnaf']>;
    productos: Schema.Attribute.Relation<'oneToMany', 'api::producto.producto'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    usarFiltros: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface LayoutProductSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_product_sections';
  info: {
    displayName: 'product-section';
    icon: 'apps';
  };
  attributes: {
    coleccion: Schema.Attribute.Enumeration<['Hombre', 'Mujer', 'Unisex']>;
    link: Schema.Attribute.Component<'component.link', false>;
    productos: Schema.Attribute.Relation<'oneToMany', 'api::producto.producto'>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutStorySection extends Struct.ComponentSchema {
  collectionName: 'components_layout_story_sections';
  info: {
    displayName: 'story-section';
    icon: 'archive';
  };
  attributes: {
    descripcion: Schema.Attribute.Text & Schema.Attribute.Required;
    imagen: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_layout_testimonials';
  info: {
    displayName: 'testimonials';
    icon: 'handHeart';
  };
  attributes: {
    card: Schema.Attribute.Component<'component.card-testimonio', true>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.badge': ComponentBadge;
      'component.card': ComponentCard;
      'component.card-testimonio': ComponentCardTestimonio;
      'component.carrusel': ComponentCarrusel;
      'component.formulario-contacto': ComponentFormularioContacto;
      'component.link': ComponentLink;
      'layout.carousel': LayoutCarousel;
      'layout.contact-section': LayoutContactSection;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.hero-section': LayoutHeroSection;
      'layout.layout-card': LayoutLayoutCard;
      'layout.neswletter': LayoutNeswletter;
      'layout.objetive-section': LayoutObjetiveSection;
      'layout.product-filters': LayoutProductFilters;
      'layout.product-section': LayoutProductSection;
      'layout.story-section': LayoutStorySection;
      'layout.testimonials': LayoutTestimonials;
    }
  }
}

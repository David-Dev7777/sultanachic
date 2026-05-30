import qs from "qs";
import { cache } from "react";

export const BASE_URL = process.env.STRAPI_URL;
export const API_TOKEN = process.env.STRAPI_API_TOKEN ;

console.log("TOKEN:", process.env.STRAPI_API_TOKEN);
console.log("URL:", process.env.STRAPI_URL);

const Query_Home_page = {
  populate: {
    cover: true,

    section: {
      on: {

        /*
        ========================================
        HERO
        ========================================
        */

        "layout.hero-section": {
          populate: {
            imagen: {
              populate: "*",
            },

            link: true,
          },
        },

        /*
        ========================================
        HEADER
        ========================================
        */

        "layout.header": {
          populate: {
            icono: {
              populate: "*",
            },

            sectionLink: true,
          },
        },

        /*
        ========================================
        PRODUCT SECTION
        ========================================
        */

        "layout.product-section": {
          populate: {
            productos: {
              populate: {
                imagen: true,
              },
            },

          },
        },

        /*
        ========================================
        TESTIMONIALS
        ========================================
        */

        "layout.testimonials": {
          populate: {
            card: {
              populate: {
                imagen: {
                  populate: "*",
                },
              },
            },
          },
        },

        /*
        ========================================
        STORY SECTION
        ========================================
        */

        "layout.story-section": {
          populate: {
            imagen: {
              populate: "*",
            },
          },
        },

        /*
        ========================================
        OBJECTIVE SECTION
        ========================================
        */
        "layout.objetive-section": {
          populate: {
            imagen: true,
          },
        },

        /*
         ========================================
         LAYOUT CARD
         ========================================
         */
        "layout.layout-card": {
          populate: {
            cards: {
              populate: {
                imagen: true,
                link: true,
              },
            },
          },
        },




        /*
       ========================================
       CARRUSEL SECTION
       ========================================
       */

        "layout.carousel": {
          populate: {
            carrusel_imagenes: {
              populate: {
                imagenes: {
                  populate: "*",
                },
              },
            }
          },
        },

        /*
        ========================================
        CONTACT SECTION
        ========================================
        */

        "layout.contact-section": true,

        /*
        ========================================
        FOOTER
        ========================================
        */

        "layout.footer": {
          populate: {
            icono: {
              populate: "*",
            },

            link: true,
          },
        },

      },
    },
  },
};


export const GetHomePage = cache(async () => {
  const query = qs.stringify(Query_Home_page, { encodeValuesOnly: true });
  const url = `${BASE_URL}/api/home-page?${query}`;

  console.log("🔍 Fetching:", url);

  const response = await fetch(url, {
     headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    const errorBody = await response.json();
    console.error("❌ Strapi error:", JSON.stringify(errorBody, null, 2));
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data?.data;
});

const Query_Catalogo_page = {
  populate: {
    banner_mobile: {
      fields: ["url", "alternativeText"],
    },

    banner_desktop: {
      fields: ["url", "alternativeText"],
    },

    catalogo_section: {
      on: {

        /*
        ========================================
        HERO SECTION
        ========================================
        */

        "layout.hero-section": {
          populate: {
            imagen: {
              populate: "*",
            },
            link: true,
            etiquetas: true,
          },
        },

        /*
        ========================================
        PRODUCT SECTION
        ========================================
        */

        "layout.product-section": {
          populate: {
            productos: {
              populate: {
                imagen: true,
              }
            },
            link: true,
          },
        },

        "layout.footer": {
          populate: {
            icono: {
              populate: "*",
            },

            link: true,
          },
        },

      },
    },
  },
};
export const GetCatalogoPage = cache(async () => {
  const query = qs.stringify(Query_Catalogo_page, { encodeValuesOnly: true });
  const url = `${BASE_URL}/api/catalogo-page?${query}`;

  console.log("🔍 Fetching:", url);

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    const errorBody = await response.json();
    console.error("❌ Strapi error:", JSON.stringify(errorBody, null, 2));
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data?.data;
});
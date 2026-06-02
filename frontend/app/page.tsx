import { Suspense } from "react";
import { GetHomePage } from "@/lib/strapi";
import { HeroSection } from "@/app/sections/hero-section";
import { Header } from "@/app/sections/Header";
import { ProductsSection } from "@/app/sections/productsSection";
import { TestimonialsSection } from "@/app/sections/TestimonialsSection";
import StorySection from "@/app/sections/story-section";
import { ContactSection } from "@/app/sections/Contact-section";
import { Footer } from "@/app/sections/footer";
import { ObjetiveSection } from "@/app/sections/ObjetiveSection";
import { CarouselSection } from "@/app/sections/CarouselSection";
import { LayoutCardSection } from "@/app/sections/LayoutCard";





export async function generateMetadata() {
  const data = await GetHomePage();
  return {
    title: data?.title || "Home Page",
    description: data?.descripcion?.[0]?.children?.[0]?.text || "",
  };
}

async function PageContent() {
  const data = await GetHomePage();

  const header = data?.section?.find(
    (s: any) => s.__component === "layout.header"
  );

  const heroSection = data?.section?.find(
    (s: any) => s.__component === "layout.hero-section"
  );

  const productSection = data?.section?.find(
    (s: any) => s.__component === "layout.product-section"
  );
 

  const testimonialsSection = data?.section?.find(
    (s: any) => s.__component === "layout.testimonials"
  );

  const storySection = data?.section?.find(
    (s: any) => s.__component === "layout.story-section"
  );

  const objetiveSection = data?.section?.find(
    (s: any) => s.__component === "layout.objetive-section"
  );

  const layoutCardSection = data?.section?.find(
    (s: any) => s.__component === "layout.layout-card"
  );

  const carouselSection = data?.section?.find(
    (s: any) => s.__component === "layout.carousel"
  );

  const contactSection = data?.section?.find(
    (s: any) => s.__component === "layout.contact-section"
  );

  const footer = data?.section?.find(
    (s: any) => s.__component === "layout.footer"
  );

  return (
    <>
      <section id="inicio">
      {header && <Header data={header} />}
      </section>

      <section id="hero">
      {heroSection && (
        <HeroSection data={heroSection} />
      )}
      </section>

      <section id="products">
      {productSection && (
        <ProductsSection
          data={productSection}
        />
      )}
      </section>

      

      <section id="testimonials">
      {testimonialsSection && (
        <TestimonialsSection data={testimonialsSection} />
      )}
      </section>

      <section id="story">
      {storySection && (
        <StorySection data={storySection} />
      )}
      </section>

      <section id="objetive">
      {objetiveSection && (
        <ObjetiveSection data={objetiveSection} />
      )}
      </section>

      <section id="layout-card">
      {layoutCardSection && (
        <LayoutCardSection data={layoutCardSection} />
      )}
      </section>



      <section id="carousel">
      {carouselSection && (
        <CarouselSection data={carouselSection} />
      )}
      </section>

      <section id="contact">
      {contactSection && (
        <ContactSection data={contactSection} />
      )}
      </section>
      <section id="footer"> 
      {/* Footer */}
      {footer && <Footer data={footer} />}
      </section>

    </>

  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-black text-[#C8A96B]">
          Cargando...
        </div>
      }
    >
      <PageContent />
    </Suspense>
  );
}
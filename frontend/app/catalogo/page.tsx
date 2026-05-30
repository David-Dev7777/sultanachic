import { GetCatalogoPage } from "@/lib/strapi"
import { ProductsSection } from "@/app/sections/productsSection";
import { HeroSection } from "@/app/sections/hero-section";
import { Header } from "@/app/sections/Header";
import { Footer } from "@/app/sections/footer";


export default async function CatalogoPage() {

  const data = await GetCatalogoPage()
  

  const productSection =
    data?.catalogo_section?.find(
      (s: any) =>
        s.__component ===
        "layout.product-section"
    )

    const header = data?.catalogo_section?.find(
    (s: any) => s.__component === "layout.header"
  );

  const footer = data?.catalogo_section?.find(
    (s: any) => s.__component === "layout.footer"
  );


    const heroSection = 
    data?.catalogo_section?.find(
    (s: any) => s.__component === "layout.hero-section"
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
        <ProductsSection data={productSection} />
      )}
      </section>

      <section id="footer">
      {/* Footer */}
      {footer && <Footer data={footer} />}
      </section>
   </>
  )
}
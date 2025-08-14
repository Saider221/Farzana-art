import GallerySection from "@/components/GallerySection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import StyleGallery from "@/components/StyleGallery";
import DeliverySection from "@/components/DeliverySection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductShowcase />
        <StyleGallery />
        <GallerySection />
        <DeliverySection/>
        <AboutSection/>
      </main>
    </div>
  );
};

export default Index;

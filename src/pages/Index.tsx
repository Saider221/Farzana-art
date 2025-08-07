import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import StyleGallery from "@/components/StyleGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductShowcase />
        <StyleGallery />
      </main>
    </div>
  );
};

export default Index;

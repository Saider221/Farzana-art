import GallerySection from "@/components/GallerySection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import StyleGallery from "@/components/StyleGallery";
import CollaborationsSection from "@/components/CollaborationsSection";
import ReviewsSection from "@/components/ReviewsSection";
import DeliverySection from "@/components/DeliverySection";
import ArtTerapy from "@/components/ArtTerapy";
import ArtDeliveryInfo from "@/components/ArtDeliveryInfo";
import AboutSection from "@/components/AboutSection";
import FooterContacts from "@/components/FooterContacts";
import { Footer } from "react-day-picker";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductShowcase />
        <StyleGallery />
        <GallerySection />
        {/* <CollaborationsSection /> */}
        <ReviewsSection />
        <DeliverySection/>
        <ArtTerapy />
        <ArtDeliveryInfo />
        <AboutSection/>
        <FooterContacts/>
      </main>
    </div>
  );
};

export default Index;

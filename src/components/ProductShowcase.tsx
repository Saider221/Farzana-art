import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-luxury-beige text-luxury-dark">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            ЧУВСТВОВАТЬ СЕБЯ ЧАСТЬЮ БОГАТОЙ КУЛЬТУРЫ
          </h2>
          <p className="text-lg text-luxury-dark/70 max-w-3xl mx-auto">
            Окунитесь в мир изысканных интерьеров, где каждая деталь создает атмосферу роскоши и комфорта
          </p>
        </div>
        
        <div className="relative">
          <div className="text-8xl lg:text-9xl font-bold text-luxury-dark/10 absolute top-0 left-0 z-0">
            GUZEMA
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
            {/* Left side - Main product */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 border-none">
                <div className="aspect-[4/5] bg-gradient-to-br from-blue-300/50 to-blue-600/50 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-luxury-dark">
                      Новая коллекция
                    </Badge>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Right side - Text content */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="text-6xl lg:text-7xl font-bold text-luxury-dark/20">
                НАИВ
              </div>
              
              <div className="space-y-6">
                <p className="text-xl leading-relaxed">
                  Современные решения для создания уникальных интерьеров, 
                  где традиции встречаются с инновациями.
                </p>
                
                <p className="text-lg text-luxury-dark/70">
                  Каждый элемент нашей коллекции продуман до мелочей, 
                  чтобы создать гармоничное пространство для жизни.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
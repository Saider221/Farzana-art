import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StyleGallery = () => {
  const styles = [
    {
      title: "SCANDI STYLE",
      subtitle: "Интерьерная фотосъемка",
      description: "Минималистичный скандинавский стиль с акцентом на функциональность и уют",
      image: "bg-gradient-to-br from-red-200 to-red-400",
      badge: "Популярное"
    },
    {
      title: "TRADITIONAL STYLE", 
      subtitle: "Классические решения",
      description: "Элегантные традиционные интерьеры с богатой историей и изысканными деталями",
      image: "bg-gradient-to-br from-gray-200 to-gray-400",
      badge: "Классика"
    },
    {
      title: "MINIMALISM STYLE",
      subtitle: "Современный минимализм", 
      description: "Чистые линии и открытые пространства для современной жизни",
      image: "bg-gradient-to-br from-blue-200 to-blue-400",
      badge: "Тренд"
    }
  ];

  return (
    <section className="py-20 bg-luxury-green">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Галерея стилей
            </h2>
            <p className="text-luxury-beige/70">
              Откройте для себя разнообразие дизайнерских решений
            </p>
          </div>
          
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" className="border-luxury-gold text-luxury-gold">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="border-luxury-gold text-luxury-gold">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {styles.map((style, index) => (
            <Card key={index} className="bg-card border-luxury-brown/20 overflow-hidden group hover:shadow-2xl transition-all duration-300 relative">
              <div className={`aspect-[4/5] ${style.image} relative`} 
                   style={{
                     clipPath: 'polygon(0 15%, 50% 0, 100% 15%, 100% 100%, 0 100%)'
                   }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-luxury-gold text-luxury-dark">
                    {style.badge}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{style.title}</h3>
                  <p className="text-sm opacity-90 mb-3">{style.subtitle}</p>
                  <p className="text-sm leading-relaxed opacity-80">
                    {style.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-luxury-gold"></div>
            <div className="w-3 h-3 rounded-full bg-luxury-gold/30"></div>
            <div className="w-3 h-3 rounded-full bg-luxury-gold/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleGallery;
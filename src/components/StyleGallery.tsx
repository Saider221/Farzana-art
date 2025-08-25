import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const StyleGallery = () => {
  const styles = [
    {
      title: "Стиль",
      subtitle: "Интерьерная фотосъемка",
      description: "Минималистичный скандинавский стиль с акцентом на функциональность и уют",
      image: "/public/cartina1."
    },
    {
      title: "Стиль", 
      subtitle: "Классические решения",
      description: "Элегантные традиционные интерьеры с богатой историей и изысканными деталями",
      image: "bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400"
    },
    {
      title: "Стиль",
      subtitle: "Современный минимализм", 
      description: "Чистые линии и открытые пространства для современной жизни",
      image: "bg-gradient-to-br from-blue-200 via-blue-300 to-indigo-300"
    },
    {
      title: "Стиль",
      subtitle: "Интерьерная фотосъемка",
      description: "Минималистичный скандинавский стиль с акцентом на функциональность и уют",
      image: "bg-gradient-to-br from-orange-200 via-orange-300 to-amber-400"
    },
    {
      title: "Стиль", 
      subtitle: "Классические решения",
      description: "Элегантные традиционные интерьеры с богатой историей и изысканными деталями",
      image: "bg-gradient-to-br from-emerald-200 via-emerald-300 to-teal-400"
    },
    {
      title: "Стиль",
      subtitle: "Современный минимализм", 
      description: "Чистые линии и открытые пространства для современной жизни",
      image: "bg-gradient-to-br from-violet-200 via-violet-300 to-purple-400"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= styles.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerPage < 0 ? Math.max(0, styles.length - itemsPerPage) : prevIndex - itemsPerPage
    );
  };

  // Получаем видимые карточки для текущего слайда
  const visibleStyles = styles.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-20 bg-luxury-green relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Галерея стилей
          </h2>
        </div>
        
        <div className="relative flex items-center">
          {/* Left Navigation */}
          <Button 
            variant="outline" 
            size="icon" 
            onClick={prevSlide}
            className="absolute left-[-60px] z-10 bg-white border-white text-luxury-green hover:bg-luxury-green hover:text-white hover:border-luxury-green"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {visibleStyles.map((style, index) => (
              <div 
                key={currentIndex + index} 
                className="group hover:transform hover:scale-105 transition-all duration-300"
              >
                {/* Square Image Container */}
                <div className={`h-80 ${style.image} relative overflow-hidden rounded-t-2xl`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Text Content */}
                <Card className="bg-white border-0 rounded-t-none rounded-b-2xl p-6 relative z-10">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-luxury-dark mb-2">{style.title}</h3>
                    <p className="text-luxury-gold font-medium text-sm mb-3">{style.subtitle}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {style.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Right Navigation */}
          <Button 
            variant="outline" 
            size="icon" 
            onClick={nextSlide}
            className="absolute right-[-60px] z-10 bg-white border-white text-luxury-green hover:bg-luxury-green hover:text-white hover:border-luxury-green"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Dot Indicators */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-3">
            {Array.from({ length: Math.ceil(styles.length / itemsPerPage) }).map((_, index) => (
              <div 
                key={index}
                className={`w-3 h-3 rounded-full ${index === Math.floor(currentIndex / itemsPerPage) ? 'bg-white' : 'bg-white/40'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleGallery;
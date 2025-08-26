import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const StyleGallery = () => {
  const styles = [
    {
      title: "Скандинавский стиль",
      subtitle: "Интерьерная фотосъемка",
      description: "Минималистичный скандинавский стиль с акцентом на функциональность и уют",
      image: "/cartina3iz1.png"
    },
    {
      title: "Традиционный стиль", 
      subtitle: "Классические решения",
      description: "Элегантные традиционные интерьеры с богатой историей и изысканными деталями",
      image: "/cartina4iz1.png"
    },
    {
      title: "Минимализм",
      subtitle: "Современный минимализм", 
      description: "Чистые линии и открытые пространства для современной жизни",
      image: "/photo_2025-08-15_14-10-14.jpg"
    },
    {
      title: "Скандинавский стиль",
      subtitle: "Интерьерная фотосъемка",
      description: "Минималистичный скандинавский стиль с акцентом на функциональность и уют",
      image: "/photo_2025-08-15_14-10-19.jpg"
    },
    {
      title: "Традиционный стиль", 
      subtitle: "Классические решения",
      description: "Элегантные традиционные интерьеры с богатой историей и изысканными деталями",
      image: "/photo_2025-08-15_14-10-30.jpg"
    },
    {
      title: "Минимализм",
      subtitle: "Современный минимализм", 
      description: "Чистые линии и открытые пространства для современной жизни",
      image: "/photo_2025-08-15_14-11-53.jpg"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Галерея стилей
          </h2>
        </div>
        
        <div className="relative flex items-center">
          {/* Left Navigation */}
          <Button 
            variant="outline" 
            size="icon" 
            onClick={prevSlide}
            className="absolute left-[-40px] sm:left-[-60px] z-10 bg-white border-white text-luxury-green hover:bg-luxury-green hover:text-white hover:border-luxury-green"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          {/* Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {visibleStyles.map((style, index) => (
              <div 
                key={currentIndex + index} 
                className="group"
              >
                {/* Square Image Container */}
                <div className="h-64 sm:h-80 relative overflow-hidden rounded-t-2xl">
                  <img 
                    src={style.image} 
                    alt={style.title}
                    className="w-full h-full object-cover"
                  />
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
            className="absolute right-[-40px] sm:right-[-60px] z-10 bg-white border-white text-luxury-green hover:bg-luxury-green hover:text-white hover:border-luxury-green"
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
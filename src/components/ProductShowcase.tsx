import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useRef, useEffect } from "react";

const ProductShowcase = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoading(false);
  };

  const handleVideoLoad = () => {
    setVideoLoading(false);
    
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Автовоспроизведение заблокировано браузером:", error);
      });
    }
  };

  return (
    <section className="py-20 bg-luxury-beige text-luxury-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            ЧУВСТВОВАТЬ СЕБЯ ЧАСТЬЮ БОГАТОЙ КУЛЬТУРЫ
          </h2>
          <p className="text-lg text-luxury-dark/70 max-w-3xl mx-auto px-4">
            Окружать себя и близких красотой искусства
            Передавать наследие следующим поколениям
          </p>
        </div>
        
        <div className="relative flex justify-center">
          <div className="text-6xl sm:text-7xl lg:text-9xl font-bold text-luxury-dark/10 absolute top-0 left-0 z-0">
            GUZEMA
          </div>
          
          <div className="w-full max-w-4xl relative z-20">
            {/* Centered video container */}
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <div className="aspect-[4/5] sm:aspect-video relative overflow-hidden rounded-lg">
                  {videoLoading && !videoError && (
                    // Прелоадер во время загрузки видео
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-300/50 to-blue-600/50 z-10">
                      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white"></div>
                    </div>
                  )}
                  
                  {videoError ? (
                    // Fallback контент, если видео не загрузилось
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-300/50 to-blue-600/50">
                      <div className="text-center text-white">
                        <p className="text-lg font-medium mb-2">Видео недоступно</p>
                        <p className="text-sm opacity-80">Новая коллекция</p>
                      </div>
                    </div>
                  ) : (
                    // Видео элемент
                    <>
                      <video 
                        ref={videoRef}
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        className="w-full h-full object-cover"
                        onError={handleVideoError}
                        onLoadedData={handleVideoLoad}
                        onLoadStart={() => setVideoLoading(true)}
                      >
                        <source src="/videos/main-product-video.mp4" type="video/mp4" />
                        Ваш браузер не поддерживает видео.
                      </video>
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900/20"></div>
                  <div className="absolute bottom-4 left-4 right-8">
                    <Badge variant="secondary" className="bg-white/90 text-luxury-dark">
                      Новая коллекция
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
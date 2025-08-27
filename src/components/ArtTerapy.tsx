import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const ArtTerapy = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);

  
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const [isPlaying2, setIsPlaying2] = useState(true);
  const [isMuted2, setIsMuted2] = useState(true);
  const [videoError2, setVideoError2] = useState(false);

  // Управление первым видео (для взрослых)
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(error => {
          console.log("Ошибка воспроизведения:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  const handleVideoLoad = () => {
    // Автовоспроизведение при загрузке
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Автовоспроизведение заблокировано:", error);
      });
    }
  };

  // Управление вторым видео (для детей)
  const togglePlay2 = () => {
    if (videoRef2.current) {
      if (isPlaying2) {
        videoRef2.current.pause();
      } else {
        videoRef2.current.play().catch(error => {
          console.log("Ошибка воспроизведения:", error);
        });
      }
      setIsPlaying2(!isPlaying2);
    }
  };

  const toggleMute2 = () => {
    if (videoRef2.current) {
      videoRef2.current.muted = !isMuted2;
      setIsMuted2(!isMuted2);
    }
  };

  const handleVideoError2 = () => {
    setVideoError2(true);
  };

  const handleVideoLoad2 = () => {
    // Автовоспроизведение при загрузке
    if (videoRef2.current) {
      videoRef2.current.play().catch(error => {
        console.log("Автовоспроизведение заблокировано:", error);
      });
    }
  };

  // Автовоспроизведение при монтировании компонента
  useEffect(() => {
    const playVideo = (videoRef: React.RefObject<HTMLVideoElement>, setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>) => {
      if (videoRef.current) {
        videoRef.current.muted = true;
        // Попытка начать воспроизведение
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Автовоспроизведение успешно началось
              setIsPlaying(true);
            })
            .catch(error => {
              // Автовоспроизведение заблокировано браузером
              console.log("Автовоспроизведение заблокировано:", error);
              setIsPlaying(false);
            });
        }
      }
    };

    // Для видео взрослых
    playVideo(videoRef, setIsPlaying);
    
    // Для видео детей
    playVideo(videoRef2, setIsPlaying2);

    // Очистка при размонтировании
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      if (videoRef2.current) {
        videoRef2.current.pause();
      }
    };
  }, []);

  return (
    <section id="art-therapy" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-dark mb-4">
            Арт-терапия
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto"></div>
        </div>

        {/* Для взрослых */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Левая колонка - видео */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-luxury-beige/50 to-luxury-gold/20 rounded-lg relative overflow-hidden">
              {videoError ? (
                // Fallback контент, если видео не загрузилось
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-luxury-dark">
                    <p className="text-lg font-medium mb-2">Видео недоступно</p>
                    <p className="text-sm opacity-80">Арт-терапия с Фарзаной</p>
                
                  </div>
                </div>
              ) : (
                <>
                  <video
                    ref={videoRef}
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                    onError={handleVideoError}
                  >
                    <source src="/videos/terapyartadults.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                  </video>
                  
                  {/* Контролы для видео */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <Button 
                      variant="secondary" 
                      size="icon" 
                      className="bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm"
                      onClick={togglePlay}
                    >
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </Button>
                    
                    <Button 
                      variant="secondary" 
                      size="icon" 
                      className="bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm"
                      onClick={toggleMute}
                    >
                      {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Правая колонка - текст */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-luxury-dark mb-2">
              Для взрослых
              </h3>
              <div className="w-16 h-1 bg-luxury-gold mx-auto lg:mx-0"></div>
            </div>
            
            <div className="space-y-4 text-luxury-dark">
              <p className="text-lg leading-relaxed">
                <span className="font-semibold">Это не просто рисование — это встреча с собой.</span>
              </p>
              
              <p className="text-base leading-relaxed">
                Сначала — мягкая психологическая беседа. Через простые, но точные вопросы вы начинаете глубже слышать себя, распутывать внутренние узелки.
              </p>
              
              <p className="text-base leading-relaxed">
                А затем — кисти, мастихин, текстурная паста. Вы создаёте свою картину, опираясь не на технику, а на ощущения.
              </p>
              
              <p className="text-base leading-relaxed">
                Здесь не нужен художественный опыт — нужен только вы и ваше настроение.
              </p>
            </div>
            
            <div className="pt-4">
              <div className="bg-luxury-beige p-6 rounded-lg border-l-4 border-luxury-gold">
                <p className="text-luxury-dark font-semibold text-lg">
                  Стоимость участия: <span className="text-luxury-dark">2 500 ₽ / человек</span>
                </p>
              </div>
            </div>
            
            <div className="pt-2">
              <p className="text-luxury-dark text-base">
                Возможен выезд на корпоративы, девичники, вечеринки.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start pt-4">
            </div>
          </div>
        </div>

        {/* Для детей */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка - видео для детей */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-luxury-beige/50 to-luxury-gold/20 rounded-lg relative overflow-hidden">
              {videoError2 ? (
                // Fallback контент, если видео не загрузилось
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-luxury-dark">
                    <p className="text-lg font-medium mb-2">Видео для детей</p>
                    <p className="text-sm opacity-80">(Вы можете добавить видео здесь)</p>
                  </div>
                </div>
              ) : (
                <>
                  <video
                    ref={videoRef2}
                    autoPlay
                    muted={isMuted2}
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                    onError={handleVideoError2}
                  >
                    <source src="/videos/terapyartchildren.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                  </video>
                  
                  {/* Контролы для видео */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <Button 
                      variant="secondary" 
                      size="icon" 
                      className="bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm"
                      onClick={togglePlay2}
                    >
                      {isPlaying2 ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </Button>
                    
                    <Button 
                      variant="secondary" 
                      size="icon" 
                      className="bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm"
                      onClick={toggleMute2}
                    >
                      {isMuted2 ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Правая колонка - текст для детей */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-luxury-dark mb-2">
                Для детей
              </h3>
              <div className="w-16 h-1 bg-luxury-gold mx-auto lg:mx-0"></div>
            </div>
            
            <div className="space-y-4 text-luxury-dark">
              <p className="text-base leading-relaxed">
                Программа разработана по методике московских центров развития.
              </p>
              
              <p className="text-base leading-relaxed">
                Через игру, краски и творчество дети учатся:
              </p>
              
              <ul className="space-y-2 text-luxury-dark">
                <li className="flex items-start">
                  <span className="text-luxury-gold mr-2">•</span>
                  <span>понимать и выражать свои чувства</span>
                </li>
                <li className="flex items-start">
                  <span className="text-luxury-gold mr-2">•</span>
                  <span>развивать воображение и мелкую моторику</span>
                </li>
                <li className="flex items-start">
                  <span className="text-luxury-gold mr-2">•</span>
                  <span>укреплять уверенность в себе</span>
                </li>
              </ul>
              
              <p className="text-base leading-relaxed">
                Арт-терапия проходит в мягком, поддерживающем формате — каждый ребёнок раскрывается в своём темпе.
              </p>
            </div>
            
            <div className="pt-4">
              <div className="bg-luxury-beige p-6 rounded-lg border-l-4 border-luxury-gold">
                <p className="text-luxury-dark font-semibold text-lg">
                  Стоимость: <span className="text-luxury-dark">1 500 ₽ / ребёнок</span>
                </p>
              </div>
            </div>
            
            <div className="pt-2">
              <p className="text-luxury-dark text-base">
                Можно заказать формат на день рождения, утренник, семейный праздник.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start pt-4">
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtTerapy;
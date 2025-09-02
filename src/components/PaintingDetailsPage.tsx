import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FixedPaymentForm from '@/components/FixedPaymentForm';
import { X, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

interface Painting {
  image: string;
  title: string;
  dimensions: string;
  price: string;
  id: number;
  description?: string;
  additionalImages?: string[];
}

const allPaintings: Painting[] = [
  {
    id: 1,
    image: '/cartina1iz.png',
    additionalImages: [
      '/cartina1iz2.png',
      '/cartina1iz3.png'
    ],
    title: "Шепот",
    dimensions: "Картина 90×90, тестурная паста, масло, акрил, выполнена в смешанной техники (скульптурная ЖИВОПИСЬ).",
    price: "45 000₽",
    description: ""
  },
  {
    id: 2,
    image: '/cartina2iz4.png',
    additionalImages: [
      '/cartina2iz2.png',
      '/cartina2iz3.png',
      '/cartina2iz1.png',
      '/cartina2iz5.png'
    ],
    title: "Габбех",
    dimensions: "Картина 100x80, текстурная паста, золотая поталь, акрил, позолоченные бусы.",
    price: "25 000 ₽",
    description: "Картина выполнена в технике скульптурная живопись.Мотив картины это любовь как жертвенный алтарь, где сгорают души и сердца вечных возлюбленных…"
  },
  {
    id: 3,
    image: '/cartina4iz6.png',
    additionalImages: [
      '/cartina4iz4.png',
      '/cartina4iz5.png',
      '/cartina4iz.png',
      '/cartina4iz7.png'
    ],
    title: "Мактуб",
    dimensions: "80 × 80  ",
    price: "25 000 ₽",
    description: "Авторская картина «Мактуб», размер 80x80, материалы: текстурная паста, золотая поталь, акрил и позалоченные украшения. Картина создана на основе древней арабской сказки Маджнун ва Лейла."
  },
  {
    id: 4,
    image: '/cartina5iz1.png',
    additionalImages: [
      '/cartina5iz2.png',
      '/cartina5iz3.png',
      '/cartina5iz4.png',
      '/cartina5iz5.png'
    ],
    title: "Расплавленное солнце",
    dimensions: "100 × 90 × 3см | холст",
    price: "16 000 ₽",
    description: "Размер 100x90, материалы: текстурная паста, акрил, золотая поталь, выполнена в технике состаривания.  Картина из далеких песчаных барханов. Где снежные барханы мерцают. Где злой султан вечно правит…"
  },
  {
    id: 5,
    image: '/cartina6iz1.png',
    additionalImages: [
      '/cartina6iz2.png'
    ],
    title: "Цветок пустыни",
    dimensions: "Размер 50x40, материалы: текстурная паста, акрил, золотая поталь, выполнена в технике состаривания.",
    price: "15 000 ₽",
    description: "Картина 50x40, акрил. Картина написана по мотивам персидской сказки о любви «Габбех». История о том, как девушка мечтает сбежать вместе с возлюбленным и скрыться в бесконечной пустыне - это вечно перерождающийся из поколения в поколение аксиома Ближнего Востока."
  },
  {
    id: 6,
    image: '/cartina4iz1.png',
    additionalImages: [
      
    ],
    title: "Юдифь и Олоферн ",
    dimensions: "Картина 50x40, акрил. ",
    price: "15 000 ₽",
    description: "Юдифь и Олоферн - картина австрийского художника Густава Климта на известный библейский сюжет. В картине Юдифь несет в себе идею всепоглощающей, обволакивающей власти женского очарования и тайны женского начала. Отличный подарок для восхитительных женщин и мужчин, которые понимают женскую природу."
  },
  {
    id: 7,
    image: '/cartina7iz1.png',
    additionalImages: [

    ],
    title: "Поцелуй",
    dimensions: "Картина 70x70. Копия картины Густава Климта.",
    price: "18 000 ₽",
    description: "На краю цветочной поляны в золотой ауре стоят влюбленные, полностью погруженные друг в друга и отгороженные от  всего мира."
  },
  {
    id: 8,
    image: '/pomovka.png',
    additionalImages: [
      
    ],
    title: "Помолвка",
    dimensions: "Картина 70x50, акрил.",
    price: "8 000 ₽",
    description: "Кавказская свадьба-это одно из самых ярких и значимых событий в жизни народа. Она сопровождается множеством традиций и ритуалов, которые придают ей особый характер…"
  },
  {
    id: 9,
    image: '/cartinasira.jpg',
    additionalImages: [

    ],
    title: "Сура Аль-Фатиха.",
    dimensions: "100 × 70 × 3см | холст",
    price: "10 000 ₽",
    description: "Акрил, золотая поталь. Первая сура Корана. Сура мекканская. Ниспослана между сурами Аль-Муддассир и Аль-Масад. Состоит из 7 аятов."
  },
  {
    id: 10,
    image: '/cartina11iz1.png',
    additionalImages: [
      '/cartina11video1.mp4',        
    ],
    title: "Молитва",
    dimensions: "50 × 40 × 3см | акрил",
    price: "10 000,00 ₽",
    description: "Картина написана по мотивам суфийской мудрости «Некоторые мысли - те же молитвы. Есть мгновения, когда душа независимо от положения тела стоит на коленях»."
  },
  {
    id: 11,
    image: '/cartina12iz2.png',
    additionalImages: [
      '/cartina12iz1.png'
      
    ],
    title: "Сумасшедший",
    dimensions: "Картина 50x40, акрил.",
    price: "15 000,00 ₽",
    description: "Картина написана по мотивам арабской сказки «Маджнун ва Лейла». Лейли́ и Маджну́н — трагическая история любви, популярная на Ближнем и Среднем Востоке. История основана на реальных событиях и описывает жизнь арабского юноши по имени Кайс, который влюбился в девушку по имени Лейла. Люди знали, что Кайс сошёл с ума от любви, поэтому прозвали его «Маджнун Лейла» (араб. مجنون ليلى‎ — «Сведённый с ума Лейлой»"
  },
  {
    id: 12,
    image: '/cartina13iz1.png',
    additionalImages: [
      '/cartina13iz2.png',
      
    ],
    title: "Рассвет",
    dimensions: "Картина 30x30, масло, текстурная паста.",
    price: "5 000,00 ₽",
    description: "Картина представляет с собой фантазию, которая излучает невинность и красоту. Картина чуждая, но соблазнительна…"
  },
  {
    id: 13,
    image: '/cartina14iz1.png',
    additionalImages: [
      
    ],
    title: "Гость",
    dimensions: "80 × 60 × 3см | холст",
    price: "8 000,00 ₽",
    description: "Картина написанная по мотивам старого осетинского фильма  гость, чёрно-белое  кино про старца, который  был верен своему слову. Про мужчину, которому сообщили о смерти сына, а в его погребе прячется убийцаМне захотелось воплотить его сына, гордо сильного сына своего отца, который смотрит прямо, а рядом ним  кроткая нежная девушкакартина  о мужеской силе и о необъятной нежности.Картина о любви"
  },
  {
    id: 14,
    image: '/cartina15iz1.png',
    additionalImages: [
      '/cartina15iz2.png',
      '/cartina15iz5.png',
      
    ],
    title: "Звездная ночь",
    dimensions: "Картина 30x40, копия картины Ван Гога.",
    price: "4 000,00 ₽",
    description: "Картина написана в психическому бреду художника, тем более очаровательна и интересна. На полотне ночь окутала воображаемый город, деревья символизируют печаль, смерть. Кипарис на переднем плане - символ вечной жизни…"
  },
  {
    id: 15,
    image: '/cartina16iz1.png',
    additionalImages: [
      '/cartina16iz2.png',
      '/cartina16iz3.png'
    ],
    title: "Три возраста женщины",
    dimensions: "Копия картины Густава Климта. Материалы: акрил, золотая поталь.",
    price: "15 000,00 ₽",
    description: "На полотне изображена молодая женщина со спящим ребёнком на руках — мирская Мадонна, сама погружённая в состояние, похожее на сон, пассивная, стилизованная, вплетённая в орнаментальный фон полотна."
  }
];

const PaintingDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPayment, setShowPayment] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Найдем картину по ID
  const painting = allPaintings.find(p => p.id === parseInt(id || '0'));
  
  // Если картина не найдена, перенаправляем на галерею
  useEffect(() => {
    if (!painting) {
      navigate('/#gallery');
    }
  }, [painting, navigate]);
  
  // Если картина не найдена, ничего не рендерим
  if (!painting) {
    return null;
  }
  
  // Собираем все медиа (основное + дополнительные)
  const allMedia = [painting.image, ...(painting.additionalImages || [])];
  
  // Проверяем, является ли текущий элемент видео
  const isVideo = (url: string) => {
    return url.match(/\.(mp4|webm|ogg)$/i);
  };
  
  // Функции для навигации по карусели
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? allMedia.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === allMedia.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Обработчики свайпов
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  
  const swipeHandlers = useSwipeable({
    onSwipeStart: (eventData) => {
      setTouchStart(eventData.absX);
    },
    onSwipedLeft: () => {
      setSwipeDirection('left');
      setTimeout(() => {
        goToNext();
        setSwipeDirection(null);
      }, 150);
    },
    onSwipedRight: () => {
      setSwipeDirection('right');
      setTimeout(() => {
        goToPrevious();
        setSwipeDirection(null);
      }, 150);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: false
  } as any);
  
  // Установка конкретного медиа
  const setSelectedMedia = (index: number) => {
    setCurrentIndex(index);
  };
  
  // Автоматическая смена медиа каждые 5 секунд (только для изображений)
  useEffect(() => {
    if (allMedia.length <= 1 || isVideo(allMedia[currentIndex])) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, allMedia.length]);
  
  const handleBuyClick = () => {
    setShowPayment(true);
  };
  
  const handleClose = () => {
    // Получаем сохраненную позицию прокрутки из состояния
    const state = location.state;
    const scrollPosition = state && state.scrollPosition ? state.scrollPosition : 0;
    
    // Возвращаемся к галерее
    navigate('/#gallery');
    
    // Прокручиваем к сохраненной позиции после навигации
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 100);
  };
  
  // Если открыта форма оплаты, показываем её
  if (showPayment) {
    // Извлекаем числовое значение цены
    const numericPrice = parseFloat(painting.price.replace(/\s/g, '').replace('₽', ''));
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full">
          <div className="p-4 border-b">
            <h3 className="text-xl font-bold">Оплата картины</h3>
          </div>
          <div className="p-4">
            <FixedPaymentForm 
              paintingId={painting.id}
              amount={numericPrice}
              description={`Покупка картины: ${painting.title}`}
              title={painting.title}
            />
          </div>
          <div className="p-4 border-t">
            <Button 
              variant="outline" 
              onClick={() => setShowPayment(false)}
              className="w-full"
            >
              Закрыть
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Шапка с кнопкой закрытия */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-foreground">Детали картины</h1>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleClose}
            className="h-10 w-10"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Левая колонка - медиа */}
          <div className="space-y-6">
            <div className="relative group" {...swipeHandlers}>
              <div className="aspect-[3/4] overflow-hidden rounded-lg relative flex items-center justify-center">
                {isVideo(allMedia[currentIndex]) ? (
                  <video 
                    src={allMedia[currentIndex]} 
                    controls
                    className={`w-full h-full object-contain transition-transform duration-300 ease-in-out ${
                      swipeDirection === 'left' ? '-translate-x-full' : 
                      swipeDirection === 'right' ? 'translate-x-full' : ''
                    }`}
                    autoPlay
                    muted={false}
                  />
                ) : (
                  <img 
                    src={allMedia[currentIndex]} 
                    alt={`${painting.title} ${currentIndex + 1}`}
                    className={`w-full h-full object-contain transition-transform duration-300 ease-in-out ${
                      swipeDirection === 'left' ? '-translate-x-full' : 
                      swipeDirection === 'right' ? 'translate-x-full' : ''
                    }`}
                  />
                )}
                
                {/* Навигационные кнопки */}
                {allMedia.length > 1 && (
                  <>
                    <button
                      onClick={goToPrevious}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all opacity-0 hover:opacity-100 focus:opacity-100 group-hover:opacity-100"
                      aria-label="Предыдущее медиа"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all opacity-0 hover:opacity-100 focus:opacity-100 group-hover:opacity-100"
                      aria-label="Следующее медиа"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                    
                    {/* Индикаторы */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                      {allMedia.map((media, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedMedia(index)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
                          }`}
                          aria-label={`Показать медиа ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
            
            {/* Миниатюры медиа внизу */}
            {allMedia.length > 1 && (
              <div className="pt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Другие медиа:</h4>
                <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                  {allMedia.map((media, index) => (
                    <div 
                      key={index}
                      className={`flex-shrink-0 w-20 h-20 overflow-hidden rounded cursor-pointer transition-all ${
                        index === currentIndex 
                          ? 'ring-2 ring-luxury-gold shadow-md' 
                          : 'hover:ring-1 hover:ring-luxury-gold/50'
                      }`}
                      onClick={() => setSelectedMedia(index)}
                    >
                      {isVideo(media) ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-xs text-gray-600">Видео</span>
                        </div>
                      ) : (
                        <img 
                          src={media} 
                          alt={`${painting.title} ${index + 1}`}
                          className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Правая колонка - информация о картине */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">{painting.title}</h2>
              <p className="text-lg text-muted-foreground">{painting.dimensions}</p>
            </div>
            
            {painting.description && (
              <div className="prose max-w-none">
                <p className="text-foreground text-base">{painting.description}</p>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t">
              <span className="text-3xl font-bold" style={{ color: 'hsl(var(--price-color))' }}>
                {painting.price}
              </span>
              <Button 
                onClick={handleBuyClick}
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-dark flex items-center gap-2 w-full sm:w-auto"
              >
                <ShoppingCart className="h-5 w-5" />
                Купить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintingDetailsPage;
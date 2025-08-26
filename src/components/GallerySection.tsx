import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import PaymentForm from '@/components/PaymentForm';
import { X, ShoppingCart } from 'lucide-react';

interface PaintingCardProps {
  image: string;
  title: string;
  dimensions: string;
  price: string;
  id: number;
  description?: string;
  additionalImages?: string[];
}

// Компонент модального окна с деталями картины
const PaintingDetailsModal: React.FC<{ 
  painting: PaintingCardProps; 
  onClose: () => void; 
  onBuy: () => void 
}> = ({ painting, onClose, onBuy }) => {
  const [selectedImage, setSelectedImage] = useState(painting.image);
  
  // Собираем все изображения (основное + дополнительные)
  const allImages = [painting.image, ...(painting.additionalImages || [])];
  
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-4 animate-fadeIn">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[95vh] overflow-y-auto animate-slideUp">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h3 className="text-lg sm:text-xl font-bold">Детали картины</h3>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img 
                src={selectedImage} 
                alt={painting.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Дополнительные изображения */}
            {allImages.length > 1 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {allImages.map((img, index) => (
                  <div 
                    key={index}
                    className={`aspect-square overflow-hidden rounded cursor-pointer border-2 ${
                      selectedImage === img ? 'border-luxury-gold' : 'border-transparent'
                    }`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${painting.title} ${index + 1}`}
                      className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">{painting.title}</h2>
                <p className="text-sm sm:text-base text-muted-foreground">{painting.dimensions}</p>
              </div>
              
              {painting.description && (
                <div className="prose max-w-none">
                  <p className="text-foreground text-sm sm:text-base">{painting.description}</p>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <span className="text-xl sm:text-2xl font-bold" style={{ color: 'hsl(var(--price-color))' }}>
                  {painting.price}
                </span>
                <Button 
                  onClick={onBuy}
                  className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-dark flex items-center gap-2 w-full sm:w-auto"
                >
                  <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                  Купить
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border-t bg-gray-50">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="w-full"
          >
            Закрыть
          </Button>
        </div>
      </div>
    </div>
  );
};

const PaintingCard: React.FC<PaintingCardProps> = ({ image, title, dimensions, price, id, description }) => {
  const [showPayment, setShowPayment] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  const handleBuyClick = () => {
    setShowPayment(true);
  };

  const handleViewDetails = () => {
    setShowDetails(true);
  };

  // Если открыта форма оплаты, показываем её
  if (showPayment) {
    // Извлекаем числовое значение цены
    const numericPrice = parseFloat(price.replace(/\s/g, '').replace('₽', ''));
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full">
          <div className="p-4 border-b">
            <h3 className="text-xl font-bold">Оплата картины</h3>
          </div>
          <div className="p-4">
            <PaymentForm 
              paintingId={id}
              amount={numericPrice}
              description={`Покупка картины: ${title}`}
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

  // Если открыто модальное окно с деталями, показываем его
  if (showDetails) {
    return (
      <PaintingDetailsModal 
        painting={{ image, title, dimensions, price, id, description }} 
        onClose={() => setShowDetails(false)} 
        onBuy={handleBuyClick} 
      />
    );
  }

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Добавляем обработчик клика на всю карточку для открытия деталей */}
      <div 
        className="aspect-[3/4] overflow-hidden cursor-pointer"
        onClick={handleViewDetails}
      >
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h4 
          className="font-medium text-foreground mb-1 cursor-pointer hover:underline"
          onClick={handleViewDetails}
        >
          {title}
        </h4>
        <p className="text-sm text-muted-foreground mb-2">{dimensions}</p>
        <p className="font-semibold text-lg" style={{ color: 'hsl(var(--price-color))' }}>{price}</p>
        <Button 
          onClick={handleBuyClick}
          className="w-full mt-3 bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-dark"
        >
          Купить
        </Button>
      </div>
    </div>
  );
};

interface PaintingSeriesProps {
  title: string;
  paintings: PaintingCardProps[];
  showViewAll?: boolean;
}

const PaintingSeries: React.FC<PaintingSeriesProps> = ({ title, paintings, showViewAll = true }) => (
  <div className="mb-12">
    <h3 className="text-xl font-medium text-foreground mb-6">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {paintings.map((painting) => (
        <PaintingCard key={painting.id} {...painting} />
      ))}
    </div>
    {showViewAll && (
      <div className="flex justify-center">
        <Button 
          variant="outline" 
          className="px-8 py-2 border border-button-border bg-button-bg hover:bg-accent transition-colors duration-200"
        >
          Смотреть все
        </Button>
        
      </div>
    )}
  </div>
);

const GallerySection: React.FC = () => {
  const yaktuSeries = [
    {
      id: 1,
      image: '/cartina1.jpg',
      additionalImages: [
        '/cartina10iz1.png',
        '/cartina3iz1.png',
        '/cartina4iz1.png'
      ],
      title: "Шепот",
      dimensions: "Картина 90×90, тестурная паста, масло, акрил, выполнена в смешанной техники (скульптурная ЖИВОПИСЬ).",
      price: "45 000₽",
      description: ""
    },
    {
      id: 2,
      image: '/',
      additionalImages: [
        '/cartina3iz2.png',
        '/cartina3iz3.png'
      ],
      title: "Габбех",
      dimensions: "Картина 100x80, текстурная паста, золотая поталь, акрил, позолоченные бусы.",
      price: "25 000 ₽",
      description: "Картина выполнена в технике скульптурная живопись.Мотив картины это любовь как жертвенный алтарь, где сгорают души и сердца вечных возлюбленных…"
    },
    {
      id: 3,
      image: '/cartina3iz1.png',
      additionalImages: [
        '/cartina3iz2.png',
        '/cartina3iz3.png'
      ],
      title: "Мактуб",
      dimensions: "80 × 80  ",
      price: "25 000 ₽",
      description: "Авторская картина «Мактуб», размер 80x80, материалы: текстурная паста, золотая поталь, акрил и позалоченные украшения. Картина создана на основе древней арабской сказки Маджнун ва Лейла."
    },
    {
      id: 4,
      image: '/cartina4iz1.png',
      additionalImages: [
        '/cartina4iz2.png',
        '/cartina4iz3.png'
      ],
      title: "Юдифь и Олоферн",
      dimensions: "100 × 70 × 3см | холст",
      price: "15 000 ₽",
      description: "Юдифь и Олоферн - картина австрийского художника Густава Климта на известный библейский сюжет. В картине Юдифь несет в себе идею всепоглощающей, обволакивающей власти женского очарования и тайны женского начала. Отличный подарок для восхитительных женщин и мужчин, которые понимают женскую природу"
    }
  ];

  const ladyTatarstanSeries = [
    {
      id: 5,
      image: '/cartina3iz1.png',
      additionalImages: [
        '/cartina3iz2.png',
        '/cartina3iz3.png'
      ],
      title: "Расплавленное солнце",
      dimensions: "Размер 100x90, материалы: текстурная паста, акрил, золотая поталь, выполнена в технике состаривания.",
      price: "16 000 ₽",
      description: "Картина из далеких песчаных барханов. Где снежные барханы мерцают. Где злой султан вечно правит…"
    }
  ];

  const chelochekSeries = [
    {
      id: 6,
      image: '/cartina1.jpg',
      additionalImages: [
        '/photo_2025-08-15_14-10-19.jpg',
        '/photo_2025-08-15_14-10-30.jpg'
      ],
      title: "Цветок пустыни ",
      dimensions: "Картина 50x40, акрил. ",
      price: "15 000 ₽",
      description: "Картина написана по мотивам персидской сказки о любви «Габбех». История о том, как девушка мечтает сбежать вместе с возлюбленным и скрыться в бесконечной пустыне - это вечно перерождающийся из поколения в поколение аксиома Ближнего Востока."
    },
    {
      id: 7,
      image: '/pocel.png',
      additionalImages: [
        '/pomovka.png',
        '/photo_2025-08-15_14-10-14.jpg'
      ],
      title: "Поцелуй",
      dimensions: "Картина 70x70. Копия картины Густава Климта.",
      price: "18 000 ₽",
      description: "На краю цветочной поляны в золотой ауре стоят влюбленные, полностью погруженные друг в друга и отгороженные от  всего мира."
    },
    {
      id: 8,
      image: '/cartina8iz2.png',
      additionalImages: [
        '/cartina8iz2.png',
        '/cartina8iz3.png'
      ],
      title: "Помолвка",
      dimensions: "Картина 70x50, акрил.",
      price: "8 000 ₽",
      description: "Кавказская свадьба-это одно из самых ярких и значимых событий в жизни народа. Она сопровождается множеством традиций и ритуалов, которые придают ей особый характер…"
    },
    {
      id: 9,
      image: '/cartina9iz5.png',
      additionalImages: [
        '/photo_2025-08-15_14-12-02.jpg',
        '/photo_2025-08-15_14-12-06.jpg'
      ],
      title: "Сура Аль-Фатиха.",
      dimensions: "100 × 70 × 3см | холст",
      price: "10 000 ₽",
      description: "Акрил, золотая поталь. Первая сура Корана. Сура мекканская. Ниспослана между сурами Аль-Муддассир и Аль-Масад. Состоит из 7 аятов."
    }
  ];

  const desertCollection = [
    {
      id: 10,
      image: '/cartina3iz1.png',
      additionalImages: [
        '/photo_2025-08-15_14-12-09.jpg',
        '/photo_2025-08-15_14-10-14.jpg'
      ],
      title: "Посланник",
      dimensions: "Картина 50x40, выполнена в смешанной технике, акрил, текстурная паста, золотая поталь и дополнительные элементы. ",
      price: "25 000 ₽",
      description: "У лисиц есть норы, и у птиц небесных-гнезда, а Сыну Человеческому негде и голову приклонить…"
    },
    {
      id: 11,
      image: '/photo_2025-08-15_14-10-19.jpg',
      additionalImages: [
        '/photo_2025-08-15_14-10-30.jpg',
        '/photo_2025-08-15_14-11-53.jpg'
      ],
      title: "Молитва",
      dimensions: "80 × 60 × 3см | холст",
      price: "10 000,00 ₽",
      description: "Картина «Задание» выполнена в технике акриловой живописи. Размер 80 × 60 × 3см. Эта работа исследует тему вызова и испытания, которые человек проходит в своей жизни, стремясь к самореализации."
    },
    {
      id: 12,
      image: '/cartina3iz1.png',
      additionalImages: [
        '/cartina3iz2.png',
        '/cartina3iz3.png'
      ],
      title: "Сумасшедший",
      dimensions: "Картина 50x40, акрил.",
      price: "15 000,00 ₽",
      description: "Картина написана по мотивам арабской сказки «Маджнун ва Лейла». Лейли́ и Маджну́н — трагическая история любви, популярная на Ближнем и Среднем Востоке. История основана на реальных событиях и описывает жизнь арабского юноши по имени Кайс, который влюбился в девушку по имени Лейла. Люди знали, что Кайс сошёл с ума от любви, поэтому прозвали его «Маджнун Лейла» (араб. مجنون ليلى‎ — «Сведённый с ума Лейлой»"
    },
    {
      id: 13,
      image: '/photo_2025-08-15_14-11-58.jpg',
      additionalImages: [
        '/photo_2025-08-15_14-12-02.jpg',
        '/photo_2025-08-15_14-12-06.jpg'
      ],
      title: "Рассвет",
      dimensions: "Картина 30x30, масло, текстурная паста.",
      price: "5 000,00 ₽",
      description: "Картина представляет с собой фантазию, которая излучает невинность и красоту. Картина чуждая, но соблазнительна…"
    },
    {
      id: 14,
      image: '/cartina3iz1.png',
      additionalImages: [
        '/cartina3iz2.png',
        '/cartina3iz3.png'
      ],
      title: "Гость",
      dimensions: "80 × 60 × 3см | холст",
      price: "8 000,00 ₽",
      description: "Картина написанная по мотивам старого осетинского фильма  гость, чёрно-белое  кино про старца, который  был верен своему слову. Про мужчину, которому сообщили о смерти сына, а в его погребе прячется убийцаМне захотелось воплотить его сына, гордо сильного сына своего отца, который смотрит прямо, а рядом ним  кроткая нежная девушкакартина  о мужеской силе и о необъятной нежности.Картина о любви"
    },
    {
      id: 15,
      image: '/photo_2025-08-15_14-11-58.jpg',
      additionalImages: [
        '/photo_2025-08-15_14-12-02.jpg',
        '/photo_2025-08-15_14-12-06.jpg'
      ],
      title: "Звездная ночь",
      dimensions: "Картина 30x40, копия картины Ван Гога.",
      price: "4 000,00 ₽",
      description: "Картина написана в психическому бреду художника, тем более очаровательна и интересна. На полотне ночь окутала воображаемый город, деревья символизируют печаль, смерть. Кипарис на переднем плане - символ вечной жизни…"
    },
    {
      id: 16,
      image: '/cartina3iz1.png',
      additionalImages: [
        '/cartina3iz2.png',
        '/cartina3iz3.png'
      ],
      title: "Три возраста женщины",
      dimensions: "Копия картины Густава Климта. Материалы: акрил, золотая поталь.",
      price: "25 000,00 ₽",
      description: "На полотне изображена молодая женщина со спящим ребёнком на руках — мирская Мадонна, сама погружённая в состояние, похожее на сон, пассивная, стилизованная, вплетённая в орнаментальный фон полотна."
    },
    {
      id: 17,
      image: '/cartina3iz1.png',
      additionalImages: [
        '/cartina3iz2.png',
        '/cartina3iz3.png'
      ],
      title: "Пустыня",
      dimensions: "Картина 50x40, текстурная паста, золотая поталь, акрил.",
      price: "25 000,00 ₽",
      description: "Картина написанная по мотивам сказки «Сын Адама»… Как же жалок сын Адама, которому поднять камень легче, чем простить…"
    }
  ];

  return (
    <section className="gallery-section py-16 px-6" style={{ backgroundColor: 'hsl(var(--gallery-bg))' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-2">МАГАЗИН</h2>
          <div className="flex justify-end mb-8">
            <span className="text-sm text-muted-foreground">ПОПУЛЯРНОЕ НАСЛЕДИЕ →</span>
          </div>
        </div>

        {/* Painting Series */}
        <PaintingSeries 
          title="Серия картин"
          paintings={yaktuSeries}
        />

        <PaintingSeries 
          title="Серия картин  »"
          paintings={ladyTatarstanSeries}
        />

        <PaintingSeries 
          title="Серия картин"
          paintings={chelochekSeries}
        />

        <PaintingSeries 
          title="Серия картин"
          paintings={desertCollection}
        />

        {/* Final Button */}
        <div className="flex justify-center mt-16">
          <Button 
            variant="outline"
            className="px-12 py-3 text-lg border-2 border-button-border bg-button-bg hover:bg-accent transition-colors duration-200"
          >
            Больше картин
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
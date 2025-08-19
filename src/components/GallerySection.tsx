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
}

// Компонент модального окна с деталями картины
const PaintingDetailsModal: React.FC<{ 
  painting: PaintingCardProps; 
  onClose: () => void; 
  onBuy: () => void 
}> = ({ painting, onClose, onBuy }) => {
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
                src={painting.image} 
                alt={painting.title}
                className="w-full h-full object-cover"
              />
            </div>
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
      image: '/placeholder.svg',
      title: "Подростки на поздвоке",
      dimensions: "100 × 70 × 3см | холст",
      price: "5 660 ₽",
      description: "Авторская картина «Подростки на поздвоке» выполнена в технике масляной живописи. Размер 100 × 70 × 3см. Картина передает нежность и красоту юного возраста, когда мир еще полон возможностей и открытий."
    },
    {
      id: 2,
      image: '/placeholder.svg',
      title: "Пейж внутреннего",
      dimensions: "120 × 90 × 3см | холст",
      price: "68 000 ₽",
      description: "Картина «Пейж внутреннего» создана в технике акриловой живописи. Размер 120 × 90 × 3см. Эта работа исследует внутренний мир человека, его эмоции и переживания, передавая их через цвет и форму."
    },
    {
      id: 3,
      image: '/placeholder.svg',
      title: "Цветение души",
      dimensions: "110 × 80 × 3см | холст",
      price: "75 000 ₽",
      description: "Авторская картина «Цветение души» выполнена в смешанной технике. Размер 110 × 80 × 3см. Эта работа символизирует расцвет внутреннего мира человека, его духовное развитие и гармонию с самим собой."
    },
    {
      id: 4,
      image: '/placeholder.svg',
      title: "Весна",
      dimensions: "100 × 70 × 3см | холст",
      price: "56 000 ₽",
      description: "Картина «Весна» создана в технике акриловой живописи. Размер 100 × 70 × 3см. Эта работа передает свежесть и бодрость весеннего времени года, когда природа пробуждается после зимней спячки."
    }
  ];

  const ladyTatarstanSeries = [
    {
      id: 5,
      image: '/placeholder.svg',
      title: "Художник",
      dimensions: "120 × 90 × 3см | холст",
      price: "75 000 ₽",
      description: "Картина «Художник» выполнена в технике масляной живописи. Размер 120 × 90 × 3см. Эта работа посвящена творческой личности, её внутреннему миру и вдохновению, которое она черпает из окружающей действительности."
    }
  ];

  const chelochekSeries = [
    {
      id: 6,
      image: '/placeholder.svg',
      title: "Акася - Радикальное Рождение",
      dimensions: "100 × 70 × 3см | холст",
      price: "40 000 ₽",
      description: "Картина «Акася - Радикальное Рождение» создана в технике акриловой живописи. Размер 100 × 70 × 3см. Эта работа исследует тему рождения нового, радикального взгляда на мир и искусство."
    },
    {
      id: 7,
      image: '/placeholder.svg',
      title: "Толстенький",
      dimensions: "100 × 70 × 3см | холст",
      price: "40 000 ₽",
      description: "Картина «Толстенький» выполнена в технике акриловой живописи. Размер 100 × 70 × 3см. Эта работа исследует образ человека с необычной внешностью, подчеркивая его внутреннюю красоту и характер."
    },
    {
      id: 8,
      image: '/placeholder.svg',
      title: "Самомет",
      dimensions: "100 × 70 × 3см | холст",
      price: "40 000 ₽",
      description: "Картина «Самомет» создана в технике акриловой живописи. Размер 100 × 70 × 3см. Эта работа исследует тему самопознания и внутреннего поиска, когда человек стремится понять себя и свое место в мире."
    },
    {
      id: 9,
      image: '/placeholder.svg',
      title: "Палынхору",
      dimensions: "100 × 70 × 3см | холст",
      price: "40 000 ₽",
      description: "Картина «Палынхору» выполнена в технике акриловой живописи. Размер 100 × 70 × 3см. Эта работа вдохновлена природными мотивами и передает красоту и мощь природных форм и красок."
    }
  ];

  const desertCollection = [
    {
      id: 10,
      image: '/placeholder.svg',
      title: "Биофизик",
      dimensions: "80 × 60 × 3см | холст",
      price: "25 000 ₽",
      description: "Картина «Биофизик» создана в технике акриловой живописи. Размер 80 × 60 × 3см. Эта работа исследует связь между биологическими формами и физическими законами, создавая уникальный визуальный образ."
    },
    {
      id: 11,
      image: '/placeholder.svg',
      title: "Задание",
      dimensions: "80 × 60 × 3см | холст",
      price: "25 000 ₽",
      description: "Картина «Задание» выполнена в технике акриловой живописи. Размер 80 × 60 × 3см. Эта работа исследует тему вызова и испытания, которые человек проходит в своей жизни, стремясь к самореализации."
    },
    {
      id: 12,
      image: '/placeholder.svg',
      title: "Авангард пороки",
      dimensions: "80 × 60 × 3см | холст",
      price: "25 000 ₽",
      description: "Картина «Авангард пороки» создана в технике акриловой живописи. Размер 80 × 60 × 3см. Эта работа исследует противоречивую природу человеческого существования, где порок и добродетель сосуществуют."
    },
    {
      id: 13,
      image: '/placeholder.svg',
      title: "Новый парень",
      dimensions: "80 × 60 × 3см | холст",
      price: "25 000 ₽",
      description: "Картина «Новый парень» выполнена в технике акриловой живописи. Размер 80 × 60 × 3см. Эта работа исследует тему перемен и новизны в жизни человека, когда он встречает что-то неожиданное и необычное."
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
          title="Серия картин «Яркту»"
          paintings={yaktuSeries}
        />

        <PaintingSeries 
          title="Серия картин «Lady Tatarstan»"
          paintings={ladyTatarstanSeries}
        />

        <PaintingSeries 
          title="Серия картин «Челочек»"
          paintings={chelochekSeries}
        />

        <PaintingSeries 
          title="Пустынная коллекция"
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
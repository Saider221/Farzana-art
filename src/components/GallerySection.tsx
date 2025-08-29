import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface PaintingCardProps {
  image: string;
  title: string;
  dimensions: string;
  price: string;
  id: number;
  description?: string;
  additionalImages?: string[];
}

const PaintingCard: React.FC<PaintingCardProps> = ({ image, title, dimensions, price, id }) => {
  const navigate = useNavigate();
  
  const handleViewDetails = () => {
    // Сохраняем текущую позицию прокрутки перед переходом
    const scrollPosition = window.scrollY;
    navigate(`/painting/${id}`, { state: { from: 'gallery', scrollPosition } });
  };

  const handleBuyClick = () => {
    // Можно добавить логику для прямой покупки или перенаправления на страницу с деталями
    const scrollPosition = window.scrollY;
    navigate(`/painting/${id}`, { state: { from: 'gallery', scrollPosition } });
  };

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
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
      image: '/cartina1iz.png',
      additionalImages: [
        '/cartina1iz1.png',
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
    }
  ];

  const ladyTatarstanSeries = [
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
    }
  ];

  const chelochekSeries = [
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
    }
  ];

  const desertCollection = [
    
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

  // Объединяем все картины в один массив
  const allPaintings = [
    
    ...yaktuSeries,
    
    ...ladyTatarstanSeries,
    
    ...chelochekSeries,
    
    ...desertCollection
  ];

  return (
    <section id="gallery" className="gallery-section py-16 px-4 sm:px-6 relative overflow-hidden" 
             style={{ backgroundColor: 'hsl(var(--gallery-bg))', backgroundImage: 'url(/)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-background/70"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-2">МАГАЗИН</h2>
          <div className="flex justify-end mb-8">
            <span className="text-sm text-muted-foreground"></span>
          </div>
        </div>

        {/* Все картины в одной сетке */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {allPaintings.map((painting) => (
            <PaintingCard key={painting.id} {...painting} />
          ))}
        </div>

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
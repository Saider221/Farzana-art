import React from 'react';
import { Button } from '@/components/ui/button';

interface PaintingCardProps {
  image: string;
  title: string;
  dimensions: string;
  price: string;
}

const PaintingCard: React.FC<PaintingCardProps> = ({ image, title, dimensions, price }) => (
  <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="aspect-[3/4] overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-4">
      <h4 className="font-medium text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground mb-2">{dimensions}</p>
      <p className="font-semibold text-lg" style={{ color: 'hsl(var(--price-color))' }}>{price}</p>
    </div>
  </div>
);

interface PaintingSeriesProps {
  title: string;
  paintings: PaintingCardProps[];
  showViewAll?: boolean;
}

const PaintingSeries: React.FC<PaintingSeriesProps> = ({ title, paintings, showViewAll = true }) => (
  <div className="mb-12">
    <h3 className="text-xl font-medium text-foreground mb-6">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {paintings.map((painting, index) => (
        <PaintingCard key={index} {...painting} />
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
      image: '/placeholder.svg',
      title: "Подростки на поздвоке",
      dimensions: "100 × 70 × 3см | холст",
      price: "5 660 ₽"
    },
    {
      image: '/placeholder.svg',
      title: "Пейж внутреннего",
      dimensions: "120 × 90 × 3см | холст",
      price: "68 000 ₽"
    },
    {
      image: '/placeholder.svg',
      title: "Цветение души",
      dimensions: "110 × 80 × 3см | холст",
      price: "75 000 ₽"
    },
    {
      image: '/placeholder.svg',
      title: "Весна",
      dimensions: "100 × 70 × 3см | холст",
      price: "56 000 ₽"
    }
  ];

  const ladyTatarstanSeries = [
    {
      image: '/placeholder.svg',
      title: "Художник",
      dimensions: "120 × 90 × 3см | холст",
      price: "75 000 ₽"
    }
  ];

  const chelochekSeries = [
    {
      image: '/placeholder.svg',
      title: "Акася - Радикальное Рождение",
      dimensions: "100 × 70 × 3см | холст",
      price: "40 000 ₽"
    },
    {
      image: '/placeholder.svg',
      title: "Толстенький",
      dimensions: "100 × 70 × 3см | холст",
      price: "40 000 ₽"
    },
    {
      image: '/placeholder.svg',
      title: "Самомет",
      dimensions: "100 × 70 × 3см | холст",
      price: "40 000 ₽"
    },
    {
      image: '/placeholder.svg',
      title: "Палынхору",
      dimensions: "100 × 70 × 3см | холст",
      price: "40 000 ₽"
    }
  ];

  const desertCollection = [
    {
      image: '/placeholder.svg',
      title: "Биофизик",
      dimensions: "80 × 60 × 3см | холст",
      price: "25 000 ₽"
    },
    {
      image: '/placeholder.svg',
      title: "Задание",
      dimensions: "80 × 60 × 3см | холст",
      price: "25 000 ₽"
    },
    {
      image: '/placeholder.svg',
      title: "Авангард пороки",
      dimensions: "80 × 60 × 3см | холст",
      price: "25 000 ₽"
    },
    {
      image: '/placeholder.svg',
      title: "Новый парень",
      dimensions: "80 × 60 × 3см | холст",
      price: "25 000 ₽"
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

export default GallerySection
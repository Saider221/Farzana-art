import { Menu, Search, User, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Проверяем, является ли устройство мобильным
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Закрываем меню при изменении размера экрана
  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  // Функция для прокрутки к секции
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: "Главная", id: "hero" },
    { name: "Галерея", id: "gallery" },
    { name: "Стили", id: "styles" },
    { name: "Отзывы", id: "reviews" },
    { name: "Доставка", id: "delivery" },
    { name: "Арт-терапия", id: "art-therapy" },
    { name: "На заказ", id: "custom" },
    { name: "Обо мне", id: "about" },
    { name: "Контакты", id: "contacts" }
  ];

  return (
    <>
      <header className="w-full py-4 sm:py-6 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4 sm:space-x-8">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-luxury-gold md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            <div className="text-xl sm:text-2xl font-bold text-luxury-gold">FARZANA</div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name} 
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-luxury-gold transition-colors text-sm lg:text-base cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Иконки WhatsApp и Telegram */}
            <a href="https://wa.me/c/79086800946" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-luxury-gold hover:text-luxury-gold/80">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://t.me/ваш_ник" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-luxury-gold hover:text-luxury-gold/80">
                <Phone className="h-5 w-5" />
              </Button>
            </a>
            <Button variant="ghost" size="icon" className="text-luxury-gold">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </header>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className="fixed top-0 left-0 h-full w-4/5 max-w-sm bg-background shadow-lg z-50 transform transition-transform duration-300 ease-in-out animate-slideInLeft"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              {/* Шапка меню */}
              <div className="flex items-center justify-between p-4 border-b">
                <div className="text-xl font-bold text-luxury-gold">FARZANA</div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-luxury-gold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              
              {/* Навигационные ссылки */}
              <div className="flex flex-col py-4 flex-grow">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="px-6 py-4 text-lg text-foreground hover:bg-luxury-gold/10 hover:text-luxury-gold transition-colors border-b border-border text-left"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              
              {/* Футер меню с контактами */}
              <div className="p-4 border-t space-y-3">
                <div className="flex justify-center space-x-4">
                  <a href="https://wa.me/c/79086800946" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="text-luxury-gold border-luxury-gold">
                      <MessageCircle className="h-5 w-5" />
                    </Button>
                  </a>
                  <a href="https://t.me/ваш_ник" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="text-luxury-gold border-luxury-gold">
                      <Phone className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
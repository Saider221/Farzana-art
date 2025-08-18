import React from 'react';
import { Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

const FooterContacts: React.FC = () => {
  return (
    <footer className="w-full">
      {/* Верхняя секция: Контакты */}
      <section className="bg-luxury-beige py-10 px-4 text-center relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-luxury-dark">КОНТАКТЫ</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-luxury-dark">
              <Phone className="h-5 w-5" />
              <span className="text-lg">+7 927 209 45 55</span>
            </div>
            <div className="flex items-center gap-2 text-luxury-dark">
              <Mail className="h-5 w-5" />
              <span className="text-lg">guzelkhai@yandex.ru</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-luxury-dark hover:text-luxury-gold transition-colors">
              <Facebook className="h-8 w-8" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-luxury-dark hover:text-luxury-gold transition-colors">
              <Instagram className="h-8 w-8" />
            </a>
          
            
          </div>
          
          <div className="w-32 h-32 mx-auto">
            <img 
              src="/lovable-uploads/5cc0232e-5e1f-4e3f-826d-18652157d52c.png" 
              alt="Подпись" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Нижняя секция: Меню и копирайт */}
      <section className="bg-luxury-brown text-luxury-beige py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold mb-4">GUZEL-KHAI.RU</div>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+7 927 209 45 55</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Mail className="h-4 w-4" />
                  <span>guzelkhai@yandex.ru</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <nav className="flex flex-wrap justify-center gap-4 mb-4">
                <a href="/about" className="hover:text-luxury-gold transition-colors">Обо мне</a>
                <a href="/shop" className="hover:text-luxury-gold transition-colors">Магазин</a>
                <a href="/reviews" className="hover:text-luxury-gold transition-colors">Отзывы</a>
                <a href="/custom" className="hover:text-luxury-gold transition-colors">На заказ</a>
                <a href="/prices" className="hover:text-luxury-gold transition-colors">Стоимость</a>
                <a href="/delivery" className="hover:text-luxury-gold transition-colors">Доставка и оплата</a>
                <a href="/contacts" className="hover:text-luxury-gold transition-colors">Контакты</a>
              </nav>
              
              <div className="text-sm mt-4">
                <p className="mb-1">ИНН 165103372300004039</p>
                <p>Design by avolkov.guzel</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <a href="/privacy" className="block underline mb-2 hover:text-luxury-gold transition-colors">
                Политика конфиденциальности
              </a>
              <p className="text-sm">© 2024 guzelkhai</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default FooterContacts;
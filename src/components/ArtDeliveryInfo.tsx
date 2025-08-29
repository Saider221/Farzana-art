import React from 'react';
import { Button } from '@/components/ui/button';

const ArtDeliveryInfo = () => {
  return (
    <section id="custom" className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: 'hsl(var(--delivery-bg))' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'hsl(var(--delivery-text))' }}>
            НА ЗАКАЗ
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка - описание */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed" style={{ color: 'hsl(var(--delivery-text))' }}>
              Если вы не нашли подходящую картину из наличия, я могу нарисовать ее для вас на заказ нужного вам размера и под ваш интерьер.
            </p>

            {/* Размеры и цены */}
            <div className="bg-white/10 p-6 rounded-lg border border-luxury-gold/30">
              <h3 className="text-xl font-bold mb-4" style={{ color: 'hsl(var(--delivery-text))' }}>
                Размеры и цены:
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-lg" style={{ color: 'hsl(var(--delivery-text))' }}>50×40 см</span>
                  <span className="text-xl font-bold" style={{ color: 'hsl(var(--luxury-gold))' }}>15 000 ₽</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-lg" style={{ color: 'hsl(var(--delivery-text))' }}>50×70 см</span>
                  <span className="text-xl font-bold" style={{ color: 'hsl(var(--luxury-gold))' }}>20 000 ₽</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-lg" style={{ color: 'hsl(var(--delivery-text))' }}>60×80 см</span>
                  <span className="text-xl font-bold" style={{ color: 'hsl(var(--luxury-gold))' }}>25 000 ₽</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-lg" style={{ color: 'hsl(var(--delivery-text))' }}>100×120 см</span>
                  <span className="text-xl font-bold" style={{ color: 'hsl(var(--luxury-gold))' }}>от 30 000 ₽</span>
                </div>
              </div>
            </div>

            {/* Гарантии */}
            <div className="bg-luxury-gold/10 p-6 rounded-lg border border-luxury-gold/30">
              <p className="text-lg font-semibold mb-2" style={{ color: 'hsl(var(--delivery-text))' }}>
                ГАРАНТИРУЕТСЯ ПОЛНАЯ ПРОЗРАЧНОСТЬ ОКАЗАНИЯ УСЛУГ:
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="text-luxury-gold mr-2">•</span>
                  <span style={{ color: 'hsl(var(--delivery-text))' }}>ДОГОВОР</span>
                </li>
                <li className="flex items-start">
                  <span className="text-luxury-gold mr-2">•</span>
                  <span style={{ color: 'hsl(var(--delivery-text))' }}>РАСПИСКА О ПРИНЯТИИ СРЕДСТВ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-luxury-gold mr-2">•</span>
                  <span style={{ color: 'hsl(var(--delivery-text))' }}>ЛИЧНАЯ ВСТРЕЧА ДЛЯ ВНЕСЕНИЯ ПРЕДОПЛАТЫ</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Правая колонка - условия заказа */}
          <div className="space-y-6">
            <div className="bg-white/10 p-6 rounded-lg border border-luxury-gold/30 h-full">
              <h3 className="text-xl font-bold mb-4" style={{ color: 'hsl(var(--delivery-text))' }}>
                Условия заказа:
              </h3>
              <div className="space-y-4">
                <p className="text-base leading-relaxed" style={{ color: 'hsl(var(--delivery-text))' }}>
                  Заказ принимается по предоплате 50% на карту Сбербанк или Тинькофф. Также принимаю платежи через иностранные источники
                </p>
                
                <div className="pt-4">
                  <p className="text-lg font-semibold mb-3" style={{ color: 'hsl(var(--delivery-text))' }}>
                    В стоимость входит:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">1.</span>
                      <span style={{ color: 'hsl(var(--delivery-text))' }}>Согласование эскиза будущей картины</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">2.</span>
                      <span style={{ color: 'hsl(var(--delivery-text))' }}>Картина акрилом на льняном холсте</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">3.</span>
                      <span style={{ color: 'hsl(var(--delivery-text))' }}>Прокраска торцов подрамника</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">4.</span>
                      <span style={{ color: 'hsl(var(--delivery-text))' }}>Упаковка для доставки</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                {/* <Button 
                  className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-dark px-8 py-3 text-lg font-medium"
                >
                  Сделать заказ
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtDeliveryInfo;
import React from 'react';

const DeliveryIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-4">
    <path d="M8 36H12C12 38.21 13.79 40 16 40C18.21 40 20 38.21 20 36H28C28 38.21 29.79 40 32 40C34.21 40 36 38.21 36 36H40V28L36 20H28V12H8V36Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="16" cy="36" r="2" fill="currentColor"/>
    <circle cx="32" cy="36" r="2" fill="currentColor"/>
    <path d="M28 20H34L36 24H28V20Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const PaymentIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-4">
    <rect x="4" y="12" width="40" height="24" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="4" y="18" width="40" height="6" fill="currentColor"/>
    <rect x="8" y="26" width="8" height="2" fill="currentColor"/>
    <rect x="20" y="26" width="12" height="2" fill="currentColor"/>
  </svg>
);

const OrnamentsTop = () => (
  <svg width="600" height="80" viewBox="0 0 600 80" fill="none" className="w-full max-w-2xl">
    <path d="M50 40C50 30 58 22 68 22C78 22 86 30 86 40C86 50 78 58 68 58C58 58 50 50 50 40Z" fill="currentColor" opacity="0.6"/>
    <path d="M110 40C110 32 116 26 124 26C132 26 138 32 138 40C138 48 132 54 124 54C116 54 110 48 110 40Z" fill="currentColor" opacity="0.4"/>
    <path d="M160 40C160 34 165 29 171 29C177 29 182 34 182 40C182 46 177 51 171 51C165 51 160 46 160 40Z" fill="currentColor" opacity="0.6"/>
    
    {/* Repeat pattern */}
    <path d="M220 40C220 30 228 22 238 22C248 22 256 30 256 40C256 50 248 58 238 58C228 58 220 50 220 40Z" fill="currentColor" opacity="0.6"/>
    <path d="M280 40C280 32 286 26 294 26C302 26 308 32 308 40C308 48 302 54 294 54C286 54 280 48 280 40Z" fill="currentColor" opacity="0.4"/>
    <path d="M330 40C330 34 335 29 341 29C347 29 352 34 352 40C352 46 347 51 341 51C335 51 330 46 330 40Z" fill="currentColor" opacity="0.6"/>
    
    <path d="M390 40C390 30 398 22 408 22C418 22 426 30 426 40C426 50 418 58 408 58C398 58 390 50 390 40Z" fill="currentColor" opacity="0.6"/>
    <path d="M450 40C450 32 456 26 464 26C472 26 478 32 478 40C478 48 472 54 464 54C456 54 450 48 450 40Z" fill="currentColor" opacity="0.4"/>
    <path d="M500 40C500 34 505 29 511 29C517 29 522 34 522 40C522 46 517 51 511 51C505 51 500 46 500 40Z" fill="currentColor" opacity="0.6"/>
  </svg>
);

const OrnamentsBottom = () => (
  <svg width="600" height="80" viewBox="0 0 600 80" fill="none" className="w-full max-w-2xl">
    <path d="M50 40C50 50 58 58 68 58C78 58 86 50 86 40C86 30 78 22 68 22C58 22 50 30 50 40Z" fill="currentColor" opacity="0.6"/>
    <path d="M110 40C110 48 116 54 124 54C132 54 138 48 138 40C138 32 132 26 124 26C116 26 110 32 110 40Z" fill="currentColor" opacity="0.4"/>
    <path d="M160 40C160 46 165 51 171 51C177 51 182 46 182 40C182 34 177 29 171 29C165 29 160 34 160 40Z" fill="currentColor" opacity="0.6"/>
    
    <path d="M220 40C220 50 228 58 238 58C248 58 256 50 256 40C256 30 248 22 238 22C228 22 220 30 220 40Z" fill="currentColor" opacity="0.6"/>
    <path d="M280 40C280 48 286 54 294 54C302 54 308 48 308 40C308 32 302 26 294 26C286 26 280 32 280 40Z" fill="currentColor" opacity="0.4"/>
    <path d="M330 40C330 46 335 51 341 51C347 51 352 46 352 40C352 34 347 29 341 29C335 29 330 34 330 40Z" fill="currentColor" opacity="0.6"/>
    
    <path d="M390 40C390 50 398 58 408 58C418 58 426 50 426 40C426 30 418 22 408 22C398 22 390 30 390 40Z" fill="currentColor" opacity="0.6"/>
    <path d="M450 40C450 48 456 54 464 54C472 54 478 48 478 40C478 32 472 26 464 26C456 26 450 32 450 40Z" fill="currentColor" opacity="0.4"/>
    <path d="M500 40C500 46 505 51 511 51C517 51 522 46 522 40C522 34 517 29 511 29C505 29 500 34 500 40Z" fill="currentColor" opacity="0.6"/>
  </svg>
);

const DeliverySection = () => {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: 'hsl(var(--delivery-bg))' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2" style={{ color: 'hsl(var(--delivery-text))' }}>
            ДОСТАВКА И ОПЛАТА
          </h2>
        </div>

        {/* Delivery and Payment Cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Delivery Card */}
          <div className="text-center">
            <div className="flex justify-center" style={{ color: 'hsl(var(--delivery-accent))' }}>
              <DeliveryIcon />
            </div>
            <h3 className="text-xl font-semibold mb-4 px-4 py-2 border rounded-full inline-block" 
                style={{ 
                  color: 'hsl(var(--delivery-text))', 
                  borderColor: 'hsl(var(--delivery-accent))' 
                }}>
              ДОСТАВКА
            </h3>
            <div className="space-y-4 text-left max-w-md mx-auto" style={{ color: 'hsl(var(--delivery-text))' }}>
              <p className="text-sm leading-relaxed">
                ДОСТАВКА ОСУЩЕСТВЛЯЕТСЯ В ЛЮБУЮ ТОЧКУ МИРА. 
                УПАКОВКА ВХОДИТ В СТОИМОСТЬ
              </p>
              <p className="text-xs leading-relaxed">
                ✓ Доставляем картины по всему миру за 3-7 дней
              </p>
              <p className="text-xs leading-relaxed">
                ✓ Надежная защитная упаковка предотвращает повреждение картин
              </p>
              <p className="text-sm font-medium mt-6">
                КРОМЕ КАРТИН ИЗ НАЛИЧИЯ, ВЫ ТАКЖЕ МОЖЕТЕ ЗАКАЗАТЬ КАРТИНУ 
                ПОД ЗАКАЗ В РАЗМЕРЕ И ПОД ВАШ ИНТЕРЬЕР
              </p>
              <p className="text-xs leading-relaxed">
                ✓ У нас в наличии скорее ограниченное количество готовых работ - доставляем 
                в тот же день после оплаты
              </p>
              <div className="mt-6 inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full">
                <span className="text-xs">КАРТИНЫ ДЛЯ ДУШИ</span>
              </div>
            </div>
          </div>

          {/* Payment Card */}
          <div className="text-center">
            <div className="flex justify-center" style={{ color: 'hsl(var(--delivery-accent))' }}>
              <PaymentIcon />
            </div>
            <h3 className="text-xl font-semibold mb-4 px-4 py-2 border rounded-full inline-block"
                style={{ 
                  color: 'hsl(var(--delivery-text))', 
                  borderColor: 'hsl(var(--delivery-accent))' 
                }}>
              ОПЛАТА
            </h3>
            <div className="space-y-4 text-left max-w-md mx-auto" style={{ color: 'hsl(var(--delivery-text))' }}>
              <p className="text-sm leading-relaxed">
                ОПЛАТИТЬ МОЖНО ОНЛАЙН С ЛЮБОЙ РОССИЙСКОЙ КАРТЫ, 
                ЗАРУБЕЖНЫМИ ПЛАТЕЖИ ЧЕРЕЗ КРИПТОВАЛЮТЫ/USDT/PAYPAL
              </p>
              <p className="text-xs leading-relaxed">
                ✓ Банковские карты России
              </p>
              <p className="text-xs leading-relaxed">
                ✓ PayPal для покупателей из других стран
              </p>
              <p className="text-xs leading-relaxed">
                ✓ Крипто платежи: Bitcoin/Ethereum/USDT/другие популярные криптовалюты Ethereum/Bitcoin на наш криптокошелек
              </p>
              <div className="mt-6 p-3 bg-white bg-opacity-10 rounded-lg">
                <p className="text-xs">
                  ПОКУПАЕТЕ НЕ НА ПУСТУУ МЕСТЕ, НА НАШЕМ САЙТЕ НОД В ИНСТАГРАМЕ
                  <span className="inline-flex items-center ml-2">
                    <span className="text-sm">📱 💬</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ornamental Section */}
        <div className="text-center">
          <div className="flex justify-center mb-8" style={{ color: 'hsl(var(--delivery-accent))' }}>
            <OrnamentsTop />
          </div>
          
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'hsl(var(--delivery-text))' }}>
            ВПИШЕТСЯ ЛИ КАРТИНА<br />
            В МОЙ ИНТЕРЬЕР?
          </h3>
          
          <p className="text-sm max-w-md mx-auto mb-8" style={{ color: 'hsl(var(--delivery-text))' }}>
            Пришлите фотографии помещения для<br />
            визуализации в интерьере
          </p>
          
          <div className="flex justify-center" style={{ color: 'hsl(var(--delivery-accent))' }}>
            <OrnamentsBottom />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
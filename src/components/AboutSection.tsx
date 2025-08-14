import React from 'react';
import { Button } from '@/components/ui/button';

const AboutOrnament = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="absolute">
    <path d="M40 10C45 10 50 15 50 20C50 25 45 30 40 30C35 30 30 25 30 20C30 15 35 10 40 10Z" fill="currentColor" opacity="0.3"/>
    <path d="M20 30C25 30 30 35 30 40C30 45 25 50 20 50C15 50 10 45 10 40C10 35 15 30 20 30Z" fill="currentColor" opacity="0.2"/>
    <path d="M60 30C65 30 70 35 70 40C70 45 65 50 60 50C55 50 50 45 50 40C50 35 55 30 60 30Z" fill="currentColor" opacity="0.2"/>
    <path d="M40 50C45 50 50 55 50 60C50 65 45 70 40 70C35 70 30 65 30 60C30 55 35 50 40 50Z" fill="currentColor" opacity="0.3"/>
  </svg>
);

const AboutSection = () => {
  return (
    <section className="py-20 px-6 relative" style={{ backgroundColor: 'hsl(var(--about-bg))' }}>
      <div className="max-w-6xl mx-auto">
        {/* Contact Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="flex-1">
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'hsl(var(--about-text))' }}>
                Пришлите мне фотографии вашего<br />
                интерьера и понравившейся картины.<br />
                Я сделаю/составлю картину для вашего<br />
                интерьера, и вы легко сможете<br />
                сделать заказ.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button 
                variant="outline"
                className="px-8 py-3 rounded-full border-2 hover:scale-105 transition-all duration-200"
                style={{ 
                  borderColor: 'hsl(var(--about-text))',
                  color: 'hsl(var(--about-text))',
                  backgroundColor: 'transparent'
                }}
              >
                связаться →
              </Button>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          {/* Profile Image */}
          <div className="relative flex justify-center">
            <div className="absolute top-0 right-0" style={{ color: 'hsl(var(--about-accent))' }}>
              <AboutOrnament />
            </div>
            <div 
              className="w-80 h-80 rounded-full overflow-hidden border-4 relative"
              style={{ borderColor: 'hsl(var(--about-accent))' }}
            >
              <img 
                src="/lovable-uploads/5cc0232e-5e1f-4e3f-826d-18652157d52c.png"
                alt="Гузель Хайбуллова"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-10 left-10" style={{ color: 'hsl(var(--about-accent))' }}>
              <AboutOrnament />
            </div>
          </div>

          {/* About Text */}
          <div>
            <div className="mb-8">
              <h2 className="text-5xl font-bold mb-4 flex items-center gap-4" style={{ color: 'hsl(var(--about-text))' }}>
                ОБО МНЕ 
                <div style={{ color: 'hsl(var(--about-accent))' }}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 5C25 5 30 10 30 15C30 20 25 25 20 25C15 25 10 20 10 15C10 10 15 5 20 5Z" fill="currentColor" opacity="0.4"/>
                    <path d="M10 15C15 15 20 20 20 25C20 30 15 35 10 35C5 35 0 30 0 25C0 20 5 15 10 15Z" fill="currentColor" opacity="0.3"/>
                    <path d="M30 15C35 15 40 20 40 25C40 30 35 35 30 35C25 35 20 30 20 25C20 20 25 15 30 15Z" fill="currentColor" opacity="0.3"/>
                  </svg>
                </div>
              </h2>
            </div>

            <div className="space-y-6" style={{ color: 'hsl(var(--about-text))' }}>
              <p className="leading-relaxed">
                Я <span style={{ color: 'hsl(var(--about-accent))' }} className="font-semibold">Гузель Хайбуллова</span> — 
                <span style={{ color: 'hsl(var(--about-accent))' }} className="font-semibold"> современный российский<br />
                художник</span>, родилась в Самаре в<br />
                семье татар. Работаю в технике<br />
                авторской живописи и арабской<br />
                каллиграфии. Как тюркский<br />
                художник, нахожу вдохновение в<br />
                любви народа к своей культуре.
              </p>

              <p className="leading-relaxed">
                <span style={{ color: 'hsl(var(--about-accent))' }} className="font-semibold">Традиции играют огромное<br />
                значение в моем искусстве</span> -<br />
                будь то язык, национальная кухня<br />
                или узоры, которые украшают<br />
                предметы интерьера, одежду и<br />
                обувь.
              </p>

              <p className="leading-relaxed">
                <span className="font-semibold">Мои картины созданы для того, чтобы</span> не только сохранить<br />
                культурное наследие, но и <span className="font-semibold">передать теплые воспоминания о его<br />
                детстве</span>. Я верю, наши дома могут передавать нашу идентичность.
              </p>
            </div>
          </div>
        </div>

        {/* Collaborations Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold" style={{ color: 'hsl(var(--about-text))' }}>
            КОЛЛАБОРАЦИИ
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
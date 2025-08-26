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
    <section id="about" className="py-20 px-6 relative" style={{ backgroundColor: 'hsl(var(--about-bg))' }}>
      

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
                src="/foto1.jpg"
                alt="Фарзана"
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
               <span style={{ color: 'hsl(var(--about-accent))' }} className="font-semibold">Фарзана современный арабский художник</span> — 
                <span style={{ color: 'hsl(var(--about-accent))' }} className="font-semibold">Я работаю в технике авторской живописи и скульптурной живописи, <br />
                </span>Соединяя текстуру, свет и внутренние ощущения в единое полотно.<br />
                Моё вдохновение — это любовь.<br />
                Это пески пустыни и дуновение ветра в шёлковых шатрах.<br />
                Это культура народов мира,в которой я слышу голос предков и чувствую пульс настоящего.
                Каждая моя работа — это история.<br />
                Иногда — шёпот, иногда — крик. Но всегда — честный диалог с тем, кто смотрит.<br />
                
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

        
        
      
    </section>
  );
};

export default AboutSection;
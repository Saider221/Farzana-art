import { Star, Plus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import PaymentForm from "@/components/PaymentForm";
import { useState } from "react";

const HeroSection = () => {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 sm:top-20 sm:left-20 text-luxury-gold/30 hidden md:block">
        <Star className="h-6 w-6 sm:h-8 sm:w-8" />
      </div>
      <div className="absolute top-20 right-16 sm:top-40 sm:right-32 text-luxury-gold/30 hidden md:block">
        <Plus className="h-4 w-4 sm:h-6 sm:w-6" />
      </div>
      <div className="absolute bottom-20 left-16 sm:bottom-32 sm:left-32 text-luxury-gold/30 hidden md:block">
        <Sparkles className="h-8 w-8 sm:h-10 sm:w-10" />
      </div>
      <div className="absolute bottom-24 right-10 sm:bottom-40 sm:right-20 text-luxury-gold/30 hidden md:block">
        <Plus className="h-6 w-6 sm:h-8 sm:w-8" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Фарзана
                <br />
                <span className="text-luxury-gold">«Современный арабский художник»</span>
              </h1>
              
              <div className="space-y-4 text-luxury-beige/80 text-base sm:text-lg">
                <p>
                Я работаю в технике авторской живописи и скульптурной живописи, соединяя текстуру, свет и внутренние ощущения в единое полотно.
                  <br />
                  Моё вдохновение — это любовь. Это пески пустыни и дуновение ветра в шёлковых шатрах. 
                </p>
                <p>
                  Это культура народов мира, в которой я слышу голос предков и чувствую пульс настоящего.
                  <br />
                  Каждая моя работа — это история. Иногда — шёпот, иногда — крик. Но всегда — честный диалог с тем, кто смотрит.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
              </div>
            </div>
          </div>
          
          {/* Right Content - Desert Pattern */}
          <div className="relative flex justify-center">
            <div className="w-full max-w-lg">
              <div className="w-full h-80 sm:h-96 lg:h-[500px] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/20 to-luxury-brown/40 rounded-lg overflow-hidden">
                  {/* Simulated desert pattern */}
                  <div className="absolute inset-0 opacity-60">
                    <div className="w-full h-full bg-gradient-to-br from-amber-200/30 to-amber-600/30 rounded-lg">
                      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-luxury-gold/10 to-luxury-brown/20"></div>
                    </div>
                  </div>
                  
                  {/* Frame effect */}
                  <div className="absolute inset-4 border-2 border-luxury-gold/30 rounded-lg"></div>
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-luxury-gold/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Sparkles className="h-8 w-8 sm:h-12 sm:w-12 text-luxury-gold" />
                      </div>
                      <p className="text-luxury-beige text-sm font-medium">Узоры пустыни</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-4 border-b">
              <h3 className="text-xl font-bold">Тестовая оплата</h3>
            </div>
            <div className="p-4">
              <PaymentForm 
                amount={1000}
                description="Тестовая оплата картины"
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
      )}
    </section>
  );
};

export default HeroSection;
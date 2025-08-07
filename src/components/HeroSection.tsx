import { Star, Plus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 text-luxury-gold/30">
        <Star className="h-8 w-8" />
      </div>
      <div className="absolute top-40 right-32 text-luxury-gold/30">
        <Plus className="h-6 w-6" />
      </div>
      <div className="absolute bottom-32 left-32 text-luxury-gold/30">
        <Sparkles className="h-10 w-10" />
      </div>
      <div className="absolute bottom-40 right-20 text-luxury-gold/30">
        <Plus className="h-8 w-8" />
      </div>
      
      <div className="max-w-7xl mx-auto px-8 py-20 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Коллекция
                <br />
                <span className="text-luxury-gold">«ПУСТЫННАЯ»</span>
              </h1>
              
              <div className="space-y-4 text-luxury-beige/80 text-lg">
                <p>
                  Каждая из наших серий является
                  <br />
                  творческим произведением.
                </p>
                <p>
                  С яркими мотивами из
                  <br />
                  богатой мозаичности
                </p>
              </div>
              
              <Button 
                variant="outline" 
                className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300 px-8 py-3"
              >
                Подробная информация →
              </Button>
            </div>
          </div>
          
          {/* Right Content - Desert Pattern */}
          <div className="relative">
            <div className="w-full h-96 lg:h-[500px] relative">
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
                    <div className="w-32 h-32 mx-auto bg-luxury-gold/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Sparkles className="h-12 w-12 text-luxury-gold" />
                    </div>
                    <p className="text-luxury-beige text-sm font-medium">Узоры пустыни</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
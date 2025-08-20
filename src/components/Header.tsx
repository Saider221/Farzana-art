import { Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-6 px-8 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Button variant="ghost" size="icon" className="text-luxury-gold">
            <Menu className="h-6 w-6" />
          </Button>
          <div className="text-2xl font-bold text-luxury-gold">GUZEMA</div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-luxury-gold transition-colors">
            Главная
          </a>
          <a href="#" className="text-foreground hover:text-luxury-gold transition-colors">
            Обо мне
          </a>
          <a href="#" className="text-foreground hover:text-luxury-gold transition-colors">
            Магазин
          </a>
          <a href="#" className="text-foreground hover:text-luxury-gold transition-colors">
            Арт Терапия 
          </a>
          <a href="#" className="text-foreground hover:text-luxury-gold transition-colors">
            Контакты
          </a>
          
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-luxury-gold">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-luxury-gold">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
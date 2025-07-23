import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-primary">SafariFilière</h1>
              <p className="text-xs text-muted-foreground">Ton orientation, ton avenir</p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#quiz" className="text-foreground hover:text-primary transition-colors">
              Quiz d'orientation
            </a>
            <a href="#filieres" className="text-foreground hover:text-primary transition-colors">
              Filières
            </a>
            <a href="#temoignages" className="text-foreground hover:text-primary transition-colors">
              Témoignages
            </a>
            <Button variant="default" className="bg-gradient-secondary">
              Commencer
            </Button>
          </nav>

          {/* Menu Mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Navigation Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#accueil" className="text-foreground hover:text-primary transition-colors">
                Accueil
              </a>
              <a href="#quiz" className="text-foreground hover:text-primary transition-colors">
                Quiz d'orientation
              </a>
              <a href="#filieres" className="text-foreground hover:text-primary transition-colors">
                Filières
              </a>
              <a href="#temoignages" className="text-foreground hover:text-primary transition-colors">
                Témoignages
              </a>
              <Button variant="default" className="bg-gradient-secondary self-start">
                Commencer
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
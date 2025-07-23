import { Button } from "@/components/ui/button";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Marque */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-bold text-xl text-primary">SafariFilière</h1>
                <p className="text-xs text-muted-foreground">Ton orientation, ton avenir</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              La première plateforme sénégalaise dédiée à l'orientation scolaire. 
              Nous aidons les élèves à préparer leur avenir dès la Seconde.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#accueil" className="text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#quiz" className="text-muted-foreground hover:text-primary transition-colors">
                  Quiz d'orientation
                </a>
              </li>
              <li>
                <a href="#filieres" className="text-muted-foreground hover:text-primary transition-colors">
                  Catalogue des filières
                </a>
              </li>
              <li>
                <a href="#temoignages" className="text-muted-foreground hover:text-primary transition-colors">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Universités du Sénégal
                </a>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Guide d'orientation 2nde
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Parcours Première
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Préparation Terminale
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Conseils aux parents
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog orientation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">contact@safarifiliere.sn</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+221 77 XXX XX XX</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Dakar, Sénégal</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-medium mb-2">Newsletter</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Reçois nos conseils d'orientation chaque mois
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="ton@email.com"
                  className="flex-1 px-3 py-2 text-xs border border-border rounded-md bg-background"
                />
                <Button size="sm" className="bg-gradient-secondary">
                  S'abonner
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 SafariFilière. Tous droits réservés. 
              <span className="ml-2">Made with ❤️ au Sénégal</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                CGU
              </a>
            </div>
          </div>

          {/* Mission statement */}
          <div className="mt-6 p-4 bg-primary/5 rounded-lg text-center">
            <p className="text-sm text-muted-foreground italic">
              "Notre mission : transformer l'orientation scolaire au Sénégal d'une décision de dernière minute 
              en un processus progressif, informé et épanouissant pour chaque élève."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
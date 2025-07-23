import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Ton <span className="bg-gradient-primary bg-clip-text text-transparent">orientation</span>,
                <br />
                ton <span className="bg-gradient-secondary bg-clip-text text-transparent">avenir</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                La première plateforme sénégalaise qui t'accompagne dès la Seconde dans ton orientation post-bac. 
                Découvre tes talents, explore les filières et prépare ton futur en toute confiance.
              </p>
            </div>

            {/* Stats rapides */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Filières</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary">30+</div>
                <div className="text-sm text-muted-foreground">Universités</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Gratuit</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-medium transition-all duration-300"
              >
                Commencer mon quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Découvrir les filières
              </Button>
            </div>

            {/* Badge confiance */}
            <div className="inline-flex items-center space-x-2 bg-muted px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Déjà utilisé par 1000+ élèves sénégalais</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-medium">
              <img
                src={heroImage}
                alt="Étudiants sénégalais en formation"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-card p-4 rounded-xl shadow-soft border">
              <div className="text-sm font-medium text-primary">2nde → Terminale</div>
              <div className="text-xs text-muted-foreground">Progression guidée</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-soft border">
              <div className="text-sm font-medium text-secondary">Quiz personnalisé</div>
              <div className="text-xs text-muted-foreground">5 min seulement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Quote, Play, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import student1 from "@/assets/student-portrait-1.jpg";
import student2 from "@/assets/student-portrait-2.jpg";
import student3 from "@/assets/student-portrait-3.jpg";

const TestimonialSection = () => {
  const navigate = useNavigate();
  const testimonials = [
    {
      id: 1,
      nom: "Fatou Diallo",
      age: 22,
      filiere: "Informatique",
      universite: "UCAD",
      photo: student1,
      temoignage: "Grâce à PostOrientation, j'ai découvert ma passion pour l'informatique dès la 4ème. Le quiz m'a aidée à comprendre que j'aimais résoudre des problèmes logiques. Aujourd'hui, je suis en 3ème année et je ne regrette pas mon choix !",
      conseil: "N'attendez pas la Terminale pour réfléchir à votre orientation. Commencez tôt et explorez différents domaines.",
      note: 5,
      video: false
    },
    {
      id: 2,
      nom: "Moussa Seck",
      age: 24,
      filiere: "Médecine",
      universite: "UCAD",
      photo: student3,
      temoignage: "Je voulais faire médecine mais je ne savais pas à quoi m'attendre. Les témoignages sur la plateforme m'ont préparé mentalement aux études difficiles mais passionnantes. Je suis maintenant en 5ème année !",
      conseil: "La médecine demande beaucoup de sacrifices, mais la satisfaction d'aider les gens en vaut la peine.",
      note: 5,
      video: true
    },
    {
      id: 3,
      nom: "Aïssa Ndiaye",
      age: 21,
      filiere: "Génie Civil",
      universite: "ESP",
      photo: student2,
      temoignage: "J'étais la seule fille de ma classe à vouloir faire de l'ingénierie. PostOrientation m'a donné confiance avec des témoignages d'autres femmes ingénieurs. Aujourd'hui, je construis l'avenir du Sénégal !",
      conseil: "Les filles, n'ayez pas peur des filières scientifiques. Nous avons notre place partout !",
      note: 5,
      video: false
    }
  ];

  const stats = [
    { label: "Taux de satisfaction", value: "96%", color: "text-primary" },
    { label: "Étudiants orientés", value: "1,200+", color: "text-secondary" },
    { label: "Témoignages collectés", value: "150+", color: "text-accent" }
  ];

  return (
    <section id="temoignages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ils ont réussi leur <span className="bg-gradient-hero bg-clip-text text-transparent">orientation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvre les témoignages authentiques d'étudiants sénégalais qui ont trouvé leur voie grâce à une orientation réfléchie.
          </p>
        </div>

        {/* Stats rapides */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Témoignages */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((temoignage) => (
            <Card key={temoignage.id} className="hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <img
                      src={temoignage.photo}
                      alt={temoignage.nom}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {temoignage.video && (
                      <div className="absolute -bottom-1 -right-1 bg-secondary p-1 rounded-full">
                        <Play className="h-3 w-3 text-secondary-foreground" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{temoignage.nom}</CardTitle>
                    <CardDescription>
                      {temoignage.age} ans • {temoignage.filiere}
                    </CardDescription>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {temoignage.universite}
                    </Badge>
                  </div>
                </div>
                
                {/* Note */}
                <div className="flex items-center space-x-1">
                  {[...Array(temoignage.note)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Témoignage principal */}
                <div className="relative">
                  <Quote className="absolute top-0 left-0 h-6 w-6 text-primary/20" />
                  <p className="text-sm leading-relaxed pl-8 italic">
                    "{temoignage.temoignage}"
                  </p>
                </div>

                {/* Conseil */}
                <div className="bg-muted/50 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm mb-1 text-primary">
                    Son conseil pour toi :
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {temoignage.conseil}
                  </p>
                </div>

                {/* Action */}
                {temoignage.video ? (
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    size="sm"
                    onClick={() => navigate(`/temoignage/${temoignage.id}/video`)}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Voir la vidéo complète
                  </Button>
                ) : (
                  <Button 
                    variant="ghost" 
                    className="w-full text-primary" 
                    size="sm"
                    onClick={() => navigate(`/temoignage/${temoignage.id}`)}
                  >
                    Lire le témoignage complet
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA pour plus de témoignages */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Tu veux partager ton expérience ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Aide les futurs étudiants en partageant ton parcours et tes conseils d'orientation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-primary"
                  onClick={() => navigate("/partager-temoignage")}
                >
                  Partager mon témoignage
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate("/temoignages")}
                >
                  Voir tous les témoignages
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section impact */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">
            L'impact de PostOrientation
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-xl shadow-soft">
              <h4 className="font-semibold mb-3 text-primary">Avant PostOrientation</h4>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li>• Orientation de dernière minute</li>
                <li>• Choix influencé par la famille</li>
                <li>• Méconnaissance des débouchés</li>
                <li>• Taux d'abandon élevé</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-soft">
              <h4 className="font-semibold mb-3 text-secondary">Avec PostOrientation</h4>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li>• Réflexion progressive dès la 2nde</li>
                <li>• Choix personnel éclairé</li>
                <li>• Connaissance des opportunités</li>
                <li>• Motivation renforcée</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
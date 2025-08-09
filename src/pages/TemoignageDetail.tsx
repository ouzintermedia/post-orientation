import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Quote, Star, User, GraduationCap, Calendar } from "lucide-react";
import student1 from "@/assets/student-portrait-1.jpg";
import student2 from "@/assets/student-portrait-2.jpg";
import student3 from "@/assets/student-portrait-3.jpg";

const TemoignageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const temoignages = [
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
      temoignageComplet: "Mon parcours a commencé en 4ème quand j'ai découvert PostOrientation. À l'époque, je ne savais pas du tout ce que je voulais faire. Mes parents voulaient que je fasse médecine, mais moi j'aimais bien jouer avec l'ordinateur. Le quiz m'a révélé mes forces en logique et en résolution de problèmes. J'ai commencé à m'intéresser à la programmation, d'abord par curiosité, puis par passion. Aujourd'hui en 3ème année d'informatique à l'UCAD, je développe des applications qui aident les étudiants sénégalais. Mon stage chez une startup de Dakar s'est super bien passé et j'ai déjà des propositions d'emploi. L'informatique au Sénégal, c'est l'avenir !",
      parcours: [
        { etape: "4ème", description: "Découverte de PostOrientation et du quiz d'orientation" },
        { etape: "3ème", description: "Premiers cours de programmation en ligne" },
        { etape: "Seconde", description: "Choix de la filière scientifique" },
        { etape: "Terminale S", description: "Bac avec mention Bien" },
        { etape: "L1 Informatique", description: "Entrée à l'UCAD, découverte approfondie" },
        { etape: "L2", description: "Spécialisation en développement web" },
        { etape: "L3", description: "Stage en startup, projets concrets" }
      ]
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
      temoignageComplet: "Depuis tout petit, je voulais être médecin. Mais entre vouloir et réussir, il y a un grand pas ! PostOrientation m'a permis de lire les témoignages d'étudiants en médecine qui expliquaient la réalité des études. C'est dur, très dur même. Les nuits blanches, la pression, les examens difficiles... Mais quand tu vois un patient guérir grâce à tes soins, tout prend son sens. Je suis maintenant en 5ème année et je me spécialise en pédiatrie. Mon rêve : ouvrir un cabinet dans mon village natal pour que les enfants n'aient plus à faire 100km pour voir un médecin.",
      parcours: [
        { etape: "Seconde", description: "Confirmation du choix médecine grâce aux témoignages" },
        { etape: "Terminale S", description: "Bac avec mention Très Bien" },
        { etape: "P1 Médecine", description: "Réussite du concours PACES" },
        { etape: "L2-L3", description: "Études précliniques, anatomie, physiologie" },
        { etape: "L4-L5", description: "Stages cliniques, contact avec les patients" },
        { etape: "L6", description: "Spécialisation en pédiatrie" },
        { etape: "Internat", description: "Formation spécialisée" }
      ]
    }
  ];
  
  const temoignage = temoignages.find(t => t.id === parseInt(id || "0"));
  
  if (!temoignage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Témoignage non trouvé</h1>
          <Button onClick={() => navigate("/temoignages")}>
            Retour aux témoignages
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate("/temoignages")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux témoignages
          </Button>
        </div>

        {/* Profil */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* En-tête du témoignage */}
            <Card>
              <CardHeader>
                <div className="flex items-start space-x-6">
                  <img
                    src={temoignage.photo}
                    alt={temoignage.nom}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{temoignage.nom}</CardTitle>
                    <CardDescription className="text-lg mb-3">
                      {temoignage.age} ans • Étudiant en {temoignage.filiere}
                    </CardDescription>
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="outline" className="text-sm">
                        {temoignage.universite}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        {[...Array(temoignage.note)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Témoignage complet */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Quote className="h-5 w-5 mr-2" />
                  Son histoire complète
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {temoignage.temoignageComplet}
                </p>
              </CardContent>
            </Card>

            {/* Conseil détaillé */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Son conseil pour toi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  "{temoignage.conseil}"
                </p>
              </CardContent>
            </Card>

            {/* Parcours détaillé */}
            {temoignage.parcours && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Son parcours étape par étape
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {temoignage.parcours.map((etape, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-primary">{etape.etape}</h4>
                          <p className="text-muted-foreground">{etape.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Infos rapides */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Profil de l'étudiant</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">{temoignage.nom}</div>
                    <div className="text-sm text-muted-foreground">{temoignage.age} ans</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">{temoignage.filiere}</div>
                    <div className="text-sm text-muted-foreground">{temoignage.universite}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions similaires */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Découvrir plus</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate(`/filiere/${temoignage.filiere.toLowerCase()}`)}
                >
                  Explorer cette filière
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate("/quiz")}
                >
                  Faire le quiz d'orientation
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate("/temoignages")}
                >
                  Autres témoignages
                </Button>
              </CardContent>
            </Card>

            {/* Partager son témoignage */}
            <Card className="bg-gradient-to-br from-secondary/10 to-accent/10">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Toi aussi, inspire !</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Partage ton parcours pour aider d'autres étudiants.
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate("/partager-temoignage")}
                >
                  Partager mon histoire
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemoignageDetail;
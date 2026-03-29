import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, MapPin, Briefcase, GraduationCap, TrendingUp, Star } from "lucide-react";
import { filieres } from "@/data/mockData";

const FiliereDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const filiere = filieres.find(f => f.id === id);
  
  if (!filiere) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Filière non trouvée</h1>
          <Button onClick={() => navigate("/filieres")}>
            Retour aux filières
          </Button>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulte: string) => {
    switch (difficulte) {
      case "Facile": return "bg-green-100 text-green-800";
      case "Moyenne": return "bg-yellow-100 text-yellow-800";
      case "Élevée": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getEmploiColor = (emploi: string) => {
    switch (emploi) {
      case "Excellente": return "bg-green-100 text-green-800";
      case "Très bonne": return "bg-blue-100 text-blue-800";
      case "Bonne": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
        </div>

        {/* Titre et infos principales */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {filiere.nom}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {filiere.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="text-sm">
                    Séries: {filiere.seriesRecommandees.join(", ")}
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800">
                    Emploiabilité: {filiere.emploiabilite}%
                  </Badge>
                </div>
              </div>

              {/* Description détaillée */}
              <Card>
                <CardHeader>
                  <CardTitle>Description de la formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Cette formation vous permettra d'acquérir toutes les compétences nécessaires pour exercer dans le domaine de {filiere.nom.toLowerCase()}. 
                    Au cours de vos {filiere.duree}, vous développerez une expertise solide et pratique qui vous préparera au marché de l'emploi sénégalais.
                  </p>
                </CardContent>
              </Card>

              {/* Débouchés */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2" />
                    Débouchés professionnels
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {filiere.debouches.map((debouche, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{debouche}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Compétences développées */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Compétences développées
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Compétences techniques</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Maîtrise des outils spécialisés</li>
                        <li>• Méthodes de travail professionnelles</li>
                        <li>• Analyse et résolution de problèmes</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Compétences transversales</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Communication professionnelle</li>
                        <li>• Travail en équipe</li>
                        <li>• Gestion de projet</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Infos rapides */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Informations clés</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Durée</div>
                    <div className="text-sm text-muted-foreground">{filiere.duree}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Universités</div>
                    <div className="text-sm text-muted-foreground">{filiere.universites.length} établissements</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Domaine</div>
                    <div className="text-sm text-muted-foreground">{filiere.domaine}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Employabilité</div>
                    <div className="text-sm text-muted-foreground">{filiere.emploiabilite}%</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <Button className="w-full" onClick={() => navigate("/quiz")}>
                  Vérifier ma compatibilité
                </Button>
                <Button variant="outline" className="w-full" onClick={() => navigate("/universites")}>
                  Voir les universités
                </Button>
                <Button variant="ghost" className="w-full" onClick={() => navigate("/temoignages")}>
                  Lire des témoignages
                </Button>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-muted/30">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Besoin de conseils ?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Nos conseillers sont là pour t'aider dans ton orientation.
                </p>
                <Button variant="outline" size="sm">
                  Contacter un conseiller
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiliereDetail;
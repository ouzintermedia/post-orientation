import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Clock, Users, MapPin, Briefcase } from "lucide-react";
import { useState } from "react";

const FilieresSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [selectedSeries, setSelectedSeries] = useState("all");

  const filieres = [
    {
      id: 1,
      nom: "Informatique & Réseaux",
      duree: "3 ans",
      serie: "S",
      domaine: "Sciences & Technologies",
      universites: 8,
      debouches: ["Développeur", "Ingénieur réseaux", "Chef de projet IT"],
      description: "Formation complète en programmation, réseaux et systèmes d'information.",
      difficulte: "Moyenne",
      emploi: "Très bonne"
    },
    {
      id: 2,
      nom: "Médecine Générale",
      duree: "7 ans",
      serie: "S",
      domaine: "Santé & Médecine",
      universites: 3,
      debouches: ["Médecin", "Spécialiste", "Chercheur médical"],
      description: "Études médicales complètes pour devenir médecin au Sénégal.",
      difficulte: "Élevée",
      emploi: "Excellente"
    },
    {
      id: 3,
      nom: "Communication & Journalisme",
      duree: "3 ans",
      serie: "L",
      domaine: "Arts & Communication",
      universites: 5,
      debouches: ["Journaliste", "Attaché de presse", "Community manager"],
      description: "Formation aux métiers de la communication et des médias.",
      difficulte: "Moyenne",
      emploi: "Bonne"
    },
    {
      id: 4,
      nom: "Économie & Gestion",
      duree: "3 ans",
      serie: "ES",
      domaine: "Sciences Humaines",
      universites: 12,
      debouches: ["Économiste", "Gestionnaire", "Consultant"],
      description: "Études en économie, gestion d'entreprise et finance.",
      difficulte: "Moyenne",
      emploi: "Bonne"
    },
    {
      id: 5,
      nom: "Génie Civil",
      duree: "5 ans",
      serie: "S",
      domaine: "Sciences & Technologies",
      universites: 4,
      debouches: ["Ingénieur BTP", "Architecte", "Chef de chantier"],
      description: "Formation d'ingénieurs pour la construction et l'infrastructure.",
      difficulte: "Élevée",
      emploi: "Très bonne"
    },
    {
      id: 6,
      nom: "Pharmacie",
      duree: "6 ans",
      serie: "S",
      domaine: "Santé & Médecine",
      universites: 2,
      debouches: ["Pharmacien", "Industrie pharmaceutique", "Recherche"],
      description: "Études pharmaceutiques et sciences du médicament.",
      difficulte: "Élevée",
      emploi: "Très bonne"
    }
  ];

  const domains = ["Sciences & Technologies", "Santé & Médecine", "Arts & Communication", "Sciences Humaines"];
  const series = ["S", "ES", "L"];

  const filteredFilieres = filieres.filter(filiere => {
    const matchesSearch = filiere.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         filiere.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = selectedDomain === "all" || filiere.domaine === selectedDomain;
    const matchesSeries = selectedSeries === "all" || filiere.serie === selectedSeries;
    
    return matchesSearch && matchesDomain && matchesSeries;
  });

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
    <section id="filieres" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore les <span className="bg-gradient-secondary bg-clip-text text-transparent">filières</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvre toutes les formations disponibles au Sénégal avec leurs débouchés et perspectives d'emploi.
          </p>
        </div>

        {/* Filtres */}
        <div className="bg-card p-6 rounded-xl shadow-soft mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher une filière..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedDomain} onValueChange={setSelectedDomain}>
              <SelectTrigger>
                <SelectValue placeholder="Domaine" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les domaines</SelectItem>
                {domains.map(domain => (
                  <SelectItem key={domain} value={domain}>{domain}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedSeries} onValueChange={setSelectedSeries}>
              <SelectTrigger>
                <SelectValue placeholder="Série" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les séries</SelectItem>
                {series.map(serie => (
                  <SelectItem key={serie} value={serie}>Série {serie}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Résultats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFilieres.map(filiere => (
            <Card key={filiere.id} className="hover:shadow-medium transition-all duration-300 group">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {filiere.nom}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {filiere.description}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Série {filiere.serie}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Infos rapides */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{filiere.duree}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{filiere.universites} universités</span>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  <Badge className={getDifficultyColor(filiere.difficulte)}>
                    {filiere.difficulte}
                  </Badge>
                  <Badge className={getEmploiColor(filiere.emploi)}>
                    Emploi {filiere.emploi}
                  </Badge>
                </div>

                {/* Débouchés */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    Débouchés principaux
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {filiere.debouches.slice(0, 2).map((debouche, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {debouche}
                      </Badge>
                    ))}
                    {filiere.debouches.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{filiere.debouches.length - 2} autres
                      </Badge>
                    )}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                >
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFilieres.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Aucune filière ne correspond à tes critères de recherche.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setSelectedDomain("all");
                setSelectedSeries("all");
              }}
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-primary p-8 rounded-2xl shadow-medium">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Tu ne trouves pas ta filière ?
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Notre base contient plus de 50 filières. Utilise notre quiz pour découvrir celles qui te correspondent.
            </p>
            <Button variant="secondary" size="lg">
              Faire le quiz d'orientation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilieresSection;
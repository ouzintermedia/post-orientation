import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Quote, Play, Star, Search, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import student1 from "@/assets/student-portrait-1.jpg";
import student2 from "@/assets/student-portrait-2.jpg";
import student3 from "@/assets/student-portrait-3.jpg";

const Temoignages = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFiliere, setSelectedFiliere] = useState("all");

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
      video: false,
      temoignageComplet: "Mon parcours a commencé en 4ème quand j'ai découvert PostOrientation. À l'époque, je ne savais pas du tout ce que je voulais faire. Mes parents voulaient que je fasse médecine, mais moi j'aimais bien jouer avec l'ordinateur. Le quiz m'a révélé mes forces en logique et en résolution de problèmes. J'ai commencé à m'intéresser à la programmation, d'abord par curiosité, puis par passion. Aujourd'hui en 3ème année d'informatique à l'UCAD, je développe des applications qui aident les étudiants sénégalais. Mon stage chez une startup de Dakar s'est super bien passé et j'ai déjà des propositions d'emploi. L'informatique au Sénégal, c'est l'avenir !"
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
      video: true,
      temoignageComplet: "Depuis tout petit, je voulais être médecin. Mais entre vouloir et réussir, il y a un grand pas ! PostOrientation m'a permis de lire les témoignages d'étudiants en médecine qui expliquaient la réalité des études. C'est dur, très dur même. Les nuits blanches, la pression, les examens difficiles... Mais quand tu vois un patient guérir grâce à tes soins, tout prend son sens. Je suis maintenant en 5ème année et je me spécialise en pédiatrie. Mon rêve : ouvrir un cabinet dans mon village natal pour que les enfants n'aient plus à faire 100km pour voir un médecin."
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
      video: false,
      temoignageComplet: "Être la seule fille à vouloir faire du génie civil, ce n'était pas facile. Mes amies me disaient que c'était un métier d'homme, ma famille était inquiète. Mais sur PostOrientation, j'ai lu le témoignage d'Aminata, une ingénieure qui dirigeait des chantiers à Dakar. Ça m'a donné le courage de persévérer. Aujourd'hui à l'ESP, je suis dans le top 5 de ma promotion. J'ai fait mon stage sur le chantier du BRT et maintenant je travaille sur la conception du nouveau pont de Foundiougne. Les femmes ingénieurs, on existe et on réussit !"
    },
    {
      id: 4,
      nom: "Ibrahima Fall",
      age: 23,
      filiere: "Communication",
      universite: "UCAD",
      photo: student1,
      temoignage: "Passionné par les médias depuis toujours, j'hésitais entre journalisme et communication. PostOrientation m'a aidé à clarifier mes objectifs et je suis maintenant journaliste à la RTS.",
      conseil: "Suivez votre passion mais préparez-vous bien. Les stages sont essentiels dans notre domaine.",
      note: 5,
      video: true,
      temoignageComplet: "J'ai toujours aimé raconter des histoires et informer les gens. Mais je ne savais pas si je devais faire du journalisme pur ou de la communication d'entreprise. Les témoignages sur PostOrientation m'ont éclairé sur les différences entre ces métiers. J'ai choisi le journalisme et aujourd'hui je présente le journal de 20h à la RTS. Mon objectif : informer mes compatriotes sénégalais avec objectivité et leur donner les clés pour comprendre le monde."
    },
    {
      id: 5,
      nom: "Khadija Mbaye",
      age: 25,
      filiere: "Pharmacie",
      universite: "UCAD",
      photo: student2,
      temoignage: "Après mon bac S, j'hésitais entre médecine et pharmacie. Les témoignages m'ont aidée à comprendre que la pharmacie correspondait mieux à mon profil. Je ne regrette pas !",
      conseil: "Renseignez-vous bien sur les débouchés. La pharmacie offre plus d'opportunités qu'on ne le pense.",
      note: 4,
      video: false,
      temoignageComplet: "Avec un bon niveau en sciences, tout le monde me poussait vers médecine. Mais moi j'aimais aussi la chimie et la recherche. En lisant les témoignages sur PostOrientation, j'ai découvert que la pharmacie c'était aussi la recherche en laboratoire, l'industrie pharmaceutique, la pharmacovigilance... Aujourd'hui je travaille dans un laboratoire de recherche sur les médicaments traditionnels sénégalais. Je contribue à valoriser notre patrimoine thérapeutique !"
    },
    {
      id: 6,
      nom: "Ousmane Diop",
      age: 22,
      filiere: "Économie",
      universite: "UCAD",
      photo: student3,
      temoignage: "L'économie, c'était mon plan B après avoir raté médecine. Finalement, c'est devenu ma passion ! Je travaille maintenant dans une banque et j'adore analyser les marchés.",
      conseil: "Parfois ce qu'on pense être un échec nous mène vers notre vraie voie. Restez ouverts !",
      note: 5,
      video: false,
      temoignageComplet: "J'avoue, j'ai commencé l'économie un peu par dépit après avoir échoué en première année de médecine. Mais très vite, j'ai découvert que l'analyse économique, les marchés financiers, la macroéconomie... tout ça me passionnait ! Mes professeurs ont vu mon potentiel et m'ont encouragé. Aujourd'hui je suis analyste dans une grande banque de Dakar et je participe aux décisions d'investissement qui façonnent l'économie sénégalaise."
    }
  ];

  const filieres = [...new Set(temoignages.map(t => t.filiere))];

  const filteredTemoignages = temoignages.filter(temoignage => {
    const matchesSearch = temoignage.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         temoignage.filiere.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         temoignage.temoignage.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFiliere = selectedFiliere === "all" || temoignage.filiere === selectedFiliere;
    
    return matchesSearch && matchesFiliere;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Button>
          </div>
          <Button onClick={() => navigate("/partager-temoignage")}>
            <Plus className="h-4 w-4 mr-2" />
            Partager mon témoignage
          </Button>
        </div>

        {/* Titre */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Témoignages d'<span className="bg-gradient-hero bg-clip-text text-transparent">étudiants</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvre les parcours authentiques d'étudiants sénégalais qui ont trouvé leur voie grâce à une orientation réfléchie.
          </p>
        </div>

        {/* Filtres */}
        <div className="bg-card p-6 rounded-xl shadow-soft mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher par nom, filière..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedFiliere} onValueChange={setSelectedFiliere}>
              <SelectTrigger>
                <SelectValue placeholder="Filière" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les filières</SelectItem>
                {filieres.map(filiere => (
                  <SelectItem key={filiere} value={filiere}>{filiere}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Témoignages */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredTemoignages.map((temoignage) => (
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

        {filteredTemoignages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Aucun témoignage ne correspond à tes critères de recherche.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setSelectedFiliere("all");
              }}
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Tu veux partager ton expérience ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Aide les futurs étudiants en partageant ton parcours et tes conseils d'orientation.
              </p>
              <Button 
                className="bg-gradient-primary"
                onClick={() => navigate("/partager-temoignage")}
              >
                Partager mon témoignage
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Temoignages;
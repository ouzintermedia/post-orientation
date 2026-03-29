import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Send, Camera, FileText } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const PartagerTemoignage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: "",
    age: "",
    filiere: "",
    universite: "",
    niveau: "",
    temoignage: "",
    conseil: "",
    email: "",
    ville: "",
    accepteVideo: false,
    accepteContact: false
  });

  const filieres = [
    "Informatique", "Médecine", "Génie Civil", "Pharmacie", "Communication",
    "Économie", "Droit", "Architecture", "Psychologie", "Sciences Politiques"
  ];

  const universites = [
    "UCAD", "UGB", "UT", "UASZ", "UAM", "ESP", "ISEP", "ENSETP", "UCAO", "Autre"
  ];

  const niveaux = [
    "L1", "L2", "L3", "M1", "M2", "Doctorat", "Diplômé(e)"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation basique
    if (!formData.nom || !formData.filiere || !formData.temoignage || !formData.conseil) {
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    // Simuler l'envoi
    toast({
      title: "Témoignage envoyé !",
      description: "Merci pour ton partage. Nous allons le vérifier avant publication.",
    });

    // Redirection après 2 secondes
    setTimeout(() => {
      navigate("/temoignages");
    }, 2000);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

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

        {/* Titre */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Partage ton <span className="bg-gradient-hero bg-clip-text text-transparent">expérience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aide les futurs étudiants en partageant ton parcours et tes conseils d'orientation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Informations personnelles */}
            <Card>
              <CardHeader>
                <CardTitle>Tes informations</CardTitle>
                <CardDescription>
                  Ces informations nous aident à contextualiser ton témoignage.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nom">Prénom et nom *</Label>
                    <Input
                      id="nom"
                      value={formData.nom}
                      onChange={(e) => handleChange("nom", e.target.value)}
                      placeholder="Ex: Fatou Diallo"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">Âge</Label>
                    <Input
                      id="age"
                      type="number"
                      min="16"
                      max="35"
                      value={formData.age}
                      onChange={(e) => handleChange("age", e.target.value)}
                      placeholder="22"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="filiere">Filière d'études *</Label>
                    <Select 
                      value={formData.filiere} 
                      onValueChange={(value) => handleChange("filiere", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choisir ta filière" />
                      </SelectTrigger>
                      <SelectContent>
                        {filieres.map(filiere => (
                          <SelectItem key={filiere} value={filiere}>{filiere}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="universite">Université/École</Label>
                    <Select 
                      value={formData.universite} 
                      onValueChange={(value) => handleChange("universite", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Ton établissement" />
                      </SelectTrigger>
                      <SelectContent>
                        {universites.map(universite => (
                          <SelectItem key={universite} value={universite}>{universite}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="niveau">Niveau d'études</Label>
                    <Select 
                      value={formData.niveau} 
                      onValueChange={(value) => handleChange("niveau", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Ton niveau" />
                      </SelectTrigger>
                      <SelectContent>
                        {niveaux.map(niveau => (
                          <SelectItem key={niveau} value={niveau}>{niveau}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="ville">Ville</Label>
                    <Input
                      id="ville"
                      value={formData.ville}
                      onChange={(e) => handleChange("ville", e.target.value)}
                      placeholder="Ex: Dakar"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email de contact (optionnel)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="ton.email@exemple.com"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Témoignage */}
            <Card>
              <CardHeader>
                <CardTitle>Ton témoignage</CardTitle>
                <CardDescription>
                  Raconte ton parcours d'orientation et d'études de manière authentique.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="temoignage">Ton histoire *</Label>
                  <Textarea
                    id="temoignage"
                    value={formData.temoignage}
                    onChange={(e) => handleChange("temoignage", e.target.value)}
                    placeholder="Raconte comment tu as choisi ta filière, les difficultés rencontrées, tes réussites, ce qui t'a motivé... (minimum 200 caractères)"
                    className="min-h-[150px]"
                    required
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    {formData.temoignage.length} caractères
                  </p>
                </div>

                <div>
                  <Label htmlFor="conseil">Ton conseil principal *</Label>
                  <Textarea
                    id="conseil"
                    value={formData.conseil}
                    onChange={(e) => handleChange("conseil", e.target.value)}
                    placeholder="Quel conseil donnerais-tu à un élève qui hésite sur son orientation ?"
                    className="min-h-[100px]"
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Options */}
            <Card>
              <CardHeader>
                <CardTitle>Options supplémentaires</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="video"
                    checked={formData.accepteVideo}
                    onCheckedChange={(checked) => handleChange("accepteVideo", checked === true)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="video" className="flex items-center cursor-pointer">
                      <Camera className="h-4 w-4 mr-2" />
                      J'accepte d'être contacté(e) pour un témoignage vidéo
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Les témoignages vidéo ont plus d'impact sur les futurs étudiants.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="contact"
                    checked={formData.accepteContact}
                    onCheckedChange={(checked) => handleChange("accepteContact", checked === true)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="contact" className="cursor-pointer">
                      J'accepte d'être contacté(e) par d'autres étudiants pour des questions
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Optionnel : deviens mentor pour d'autres étudiants.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Informations importantes */}
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">Informations importantes</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Ton témoignage sera vérifié avant publication</li>
                      <li>• Nous nous réservons le droit de modifier le contenu pour clarté</li>
                      <li>• Tu peux demander la suppression de ton témoignage à tout moment</li>
                      <li>• Tes coordonnées ne seront jamais partagées sans ton accord</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => navigate("/temoignages")}
              >
                Annuler
              </Button>
              <Button type="submit" className="bg-gradient-primary">
                <Send className="h-4 w-4 mr-2" />
                Envoyer mon témoignage
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartagerTemoignage;
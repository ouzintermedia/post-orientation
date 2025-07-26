import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, MapPin, Mail, Globe, GraduationCap, DollarSign } from 'lucide-react';
import { universites } from '@/data/mockData';

export default function Universites() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedVille, setSelectedVille] = useState('');

  const filteredUniversites = universites.filter(universite => {
    const matchesSearch = universite.nom.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || universite.type === selectedType;
    const matchesVille = !selectedVille || universite.ville === selectedVille;

    return matchesSearch && matchesType && matchesVille;
  });

  const villes = [...new Set(universites.map(u => u.ville))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/dashboard">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-2xl font-bold text-primary">Universités du Sénégal</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Filtres */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Rechercher une université</CardTitle>
            <CardDescription>
              Trouvez l'université qui correspond à vos critères
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Nom de l'université..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Type d'établissement" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Tous les types</SelectItem>
                  <SelectItem value="Publique">Publique</SelectItem>
                  <SelectItem value="Privée">Privée</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedVille} onValueChange={setSelectedVille}>
                <SelectTrigger>
                  <SelectValue placeholder="Ville" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Toutes les villes</SelectItem>
                  {villes.map(ville => (
                    <SelectItem key={ville} value={ville}>{ville}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Résultats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredUniversites.map(universite => (
            <Card key={universite.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{universite.nom}</CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{universite.ville}</span>
                      <Badge variant={universite.type === 'Publique' ? 'default' : 'secondary'}>
                        {universite.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2 flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Filières disponibles:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {universite.filieres.map(filiere => (
                      <Badge key={filiere} variant="outline" className="text-xs">
                        {filiere}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span>{universite.frais}</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${universite.contact}`} className="text-primary hover:underline">
                      {universite.contact}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <a href={`https://${universite.site}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {universite.site}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredUniversites.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground mb-4">
                Aucune université ne correspond à vos critères de recherche.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedType('');
                  setSelectedVille('');
                }}
              >
                Réinitialiser les filtres
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
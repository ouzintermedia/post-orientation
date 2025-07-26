import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Heart, HeartOff, MapPin, Clock, Briefcase, TrendingUp } from 'lucide-react';
import { filieres } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

export default function Filieres() {
  const { user, addFavori, removeFavori } = useAuth();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedSerie, setSelectedSerie] = useState('');

  const filteredFilieres = filieres.filter(filiere => {
    const matchesSearch = filiere.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         filiere.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = selectedDomain === 'all' || !selectedDomain || filiere.domaine === selectedDomain;
    const matchesSerie = selectedSerie === 'all' || !selectedSerie || filiere.seriesRecommandees.includes(selectedSerie as any);
    const matchesLevel = filiere.niveau.includes(user?.niveau || '4ème');

    return matchesSearch && matchesDomain && matchesSerie && matchesLevel;
  });

  const domains = [...new Set(filieres.map(f => f.domaine))];

  const handleFavoriteToggle = (filiereId: string) => {
    if (!user) return;
    
    if (user.favoris.includes(filiereId)) {
      removeFavori(filiereId);
      toast({
        title: "Retiré des favoris",
        description: "Cette filière a été retirée de vos favoris.",
      });
    } else {
      addFavori(filiereId);
      toast({
        title: "Ajouté aux favoris",
        description: "Cette filière a été ajoutée à vos favoris.",
      });
    }
  };

  const getEmploiabiliteColor = (emploiabilite: number) => {
    if (emploiabilite >= 85) return 'text-green-600';
    if (emploiabilite >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

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
            <h1 className="text-2xl font-bold text-primary">Explorer les Filières</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Filtres */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filtres de recherche</CardTitle>
            <CardDescription>
              Trouvez la filière qui vous correspond
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Rechercher une filière..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedDomain} onValueChange={setSelectedDomain} defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Tous les domaines" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les domaines</SelectItem>
                  {domains.map(domain => (
                    <SelectItem key={domain} value={domain}>{domain}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedSerie} onValueChange={setSelectedSerie} defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Toutes les séries" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les séries</SelectItem>
                  <SelectItem value="S">Série S</SelectItem>
                  <SelectItem value="L">Série L</SelectItem>
                  <SelectItem value="ES">Série ES</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Résultats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFilieres.map(filiere => (
            <Card key={filiere.id} className="relative group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{filiere.nom}</CardTitle>
                    <Badge variant="secondary" className="mb-2">{filiere.domaine}</Badge>
                  </div>
                  {user && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleFavoriteToggle(filiere.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {user.favoris.includes(filiere.id) ? (
                        <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                      ) : (
                        <HeartOff className="h-4 w-4" />
                      )}
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{filiere.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Durée: {filiere.duree}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className={`h-4 w-4 ${getEmploiabiliteColor(filiere.emploiabilite)}`} />
                    <span>Emploiabilité: {filiere.emploiabilite}%</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span>{filiere.salaireMoyen}</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Séries recommandées:</p>
                  <div className="flex gap-1">
                    {filiere.seriesRecommandees.map(serie => (
                      <Badge key={serie} variant="outline" className="text-xs">
                        {serie}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Débouchés principaux:</p>
                  <div className="space-y-1">
                    {filiere.debouches.slice(0, 3).map((debouche, index) => (
                      <p key={index} className="text-xs text-muted-foreground">• {debouche}</p>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Universités:</p>
                  <div className="flex flex-wrap gap-1">
                    {filiere.universites.map(uni => (
                      <Badge key={uni} variant="outline" className="text-xs">
                        {uni}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFilieres.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground mb-4">
                Aucune filière ne correspond à vos critères de recherche.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDomain('all');
                  setSelectedSerie('all');
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
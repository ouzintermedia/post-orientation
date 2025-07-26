import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, HeartOff, Clock, Briefcase, TrendingUp } from 'lucide-react';
import { filieres } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

export default function Favoris() {
  const { user, removeFavori } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  if (!user) {
    navigate('/login');
    return null;
  }

  const favoritesFilieres = filieres.filter(filiere => 
    user.favoris.includes(filiere.id)
  );

  const handleRemoveFavorite = (filiereId: string) => {
    removeFavori(filiereId);
    toast({
      title: "Retiré des favoris",
      description: "Cette filière a été retirée de vos favoris.",
    });
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
            <h1 className="text-2xl font-bold text-primary">Mes Filières Favorites</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {favoritesFilieres.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-xl font-semibold mb-2">Aucune filière favorite</h2>
              <p className="text-muted-foreground mb-6">
                Vous n'avez pas encore ajouté de filières à vos favoris.
              </p>
              <Button asChild>
                <Link to="/filieres">Explorer les filières</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-muted-foreground">
                Vous avez {favoritesFilieres.length} filière{favoritesFilieres.length > 1 ? 's' : ''} en favoris
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoritesFilieres.map(filiere => (
                <Card key={filiere.id} className="relative group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{filiere.nom}</CardTitle>
                        <Badge variant="secondary" className="mb-2">{filiere.domaine}</Badge>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveFavorite(filiere.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Heart className="h-4 w-4 fill-current" />
                      </Button>
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

            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link to="/filieres">Explorer plus de filières</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
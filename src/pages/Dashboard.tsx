import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Trophy, Heart, Star, User, LogOut } from 'lucide-react';
import { badges } from '@/data/mockData';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const progressValue = Math.min((user.quizCompletes.length / 5) * 100, 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            PostOrientation
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">
              Bonjour, {user.prenom} !
            </span>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profil utilisateur */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Mon Profil
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-medium">{user.prenom} {user.nom}</p>
                <p className="text-muted-foreground">{user.email}</p>
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary">{user.niveau}</Badge>
                {user.serie && <Badge variant="outline">{user.serie}</Badge>}
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Région: {user.region}</p>
              </div>
              <Button asChild className="w-full">
                <Link to="/profile">Modifier mon profil</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Progression */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Ma Progression
              </CardTitle>
              <CardDescription>
                Continue ton parcours d'orientation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Quiz complétés</span>
                  <span>{user.quizCompletes.length}/5</span>
                </div>
                <Progress value={progressValue} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Heart className="h-8 w-8 mx-auto mb-2 text-red-500" />
                    <p className="font-semibold">{user.favoris.length}</p>
                    <p className="text-sm text-muted-foreground">Filières favorites</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Star className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                    <p className="font-semibold">{user.badges.length}</p>
                    <p className="text-sm text-muted-foreground">Badges obtenus</p>
                  </CardContent>
                </Card>
              </div>

              {/* Actions rapides */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button asChild>
                  <Link to="/quiz">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Passer un quiz
                  </Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link to="/filieres">Explorer les filières</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Badges */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Mes Badges</CardTitle>
              <CardDescription>
                Débloquez des badges en explorant la plateforme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {badges.map(badge => {
                  const isUnlocked = user.badges.includes(badge.id);
                  return (
                    <div
                      key={badge.id}
                      className={`p-4 rounded-lg border text-center transition-all ${
                        isUnlocked
                          ? 'bg-primary/10 border-primary'
                          : 'bg-muted/50 border-muted opacity-50'
                      }`}
                    >
                      <div className="text-2xl mb-2">{badge.icon}</div>
                      <p className="font-medium text-sm">{badge.nom}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {badge.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Mes favoris */}
          {user.favoris.length > 0 && (
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Mes Filières Favorites
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {user.favoris.slice(0, 3).map(filiereId => (
                    <Card key={filiereId}>
                      <CardContent className="p-4">
                        <p className="font-medium">Filière #{filiereId}</p>
                        <p className="text-sm text-muted-foreground">
                          Cliquez pour voir les détails
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                {user.favoris.length > 3 && (
                  <Button variant="outline" className="mt-4" asChild>
                    <Link to="/favoris">Voir tous mes favoris</Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
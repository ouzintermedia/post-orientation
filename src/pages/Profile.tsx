import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Profile() {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    nom: user?.nom || '',
    prenom: user?.prenom || '',
    email: user?.email || '',
    niveau: user?.niveau || '4ème',
    serie: (user?.serie || '') as 'S' | 'L' | 'ES' | '',
    region: user?.region || ''
  });

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updates = {
      ...formData,
      serie: formData.serie === '' ? undefined : formData.serie as 'S' | 'L' | 'ES'
    };
    updateProfile(updates);
    toast({
      title: "Profil mis à jour",
      description: "Vos informations ont été sauvegardées avec succès.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const regions = [
    'Dakar', 'Thiès', 'Saint-Louis', 'Diourbel', 'Louga', 
    'Fatick', 'Kaolack', 'Kolda', 'Ziguinchor', 'Tambacounda',
    'Kaffrine', 'Kédougou', 'Matam', 'Sédhiou'
  ];

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
            <h1 className="text-2xl font-bold text-primary">Mon Profil</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Informations personnelles
              </CardTitle>
              <CardDescription>
                Modifiez vos informations de profil
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="prenom">Prénom</Label>
                    <Input
                      id="prenom"
                      value={formData.prenom}
                      onChange={(e) => handleChange('prenom', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom</Label>
                    <Input
                      id="nom"
                      value={formData.nom}
                      onChange={(e) => handleChange('nom', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="niveau">Niveau scolaire</Label>
                    <Select value={formData.niveau} onValueChange={(value) => handleChange('niveau', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4ème">4ème</SelectItem>
                        <SelectItem value="3ème">3ème</SelectItem>
                        <SelectItem value="2nde">2nde</SelectItem>
                        <SelectItem value="1ère">1ère</SelectItem>
                        <SelectItem value="Terminale">Terminale</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {(formData.niveau === '1ère' || formData.niveau === 'Terminale') && (
                    <div className="space-y-2">
                      <Label htmlFor="serie">Série</Label>
                      <Select value={formData.serie} onValueChange={(value) => handleChange('serie', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choisir une série" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="S">S - Scientifique</SelectItem>
                          <SelectItem value="L">L - Littéraire</SelectItem>
                          <SelectItem value="ES">ES - Économique et Social</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="region">Région</Label>
                  <Select value={formData.region} onValueChange={(value) => handleChange('region', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {regions.map(region => (
                        <SelectItem key={region} value={region}>{region}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full">
                  <Save className="h-4 w-4 mr-2" />
                  Sauvegarder
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
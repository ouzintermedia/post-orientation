import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, RefreshCw, Award } from 'lucide-react';
import { quizParNiveau } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

export default function Quiz() {
  const { user, addQuizComplete, addBadge } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  if (!user) {
    navigate('/login');
    return null;
  }

  const quizData = quizParNiveau[user.niveau];
  const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      const quizId = `quiz-${user.niveau}`;
      addQuizComplete(quizId);
      
      // Ajouter badge si premier quiz
      if (user.quizCompletes.length === 0) {
        addBadge('explorateur');
        toast({
          title: "Badge débloqué ! 🎉",
          description: "Félicitations ! Tu as obtenu le badge Explorateur.",
        });
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const getRecommendations = () => {
    // Logique simplifiée de recommandation basée sur les réponses
    const dominantAnswer = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);

    const maxAnswer = Object.entries(dominantAnswer).reduce((a, b) => 
      dominantAnswer[a[0]] > dominantAnswer[b[0]] ? a : b
    )[0];

    const recommendations = {
      '0': ['Littérature', 'Droit', 'Lettres Modernes'],
      '1': ['Sciences', 'Médecine', 'Génie Civil'],
      '2': ['Psychologie', 'Travail Social', 'Éducation'],
      '3': ['Architecture', 'Art', 'Design']
    };

    return recommendations[maxAnswer] || ['Sciences', 'Lettres', 'Économie'];
  };

  if (showResults) {
    const recommendations = getRecommendations();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <header className="border-b bg-background/95 backdrop-blur">
          <div className="container mx-auto px-4 py-4 flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/dashboard">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-xl font-semibold">Quiz d'Orientation</h1>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Quiz Terminé !</CardTitle>
              <CardDescription>
                Voici tes recommandations personnalisées pour ton niveau {user.niveau}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Domaines recommandés :</h3>
                <div className="flex flex-wrap gap-2">
                  {recommendations.map((domain, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {domain}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Conseils pour ton niveau :</h4>
                <p className="text-sm text-muted-foreground">
                  {user.niveau === '4ème' && "Continue à explorer tes centres d'intérêt ! C'est le moment parfait pour découvrir de nouveaux domaines."}
                  {user.niveau === '3ème' && "Commence à réfléchir aux séries qui t'intéressent pour la seconde. Explore les options qui s'offrent à toi."}
                  {user.niveau === '2nde' && "C'est le moment de choisir ta série ! Assure-toi que ton choix correspond à tes objectifs post-bac."}
                  {user.niveau === '1ère' && "Affine tes choix de filières et commence à te renseigner sur les universités qui t'intéressent."}
                  {user.niveau === 'Terminale' && "Prépare tes candidatures ! C'est l'année de la décision finale pour ton orientation post-bac."}
                </p>
              </div>

              <div className="flex gap-3">
                <Button onClick={resetQuiz} variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refaire le quiz
                </Button>
                <Button asChild>
                  <Link to="/filieres">Explorer les filières</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <header className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/dashboard">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div className="flex-1">
            <h1 className="text-xl font-semibold">{quizData.titre}</h1>
            <p className="text-sm text-muted-foreground">{quizData.description}</p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <Badge variant="outline">Niveau {user.niveau}</Badge>
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} sur {quizData.questions.length}
              </span>
            </div>
            <Progress value={progress} className="mt-2" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">
                {quizData.questions[currentQuestion].question}
              </h2>
              <div className="space-y-3">
                {quizData.questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full text-left justify-start h-auto p-4 hover:bg-primary/5"
                    onClick={() => handleAnswer(index)}
                  >
                    <span className="text-sm">{option}</span>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
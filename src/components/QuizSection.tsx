import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Clock, Star, ArrowRight } from "lucide-react";
import { useState } from "react";

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "Qu'est-ce qui t'intéresse le plus ?",
      options: [
        "Résoudre des problèmes complexes",
        "Aider et soigner les autres",
        "Créer et innover",
        "Communiquer et convaincre"
      ]
    },
    {
      question: "Dans quel environnement préfères-tu travailler ?",
      options: [
        "Bureau avec ordinateur",
        "Terrain et extérieur",
        "Laboratoire ou atelier",
        "Contact avec le public"
      ]
    },
    {
      question: "Quelle matière préfères-tu au lycée ?",
      options: [
        "Mathématiques/Physique",
        "Sciences de la Vie et de la Terre",
        "Français/Philosophie",
        "Histoire-Géographie"
      ]
    }
  ];

  const domaines = [
    { name: "Sciences & Technologies", color: "text-primary", bg: "bg-primary/10" },
    { name: "Santé & Médecine", color: "text-secondary", bg: "bg-secondary/10" },
    { name: "Arts & Communication", color: "text-accent", bg: "bg-accent/10" },
    { name: "Sciences Humaines", color: "text-purple-600", bg: "bg-purple-100" }
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const getRecommendedDomain = () => {
    const counts = [0, 0, 0, 0];
    answers.forEach(answer => counts[answer]++);
    return domaines[counts.indexOf(Math.max(...counts))];
  };

  return (
    <section id="quiz" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Découvre tes <span className="bg-gradient-primary bg-clip-text text-transparent">centres d'intérêt</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un quiz rapide de 3 questions pour t'orienter vers les domaines qui te correspondent le mieux.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!showResults ? (
            <Card className="shadow-medium">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Brain className="h-6 w-6 text-primary" />
                    <CardTitle>Quiz d'orientation</CardTitle>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{currentQuestion + 1}/{questions.length}</span>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <h3 className="text-xl font-semibold">
                  {questions[currentQuestion].question}
                </h3>
                <div className="grid gap-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="p-4 h-auto text-left justify-start hover:border-primary hover:shadow-soft transition-all"
                      onClick={() => handleAnswer(index)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-medium">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-primary p-3 rounded-full">
                    <Star className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-2xl">Résultat de ton quiz</CardTitle>
                <CardDescription>
                  Voici le domaine qui correspond le mieux à tes réponses
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full ${getRecommendedDomain().bg}`}>
                  <span className={`text-lg font-semibold ${getRecommendedDomain().color}`}>
                    {getRecommendedDomain().name}
                  </span>
                </div>
                
                <p className="text-muted-foreground">
                  Parfait ! Ce domaine offre de nombreuses opportunités au Sénégal. 
                  Explore maintenant les filières disponibles dans cette spécialité.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-primary">
                    Voir les filières recommandées
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" onClick={resetQuiz}>
                    Refaire le quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Points clés du quiz */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Rapide</h4>
            <p className="text-sm text-muted-foreground">Seulement 3 questions, 2 minutes maximum</p>
          </div>
          <div className="text-center">
            <div className="bg-secondary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Brain className="h-6 w-6 text-secondary" />
            </div>
            <h4 className="font-semibold mb-2">Intelligent</h4>
            <p className="text-sm text-muted-foreground">Basé sur tes préférences et ton profil</p>
          </div>
          <div className="text-center">
            <div className="bg-accent/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Star className="h-6 w-6 text-accent" />
            </div>
            <h4 className="font-semibold mb-2">Personnalisé</h4>
            <p className="text-sm text-muted-foreground">Recommandations adaptées au Sénégal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
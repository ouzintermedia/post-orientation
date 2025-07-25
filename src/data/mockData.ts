export const filieres = [
  {
    id: '1',
    nom: 'Médecine',
    domaine: 'Santé',
    duree: '7 ans',
    seriesRecommandees: ['S'],
    prerequis: ['Maths', 'Physique-Chimie', 'SVT'],
    debouches: ['Médecin généraliste', 'Spécialiste', 'Chirurgien', 'Chercheur médical'],
    universites: ['UCAD', 'UGB', 'UASZ'],
    description: 'Formation complète pour devenir médecin, alliant théorie et pratique clinique.',
    salaireMoyen: '800,000 - 2,000,000 FCFA',
    emploiabilite: 95,
    niveau: ['1ère', 'Terminale']
  },
  {
    id: '2',
    nom: 'Génie Informatique',
    domaine: 'Technologie',
    duree: '5 ans',
    seriesRecommandees: ['S'],
    prerequis: ['Maths', 'Physique', 'Logique'],
    debouches: ['Développeur', 'Ingénieur logiciel', 'Architecte système', 'Chef de projet IT'],
    universites: ['ESP', 'UCAD', 'UVS'],
    description: 'Formation en développement logiciel et systèmes informatiques.',
    salaireMoyen: '400,000 - 1,200,000 FCFA',
    emploiabilite: 90,
    niveau: ['3ème', '2nde', '1ère', 'Terminale']
  },
  {
    id: '3',
    nom: 'Droit',
    domaine: 'Sciences Juridiques',
    duree: '4 ans',
    seriesRecommandees: ['L', 'ES'],
    prerequis: ['Français', 'Histoire', 'Philosophie'],
    debouches: ['Avocat', 'Magistrat', 'Juriste d\'entreprise', 'Notaire'],
    universites: ['UCAD', 'UGB', 'UASZ'],
    description: 'Étude du système juridique et formation à la pratique du droit.',
    salaireMoyen: '300,000 - 1,000,000 FCFA',
    emploiabilite: 75,
    niveau: ['2nde', '1ère', 'Terminale']
  },
  {
    id: '4',
    nom: 'Économie-Gestion',
    domaine: 'Sciences Économiques',
    duree: '3 ans',
    seriesRecommandees: ['ES', 'S'],
    prerequis: ['Maths', 'Économie', 'Gestion'],
    debouches: ['Consultant', 'Analyste financier', 'Gestionnaire', 'Entrepreneur'],
    universites: ['UCAD', 'ISM', 'UVS'],
    description: 'Formation en gestion d\'entreprise et analyse économique.',
    salaireMoyen: '250,000 - 800,000 FCFA',
    emploiabilite: 80,
    niveau: ['2nde', '1ère', 'Terminale']
  },
  {
    id: '5',
    nom: 'Lettres Modernes',
    domaine: 'Littérature',
    duree: '3 ans',
    seriesRecommandees: ['L'],
    prerequis: ['Français', 'Littérature', 'Philosophie'],
    debouches: ['Professeur', 'Journaliste', 'Écrivain', 'Traducteur'],
    universites: ['UCAD', 'UGB'],
    description: 'Étude approfondie de la littérature et des langues.',
    salaireMoyen: '200,000 - 500,000 FCFA',
    emploiabilite: 65,
    niveau: ['4ème', '3ème', '2nde', '1ère', 'Terminale']
  },
  {
    id: '6',
    nom: 'Architecture',
    domaine: 'Art et Design',
    duree: '6 ans',
    seriesRecommandees: ['S'],
    prerequis: ['Maths', 'Physique', 'Dessin'],
    debouches: ['Architecte', 'Urbaniste', 'Designer', 'Chef de projet BTP'],
    universites: ['ENAM', 'ISM'],
    description: 'Conception et réalisation de projets architecturaux.',
    salaireMoyen: '400,000 - 1,500,000 FCFA',
    emploiabilite: 85,
    niveau: ['1ère', 'Terminale']
  },
  {
    id: '7',
    nom: 'Génie Civil',
    domaine: 'Ingénierie',
    duree: '5 ans',
    seriesRecommandees: ['S'],
    prerequis: ['Maths', 'Physique', 'Technologie'],
    debouches: ['Ingénieur BTP', 'Chef de chantier', 'Consultant', 'Entrepreneur'],
    universites: ['ESP', 'ENAM'],
    description: 'Conception et construction d\'infrastructures.',
    salaireMoyen: '500,000 - 1,500,000 FCFA',
    emploiabilite: 90,
    niveau: ['2nde', '1ère', 'Terminale']
  },
  {
    id: '8',
    nom: 'Psychologie',
    domaine: 'Sciences Humaines',
    duree: '5 ans',
    seriesRecommandees: ['L', 'ES'],
    prerequis: ['Français', 'Philosophie', 'SVT'],
    debouches: ['Psychologue clinicien', 'Conseiller', 'Thérapeute', 'Chercheur'],
    universites: ['UCAD', 'UGB'],
    description: 'Étude du comportement humain et des processus mentaux.',
    salaireMoyen: '300,000 - 700,000 FCFA',
    emploiabilite: 70,
    niveau: ['3ème', '2nde', '1ère', 'Terminale']
  }
];

export const universites = [
  {
    id: '1',
    nom: 'Université Cheikh Anta Diop (UCAD)',
    ville: 'Dakar',
    type: 'Publique',
    filieres: ['Médecine', 'Droit', 'Lettres', 'Sciences', 'Économie'],
    frais: 'Publique - Frais réduits',
    contact: 'contact@ucad.edu.sn',
    site: 'www.ucad.edu.sn'
  },
  {
    id: '2',
    nom: 'Université Gaston Berger (UGB)',
    ville: 'Saint-Louis',
    type: 'Publique',
    filieres: ['Sciences', 'Lettres', 'Droit', 'Économie'],
    frais: 'Publique - Frais réduits',
    contact: 'info@ugb.edu.sn',
    site: 'www.ugb.edu.sn'
  },
  {
    id: '3',
    nom: 'École Supérieure Polytechnique (ESP)',
    ville: 'Dakar',
    type: 'Publique',
    filieres: ['Génie Informatique', 'Génie Civil', 'Télécommunications'],
    frais: 'Publique - Frais réduits',
    contact: 'esp@ucad.edu.sn',
    site: 'www.esp.sn'
  },
  {
    id: '4',
    nom: 'Institut Supérieur de Management (ISM)',
    ville: 'Dakar',
    type: 'Privée',
    filieres: ['Management', 'Finance', 'Marketing', 'Architecture'],
    frais: '1,500,000 - 3,000,000 FCFA/an',
    contact: 'info@ism.edu.sn',
    site: 'www.ism.edu.sn'
  }
];

export const temoignages = [
  {
    id: '1',
    nom: 'Fatou Sall',
    filiere: 'Médecine',
    niveau: 'Terminale S',
    universite: 'UCAD',
    photo: '/src/assets/student-portrait-1.jpg',
    temoignage: 'Grâce à SafariFilière, j\'ai découvert ma passion pour la médecine dès la 3ème. Les quiz m\'ont aidée à confirmer mon choix.',
    conseil: 'Commencez à vous renseigner tôt, n\'attendez pas la Terminale !',
    dateObtentionBac: '2023',
    parcours: 'Bac S mention Bien → 1ère année médecine → Actuellement en 2ème année'
  },
  {
    id: '2',
    nom: 'Moussa Diop',
    filiere: 'Génie Informatique',
    niveau: 'Terminale S',
    universite: 'ESP',
    photo: '/src/assets/student-portrait-2.jpg',
    temoignage: 'Le quiz d\'orientation m\'a ouvert les yeux sur les métiers du numérique. Aujourd\'hui je développe des apps !',
    conseil: 'N\'ayez pas peur des filières techniques, elles offrent de belles opportunités.',
    dateObtentionBac: '2022',
    parcours: 'Bac S → ESP → Stage chez une startup → Développeur junior'
  },
  {
    id: '3',
    nom: 'Aïssatou Ba',
    filiere: 'Droit',
    niveau: 'Terminale L',
    universite: 'UCAD',
    photo: '/src/assets/student-portrait-3.jpg',
    temoignage: 'SafariFilière m\'a permis de découvrir les débouchés en droit. Je prépare maintenant le barreau !',
    conseil: 'Informez-vous sur les débouchés concrets de chaque filière.',
    dateObtentionBac: '2021',
    parcours: 'Bac L → Licence Droit → Master → Préparation barreau'
  }
];

export const badges = [
  { id: 'explorateur', nom: 'Explorateur', description: 'A exploré 5 filières différentes', icon: '🗺️' },
  { id: 'quiz-master', nom: 'Quiz Master', description: 'A complété tous les quiz d\'orientation', icon: '🧠' },
  { id: 'planificateur', nom: 'Planificateur', description: 'A créé son parcours d\'orientation', icon: '📋' },
  { id: 'curieux', nom: 'Curieux', description: 'A consulté 10 témoignages', icon: '👀' },
  { id: 'decideur', nom: 'Décideur', description: 'A ajouté 3 filières en favoris', icon: '⭐' }
];

export const quizParNiveau = {
  '4ème': {
    titre: 'Découverte des centres d\'intérêt',
    description: 'Explorons tes goûts et passions pour t\'orienter',
    questions: [
      {
        question: 'Quelle activité préfères-tu pendant ton temps libre ?',
        options: [
          'Lire des livres ou écrire',
          'Résoudre des problèmes de maths',
          'Aider les autres',
          'Créer ou dessiner'
        ]
      },
      {
        question: 'Dans quel environnement te sens-tu le mieux ?',
        options: [
          'Dans une bibliothèque calme',
          'Dans un laboratoire',
          'Au contact des gens',
          'Dans un atelier créatif'
        ]
      }
    ]
  },
  '3ème': {
    titre: 'Exploration des domaines',
    description: 'Approfondissons tes préférences professionnelles',
    questions: [
      {
        question: 'Quel type de problème aimerais-tu résoudre ?',
        options: [
          'Les injustices sociales',
          'Les maladies et problèmes de santé',
          'Les défis technologiques',
          'Les problèmes environnementaux'
        ]
      },
      {
        question: 'Comment aimerais-tu impacter la société ?',
        options: [
          'En défendant les droits',
          'En soignant les gens',
          'En innovant technologiquement',
          'En protégeant l\'environnement'
        ]
      }
    ]
  },
  '2nde': {
    titre: 'Choix de série',
    description: 'Déterminons la série qui te convient le mieux',
    questions: [
      {
        question: 'Quelle matière te passionne le plus ?',
        options: [
          'Mathématiques et Sciences',
          'Littérature et Langues',
          'Économie et Société',
          'Histoire et Géographie'
        ]
      },
      {
        question: 'Quel est ton style d\'apprentissage ?',
        options: [
          'Logique et expérimentation',
          'Analyse et réflexion',
          'Débat et argumentation',
          'Recherche et synthèse'
        ]
      }
    ]
  },
  '1ère': {
    titre: 'Affinement des choix',
    description: 'Précisons tes objectifs post-bac',
    questions: [
      {
        question: 'Quelle durée d\'études t\'attire ?',
        options: [
          'Études courtes (2-3 ans)',
          'Études moyennes (4-5 ans)',
          'Études longues (6+ ans)',
          'Formation professionnelle'
        ]
      },
      {
        question: 'Quel type d\'emploi vises-tu ?',
        options: [
          'Salarié dans une grande entreprise',
          'Fonctionnaire',
          'Entrepreneur/Indépendant',
          'Professionnel libéral'
        ]
      }
    ]
  },
  'Terminale': {
    titre: 'Décision finale',
    description: 'Finalisons ton choix d\'orientation',
    questions: [
      {
        question: 'Quel critère est le plus important pour toi ?',
        options: [
          'La passion pour le domaine',
          'Les perspectives d\'emploi',
          'Le niveau de salaire',
          'L\'impact social'
        ]
      },
      {
        question: 'Es-tu prêt(e) à étudier loin de ta région ?',
        options: [
          'Oui, partout au Sénégal',
          'Oui, mais seulement dans certaines villes',
          'Non, je préfère rester dans ma région',
          'Je suis ouvert(e) à l\'étranger'
        ]
      }
    ]
  }
};
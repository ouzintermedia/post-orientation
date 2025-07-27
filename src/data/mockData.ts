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
    site: 'www.ucad.edu.sn',
    image: 'photo-1496307653780-42ee777d4833'
  },
  {
    id: '2',
    nom: 'Université Gaston Berger (UGB)',
    ville: 'Saint-Louis',
    type: 'Publique',
    filieres: ['Sciences', 'Lettres', 'Droit', 'Économie'],
    frais: 'Publique - Frais réduits',
    contact: 'info@ugb.edu.sn',
    site: 'www.ugb.edu.sn',
    image: 'photo-1487337153520-7082a56a81f4'
  },
  {
    id: '3',
    nom: 'École Supérieure Polytechnique (ESP)',
    ville: 'Dakar',
    type: 'Publique',
    filieres: ['Génie Informatique', 'Génie Civil', 'Télécommunications'],
    frais: 'Publique - Frais réduits',
    contact: 'esp@ucad.edu.sn',
    site: 'www.esp.sn',
    image: 'photo-1488590528505-98d2b5aba04b'
  },
  {
    id: '4',
    nom: 'Institut Supérieur de Management (ISM)',
    ville: 'Dakar',
    type: 'Privée',
    filieres: ['Management', 'Finance', 'Marketing', 'Architecture'],
    frais: '1,500,000 - 3,000,000 FCFA/an',
    contact: 'info@ism.edu.sn',
    site: 'www.ism.edu.sn',
    image: 'photo-1519389950473-47ba0277781c'
  },
  {
    id: '5',
    nom: 'Université Alioune Diop de Bambey (UADB)',
    ville: 'Bambey',
    type: 'Publique',
    filieres: ['Sciences Agronomiques', 'Sciences de l\'Éducation', 'Lettres'],
    frais: 'Publique - Frais réduits',
    contact: 'contact@uadb.edu.sn',
    site: 'www.uadb.edu.sn',
    image: 'photo-1459767129954-1b1c1f9b9ace'
  },
  {
    id: '6',
    nom: 'Université Assane Seck de Ziguinchor (UASZ)',
    ville: 'Ziguinchor',
    type: 'Publique',
    filieres: ['Sciences', 'Lettres', 'Sciences Économiques'],
    frais: 'Publique - Frais réduits',
    contact: 'info@univ-zigui.sn',
    site: 'www.univ-zigui.sn',
    image: 'photo-1460574283810-2aab119d8511'
  },
  {
    id: '7',
    nom: 'Université du Sine Saloum El-Hâdj Ibrahima Niass (USSEIN)',
    ville: 'Kaolack',
    type: 'Publique',
    filieres: ['Sciences', 'Lettres', 'Sciences Islamiques'],
    frais: 'Publique - Frais réduits',
    contact: 'contact@ussein.edu.sn',
    site: 'www.ussein.edu.sn',
    image: 'photo-1497604401993-f2e922e5cb0a'
  },
  {
    id: '8',
    nom: 'Université Virtuelle du Sénégal (UVS)',
    ville: 'Diamniadio',
    type: 'Publique',
    filieres: ['Informatique', 'Management', 'Sciences'],
    frais: 'Publique - Frais réduits',
    contact: 'contact@uvs.edu.sn',
    site: 'www.uvs.edu.sn',
    image: 'photo-1498050108023-c5249f4df085'
  },
  {
    id: '9',
    nom: 'Université Amadou Mahtar Mbow (UAM)',
    ville: 'Diamniadio',
    type: 'Privée',
    filieres: ['Médecine', 'Pharmacie', 'Sciences de la Santé'],
    frais: '2,000,000 - 4,000,000 FCFA/an',
    contact: 'info@uam.edu.sn',
    site: 'www.uam.edu.sn',
    image: 'photo-1527576539890-dfa815648363'
  },
  {
    id: '10',
    nom: 'Institut Africain de Management (IAM)',
    ville: 'Dakar',
    type: 'Privée',
    filieres: ['Management', 'Finance', 'RH', 'Marketing'],
    frais: '1,800,000 - 2,500,000 FCFA/an',
    contact: 'contact@iam.edu.sn',
    site: 'www.iam.edu.sn',
    image: 'photo-1488972685288-c3fd157d7c7a'
  },
  {
    id: '11',
    nom: 'École Supérieure de Commerce de Dakar (ESCD)',
    ville: 'Dakar',
    type: 'Privée',
    filieres: ['Commerce', 'Marketing', 'Gestion'],
    frais: '1,200,000 - 2,000,000 FCFA/an',
    contact: 'info@escd.edu.sn',
    site: 'www.escd.edu.sn',
    image: 'photo-1518005020951-eccb494ad742'
  },
  {
    id: '12',
    nom: 'Institut Supérieur de Communication (ISCOM)',
    ville: 'Dakar',
    type: 'Privée',
    filieres: ['Communication', 'Journalisme', 'Marketing Digital'],
    frais: '1,500,000 - 2,200,000 FCFA/an',
    contact: 'contact@iscom.sn',
    site: 'www.iscom.sn',
    image: 'photo-1433832597046-4f10e10ac764'
  },
  {
    id: '13',
    nom: 'Institut Supérieur d\'Informatique (ISI)',
    ville: 'Dakar',
    type: 'Privée',
    filieres: ['Informatique', 'Réseaux', 'Développement Web'],
    frais: '1,800,000 - 2,800,000 FCFA/an',
    contact: 'info@isi.edu.sn',
    site: 'www.isi.edu.sn',
    image: 'photo-1487058792275-0ad4aaf24ca7'
  },
  {
    id: '14',
    nom: 'Université Privée de Marrakech - Campus Dakar',
    ville: 'Dakar',
    type: 'Privée',
    filieres: ['Ingénierie', 'Business', 'Architecture'],
    frais: '2,500,000 - 3,500,000 FCFA/an',
    contact: 'dakar@upm.ma',
    site: 'www.upm.ma',
    image: 'photo-1493397212122-2b85dda8106b'
  },
  {
    id: '15',
    nom: 'École Nationale d\'Administration (ENA)',
    ville: 'Dakar',
    type: 'Publique',
    filieres: ['Administration', 'Diplomatie', 'Finances Publiques'],
    frais: 'Publique - Sur concours',
    contact: 'contact@ena.edu.sn',
    site: 'www.ena.edu.sn',
    image: 'photo-1492321936769-b49830bc1d1e'
  },
  {
    id: '16',
    nom: 'Institut Supérieur de Transport (IST)',
    ville: 'Dakar',
    type: 'Privée',
    filieres: ['Logistique', 'Transport', 'Commerce International'],
    frais: '1,300,000 - 2,100,000 FCFA/an',
    contact: 'info@ist.edu.sn',
    site: 'www.ist.edu.sn',
    image: 'photo-1483058712412-4245e9b90334'
  },
  {
    id: '17',
    nom: 'École Supérieure d\'Ingénierie de Dakar (ESID)',
    ville: 'Dakar',
    type: 'Privée',
    filieres: ['Génie Civil', 'Génie Électrique', 'Génie Mécanique'],
    frais: '2,000,000 - 3,200,000 FCFA/an',
    contact: 'contact@esid.edu.sn',
    site: 'www.esid.edu.sn',
    image: 'photo-1439337153520-7082a56a81f4'
  },
  {
    id: '18',
    nom: 'Université de Thiès',
    ville: 'Thiès',
    type: 'Publique',
    filieres: ['Sciences', 'Technologie', 'Lettres'],
    frais: 'Publique - Frais réduits',
    contact: 'info@univ-thies.sn',
    site: 'www.univ-thies.sn',
    image: 'photo-1487958449943-2429e8be8625'
  },
  {
    id: '19',
    nom: 'ISEP-AT de Diamniadio',
    ville: 'Diamniadio',
    type: 'ISEP',
    filieres: ['Agriculture', 'Élevage', 'Technologie Alimentaire'],
    frais: 'Public - Formation professionnelle',
    contact: 'isep.diamniadio@education.sn',
    site: 'www.isep-diamniadio.edu.sn',
    image: 'photo-1574097656146-0b43b7660cb6'
  },
  {
    id: '20',
    nom: 'ISEP de Thiès',
    ville: 'Thiès',
    type: 'ISEP',
    filieres: ['Mécanique', 'Électronique', 'Informatique Industrielle'],
    frais: 'Public - Formation professionnelle',
    contact: 'isep.thies@education.sn',
    site: 'www.isep-thies.edu.sn',
    image: 'photo-1562774053-701939374585'
  },
  {
    id: '21',
    nom: 'ISEP de Matam',
    ville: 'Matam',
    type: 'ISEP',
    filieres: ['Agriculture', 'Hydraulique', 'Développement Rural'],
    frais: 'Public - Formation professionnelle',
    contact: 'isep.matam@education.sn',
    site: 'www.isep-matam.edu.sn',
    image: 'photo-1500382017468-9049fed747ef'
  },
  {
    id: '22',
    nom: 'ISEP de Richard Toll',
    ville: 'Richard Toll',
    type: 'ISEP',
    filieres: ['Sucrerie', 'Agriculture Irriguée', 'Mécanique Agricole'],
    frais: 'Public - Formation professionnelle',
    contact: 'isep.richardtoll@education.sn',
    site: 'www.isep-richardtoll.edu.sn',
    image: 'photo-1574263867128-a50ef7fc6aff'
  },
  {
    id: '23',
    nom: 'ISEP de Mbacké',
    ville: 'Mbacké',
    type: 'ISEP',
    filieres: ['Textile', 'Commerce', 'Artisanat'],
    frais: 'Public - Formation professionnelle',
    contact: 'isep.mbacke@education.sn',
    site: 'www.isep-mbacke.edu.sn',
    image: 'photo-1509391366360-2e959784a276'
  },
  {
    id: '24',
    nom: 'ISEP de Bignona',
    ville: 'Bignona',
    type: 'ISEP',
    filieres: ['Foresterie', 'Transformation Agroalimentaire', 'Pêche'],
    frais: 'Public - Formation professionnelle',
    contact: 'isep.bignona@education.sn',
    site: 'www.isep-bignona.edu.sn',
    image: 'photo-1469474968028-56623f02e42e'
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
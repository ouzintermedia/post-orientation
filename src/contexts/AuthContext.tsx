import React, { createContext, useContext, useState, useEffect } from 'react';

type User = {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  niveau: '4ème' | '3ème' | '2nde' | '1ère' | 'Terminale';
  serie?: 'S' | 'L' | 'ES';
  region: string;
  favoris: string[];
  quizCompletes: string[];
  badges: string[];
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Omit<User, 'id' | 'favoris' | 'quizCompletes' | 'badges'>) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
  addFavori: (filiereId: string) => void;
  removeFavori: (filiereId: string) => void;
  addQuizComplete: (quizId: string) => void;
  addBadge: (badgeId: string) => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Simulation: charger l'utilisateur depuis localStorage
    const savedUser = localStorage.getItem('safari-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulation d'authentification
    if (email && password) {
      const mockUser: User = {
        id: '1',
        nom: 'Diallo',
        prenom: 'Aminata',
        email,
        niveau: '1ère',
        serie: 'S',
        region: 'Dakar',
        favoris: [],
        quizCompletes: [],
        badges: []
      };
      setUser(mockUser);
      localStorage.setItem('safari-user', JSON.stringify(mockUser));
      return true;
    }
    return false;
  };

  const register = async (userData: Omit<User, 'id' | 'favoris' | 'quizCompletes' | 'badges'>): Promise<boolean> => {
    const newUser: User = {
      ...userData,
      id: Date.now().toString(),
      favoris: [],
      quizCompletes: [],
      badges: []
    };
    setUser(newUser);
    localStorage.setItem('safari-user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('safari-user');
  };

  const updateProfile = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('safari-user', JSON.stringify(updatedUser));
    }
  };

  const addFavori = (filiereId: string) => {
    if (user && !user.favoris.includes(filiereId)) {
      const updatedUser = { ...user, favoris: [...user.favoris, filiereId] };
      setUser(updatedUser);
      localStorage.setItem('safari-user', JSON.stringify(updatedUser));
    }
  };

  const removeFavori = (filiereId: string) => {
    if (user) {
      const updatedUser = { ...user, favoris: user.favoris.filter(id => id !== filiereId) };
      setUser(updatedUser);
      localStorage.setItem('safari-user', JSON.stringify(updatedUser));
    }
  };

  const addQuizComplete = (quizId: string) => {
    if (user && !user.quizCompletes.includes(quizId)) {
      const updatedUser = { ...user, quizCompletes: [...user.quizCompletes, quizId] };
      setUser(updatedUser);
      localStorage.setItem('safari-user', JSON.stringify(updatedUser));
    }
  };

  const addBadge = (badgeId: string) => {
    if (user && !user.badges.includes(badgeId)) {
      const updatedUser = { ...user, badges: [...user.badges, badgeId] };
      setUser(updatedUser);
      localStorage.setItem('safari-user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      updateProfile,
      addFavori,
      removeFavori,
      addQuizComplete,
      addBadge,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
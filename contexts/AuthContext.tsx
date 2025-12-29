import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, name?: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const MOCK_AVATAR = "https://ui-avatars.com/api/?background=4f46e5&color=fff&name=";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((email: string, password: string, name?: string) => {
    // Strict check for the "Sign In" flow (when name is not provided)
    if (!name) {
      if (email === 'test@email.com' && password === '12345') {
        setUser({
          id: '1',
          name: 'Test User',
          email: email,
          avatar: MOCK_AVATAR + "Test+User"
        });
        return true;
      }
      return false; // Invalid credentials
    }

    // "Sign Up" flow - assume success for mock
    setUser({
      id: Date.now().toString(),
      name,
      email,
      avatar: MOCK_AVATAR + encodeURIComponent(name)
    });
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
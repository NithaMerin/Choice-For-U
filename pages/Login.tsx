import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ArrowRight, Lock, Mail, User as UserIcon, AlertCircle } from 'lucide-react';
import { Logo } from '../components/Logo';

interface LoginProps {
  onLoginSuccess: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = login(email, password, isLoginView ? undefined : name);

    if (success) {
      onLoginSuccess();
    } else {
      setError('Invalid email or password. Try test@email.com / 12345');
    }
  };

  const toggleView = () => {
    setIsLoginView(!isLoginView);
    setError('');
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 animate-fade-in relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-md w-full space-y-8 bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50 relative z-10 animate-scale-in">
        <div className="text-center flex flex-col items-center">
          <div className="transform hover:scale-105 transition-transform duration-300">
             <Logo className="scale-125 mb-4" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-slate-900 tracking-tight">
            {isLoginView ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            {isLoginView ? 'Sign in to access your curated choices' : 'Join us for a personalized experience'}
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {!isLoginView && (
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                </div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none rounded-xl relative block w-full px-3 py-3.5 pl-10 border border-slate-200 placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all sm:text-sm bg-slate-50 focus:bg-white"
                  placeholder="Full Name"
                />
              </div>
            )}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-xl relative block w-full px-3 py-3.5 pl-10 border border-slate-200 placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all sm:text-sm bg-slate-50 focus:bg-white"
                placeholder="Email address"
              />
            </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-xl relative block w-full px-3 py-3.5 pl-10 border border-slate-200 placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all sm:text-sm bg-slate-50 focus:bg-white"
                placeholder="Password"
              />
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-100 animate-slide-up">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-bold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 btn-interaction overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <ArrowRight className="h-5 w-5 text-indigo-300 group-hover:text-white transition-colors" />
              </span>
              {isLoginView ? 'Sign In' : 'Sign Up'}
            </button>
          </div>
        </form>

        <div className="text-center">
          <button
            onClick={toggleView}
            className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
          >
            {isLoginView ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>
        
        {isLoginView && (
          <div className="mt-6 p-4 bg-indigo-50/50 rounded-xl text-xs text-slate-500 text-center border border-indigo-100/50">
            <p className="font-semibold mb-1 text-indigo-900">Demo Credentials:</p>
            <p>Email: <span className="font-mono">test@email.com</span></p>
            <p>Password: <span className="font-mono">12345</span></p>
          </div>
        )}
      </div>
    </div>
  );
};
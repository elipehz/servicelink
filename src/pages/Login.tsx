import React from 'react';
import { Mail, Lock, LogIn } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de login
    console.log('Login:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Entrar</h1>
            <p className="mt-2 text-gray-600">
              Acesse sua conta para gerenciar seus serviços
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Lembrar-me
                </label>
              </div>
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
                Esqueceu a senha?
              </a>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <LogIn className="mr-2 h-5 w-5" />
              Entrar
            </button>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Ainda não tem uma conta?{' '}
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Cadastre-se
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
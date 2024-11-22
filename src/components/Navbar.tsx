import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="ServiceLink" className="h-8 w-auto" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-indigo-600">Serviços</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600">Como Funciona</a>
            <a href="#testimonials" className="text-gray-700 hover:text-indigo-600">Depoimentos</a>
            <a href="#faq" className="text-gray-700 hover:text-indigo-600">Dúvidas</a>
            <Link
              to="/entrar"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Entrar
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Serviços</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Como Funciona</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Depoimentos</a>
            <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Dúvidas</a>
            <Link
              to="/entrar"
              className="w-full mt-2 flex items-center px-3 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Entrar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
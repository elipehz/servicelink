import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-semibold mb-4">ServiceLink</h3>
            <p className="text-gray-400 text-sm">
              Conectando prestadores de serviços de qualidade com clientes. 
              Tornando a contratação de serviços simples, confiável e eficiente.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Empresa</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Parceiros
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Termos de Serviço
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Política de Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  LGPD
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} ServiceLink. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
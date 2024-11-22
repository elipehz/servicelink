import React from 'react';
import { Wrench, Car, Home, Briefcase, Scissors, Shirt } from 'lucide-react';

const services = [
  {
    name: 'Manutenção Residencial',
    description: 'Reparos e manutenção profissional para sua casa',
    icon: Home,
  },
  {
    name: 'Serviços Automotivos',
    description: 'Manutenção, reparos e estética automotiva',
    icon: Car,
  },
  {
    name: 'Consultoria Empresarial',
    description: 'Consultoria e assessoria empresarial especializada',
    icon: Briefcase,
  },
  {
    name: 'Beleza & Bem-estar',
    description: 'Serviços de cuidados pessoais e bem-estar',
    icon: Scissors,
  },
  {
    name: 'Lavanderia',
    description: 'Soluções profissionais de limpeza e lavanderia',
    icon: Shirt,
  },
  {
    name: 'Serviços Técnicos',
    description: 'Suporte técnico e reparos especializados',
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Escolha entre nossa ampla gama de serviços profissionais
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <a href="#" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {service.name}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {service.description}
                  </p>
                </div>
                <span
                  className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
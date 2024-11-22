import React from 'react';
import { Search, Calendar, MessageSquare, CreditCard } from 'lucide-react';

const steps = [
  {
    name: 'Buscar',
    description: 'Navegue pelos nossos prestadores de serviço verificados',
    icon: Search,
  },
  {
    name: 'Agendar',
    description: 'Escolha o horário que melhor se adequa a você',
    icon: Calendar,
  },
  {
    name: 'Conectar',
    description: 'Converse diretamente com o prestador de serviço',
    icon: MessageSquare,
  },
  {
    name: 'Pagar',
    description: 'Pagamento seguro após a conclusão do serviço',
    icon: CreditCard,
  },
];

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Como Funciona
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comece a usar o ServiceLink em quatro passos simples
          </p>
        </div>

        <div className="mt-20">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-between">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.name}
                    className="flex flex-col items-center"
                  >
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                      <span className="absolute -bottom-8 text-sm font-medium text-gray-900">
                        {step.name}
                      </span>
                    </div>
                    <p className="mt-12 text-sm text-gray-500 text-center max-w-[150px]">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
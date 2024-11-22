import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'Proprietária',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'O ServiceLink tornou super fácil encontrar um técnico confiável. Todo o processo foi tranquilo e profissional.',
  },
  {
    name: 'Carlos Santos',
    role: 'Empresário',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'Como prestador de serviços, o ServiceLink me ajudou a expandir meu negócio e conectar com novos clientes sem esforço.',
  },
  {
    name: 'Marina Oliveira',
    role: 'Moradora',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'A qualidade dos prestadores de serviço nesta plataforma é excepcional. Nunca fiquei desapontada.',
  },
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            O que Nossos Usuários Dizem
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Não acredite apenas em nossa palavra
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <div className="px-6 py-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Como faço para agendar um serviço?",
    answer: "Navegue pelos serviços disponíveis, selecione o que você precisa, escolha o horário de sua preferência e complete o processo de agendamento. Você pode pagar com segurança através da nossa plataforma.",
  },
  {
    question: "Os prestadores de serviço são verificados?",
    answer: "Sim, todos os prestadores de serviço passam por um rigoroso processo de verificação, incluindo verificação de antecedentes, validação de licenças e avaliações de clientes antes de serem listados em nossa plataforma.",
  },
  {
    question: "E se eu não ficar satisfeito com o serviço?",
    answer: "Temos garantia de satisfação. Se você não estiver satisfeito com o serviço, pode reportar através da nossa plataforma e trabalharemos para resolver o problema ou fornecer um reembolso.",
  },
  {
    question: "Como me torno um prestador de serviços?",
    answer: "Para se tornar um prestador de serviços, clique no botão 'Para Empresas' e complete o processo de cadastro. Você precisará fornecer a documentação necessária e passar pelo nosso processo de verificação.",
  },
  {
    question: "Quais métodos de pagamento são aceitos?",
    answer: "Aceitamos todos os principais cartões de crédito, débito e métodos de pagamento digital, incluindo Pix e diversas soluções de pagamento móvel.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div id="faq" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Encontre respostas para as dúvidas mais comuns sobre o ServiceLink
          </p>
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-gray-500" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-gray-500">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
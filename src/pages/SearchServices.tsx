import React from 'react';
import { Search, MapPin, Filter } from 'lucide-react';

export default function SearchServices() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [location, setLocation] = React.useState('');

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Encontre o Serviço Ideal
            </h1>
            
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Qual serviço você procura?"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Localização"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center">
                <Filter className="mr-2 h-5 w-5" />
                Filtrar
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Placeholder para resultados de busca */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-gray-500 text-center">
                  Digite sua busca para ver os serviços disponíveis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
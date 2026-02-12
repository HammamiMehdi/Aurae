import React, { useState } from 'react';

const FiltersModels: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    localisation: false,
    disponibilite: false,
    apparence: false,
    iaOption: false,
  });

  const toggleFilter = (filterType: keyof typeof selectedFilters) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: !prev[filterType]
    }));
  };

  const resetFilters = () => {
    setSelectedFilters({
      localisation: false,
      disponibilite: false,
      apparence: false,
      iaOption: false,
    });
  };


  return (
    <div className="w-full bg-white h-auto min-h-0 pb-4 mt-8">
      <div className="max-w-7xl mx-auto px-8 flex flex-col">
        {/* Main Filter Container */}
        <div className="flex items-center justify-center gap-2 mb-16">
          {/* Heart Icon */}
          <button className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="red"
              stroke="red"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          {/* Filter Pills */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleFilter('localisation')}
              className={`px-8 py-2 rounded-2xl border-2 transition-all duration-200 ${
                selectedFilters.localisation
                  ? 'border-black bg-black text-white'
                  : 'border-gray-300 bg-white text-black hover:border-gray-400'
              }`}
              style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontStyle: 'bold',
                fontSize: '15px',
                lineHeight: '120%',
                letterSpacing: '-2%',
                boxShadow: '0px 3px 5px 0px #00000040',
              }}
            >
              Localisation
            </button>

            <button
              onClick={() => toggleFilter('disponibilite')}
              className={`px-8 py-2 rounded-2xl border-2 transition-all duration-200 ${
                selectedFilters.disponibilite
                  ? 'border-black bg-black text-white'
                  : 'border-gray-300 bg-white text-black hover:border-gray-400'
              }`}
              style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontStyle: 'bold',
                fontSize: '15px',
                lineHeight: '120%',
                letterSpacing: '-2%',
                boxShadow: '0px 3px 5px 0px #00000040',
              }}
            >
              Disponibilité
            </button>

            <button
              onClick={() => toggleFilter('apparence')}
              className={`px-8 py-2 rounded-2xl border-2 transition-all duration-200 ${
                selectedFilters.apparence
                  ? 'border-black bg-black text-white'
                  : 'border-gray-300 bg-white text-black hover:border-gray-400'
              }`}
              style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontStyle: 'bold',
                fontSize: '15px',
                lineHeight: '120%',
                letterSpacing: '-2%',
                boxShadow: '0px 3px 5px 0px #00000040',
              }}
            >
              Apparence
            </button>

            <button
              onClick={() => toggleFilter('iaOption')}
              className={`px-8 py-2 rounded-2xl border-2 transition-all duration-200 ${
                selectedFilters.iaOption
                  ? 'border-black bg-black text-white'
                  : 'border-gray-300 bg-white text-black hover:border-gray-400'
              }`}
              style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontStyle: 'bold',
                fontSize: '15px',
                lineHeight: '120%',
                letterSpacing: '-2%',
                boxShadow: '0px 3px 5px 0px #00000040',
              }}
            >
              IA Option
            </button>
          </div>
          
        </div>

        {/* Réinitialiser Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={resetFilters}
            className="hover:opacity-80 transition-opacity cursor-pointer"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '15px',
              lineHeight: '120%',
              letterSpacing: '-2%',
            }}
          >
            Réinitialiser
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltersModels;
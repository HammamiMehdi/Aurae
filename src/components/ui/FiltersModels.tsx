import React, { useState } from 'react';

const FiltersModels: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    localisation: false,
    disponibilite: false,
    apparence: false,
    iaOption: false,
  });

  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const toggleFilter = (filterType: keyof typeof selectedFilters) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: !prev[filterType]
    }));
  };


  return (
    <div className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Filter Container */}
        <div className="flex items-center justify-center gap-4">
          {/* Heart Icon */}
          <button className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="red"
              stroke="red"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          {/* Filter Pills */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleFilter('localisation')}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-200 ${
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
              }}
            >
              Localisation
            </button>

            <button
              onClick={() => toggleFilter('disponibilite')}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-200 ${
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
              }}
            >
              Disponibilité
            </button>

            <button
              onClick={() => toggleFilter('apparence')}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-200 ${
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
              }}
            >
              Apparence
            </button>

            <button
              onClick={() => toggleFilter('iaOption')}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-200 ${
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
              }}
            >
              IA Option
            </button>
          </div>
        </div>

        {/* More Filters Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowMoreFilters(!showMoreFilters)}
            className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-300 bg-white text-black hover:border-gray-400 transition-all duration-200"
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontStyle: 'bold',
              fontSize: '15px',
              lineHeight: '120%',
              letterSpacing: '-2%',
            }}
          >
            ... plus de filtres
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltersModels;
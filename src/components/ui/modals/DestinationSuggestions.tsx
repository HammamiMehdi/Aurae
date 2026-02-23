import React, { useState } from 'react';
import { Navigation, Globe } from 'lucide-react';

type DestinationType = 'nearby' | 'anywhere' | null;

interface DestinationOption {
  id: DestinationType;
  label: string;
  Icon: React.ElementType;
}

const DESTINATIONS: DestinationOption[] = [
  { id: 'nearby', label: 'A proximité', Icon: Navigation },
  { id: 'anywhere', label: "N'importe où", Icon: Globe },
];

interface DestinationSuggestionsProps {
  onClose?: () => void;
}

export const DestinationSuggestions: React.FC<DestinationSuggestionsProps> = ({ onClose }) => {
  const [selected, setSelected] = useState<DestinationType>(null);

  return (
    <div className="w-full max-w-sm bg-white rounded-[32px] p-8 shadow-lg border border-gray-50 relative">
      {/* Bouton de fermeture */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Fermer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
      <h2 
        className="text-xl font-semibold text-gray-900 mb-8 px-2"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Suggestions de destinations
      </h2>

      <div className="space-y-4">
        {DESTINATIONS.map(({ id, label, Icon }) => (
          <label key={id} className="group cursor-pointer block">
            <input
              type="radio"
              name="destination"
              className="peer hidden"
              checked={selected === id}
              onChange={() => setSelected(id)}
            />
            
            <div className="flex items-center gap-6 p-3 rounded-2xl transition-all duration-200 
                            hover:bg-gray-50 
                            peer-checked:bg-blue-50/50">
              {/* Icon Container */}
              <div className="flex items-center justify-center w-12 h-12">
                <Icon 
                  size={32} 
                  strokeWidth={2.5}
                  className={`transition-colors duration-200 
                    ${id === 'nearby' ? 'fill-black' : ''} 
                    ${selected === id ? 'text-blue-600' : 'text-black'}`}
                />
              </div>

              {/* Label */}
              <span 
                className={`text-lg font-bold transition-colors duration-200
                  ${selected === id ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {label}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};
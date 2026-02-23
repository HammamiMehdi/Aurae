import React, { useState } from 'react';

// --- Types ---
interface ProfileState {
  sexe: string;
  age: string;
  eyeColor: string;
  hairColor: string;
  measurements: {
    height: number[];
    chest: number[];
    waist: number[];
    hips: number[];
  };
}

interface OptionGroupProps {
  label: string;
  options: string[];
  selectedValue: string;
  onChange: (val: string) => void;
  columns?: string;
}

// --- Reusable Sub-component ---
const OptionGroup: React.FC<OptionGroupProps> = ({ label, options, selectedValue, onChange, columns = "grid-cols-3" }) => (
  <div className="mb-6">
    <h3 
      className="text-lg font-bold mb-3 text-gray-900"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {label}
    </h3>
    <div className={`grid ${columns} gap-2`}>
      {options.map((opt) => (
        <label key={opt} className="cursor-pointer">
          <input
            type="radio"
            className="peer hidden"
            name={label}
            checked={selectedValue === opt}
            onChange={() => onChange(opt)}
          />
          <span 
            className="block text-center py-2 px-1 rounded-md text-sm transition-all border border-transparent hover:bg-gray-50 peer-checked:bg-blue-50 peer-checked:text-blue-600 peer-checked:font-semibold"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {opt}
          </span>
        </label>
      ))}
    </div>
  </div>
);

// --- Main Modal Component ---
interface PhysicalSpecsModalProps {
  onClose?: () => void;
}

export const PhysicalSpecsModal: React.FC<PhysicalSpecsModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<Partial<ProfileState>>({
    sexe: '',
    age: '',
    eyeColor: '',
    hairColor: '',
  });

  const handleUpdate = (key: keyof ProfileState, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitting Data:", formData);
    // Add your API call or parent callback here
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Column: Characteristics */}
        <section>
          <h2 
            className="text-2xl font-bold mb-8"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Caractéristiques physiques
          </h2>
          
          <OptionGroup 
            label="Sexe :" 
            options={['Homme', 'Femme', 'Autre', 'Sans importance']} 
            selectedValue={formData.sexe || ''}
            onChange={(v) => handleUpdate('sexe', v)}
          />

          <OptionGroup 
            label="Age :" 
            options={['18-25', '26-30', '31-35', '36-40', '41-45', '46-50', '+50']} 
            selectedValue={formData.age || ''}
            onChange={(v) => handleUpdate('age', v)}
            columns="grid-cols-4"
          />

          <OptionGroup 
            label="Couleur des yeux :" 
            options={['Bleu', 'Marron', 'Noir', 'Vert', 'Vairon']} 
            selectedValue={formData.eyeColor || ''}
            onChange={(v) => handleUpdate('eyeColor', v)}
          />

          <OptionGroup 
            label="Couleur des cheveux :" 
            options={['Blond', 'Brun', 'Noir', 'Roux', 'Gris', 'Blanc', 'Chauve', 'Auburn']} 
            selectedValue={formData.hairColor || ''}
            onChange={(v) => handleUpdate('hairColor', v)}
            columns="grid-cols-4"
          />
        </section>

        {/* Right Column: Measurements & Submission */}
        <section className="flex flex-col justify-between">
          <div>
            <h2 
              className="text-2xl font-bold mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Mensuration
            </h2>
            
            <div className="space-y-6">
              {[
                { label: 'Hauteur', min: 160, max: 210 },
                { label: 'Poitrine', min: 70, max: 120 },
                { label: 'Taille', min: 50, max: 110 },
                { label: 'Hanches', min: 70, max: 140 },
              ].map((m) => (
                <div key={m.label} className="flex items-center justify-between group">
                  <span 
                    className="font-bold text-gray-700 w-24"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {m.label} :
                  </span>
                  <div 
                    className="flex items-center gap-3 text-gray-400"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span>entre</span>
                    <span className="text-gray-300 group-hover:text-blue-500 transition-colors">{m.min} cm</span>
                    <span>&</span>
                    <span className="text-gray-300 group-hover:text-blue-500 transition-colors">{m.max} cm</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-12">
            <button 
              onClick={handleSubmit}
              className="text-xl font-medium px-8 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 active:scale-95"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Validé
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
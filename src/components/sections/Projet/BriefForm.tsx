import React from 'react';

export interface BriefFormData {
  clientBrand: string;
  storytelling: string;
  localisation: string;
  date: string;
  budgetModele: string;
  nombreModeles: string;
}

interface BriefFormProps {
  value: BriefFormData;
  onChange: (field: keyof BriefFormData, value: string) => void;
}

const BriefForm: React.FC<BriefFormProps> = ({ value, onChange }) => {
  return (
    <div
      className="w-full"
      style={{
        backgroundColor: '#F5F0EB',
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h2
          className="text-gray-900 mb-4 text-left"
          style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontStyle: 'bold',
            fontSize: '45px',
            lineHeight: '120%',
            letterSpacing: '-2%',
          }}
        >
          Nouveau Projet
        </h2>

        <h3
          className="text-gray-900 mb-12 text-left"
          style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontStyle: 'bold',
            fontSize: '45px',
            lineHeight: '120%',
            letterSpacing: '-2%',
          }}
        >
          Brief
        </h3>

        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="input-container">
              <label
                className="text-gray-700 block mb-2 text-sm"
                style={{
                  fontFamily: 'Inter Tight, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0px',
                }}
              >
                Client / Brand
              </label>
              <input
                type="text"
                placeholder="Entrez le client ou la marque"
                value={value.clientBrand}
                onChange={(e) => onChange('clientBrand', e.target.value)}
                className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                style={{
                  height: '60px',
                  borderRadius: '15px',
                  border: '1px solid #7E7C7E',
                  padding: '16px',
                  backgroundColor: '#FDF9F5',
                  fontFamily: 'Inter Tight, sans-serif',
                  fontSize: '14px',
                }}
              />
            </div>

            <div className="input-container">
              <label
                className="text-gray-700 block mb-2 text-sm"
                style={{
                  fontFamily: 'Inter Tight, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0px',
                }}
              >
                Localisation
              </label>
              <input
                type="text"
                placeholder="Entrez la localisation"
                value={value.localisation}
                onChange={(e) => onChange('localisation', e.target.value)}
                className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                style={{
                  height: '60px',
                  borderRadius: '15px',
                  border: '1px solid #7E7C7E',
                  padding: '16px',
                  backgroundColor: '#FDF9F5',
                  fontFamily: 'Inter Tight, sans-serif',
                  fontSize: '14px',
                }}
              />
            </div>
          </div>

          <div className="input-container">
            <label
              className="text-gray-700 block mb-2 text-sm"
              style={{
                fontFamily: 'Inter Tight, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0px',
              }}
            >
              Storytelling
            </label>
            <textarea
              placeholder="Décrivez le storytelling du projet"
              value={value.storytelling}
              onChange={(e) => onChange('storytelling', e.target.value)}
              className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              style={{
                height: '180px',
                borderRadius: '15px',
                border: '1px solid #7E7C7E',
                padding: '16px',
                backgroundColor: '#FDF9F5',
                fontFamily: 'Inter Tight, sans-serif',
                fontSize: '14px',
                resize: 'vertical',
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="input-container">
              <label
                className="text-gray-700 block mb-2 text-sm"
                style={{
                  fontFamily: 'Inter Tight, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0px',
                }}
              >
                Date
              </label>
              <input
                type="date"
                value={value.date}
                onChange={(e) => onChange('date', e.target.value)}
                className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                style={{
                  height: '60px',
                  borderRadius: '15px',
                  border: '1px solid #7E7C7E',
                  padding: '16px',
                  backgroundColor: '#FDF9F5',
                  fontFamily: 'Inter Tight, sans-serif',
                  fontSize: '14px',
                }}
              />
            </div>

            <div className="input-container">
              <label
                className="text-gray-700 block mb-2 text-sm"
                style={{
                  fontFamily: 'Inter Tight, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0px',
                }}
              >
                Budget modèle
              </label>
              <input
                type="text"
                placeholder="Entrez le budget modèle"
                value={value.budgetModele}
                onChange={(e) => onChange('budgetModele', e.target.value)}
                className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                style={{
                  height: '60px',
                  borderRadius: '15px',
                  border: '1px solid #7E7C7E',
                  padding: '16px',
                  backgroundColor: '#FDF9F5',
                  fontFamily: 'Inter Tight, sans-serif',
                  fontSize: '14px',
                }}
              />
            </div>
          </div>

          <div className="input-container">
            <label
              className="text-gray-700 block mb-2 text-sm"
              style={{
                fontFamily: 'Inter Tight, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0px',
              }}
            >
              Nombre de modèles
            </label>
            <input
              type="number"
              min="0"
              placeholder="Entrez le nombre de modèles"
              value={value.nombreModeles}
              onChange={(e) => onChange('nombreModeles', e.target.value)}
              className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              style={{
                height: '60px',
                borderRadius: '15px',
                border: '1px solid #7E7C7E',
                padding: '16px',
                backgroundColor: '#FDF9F5',
                fontFamily: 'Inter Tight, sans-serif',
                fontSize: '14px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BriefForm;

import React, { useState } from 'react';

interface ModeleFormProps {
  onNext?: () => void;
}

const ModeleForm: React.FC<ModeleFormProps> = ({ onNext }) => {
  const [formData, setFormData] = useState({
    situationPro: '',
    statutJuridique: '',
    justificatif: null as File | null
  });

  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (file: File) => {
    setFormData(prev => ({
      ...prev,
      justificatif: file
    }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Données du formulaire modèle :', formData);
  };

  const situationsPro = [
    { value: '', label: 'Sélectionnez votre situation professionnelle' },
    { value: 'professionnel', label: 'Mannequin professionnel' },
    { value: 'debutant', label: 'Débutant' },
    { value: 'agence', label: 'Représentée par une agence' },
    { value: 'autre', label: 'Autres' }
  ];

  const statutsJuridiques = [
    { value: '', label: 'Sélectionnez votre statut juridique' },
    { value: 'particulier', label: 'Particulier' },
    { value: 'micro-entrepreneur', label: 'Micro entrepreneur - Auto entrepreneur' },
    { value: 'autre', label: 'Autre' }
  ];

  return (
    <div 
      className="w-full"
      style={{
        backgroundColor: '#F5F0EB',
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 
          className="text-black mb-8 text-center lg:text-left" 
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '24px', 
            lineHeight: '120%',
            letterSpacing: '-2%',
          }}
        >
          INFORMATIONS PROFESSIONNELLES
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="w-full max-w-2xl mx-auto lg:mx-0">
            
            <div className="input-container mb-6"> {/* Augmenté mb-4 à mb-6 */}
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
                Situation professionnelle
              </label>
              <select
                value={formData.situationPro}
                onChange={(e) => handleInputChange('situationPro', e.target.value)}
                className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                style={{
                  height: '60px', 
                  borderRadius: '15px', 
                  border: '1px solid #7E7C7E',
                  padding: '16px', 
                  backgroundColor: '#FDF9F5',
                  fontFamily: 'Inter Tight, sans-serif',
                  fontSize: '12px', 
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg ' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%237E7C7E' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 16px center', 
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '16px' 
                }}
              >
                {situationsPro.map(situation => (
                  <option key={situation.value} value={situation.value}>
                    {situation.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-container mb-6"> {/* Augmenté mb-4 à mb-6 */}
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
                Statut juridique
              </label>
              <select
                value={formData.statutJuridique}
                onChange={(e) => handleInputChange('statutJuridique', e.target.value)}
                className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                style={{
                  height: '60px', 
                  borderRadius: '15px', 
                  border: '1px solid #7E7C7E',
                  padding: '16px', 
                  backgroundColor: '#FDF9F5',
                  fontFamily: 'Inter Tight, sans-serif',
                  fontSize: '12px', 
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg ' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%237E7C7E' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 16px center', 
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '16px' 
                }}
              >
                {statutsJuridiques.map(statut => (
                  <option key={statut.value} value={statut.value}>
                    {statut.label}
                  </option>
                ))}
              </select>
            </div>

            {(formData.statutJuridique === 'micro-entrepreneur' || formData.statutJuridique === 'autre') && (
              <div className="input-container mb-6"> {/* Augmenté mb-4 à mb-6 */}
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
                  Justificatifs légaux (si statut pro)
                </label>
                
                <div 
                  className={`
                    relative transition-all duration-200 rounded-2xl border-2 border-dashed
                    ${dragActive ? 'border-black bg-gray-50' : 'border-gray-300 hover:border-gray-400'}
                  `}
                  style={{
                    minHeight: '150px', 
                    backgroundColor: dragActive ? '#F8F8F8' : '#FDF9F5'
                  }}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    {formData.justificatif ? (
                      <div className="space-y-2">
                        <div className="flex items-center justify-center">
                          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-gray-700" style={{fontFamily: 'Inter Tight, sans-serif'}}>
                          {formData.justificatif.name}
                        </p>
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, justificatif: null }))}
                          className="text-red-600 hover:text-red-800 text-sm"
                          style={{fontFamily: 'Inter Tight, sans-serif'}}
                        >
                          Supprimer le fichier
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex items-center justify-center">
                          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-base font-medium text-gray-700" style={{fontFamily: 'Inter Tight, sans-serif'}}>
                            Glissez-déposez vos justificatifs ici
                          </p>
                          <p className="text-xs text-gray-500 mt-1" style={{fontFamily: 'Inter Tight, sans-serif'}}>
                            ou
                          </p>
                          <label className="cursor-pointer">
                            <span className="text-black font-medium hover:underline" style={{fontFamily: 'Inter Tight, sans-serif'}}>
                              Parcourir les fichiers
                            </span>
                            <input
                              type="file"
                              className="hidden"
                              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                              onChange={(e) => e.target.files && handleFileChange(e.target.files[0])}
                            />
                          </label>
                        </div>
                        <p className="text-xs text-gray-400" style={{fontFamily: 'Inter Tight, sans-serif'}}>
                          PDF, DOC, DOCX, JPG, JPEG, PNG (max. 10MB)
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={onNext}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-black text-white rounded-2xl hover:bg-gray-800 transition-all duration-200 transform hover:scale-105"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  minWidth: '180px' 
                }}
              >
                Profil physique
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModeleForm;
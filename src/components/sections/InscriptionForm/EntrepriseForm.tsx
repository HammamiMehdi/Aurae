import React, { useState } from 'react';

const EntrepriseForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nomEntreprise: '',
    description: '',
    statutJuridique: '',
    tva: '',
    services: [] as string[],
    ville: '',
    pays: '',
    profession: '',
    justificatif: null as File | null
  });

  const [dragActive, setDragActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleInputChange = (field: string, value: string | string[]) => {
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
    console.log('Données du formulaire entreprise :', formData);
  };

  const handleServiceChange = (service: string) => {
    const currentServices = formData.services;
    if (currentServices.includes(service)) {
      handleInputChange('services', currentServices.filter(s => s !== service));
    } else {
      handleInputChange('services', [...currentServices, service]);
    }
  };

  const professions = [
    { value: '', label: 'Sélectionnez votre profession' },
    { value: 'directeur-artistique', label: 'Directeur-rice artistique / Créatif-ve' },
    { value: 'photographe', label: 'Photographe / Vidéaste / Retoucheur-se' },
    { value: 'styliste', label: 'Styliste / Make-up artist / Hairdresser' },
    { value: 'createur-contenu', label: 'Créateur-rice de contenu / Social media' }
  ];

  const statutsJuridiques = [
    { value: '', label: 'Sélectionnez le statut juridique' },
    { value: 'micro-entreprise', label: 'Micro-entreprise / Auto-entrepreneur' },
    { value: 'societe', label: 'Société (SAS, SARL, etc.)' },
    { value: 'en-cours', label: 'En cours de création' },
    { value: 'particulier', label: 'Particuliers' },
    { value: 'autre', label: 'Autres' }
  ];

  const services = [
    { value: 'direction-artistique', label: 'Direction artistique' },
    { value: 'photographie', label: 'Photographie / Vidéo / Retouche' },
    { value: 'stylisme', label: 'Stylisme / Wardrobe / Make-up / Hair' },
    { value: 'creation-contenu', label: 'Création de contenu / Social media' },
    { value: 'production', label: 'Production de campagne / shooting' },
    { value: 'autre', label: 'Autre' }
  ];
  return (
    <><div
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
          MA SOCIÉTÉ
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
                Profession
              </label>
              <select
                value={formData.profession}
                onChange={(e) => handleInputChange('profession', e.target.value)}
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
                {professions.map(profession => (
                  <option key={profession.value} value={profession.value}>
                    {profession.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-container mb-6"> 
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
              Nom de l'entreprise
            </label>
            <input
              type="text"
              placeholder="Entrez le nom de votre entreprise"
              value={formData.nomEntreprise}
              onChange={(e) => handleInputChange('nomEntreprise', e.target.value)}
              className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              style={{
                height: '60px',
                borderRadius: '15px',
                border: '1px solid #7E7C7E',
                padding: '16px',
                backgroundColor: '#FDF9F5',
                fontFamily: 'Inter Tight, sans-serif',
                fontSize: '14px'
              }} />
          </div>

          <div className="input-container mb-6">
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
            Ta société en 2 phrases
          </label>
          <textarea
            placeholder="Décris ta société en quelques mots"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            rows={3}
            className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
            style={{
              minHeight: '80px',
              borderRadius: '15px',
              border: '1px solid #7E7C7E',
              padding: '16px',
              backgroundColor: '#FDF9F5',
              fontFamily: 'Inter Tight, sans-serif',
              fontSize: '14px'
            }} />
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"> {/* Augmenté gap-4 à gap-6 et mb-4 à mb-6 */}
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
            Ville
          </label>
          <input
            type="text"
            placeholder="Entrez votre ville"
            value={formData.ville}
            onChange={(e) => handleInputChange('ville', e.target.value)}
            className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            style={{
              height: '60px',
              borderRadius: '15px',
              border: '1px solid #7E7C7E',
              padding: '16px',
              backgroundColor: '#FDF9F5',
              fontFamily: 'Inter Tight, sans-serif',
              fontSize: '14px'
            }} />
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
            Pays
          </label>
          <input
            type="text"
            placeholder="Entrez votre pays"
            value={formData.pays}
            onChange={(e) => handleInputChange('pays', e.target.value)}
            className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            style={{
              height: '60px',
              borderRadius: '15px',
              border: '1px solid #7E7C7E',
              padding: '16px',
              backgroundColor: '#FDF9F5',
              fontFamily: 'Inter Tight, sans-serif',
              fontSize: '14px'
            }} />
        </div>
      </div>

      <div className="input-container mb-6"> 
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
    </div><div className="input-container mb-6 relative"> 
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
        Services proposés
      </label><div className="relative">
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          style={{
            height: '60px',
            borderRadius: '15px',
            border: '1px solid #7E7C7E',
            padding: '16px',
            backgroundColor: '#FDF9F5',
            fontFamily: 'Inter Tight, sans-serif',
            fontSize: '12px'
          }}
        >
          <div className="flex justify-between items-center">
            <span className={formData.services.length > 0 ? 'text-black' : 'text-gray-400'}>
              {formData.services.length > 0
                ? `${formData.services.length} service(s) sélectionné(s)`
                : 'Sélectionnez vos services'}
            </span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {dropdownOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg" style={{ borderRadius: '15px' }}>
            <div className="p-3 space-y-2 max-h-60 overflow-y-auto">
              {services.map(service => (
                <label key={service.value} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <input
                    type="checkbox"
                    value={service.value}
                    checked={formData.services.includes(service.value)}
                    onChange={() => handleServiceChange(service.value)}
                    className="mr-3" />
                  <span className="text-sm" style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '12px' }}>
                    {service.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
            </div>

            <div className="input-container mb-6"> 
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
                Numéro de TVA intracommunautaire
              </label>
              <input
                type="text"
                placeholder="Ex: FR12345678901"
                value={formData.tva}
                onChange={(e) => handleInputChange('tva', e.target.value)}
                className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                style={{
                  height: '60px', 
                  borderRadius: '15px',
                  border: '1px solid #7E7C7E',
                  padding: '16px',
                  backgroundColor: '#FDF9F5',
                  fontFamily: 'Inter Tight, sans-serif',
                  fontSize: '14px'
                }}
              />
            </div>

            <div className="input-container mb-6">
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
                Justificatif d'entreprise
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
                          Glissez-déposez votre fichier ici
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

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-black text-white rounded-2xl hover:bg-gray-800 transition-all duration-200 transform hover:scale-105" 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px', 
                  minWidth: '180px' 
                }}
              >
                Finaliser l'inscription
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default EntrepriseForm;
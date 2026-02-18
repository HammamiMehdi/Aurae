import React, { useState } from 'react';

const InscriptionFormAgence: React.FC = () => {
  const [formData, setFormData] = useState({
    nomPrenom: '',
    dateNaissance: '',
    email: '',
    motDePasse: '',
    telephone: '',
    role: '',
    ville: '',
    pays: '',
    instagram: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Données Agence/Production :', formData);
  };

  const labelStyle = {
    fontFamily: 'Inter Tight, sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '100%',
    letterSpacing: '0px',
  };

  const inputStyle = {
    height: '60px',
    borderRadius: '15px',
    border: '1px solid #7E7C7E',
    padding: '16px',
    backgroundColor: '#FDF9F5',
    fontFamily: 'Inter Tight, sans-serif',
    fontSize: '14px'
  };

  return (
    <div 
      className="w-full"
      style={{ backgroundColor: '#F5F0EB' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> 
        <h2 
          className="text-black mb-8 text-center lg:text-left" 
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '24px', 
            lineHeight: '120%',
            letterSpacing: '-2%',
          }}
        >
          MON PROFIL AGENCE / PRODUCTION
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6"> 
          <div className="w-full max-w-2xl mx-auto lg:mx-0">
            
            {/* Nom et Date de naissance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="input-container">
                <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                  Nom du contact / Responsable
                </label>
                <input
                  type="text"
                  placeholder="Entrez nom et prénom"
                  value={formData.nomPrenom}
                  onChange={(e) => handleInputChange('nomPrenom', e.target.value)}
                  className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  style={inputStyle}
                />
              </div>

              <div className="input-container">
                <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                  Date de création
                </label>
                <input
                  type="date"
                  value={formData.dateNaissance}
                  onChange={(e) => handleInputChange('dateNaissance', e.target.value)}
                  className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Email et Mot de passe */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="input-container">
                <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                  Email professionnel
                </label>
                <input
                  type="email"
                  placeholder="agence@exemple.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  style={inputStyle}
                />
              </div>

              <div className="input-container">
                <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Votre mot de passe"
                    value={formData.motDePasse}
                    onChange={(e) => handleInputChange('motDePasse', e.target.value)}
                    className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    style={{ ...inputStyle, paddingRight: '50px' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Téléphone et Instagram */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="input-container">
                <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  placeholder="+33 6 00 00 00 00"
                  value={formData.telephone}
                  onChange={(e) => handleInputChange('telephone', e.target.value)}
                  className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  style={inputStyle}
                />
              </div>

              <div className="input-container">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-gray-700 block text-sm" style={labelStyle}>
                    Lien Instagram
                  </label>
                  <span className="text-xs text-gray-500 italic" style={{ ...labelStyle, fontSize: '12px' }}>
                    Facultatif
                  </span>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                  </div>
                  <input
                    type="url"
                    placeholder="https://instagram.com/agence"
                    value={formData.instagram}
                    onChange={(e) => handleInputChange('instagram', e.target.value)}
                    className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    style={{ ...inputStyle, paddingLeft: '48px' }}
                  />
                </div>
              </div>
            </div>

            {/* Rôle de l'agence */}
            <div className="mb-6">
              <div className="input-container">
                <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                Rôle
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  style={{
                    ...inputStyle,
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%237E7C7E' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 16px center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '16px' 
                  }}
                >
                  <option value="">Sélectionnez votre activité</option>
                  <option value="agence_mannequin">Agence de mannequin</option>
                  <option value="agence_talents">Agence de talents</option>
                  <option value="production">Production</option>
                </select>
              </div>
            </div>

            {/* Ville et Pays */}
            <div className="mb-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="input-container">
                  <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                    Ville du siège
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Paris"
                    value={formData.ville}
                    onChange={(e) => handleInputChange('ville', e.target.value)}
                    className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    style={inputStyle}
                  />
                </div>

                <div className="input-container">
                  <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                    Pays
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: France"
                    value={formData.pays}
                    onChange={(e) => handleInputChange('pays', e.target.value)}
                    className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>

            {/* Bouton de soumission décommenté pour l'exemple */}
           
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default InscriptionFormAgence;
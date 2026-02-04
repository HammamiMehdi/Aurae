import React from 'react';

interface ProfilPhysiqueFormProps {
  onPrevious?: () => void;
}

const ProfilPhysiqueForm: React.FC<ProfilPhysiqueFormProps> = ({ onPrevious }) => {
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
    fontSize: '14px',
  };

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
          Informations physiques / personnelles
        </h2>

        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="input-container">
              <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                Sexe
              </label>
              <input className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" style={inputStyle} />
            </div>

            <div className="input-container">
              <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                Âge
              </label>
              <input type="number" className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" style={inputStyle} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="input-container">
              <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                Taille
              </label>
              <input className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" style={inputStyle} />
            </div>

            <div className="input-container">
              <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                Poids
              </label>
              <input className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" style={inputStyle} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="input-container">
              <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                Pointure
              </label>
              <input className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" style={inputStyle} />
            </div>

            <div className="input-container">
              <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                Mensurations (buste / taille / hanches)
              </label>
              <input className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" style={inputStyle} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="input-container">
              <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                Couleur de cheveux
              </label>
              <input className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" style={inputStyle} />
            </div>

            <div className="input-container">
              <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                Longueur de cheveux
              </label>
              <input className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" style={inputStyle} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="input-container">
              <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                Couleur des yeux
              </label>
              <input className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" style={inputStyle} />
            </div>

            <div className="input-container">
              <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                Teint / carnation
              </label>
              <input className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" style={inputStyle} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="input-container">
              <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                Silhouette / morphotype
              </label>
              <input className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" style={inputStyle} />
            </div>

            <div className="input-container">
              <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                Autres particularités (tatouages, piercings, marques ...)
              </label>
              <input className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" style={inputStyle} />
            </div>
          </div>
        </div>

        <h3
          className="text-black mt-12 mb-6 text-center lg:text-left"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: '120%',
            letterSpacing: '-2%',
          }}
        >
          Photos à uploader
        </h3>

        <div className="space-y-6">
          <div className="input-container">
            <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
              Portrait / visage
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              style={inputStyle}
            />
          </div>

          <div className="input-container">
            <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
              Full body
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              style={inputStyle}
            />
          </div>

          <div className="input-container">
            <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
              Profil latéral
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              style={inputStyle}
            />
          </div>
        </div>

        {onPrevious && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={onPrevious}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-black text-black rounded-2xl hover:bg-black hover:text-white transition-all duration-200"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
                minWidth: '180px',
              }}
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5" />
                <path d="M11 19l-7-7 7-7" />
              </svg>
              Retour
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-2xl hover:bg-gray-800 transition-all duration-200 transform hover:scale-105"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                minWidth: '180px',
              }}
            >
              Finaliser l'inscription
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilPhysiqueForm;

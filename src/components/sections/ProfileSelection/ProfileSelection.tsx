import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileSelection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre principal */}
        <h2 
          className="text-center mb-12 sm:mb-16 md:mb-20"
          style={{
            fontFamily: 'Red Hat Mono, monospace',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '30px',
            lineHeight: '100%',
            letterSpacing: '0%',
          }}
        >
          Votre Profil
        </h2>

        {/* Container des photos avec les dimensions exactes */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          
          {/* Photo Client avec layout exact */}
          <div 
            className="flex flex-col items-center cursor-pointer group transition-all duration-500 hover:scale-105"
            onClick={() => navigate('/inscription-agence')}
            style={{
                width: '699px',
                height: '450px',
                gap: '10px',
              }}
          >
            <div 
              className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 w-full h-full"
              style={{
                backgroundImage: `url('/images/client.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Titre Client centré avec padding exact */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  paddingTop: '50%',
                  paddingRight: '50%',
                  paddingBottom: '50%',
                  paddingLeft: '50%',
                }}
              >
                <h3 
                  className="text-white text-center"
                  style={{
                    fontFamily: 'Red Hat Mono, monospace',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    fontSize: '40px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', // Ombre pour meilleure lisibilité
                  }}
                >
                  Client
                </h3>
              </div>
              
              {/* Overlay au hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Indicateur de hover */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                  Cliquez ici
                </div>
              </div>
            </div>
          </div>

          {/* Photo Mannequin avec layout exact */}
          <div 
            className="flex flex-col items-center cursor-pointer group transition-all duration-500 hover:scale-105"
            onClick={() => navigate('/inscription-modele')}
            style={{
              width: '699px',
              height: '450px',
              gap: '10px',
            }}
          >
            <div 
              className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 w-full h-full"
              style={{
                backgroundImage: `url('/images/mannequin.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Titre Mannequin centré avec padding exact */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    paddingTop: '50%',
                    paddingRight: '50%',
                    paddingBottom: '50%',
                    paddingLeft: '50%',
                  }}
              >
                <h3 
                  className="text-white text-center"
                  style={{
                    fontFamily: 'Red Hat Mono, monospace',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    fontSize: '40px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', // Ombre pour meilleure lisibilité
                  }}
                >
                  Mannequin
                </h3>
              </div>
              
              {/* Overlay au hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Indicateur de hover */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                  Cliquez ici
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Texte explicatif supplémentaire */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto" style={{fontFamily: 'Inter, sans-serif'}}>
            Choisissez votre profil pour commencer votre aventure avec Auræ Studio
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSelection;
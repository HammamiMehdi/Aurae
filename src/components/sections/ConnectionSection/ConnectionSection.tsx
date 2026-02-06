import React from 'react';
import { Link } from 'react-router-dom';

const ConnectionSection: React.FC = () => {
  return (
    <div className="relative w-full min-h-[800px] sm:min-h-[1000px] md:min-h-[1200px] lg:h-[1500px] overflow-hidden">
      <div className="absolute inset-0 z-0 min-h-full">
        <img 
          src="/images/Image_home2_page.jpg" 
          alt="Background" 
          className="w-full h-full object-cover scale-[1.8] sm:scale-[1.6] md:scale-[1.5] lg:scale-[1.6] translate-y-[-15%] translate-x-[-15%] sm:translate-x-[-10%] md:translate-x-[-5%] lg:translate-x-[-28%]"
        />
      </div>
      
      <div className="absolute inset-0 z-10 text-white px-4 sm:px-6 md:px-8">
        {/* Connexion - Positionné en haut à gauche */}
        <Link 
          to="/login"
          className="absolute top-4 sm:top-6 md:top-8 lg:top-6 left-4 sm:left-6 md:left-8 lg:left-6 cursor-pointer hover:opacity-80 transition-opacity"
          style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: 'clamp(28px, 5vw, 55px)',
            lineHeight: '120%',
            letterSpacing: '-2%',
          }}
        >
          Connexion
        </Link>

        {/* Vous êtes - Créatif */}
        <div className="absolute top-[18%] sm:top-[22%] md:top-[23%] lg:top-[20%] left-[2%] sm:left-[3%] md:left-[4%] lg:left-[13%]">
          <div 
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'Regular',
              fontSize: '17px',
              lineHeight: '120%',
              letterSpacing: '-2%',
              textAlign: 'center',
            }}
          >
            Vous êtes
          </div>

          <div 
            className="absolute top-[40px] sm:top-[50px] md:top-[60px] lg:top-[25px] left-0 sm:left-[15px] md:left-[30px] lg:left-[30px]"
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontStyle: 'bold',
              fontSize: 'clamp(28px, 5vw, 56px)',
              lineHeight: '120%',
              letterSpacing: '-2%',
            }}
          >
            Créatif
          </div>
        </div>

        {/* Mannequin */}
        <div className="absolute top-[400px] sm:top-[450px] md:top-[500px] lg:top-[550px] right-4 sm:right-8 md:right-12 lg:right-[100px]">
          <div 
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: 'clamp(32px, 5vw, 60px)',
              lineHeight: '120%',
              letterSpacing: '-2%',
              textAlign: 'right',
            }}
          >
            Mannequin
          </div>

          <div 
            className="absolute top-[80px] sm:top-[80px] md:top-[80px] lg:top-[80px] right-0 sm:right-0 md:right-[-4px] lg:right-[-40px]"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: 'clamp(12px, 1.5vw, 15px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'right',
            }}
          >
            Vous êtes
          </div>
        </div>

        

        

        <div 
          className="absolute top-[770px] left-4 sm:left-8 md:left-16 lg:left-[260px]"
          style={{
            fontFamily: 'Inter',
            fontWeight: 300,
            fontStyle: 'regular',
            fontSize: 'clamp(15px, 1.5vw, 17px)',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'left',
          }}
        >
          Vous êtes une
        </div>
          {/* Agence */}
        <div 
          className="absolute top-[780px] left-[340px]"
          style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: 'clamp(32px, 5vw, 60px)',
            lineHeight: '120%',
            letterSpacing: '-2%',
          }}
        >
          Agence
        </div>
        <div 
          className="absolute top-[825px] left-[570px]"
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: 'clamp(12px, 1.5vw, 15px)',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'left',
          }}
        >
          de mannequins
        </div>
        {/* Texte de connexion */}
        <div 
          className="absolute top-[70%]  left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[400px] max-w-[400px] px-4 py-3"
          style={{
            fontFamily: 'Inter',
            fontWeight: 600,
            fontStyle: 'normal',
            fontSize: 'clamp(12px, 1.5vw, 15px)',
            lineHeight: '140%',
            letterSpacing: '0%',
            textAlign: 'center',
            background: '#FFFFFF38',
            backdropFilter: 'blur(35px)',
            borderRadius: '26px',
          }}
        >
          Connectez-vous pour révéler votre présence.
        </div>

        {/* Texte description */}
        <div 
          className="absolute top-[90%]  left-1/2 transform -translate-x-1/2 w-[70%] px-4 pb-8 sm:pb-12 md:pb-16"
          style={{
            fontFamily: 'Inter',
            fontWeight: 300,
            fontStyle: 'regular',
            fontSize: '18px',
            lineHeight: '120%',
            letterSpacing: '-2%',
            textAlign: 'center',
          }}
        >
          Auræ redéfinit le casting à l'ère de l'intelligence artificielle.<br className="hidden sm:block" />
          <span className="block sm:inline"> </span>
          Une plateforme où mannequins, agences et créateurs visuels se connectent et collaborent à travers des outils <br/> intuitifs et sensibles.<br className="hidden sm:block" />
          <span className="block sm:inline"> </span>
          Grâce à l'IA, Auræ simplifie la recherche, le booking et la gestion des talents tout en ouvrant une nouvelle dimension : la création et la cession d'avatars IA, permettant des campagnes virtuelles, éthiques et sécurisées.
        </div>
      </div>
    </div>
  );
};

export default ConnectionSection;
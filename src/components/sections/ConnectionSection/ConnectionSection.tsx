import React from 'react';
import { Link } from 'react-router-dom';

const ConnectionSection: React.FC = () => {
  return (
    <div className="relative w-full min-h-[800px] sm:min-h-[1000px] md:min-h-[1200px] lg:h-[1500px] overflow-hidden">
      <div className="absolute inset-0 z-0 min-h-full">
        <img 
          src="/images/Image_home2_page.jpg" 
          alt="Background" 
          className="w-full h-full object-cover scale-[1.8] sm:scale-[1.6] md:scale-[1.5] lg:scale-[1.8] translate-y-[-15%] translate-x-[-15%] sm:translate-x-[-10%] md:translate-x-[-5%] lg:translate-x-[-15%]"
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
            fontSize: 'clamp(32px, 5vw, 60px)',
            lineHeight: '120%',
            letterSpacing: '-2%',
          }}
        >
          Connexion
        </Link>

        {/* Vous êtes - Créatif */}
        <div 
          className="absolute top-[200px] sm:top-[250px] md:top-[280px] lg:top-[300px] left-4 sm:left-8 md:left-12 lg:left-[163px]"
          style={{
            fontFamily: 'Red Hat Mono',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: 'clamp(12px, 1.5vw, 15px)',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'left',
          }}
        >
          Vous êtes
        </div>

        <div 
          className="absolute top-[220px] sm:top-[270px] md:top-[300px] lg:top-[320px] left-4 sm:left-8 md:left-16 lg:left-[250px]"
          style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: 'clamp(32px, 5vw, 60px)',
            lineHeight: '120%',
            letterSpacing: '-2%',
          }}
        >
          Créatif
        </div>

        {/* Mannequin */}
        <div 
          className="absolute top-[400px] sm:top-[450px] md:top-[500px] lg:top-[550px] right-4 sm:right-8 md:right-12 lg:right-[100px]"
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
          className="absolute top-[480px] sm:top-[530px] md:top-[580px] lg:top-[630px] right-4 sm:right-8 md:right-16 lg:right-[150px]"
          style={{
            fontFamily: 'Red Hat Mono',
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

        {/* Agence */}
        <div 
          className="absolute top-[600px] sm:top-[700px] md:top-[800px] lg:top-[850px] left-4 sm:left-8 md:left-16 lg:left-[379px]"
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
          className="absolute top-[650px] sm:top-[750px] md:top-[850px] lg:top-[900px] left-4 sm:left-12 md:left-24 lg:left-[570px]"
          style={{
            fontFamily: 'Red Hat Mono',
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

        <div 
          className="absolute top-[670px] sm:top-[770px] md:top-[870px] lg:top-[920px] left-4 sm:left-8 md:left-16 lg:left-[260px]"
          style={{
            fontFamily: 'Red Hat Mono',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: 'clamp(12px, 1.5vw, 15px)',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'left',
          }}
        >
          Vous êtes
        </div>

        {/* Texte de connexion */}
        <div 
          className="absolute top-[750px] sm:top-[900px] md:top-[1050px] lg:top-[1200px] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[1343px] max-w-[1343px] px-4"
          style={{
            fontFamily: 'Red Hat Mono',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: 'clamp(12px, 1.5vw, 15px)',
            lineHeight: '140%',
            letterSpacing: '0%',
            textAlign: 'center',
          }}
        >
          Connectez-vous pour révéler votre présence.
        </div>

        {/* Texte description */}
        <div 
          className="absolute top-[800px] sm:top-[950px] md:top-[1100px] lg:top-[1350px] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[90%] max-w-[1343px] px-4 pb-8 sm:pb-12 md:pb-16"
          style={{
            fontFamily: 'Red Hat Mono',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: 'clamp(11px, 1.3vw, 15px)',
            lineHeight: '160%',
            letterSpacing: '0%',
            textAlign: 'center',
          }}
        >
          Auræ redéfinit le casting à l'ère de l'intelligence artificielle.<br className="hidden sm:block" />
          <span className="block sm:inline"> </span>
          Une plateforme où mannequins, agences et créateurs visuels se connectent et collaborent à travers des outils intuitifs et sensibles.<br className="hidden sm:block" />
          <span className="block sm:inline"> </span>
          Grâce à l'IA, Auræ simplifie la recherche, le booking et la gestion des talents — tout en ouvrant une nouvelle dimension : la création et la cession d'avatars IA, permettant des campagnes virtuelles, éthiques et sécurisées.
        </div>
      </div>
    </div>
  );
};

export default ConnectionSection;
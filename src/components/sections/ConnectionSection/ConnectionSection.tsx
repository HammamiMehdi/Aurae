import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ConnectionSection: React.FC = () => {
  const navigate = useNavigate();

  const handleCreatifClick = () => {
    navigate('/inscription-createur');
  };
  const handleMannequinClick = () => {
    navigate('/inscription-modele');
  };

  const handleAgenceClick = () => {
    navigate('/inscription-agence');
  };

  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{
        minHeight: 'clamp(80rem, 180vh, 150rem)' // 800px à 1500px convertis en rem, responsive avec vh
      }}
    >
      <img 
        src="/images/Image_home2_page.png" 
        alt="Background" 
        className="absolute inset-0 z-0 object-cover "
        style={{
          width: '100%',
          height: '100%',
          minWidth: '100%',
          minHeight: '100%'
        }}
      />
      
      <div className="absolute inset-0 z-10 text-white px-4 sm:px-6 md:px-8">
        {/* Connexion - Positionné en haut à gauche */}
        <Link 
          to="/login"
          className="absolute top-4 sm:top-6 md:top-8 lg:top-6 left-4 sm:left-6 md:left-8 lg:left-6 cursor-pointer hover:opacity-80 transition-opacity"
          style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: 'clamp(1.5rem, 4vw, 3.4375rem)', // Responsive optimisé : 24px à 55px
            lineHeight: '120%',
            letterSpacing: '-2%',
          }}
        >
          Connexion
        </Link>

        {/* Vous êtes - Créatif */}
        <div className="absolute top-[17%] sm:top-[20%] md:top-[21%] lg:top-[19%] left-[12%] cursor-pointer hover:opacity-80 transition-opacity" onClick={handleCreatifClick}>
          <div 
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'Regular',
              fontSize: 'clamp(0.875rem, 1.2vw, 1.0625rem)', // Responsive : 14px à 17px
              lineHeight: '120%',
              letterSpacing: '-2%',
              textAlign: 'center',
            }}
          >
            Vous êtes
          </div>

          <div 
            className="absolute left-0 sm:left-[0.9375rem] md:left-[1.875rem] lg:left-[1.875rem]"
            style={{
              top: 'clamp(1.35rem, 1.6vh, 1.1rem)', // Marge réduite : 20px à 15px convertis en rem
              fontFamily: 'Inter',
              fontWeight: 700,
              fontStyle: 'bold',
              fontSize: 'clamp(1.5rem, 4vw, 3.5rem)', // Responsive optimisé : 24px à 56px
              lineHeight: '120%',
              letterSpacing: '-2%',
            }}
          >
            Créatif
          </div>
        </div>

        {/* Mannequin */}
        <div 
          className="absolute right-1 sm:right-4 md:right-8 lg:right-[10rem] cursor-pointer hover:opacity-80 transition-opacity"
          style={{
            top: 'clamp(30rem, 52vh, 37rem)' // Déplacé vers le bas
          }}
          onClick={handleMannequinClick}
        >
          <div 
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: 'clamp(1.75rem, 4vw, 3.75rem)', // Responsive optimisé : 28px à 60px
              lineHeight: '120%',
              letterSpacing: '-2%',
              textAlign: 'right',
              marginRight: '30px'
            }}
          >
            Mannequin
          </div>

          <div 
            className="absolute right-0"
            style={{
              top: 'clamp(5rem, 7vh, 5.5rem)', // Marge augmentée : 80px à 88px convertis en rem
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: 'clamp(0.6875rem, 1.2vw, 0.9375rem)', // Responsive optimisé : 11px à 15px
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'right',
            }}
          >
            Vous êtes
          </div>
        </div>

        

        

        {/* Conteneur pour "Vous êtes une", "Agence" et "de mannequins" */}
        <div 
          className="absolute sm:left-4 md:left-8 lg:left-[8rem] w-auto cursor-pointer hover:opacity-80 transition-opacity"
          style={{
            top: 'clamp(45rem, 70vh, 45rem)', // 770px converti en rem, responsive avec vh
            width: '40%',
          }}
          onClick={handleAgenceClick}
        >
          {/* Vous êtes une */}
          <div 
            style={{
              fontFamily: 'Inter',
              fontWeight: 300,
              fontStyle: 'regular',
              fontSize: 'clamp(0.875rem, 1.2vw, 1.0625rem)', // Responsive optimisé : 14px à 17px
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'left',
            }}
          >
            Vous êtes une
          </div>
          
          {/* Agence */}
          <div 
            className="absolute"
            style={{
              top: 'clamp(0.625rem, 1vh, 0.625rem)', // Position relative au conteneur
              left: 'clamp(5rem, 15vw, 5rem)', // Position relative au conteneur
              fontFamily: 'Inter',
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: 'clamp(2rem, 5vw, 3.75rem)', // 32px à 60px convertis en rem
              lineHeight: '120%',
              letterSpacing: '-2%',
              marginTop: '30px'
            }}
          >
            Agence
          </div>
          
          {/* de mannequins */}
          {/* <div 
            className="absolute"
            style={{
              top: 'clamp(3.4375rem, 5vh, 3.4375rem)', // Position relative au conteneur
              left: 'clamp(19.625rem, 35vw, 19.625rem)', // Position relative au conteneur
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: 'clamp(0.75rem, 1.5vw, 0.9375rem)', // 12px à 15px convertis en rem
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'left',
            }}
          >
            de mannequins
          </div> */}
        </div>
        {/* Texte de connexion */}
        <div 
          className="absolute top-[70%] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[60%] px-4 py-3"
          style={{
            maxWidth: '25rem', // 400px converti en rem
            fontFamily: 'Inter',
            fontWeight: 600,
            fontStyle: 'normal',
            fontSize: 'clamp(0.75rem, 1.5vw, 0.9375rem)', // 12px à 15px convertis en rem
            lineHeight: '140%',
            letterSpacing: '0%',
            textAlign: 'center',
            background: '#FFFFFF38',
            backdropFilter: 'blur(35px)',
            borderRadius: '1.625rem', // 26px converti en rem
          }}
        >
          Connectez-vous pour révéler votre présence.
        </div>

        {/* Texte description */}
        <div 
          className="absolute top-[90%] left-1/2 transform -translate-x-1/2 w-[70%] px-4 pb-8 sm:pb-12 md:pb-16"
          style={{
            fontFamily: 'Inter',
            fontWeight: 300,
            fontStyle: 'regular',
            fontSize: 'clamp(0.875rem, 1.1vw, 1.125rem)', // Responsive optimisé : 14px à 18px
            lineHeight: '120%',
            letterSpacing: '-2%',
            textAlign: 'center',
          }}
        >
          Auræ est une nouvelle manière de penser le casting.<br className="hidden sm:block" />
          <span className="block sm:inline"> </span>
          Un espace dédié aux talents — photographes, réalisateurs, set designers, illustrateurs, mannequins — et à celles  <br/>et ceux qui veulent créer autrement.
 <br className="hidden sm:block" />
          <span className="block sm:inline"> </span>
          Ici, les rencontres deviennent des collaborations, les intuitions deviennent des projets, et chaque talent trouve sa <br/>juste visibilité.
        </div>
      </div>
    </div>
  );
};

export default ConnectionSection;
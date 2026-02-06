import React from 'react';

interface HeroBackgroundProps {
  imageUrl: string;
  overlayOpacity?: number; // Ajout de la propriété optionnelle
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ imageUrl, overlayOpacity = 0.4 }) => {
  return (
    <>
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat w-full h-full"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          // Positionnement vertical responsive : s'adapte entre 40% et 50% selon la taille de l'écran
          backgroundPosition: 'center clamp(48%, 45vw, 50%)',
          // Zoom progressif : s'adapte entre 110% et 120% selon la largeur de l'écran
          backgroundSize: 'clamp(110%, 130vw, 120%) auto',
          // Zoom uniforme : léger zoom progressif entre 1.0 et 1.1 selon la largeur
          transform: 'scale(clamp(1.0, 1.05vw, 1.1)) translateX(clamp(-5%, -2vw, 0%))',
          transformOrigin: 'center center',
          filter: 'brightness(1.80)',
          width: '100%',
          height: '100%'
        }}
      />
      <div 
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />
    </>
  );
};

export default HeroBackground;
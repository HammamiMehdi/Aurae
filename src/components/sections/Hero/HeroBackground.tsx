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
          backgroundPosition: 'center 47%',
          filter: 'brightness(1.60)', 
          transform: 'scale(1.10)',
        }}
      />
      <div 
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }} // Utilisation de la prop
      />
    </>
  );
};

export default HeroBackground;
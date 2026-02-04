import React from 'react';

interface HeroBackgroundProps {
  imageUrl: string;
  overlayOpacity?: number; // Ajout de la propriété optionnelle
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ imageUrl, overlayOpacity = 0.4 }) => {
  return (
    <>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          filter: 'brightness(1.60)', // ⬅️ éclaircit l’image
          transform: 'scale(1.20)',
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
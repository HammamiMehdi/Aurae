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
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
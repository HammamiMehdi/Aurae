import React from 'react';

interface HeroFooterProps {
  textSize?: 'small' | 'medium' | 'large';
  textColor?: string;
}

const HeroFooter: React.FC<HeroFooterProps> = ({ 
  textSize = 'medium',
  textColor = 'text-white'
}) => {
  // Configuration des tailles
  const textSizes = {
    small: 'clamp(10px, 1vw, 14px)',
    medium: 'clamp(12px, 1.2vw, 16px)',
    large: 'clamp(14px, 1.5vw, 18px)'
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
      <div className="mx-auto px-4 sm:px-6 md:px-8">
        <p 
          className={`font-normal ${textColor}`}
          style={{
            fontFamily: 'Red Hat Mono, monospace',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: textSizes[textSize],
            lineHeight: '100%',
            letterSpacing: '0',
            textAlign: 'center',
            fontVariantNumeric: 'lining-nums proportional-nums',
            margin: 0,
          }}
        >
          <span className="block sm:inline">
            Auræ est une plateforme de casting intelligente qui connecte mannequins, agences et créatifs du monde entier.
          </span>
          <span className="block sm:inline mt-2 sm:mt-0">
            {' '}Elle permet de réserver un mannequin réel ou d'accéder à son avatar IA pour créer des campagnes à distance en toute simplicité.
          </span>
        </p>
      </div>
    </div>
  );
};

export default HeroFooter;
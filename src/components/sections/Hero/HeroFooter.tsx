import React from 'react';

interface HeroFooterProps {
  textSize?: 'small' | 'medium' | 'large';
  textColor?: string;
}

const HeroFooter: React.FC<HeroFooterProps> = ({ 
  textColor = 'text-white'
}) => {
  return (
    <div 
      className="absolute bottom-0 left-0 right-0"
      style={{
        padding: 'clamp(0.5rem, 1.5vw, 1rem)'
      }}
    >
      <div 
        className="mx-auto"
        style={{
          width: 'clamp(70%, 75vw, 80%)',
          paddingLeft: 'clamp(1rem, 3vw, 2rem)',
          paddingRight: 'clamp(1rem, 3vw, 2rem)'
        }}
      >
        <p 
          className={`font-normal ${textColor}`}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: 'clamp(0.625rem, 1.1vw, 0.875rem)', // Réduit : 10px à 14px convertis en rem
            lineHeight: '120%',
            letterSpacing: '-2%',
            textAlign: 'center',
            margin: 0,
          }}
        >
          <span className="block sm:inline">
          Auræ est une plateforme de casting intelligente qui connecte talents, agences et créatifs du monde entier.
          </span><br/>
          <span className="block sm:inline mt-2 sm:mt-0">
            {' '}Elle permet de réserver un talent (photographe, illustrateur, set designer…), un talent réel ou son avatar IA pour créer des campagnes à <br/>distance en toute simplicité.
          </span>
        </p>
      </div>
    </div>
  );
};

export default HeroFooter;
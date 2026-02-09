import React from 'react';

interface HeroContentProps {
  mainText: string;
  subText: string;
  textSizes?: {
    mainText?: 'small' | 'medium' | 'large';
    subText?: 'small' | 'medium' | 'large';
  };
}

const HeroContent: React.FC<HeroContentProps> = ({ 
  mainText, 
  subText, 
}) => {



  return (
    <div 
      className="flex-grow flex items-center justify-center relative"
      style={{
        paddingLeft: 'clamp(1rem, 3vw, 2rem)',
        paddingRight: 'clamp(1rem, 3vw, 2rem)'
      }}
    >
      <div 
        className="text-center w-full"
        style={{
          maxWidth: 'clamp(20rem, 80vw, 56rem)',
          paddingLeft: 'clamp(1rem, 3vw, 2rem)',
          paddingRight: 'clamp(1rem, 3vw, 2rem)',
          transform: 'translateY(clamp(-4rem, -8vh, 3rem))' // Déplace le contenu vers le haut
        }}
      >
        {/* Texte principal */}
        <div style={{ marginBottom: 'clamp(0.5rem, 2vw, 1.5rem)' }}>
          <span 
            className="text-white font-bold block"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: 'clamp(2.8125rem, 10vw, 7.5rem)', // 45px à 120px convertis en rem
              lineHeight: '120%',
              letterSpacing: '-2%',
            }}
          >
            {mainText}
          </span>
        </div>

        {/* Sous-texte */}
        <div style={{ marginBottom: 'clamp(1.5rem, 4vw, 4rem)' }}>
          <p 
            className="text-white font-normal mx-auto"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: 'clamp(0.75rem, 1.5vw, 1.125rem)', // 12px à 18px convertis en rem
              lineHeight: '120%',
              letterSpacing: '-2%',
              textAlign: 'center',
              margin: '0 auto',
              maxWidth: '100%',
            }}
          >
            {subText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
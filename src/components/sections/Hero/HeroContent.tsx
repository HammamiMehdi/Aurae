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
          paddingRight: 'clamp(1rem, 3vw, 2rem)'
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
              fontSize: 'clamp(50px, 10vw, 150px)',
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
              fontSize: 'clamp(12px, 1.5vw, 18px)',
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
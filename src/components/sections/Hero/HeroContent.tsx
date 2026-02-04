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
  textSizes = { mainText: 'large', subText: 'medium' }
}) => {
  // Configuration des tailles
  const mainTextSizes = {
    small: 'clamp(30px, 6vw, 60px)',
    medium: 'clamp(40px, 8vw, 80px)',
    large: 'clamp(50px, 10vw, 100px)'
  };

  const subTextSizes = {
    small: 'clamp(12px, 1.5vw, 14px)',
    medium: 'clamp(14px, 2vw, 16px)',
    large: 'clamp(16px, 2.5vw, 18px)'
  };

  return (
    <div className="flex-grow flex items-center justify-center relative px-4 sm:px-6 md:px-8">
      <div className="text-center max-w-4xl w-full px-4 sm:px-6 md:px-8">
        {/* Texte principal */}
        <div className="mb-2 sm:mb-4 md:mb-6">
          <span 
            className="text-white font-bold block"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: mainTextSizes[textSizes.mainText || 'large'],
              lineHeight: '120%',
              letterSpacing: '-2%',
            }}
          >
            {mainText}
          </span>
        </div>

        {/* Sous-texte */}
        <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <p 
            className="text-white font-normal mx-auto"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: subTextSizes[textSizes.subText || 'medium'],
              lineHeight: '120%',
              letterSpacing: '-2%',
              textAlign: 'center',
              margin: '0 auto',
              maxWidth: '100%',
              width: 'clamp(250px, 35vw, 320px)'
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
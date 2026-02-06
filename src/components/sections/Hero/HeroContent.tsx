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
              fontSize: '110px',
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
              fontSize: '14px',
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
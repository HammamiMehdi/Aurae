import React from 'react';

interface HeroFooterProps {
  textSize?: 'small' | 'medium' | 'large';
  textColor?: string;
}

const HeroFooter: React.FC<HeroFooterProps> = ({ 
  textColor = 'text-white'
}) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-2 ">
      <div className="mx-auto w-[80%] sm:w-[85%] md:w-[75%] lg:w-[80%] xl:w-[68%] px-4 sm:px-6 md:px-8">
        <p 
          className={`font-normal ${textColor}`}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: '13px',
            lineHeight: '120%',
            letterSpacing: '-2%',
            textAlign: 'center',
            margin: 0,
          }}
        >
          <span className="block sm:inline">
            Auræ est une plateforme de casting intelligente qui connecte mannequins, agences et créatifs du monde entier.
          </span><br/>
          <span className="block sm:inline mt-2 sm:mt-0">
            {' '}Elle permet de réserver un mannequin réel ou d'accéder à son avatar IA pour créer des campagnes à distance en toute<br/> simplicité.
          </span>
        </p>
      </div>
    </div>
  );
};

export default HeroFooter;
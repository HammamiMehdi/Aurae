import React from 'react';

const HeaderMinimal: React.FC = () => {
  return (
    <header className="flex justify-start items-center p-4 flex-shrink-0">
      <div className="text-black">
        <h1 
          className="text-[24px] font-bold leading-[43.2px] tracking-[-0.72px]" // Réduit de 30px à 24px
          style={{ 
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontStyle: 'normal'
          }}
        >
          <span>Auræ</span>{' '}
          <span 
            className="italic text-[24px] leading-[43.2px] tracking-[-0.72px]" // Réduit de 30px à 24px
            style={{ 
              fontFamily: 'Instrument Sans, sans-serif',
              fontWeight: 400,
              fontStyle: 'italic'
            }}
          >
            Studio
          </span>
        </h1>
      </div>
    </header>
  );
};

export default HeaderMinimal;
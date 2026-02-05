import React from 'react';

const MessagerieTitle: React.FC = () => {
  return (
    <div className="flex items-center justify-between gap-8 mb-8">
      {/* Title Text */}
      <h2
        className="text-black text-left flex-shrink-0"
        style={{
          fontFamily: 'Inter',
          fontWeight: 700,
          fontStyle: 'bold',
          fontSize: '120px',
          lineHeight: '120%',
          letterSpacing: '-2%',
        }}
      >
        Messagerie 
      </h2>

      {/* Search Bar */}
      <div className="flex-shrink-0 flex items-center bg-gray-30 rounded-lg px-4 py-3 min-w-[300px]">
        <input
          type="text"
          placeholder="Cherche un mot, une personne..."
          className="flex-grow bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '12px',
            lineHeight: '120%',
            letterSpacing: '-2%',
          }}
        />
        {/* Search Icon */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ACB1C6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2 flex-shrink-0"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </div>
    </div>
  );
};

export default MessagerieTitle;

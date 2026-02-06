import { motion } from 'framer-motion';
import React from 'react';

const Contrat: React.FC = () => {
  return (
    <div className="w-full my-8">
      {/* Title */}
      <motion.h1
          className="text-gray-900 mb-12 text-left"
          style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontStyle: 'bold',
            fontSize: '45px',
            lineHeight: '120%',
            letterSpacing: '-2%',
            marginLeft: '20px',
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Contrat
        </motion.h1>
        
      
      {/* Image */}
      <div className="w-full relative" style={{ padding: '0 20px' }}>
        <img
          src="/images/contract.png"
          alt="Contrat"
          className="w-full h-[440px] object-cover"
        />
        {/* CTA Button */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button
            style={{
              backdropFilter: 'blur(35px)',
              background: '#FFFFFF38',
              borderRadius: '26px',
              width: '200px',
              padding: '12px 24px',
              fontFamily: 'Inter',
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: '15px',
              lineHeight: '120%',
              letterSpacing: '-2%',
              textAlign: 'center',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Modifier le contrat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contrat;

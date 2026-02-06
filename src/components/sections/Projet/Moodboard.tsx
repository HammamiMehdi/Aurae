import { motion } from 'framer-motion';
import React from 'react';

const Moodboard: React.FC = () => {
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
          Moodboard
        </motion.h1>
        
      
      {/* Image */}
      <div className="w-full" style={{ padding: '0 20px' }}>
        <img
          src="/images/moodbaord.png"
          alt="Moodboard"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Moodboard;

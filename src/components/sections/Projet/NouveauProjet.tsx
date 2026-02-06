import React from 'react';
import { motion } from 'framer-motion';

const NouveauProjet: React.FC = () => {
  return (
    <motion.div 
      className="w-full bg-white py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full" style={{ padding: '0 20px' }}>
        {/* Titre principal */}
        <motion.h1 
          className="text-gray-900 mb-4"
          style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontStyle: 'bold',
            fontSize: '45px',
            lineHeight: '120%',
            letterSpacing: '-2%',
            textAlign: 'left',
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Nouveau Projet
        </motion.h1>

        {/* Titre Brief */}
        <motion.h2 
          className="text-gray-900 mb-12"
          style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontStyle: 'bold',
            fontSize: '45px',
            lineHeight: '120%',
            letterSpacing: '-2%',
            textAlign: 'left',
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Brief
        </motion.h2>

        {/* Section Client / Brand - Alignement parfait */}
        <motion.div 
          className="flex items-start mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div 
            className="text-gray-900 flex-shrink-0"
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontStyle: 'bold',
              fontSize: '12px',
              lineHeight: '120%',
              letterSpacing: '-2%',
              width: '160px',
              minWidth: '160px',
            }}
          >
            Client / Brand :
          </div>
          
          <div 
            className="text-gray-700 flex-grow"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'regular',
              fontSize: '12px',
              lineHeight: '120%',
              letterSpacing: '-2%',
            }}
          >
            Lorem ipsum dolor
          </div>
        </motion.div>

        {/* Section Storytelling - Alignement parfait avec texte long */}
        <motion.div 
          className="flex items-start mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div 
            className="text-gray-900 flex-shrink-0"
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontStyle: 'bold',
              fontSize: '12px',
              lineHeight: '120%',
              letterSpacing: '-2%',
              width: '160px',
              minWidth: '160px',
            }}
          >
            Storytelling :
          </div>
          
          <div 
            className="text-gray-700 flex-grow"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'regular',
              fontSize: '12px',
              lineHeight: '120%',
              letterSpacing: '-2%',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
          </div>
        </motion.div>

        {/* Section Localisation - Alignement parfait */}
        <motion.div 
          className="flex items-start mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div 
            className="text-gray-900 flex-shrink-0"
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontStyle: 'bold',
              fontSize: '12px',
              lineHeight: '120%',
              letterSpacing: '-2%',
              width: '160px',
              minWidth: '160px',
            }}
          >
            Localisation :
          </div>
          
          <div 
            className="text-gray-700 flex-grow"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'regular',
              fontSize: '12px',
              lineHeight: '120%',
              letterSpacing: '-2%',
            }}
          >
            Lorem ipsum dolor
          </div>
        </motion.div>

        {/* Section Date - Alignement parfait */}
        <motion.div 
          className="flex items-start mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div 
            className="text-gray-900 flex-shrink-0"
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontStyle: 'bold',
              fontSize: '12px',
              lineHeight: '120%',
              letterSpacing: '-2%',
              width: '160px',
              minWidth: '160px',
            }}
          >
            Date :
          </div>
          
          <div 
            className="text-gray-700 flex-grow"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'regular',
              fontSize: '12px',
              lineHeight: '120%',
              letterSpacing: '-2%',
            }}
          >
            Lorem ipsum dolor
          </div>
        </motion.div>

        {/* Section Budget - Alignement parfait */}
        <motion.div 
          className="flex items-start mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div 
            className="text-gray-900 flex-shrink-0"
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontStyle: 'bold',
              fontSize: '12px',
              lineHeight: '120%',
              letterSpacing: '-2%',
              width: '160px',
              minWidth: '160px',
            }}
          >
            Budget modèle :
          </div>
          
          <div 
            className="text-gray-700 flex-grow"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'regular',
              fontSize: '12px',
              lineHeight: '120%',
              letterSpacing: '-2%',
            }}
          >
            Lorem ipsum dolor
          </div>
        </motion.div>

        {/* Section Nombre de modèles - Alignement parfait */}
        <motion.div 
          className="flex items-start"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div 
            className="text-gray-900 flex-shrink-0"
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontStyle: 'bold',
              fontSize: '12px',
              lineHeight: '120%',
              letterSpacing: '-2%',
              width: '160px',
              minWidth: '160px',
            }}
          >
            Nombre de modèles :
          </div>
          
          <div 
            className="text-gray-700 flex-grow"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'regular',
              fontSize: '12px',
              lineHeight: '120%',
              letterSpacing: '-2%',
            }}
          >
            Lorem ipsum dolor
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NouveauProjet;
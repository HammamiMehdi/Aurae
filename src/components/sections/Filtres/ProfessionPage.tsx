import React, { useState } from 'react';
import {  useLocation } from 'react-router-dom';
import Footer from '../../layout/Footer';
import Navigation from '../../layout/Navigation';
import type { NavItem } from '../../../types/profiles';
import HeaderStandard from '../../layout/HeaderStandard';
import { motion, AnimatePresence } from 'framer-motion';
import { PhysicalSpecsModal } from '../../ui/modals/PhysicalSpecsModal';
import { DestinationSuggestions } from '../../ui/modals/DestinationSuggestions';

const ProfessionPage: React.FC = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState<string>(location.pathname);
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [showPhysicalSpecsModal, setShowPhysicalSpecsModal] = useState<boolean>(false);
  const [showDestinationModal, setShowDestinationModal] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { label: 'Home page', href: '/' },
    { label: 'Aurae Profile', href: '/profile-agence' },
    { label: 'Trouver un talent', href: '/Models' },
    { label: 'Matchs & Chat', href: '/matchs' },
    { label: 'Contact & RDV', href: 'https://calendly.com/constance-landowski/30min' },
  ];

  const handleNavClick = (href: string) => {
    setActiveNav(href);
  };

  const professionButtons = [
    'Un/une photographe',
    'Un/une réalisateur(trice)',
    'Un/une mannequin',
    'Un/une set designer(euse)',
    'Un/une illustrateur(trice)'
  ];

  const filterButtons = [
    {
      content: 'Localisation | Où se situe la présence recherchée ?'
    },
    {
      content: 'Disponibilité | Quand le projet prend-il place ?'
    },
    {
      content: 'Apparence | Qui recherchez-vous ?'
    },
    {
      content: 'Type de présence | Réelle, IA ou hybride'
    }
  ];

  const handleProfessionClick = () => {
    // Démarrer l'animation de slide avec un léger délai pour l'effet
    setShowFilters(true);
  };

  const handleBackClick = () => {
    setShowFilters(false);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `url('/images/filtrespage.png')`,
          backgroundSize: '100% auto',
          backgroundPosition: 'top center',
          width: '100%',
          height: '100%',
        }}
      />

<HeaderStandard textColor="text-white" />

      {/* Navigation */}
      <div className="relative z-50">
        <Navigation
          navItems={navItems}
          activeNav={activeNav}
          onNavClick={handleNavClick}
          textColor="text-white"
          justify="center"
        />
      </div>

      {/* Contenu principal */}
      <div className="relative z-40 flex flex-col items-center">
        {/* Texte "Un nouveau langage du casting" */}
        <div
          className="text-center"
          style={{
            marginTop: '200px',
          }}
        >
          <h1
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontStyle: 'bold',
              fontSize: '50px',
              lineHeight: '120%',
              letterSpacing: '-2%',
              color: '#FFFFFF',
            }}
          >
            Un nouveau langage du casting
          </h1>
        </div>

        {/* Texte "Composer un casting, autrement." */}
        <div className="text-center" style={{ marginTop: '4%', marginBottom: '7%' }}>
          <p
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontStyle: 'italic',
              fontSize: '14px',
              lineHeight: '120%',
              letterSpacing: '-2%',
              color: '#FFFFFF',
            }}
          >
            Composer un casting, autrement.
          </p>
        </div>

        {/* Conteneur pour les boutons de profession et les filtres */}
        <div
          className="flex flex-col items-center mt-24 relative"
          style={{
            width: '300px',
            minHeight: '500px',
          }}
        >
          {/* Boutons de profession - Slide vers la gauche quand sélectionné */}
          <AnimatePresence mode="wait">
            {!showFilters && (
              <motion.div
                key="professions"
                initial={{ x: 0, opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ 
                  x: -400, 
                  opacity: 0, 
                  scale: 0.8,
                  filter: 'blur(8px)',
                  rotateY: -15
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.4, 0, 0.2, 1], // ease-in-out avec courbe personnalisée
                  staggerChildren: 0.05
                }}
                className="flex flex-col items-center w-full"
                style={{
                  gap: '40px',
                  transformStyle: 'preserve-3d',
                }}
              >
                {professionButtons.map((buttonText, index) => (
                  <motion.button
                    key={index}
                    onClick={handleProfessionClick}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ 
                      opacity: 0, 
                      x: -300,
                      scale: 0.9,
                      transition: { delay: index * 0.05 }
                    }}
                    transition={{ 
                      duration: 0.3,
                      ease: 'easeOut'
                    }}
                    className="cursor-pointer transition-all"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #9A9A9A',
                      boxShadow: '0px 3px 10px 0px #00000040',
                      borderRadius: '20px',
                      paddingTop: '25px',
                      paddingRight: '20px',
                      paddingBottom: '25px',
                      paddingLeft: '20px',
                      width: '100%',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 700,
                        fontStyle: 'bold',
                        fontSize: '16px',
                        lineHeight: '120%',
                        letterSpacing: '-2%',
                        color: '#000000',
                      }}
                    >
                      {buttonText}
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Boutons de filtre - Slide depuis la droite */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                key="filters"
                initial={{ 
                  x: 400, 
                  opacity: 0, 
                  scale: 0.8,
                  filter: 'blur(8px)',
                  rotateY: 15
                }}
                animate={{ 
                  x: 0, 
                  opacity: 1, 
                  scale: 1,
                  filter: 'blur(0px)',
                  rotateY: 0
                }}
                exit={{ 
                  x: 400, 
                  opacity: 0,
                  scale: 0.8,
                  filter: 'blur(8px)',
                  rotateY: 15
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.4, 0, 0.2, 1], // ease-in-out avec courbe personnalisée
                  staggerChildren: 0.08
                }}
                className="flex flex-col items-center w-full absolute top-0"
                style={{
                  gap: '40px',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Bouton retour */}
                <motion.button
                  onClick={handleBackClick}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="cursor-pointer transition-all mb-4"
                  style={{
                    background: 'transparent',
                    border: '1px solid #FFFFFF',
                    borderRadius: '20px',
                    paddingTop: '10px',
                    paddingRight: '20px',
                    paddingBottom: '10px',
                    paddingLeft: '20px',
                    width: '100%',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 700,
                      fontStyle: 'bold',
                      fontSize: '14px',
                      lineHeight: '120%',
                      letterSpacing: '-2%',
                      color: '#FFFFFF',
                    }}
                  >
                    ← Retour
                  </span>
                </motion.button>

                {/* Boutons de filtre */}
                {filterButtons.map((button, index) => {
                  const [title, subtitle] = button.content.split(' | ');
                  const isApparenceButton = title === 'Apparence';
                  const isLocalisationButton = title === 'Localisation';
                  
                  return (
                    <motion.button
                      key={index}
                      onClick={() => {
                        if (isApparenceButton) {
                          setShowPhysicalSpecsModal(true);
                        } else if (isLocalisationButton) {
                          setShowDestinationModal(true);
                        } else {
                          setIsOverlayOpen(true);
                        }
                      }}
                      initial={{ opacity: 0, x: 100, y: 20 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      exit={{ 
                        opacity: 0, 
                        x: 300,
                        scale: 0.9,
                        transition: { delay: index * 0.05 }
                      }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ 
                        duration: 0.4,
                        delay: index * 0.1,
                        ease: 'easeOut'
                      }}
                      className="cursor-pointer transition-all"
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid #9A9A9A',
                        boxShadow: '0px 3px 10px 0px #00000040',
                        borderRadius: '20px',
                        paddingTop: '9px',
                        paddingRight: '20px',
                        paddingBottom: '9px',
                        paddingLeft: '20px',
                        width: '100%',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 700,
                          fontStyle: 'bold',
                          fontSize: '16px',
                          lineHeight: '120%',
                          letterSpacing: '-2%',
                          color: '#000000',
                        }}
                      >
                        {title}
                      </span>
                      <span
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 700,
                          fontStyle: 'bold',
                          fontSize: '14px',
                          lineHeight: '120%',
                          letterSpacing: '-2%',
                          color: '#C4C4C4',
                        }}
                      >
                        {subtitle}
                      </span>
                    </motion.button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Texte "Explorer les présences" */}
        <div className="text-center mt-24">
          <p
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '14px',
              lineHeight: '120%',
              letterSpacing: '-2%',
              color: '#FFFFFF',
            }}
          >
            Explorer les présences
          </p>
        </div>

        {/* Texte "Chaque présence est une histoire, un langage, une possibilité." */}
        <div className="text-center mt-32" style={{marginBottom: '28%' }}>
          <p
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontStyle: 'italic',
              fontSize: '11px',
              lineHeight: '120%',
              letterSpacing: '-2%',
              color: '#FFFFFF',
            }}
          >
            Chaque présence est une histoire, un langage, une possibilité.
          </p>
        </div>
      </div>

      {/* Overlay pour les autres filtres */}
      <AnimatePresence>
        {isOverlayOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
            onClick={() => setIsOverlayOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-white rounded-lg p-8 max-w-md mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h2
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  fontSize: '32px',
                  color: '#000000',
                  textAlign: 'center',
                  marginBottom: '16px',
                }}
              >
                Suggestions de destinations
              </h2>
              <button
                onClick={() => setIsOverlayOpen(false)}
                className="mt-4 px-6 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                style={{
                  fontFamily: 'Inter',
                  fontSize: '14px',
                }}
              >
                Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal PhysicalSpecsModal pour le filtre Apparence */}
      <AnimatePresence>
        {showPhysicalSpecsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
            onClick={() => setShowPhysicalSpecsModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl"
            >
              <PhysicalSpecsModal onClose={() => setShowPhysicalSpecsModal(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal DestinationSuggestions pour le filtre Localisation */}
      <AnimatePresence>
        {showDestinationModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
            onClick={() => setShowDestinationModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm"
            >
              <DestinationSuggestions onClose={() => setShowDestinationModal(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="relative z-40 mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default ProfessionPage;

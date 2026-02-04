import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeroProfileAgenceProps {
  backgroundImage: string;
}

const HeroProfileAgence: React.FC<HeroProfileAgenceProps> = ({ backgroundImage }) => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState<string>(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home page', href: '/' },
    { label: 'Aurae Profile', href: '/profile-agence' },
    { label: 'Trouver un model', href: '/Models' },
    { label: 'Add Project', href: '/add-project' },
    { label: 'Mes Projets', href: '/projets-modele' },
  ];

  const handleNavClick = (href: string) => {
    setActiveNav(href);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section className="relative w-screen h-screen min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: 'clamp(150%, 200%, 200%)',
            backgroundPosition: 'center bottom',
          }}
        />

        {/* Overlay sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        {/* Header avec logo et navigation */}
        <header className="relative z-50 flex justify-between items-center p-3 sm:p-4 md:p-5">
          <Link to="/" className="text-white cursor-pointer hover:opacity-80 transition-opacity">
            <h1 
              className="text-[16px] sm:text-[18px] md:text-[20px] font-bold leading-[1.2] tracking-[-0.72px]"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontStyle: 'normal'
              }}
            >
              <span>Auræ</span>{' '}
              <span 
                className="italic text-[16px] sm:text-[18px] md:text-[20px] leading-[1.2] tracking-[-0.72px]"
                style={{ 
                  fontFamily: 'Instrument Sans, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'italic'
                }}
              >
                Studio
              </span>
            </h1>
          </Link>

          {/* Hamburger menu button - visible only on mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2 focus:outline-none transition-opacity hover:opacity-80"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span 
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span 
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </header>

        {/* Navigation - hidden on mobile */}
        <nav className="hidden md:block relative z-50 px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 justify-center flex">
          <div className="flex space-x-4 sm:space-x-6 md:space-x-8 flex-wrap justify-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-white hover:text-gray-300 transition-colors font-medium cursor-pointer text-xs sm:text-sm md:text-base ${
                  activeNav === item.href ? 'font-bold' : 'font-normal'
                } whitespace-nowrap`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Contenu texte avec positionnement absolu selon les spécifications */}
        <div className="absolute inset-0 z-20 text-white px-4 sm:px-6 md:px-8">
          {/* Production 520 et vérifiée par Auræ - Centré verticalement et à 70% à droite */}
          <div 
            className="absolute top-1/2 transform -translate-y-1/2"
            style={{
              left: '57%',
              transform: 'translateY(-50%)',
            }}
          >
            {/* Production 520 */}
            <div 
              style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontStyle: 'normal',
                fontSize: 'clamp(32px, 5vw, 55px)',
                lineHeight: '120%',
                letterSpacing: '-10%',
                textAlign: 'left',
              }}
            >
              Production 520
            </div>

            {/* vérifiée par Auræ */}
            <div 
              className="mt-3 sm:mt-4"
              style={{
                fontFamily: 'Red Hat Mono',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: 'clamp(12px, 1.5vw, 15px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                fontVariantNumeric: 'lining-nums proportional-nums',
                textAlign: 'left',
              }}
            >
              vérifiée par Auræ
            </div>
          </div>

          {/* Description de l'agence */}
          <div 
            className="absolute top-[90%] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[80%] max-w-4xl"
            style={{
              fontFamily: 'Red Hat Mono',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: 'clamp(11px, 1.3vw, 15px)',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              fontVariantNumeric: 'lining-nums proportional-nums',
            }}
          >
            Production 520 est une agence de production et de post-production photo, vidéo et 360° spécialisée dans la mode et le luxe
            (e-shop, lookbook, edito, campagne etc.).
          </div>

          {/* 📍 Paris */}
          <div 
            className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8"
            style={{
              fontFamily: 'Red Hat Mono',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(12px, 1.5vw, 15px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              fontVariantNumeric: 'lining-nums proportional-nums',
              textAlign: 'right',
            }}
          >
            📍 Paris
          </div>
        </div>
      </section>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden bg-black bg-opacity-50"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 z-50 h-full w-64 md:hidden bg-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {/* Close button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-black p-2 focus:outline-none"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation items */}
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-black hover:text-gray-600 transition-colors font-medium text-base ${
                  activeNav === item.href ? 'font-bold' : 'font-normal'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default HeroProfileAgence;
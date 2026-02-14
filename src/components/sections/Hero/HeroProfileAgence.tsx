import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../../layout/Navigation';
import type { NavItem } from '../../../types/profiles';

interface HeroProfileAgenceProps {
  backgroundImage: string;
}

const HeroProfileAgence: React.FC<HeroProfileAgenceProps> = ({ backgroundImage }) => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState<string>(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home page', href: '/' },
    { label: 'Aurae Profile', href: '/profile-agence' },
    { label: 'Trouver un model', href: '/Models' },
    { label: 'Match&chat', href: '/projets-modele' },
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
            backgroundSize: 'clamp(140%, 157%, 160%)',
            backgroundPosition: `center clamp(78%, 80%, 85%)`, // Position verticale responsive
          }}
        />
        
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

          <div className="flex items-center gap-3">
            {/* Profile Circle */}
            <Link 
              to="/profile-agence" 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 overflow-hidden hover:opacity-80 transition-opacity"
            >
              <img
                src={backgroundImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
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
          </div>
        </header>

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
                fontSize: 'clamp(1.75rem, 4vw, 3rem)', // Réduit : 28px à 48px convertis en rem
                lineHeight: '120%',
                letterSpacing: '-10%',
                textAlign: 'right',
              }}
            >
              Production 520
            </div>

            {/* vérifiée par Auræ */}
            <div 
              className="mt-3 sm:mt-4"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: 'clamp(0.6875rem, 1.2vw, 0.875rem)', // Réduit : 11px à 14px convertis en rem
                lineHeight: '100%',
                letterSpacing: '0%',
                fontVariantNumeric: 'lining-nums proportional-nums',
                textAlign: 'right',
              }}
            >
              vérifiée par Auræ
            </div>
          </div>

          {/* Description de l'agence */}
          <div 
            className="absolute top-[92%] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[80%] max-w-4xl"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: 'clamp(0.625rem, 1.1vw, 0.875rem)', // Réduit : 10px à 14px convertis en rem
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              fontVariantNumeric: 'lining-nums proportional-nums',
            }}
          >
            Production 520 est une agence de production et de post-production photo, vidéo et 360° spécialisée dans la mode et le luxe <br/>
            (e-shop, lookbook, edito, campagne etc.).
          </div>

          {/* 📍 Paris */}
          <div 
            className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8"
            style={{
              fontFamily: 'Inter',
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
          <nav 
            className="flex flex-col"
            style={{
              gap: 'clamp(1.5rem, 3vw, 2rem)' // Espacement augmenté : 24px à 32px convertis en rem
            }}
          >
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
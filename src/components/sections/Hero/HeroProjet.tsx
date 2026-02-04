import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeroProjetProps {
    backgroundImage: string;
  }
  
  const HeroProjet: React.FC<HeroProjetProps> = ({ backgroundImage }) => {
    const location = useLocation();
    const [activeNav, setActiveNav] = useState<string>(location.pathname);
  
    const navItems = [
      { label: 'Home page', href: '/' },
      { label: 'Aurae Profile', href: '/profile-agence' },
      { label: 'Trouver un model', href: '/Models' },
      { label: 'Add Project', href: '/add-project' },
      { label: 'Mes Projets', href: '/projets-modele' },
    ];
  
    const handleNavClick = (href: string) => {
      setActiveNav(href);
    };
  
    return (
      <section className="relative w-screen h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: '150%',
            backgroundPosition: 'center bottom',
          }}
        />
  
        {/* Overlay sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        {/* Header avec logo et navigation */}
        <header className="relative z-50 flex justify-between items-center p-5">
          <Link to="/" className="text-white cursor-pointer hover:opacity-80 transition-opacity">
            <h1 
              className="text-[20px] font-bold leading-[43.2px] tracking-[-0.72px]"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontStyle: 'normal'
              }}
            >
              <span>Auræ</span>{' '}
              <span 
                className="italic text-[20px] leading-[43.2px] tracking-[-0.72px]"
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
        </header>
  
        {/* Navigation */}
        <nav className="relative z-50 px-8 pb-8 justify-center flex">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-white hover:text-gray-300 transition-colors font-medium cursor-pointer ${
                  activeNav === item.href ? 'font-bold' : 'font-normal'
                }`}
                style={{fontSize: '14px'}}
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
              left: '70%',
              transform: 'translateY(-50%)',
            }}
          >
            {/* Production 520 */}
            <div 
              style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontStyle: 'bold',
                fontSize: 'clamp(28px, 4vw, 40px)',
                lineHeight: '120%',
                letterSpacing: '-2%',
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
                fontSize: 'clamp(11px, 1.3vw, 12px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                fontVariantNumeric: 'lining-nums proportional-nums',
                textAlign: 'left',
              }}
            >
              vérifiée par Auræ
            </div>
          </div>

          {/* Description du concept */}
          <div 
            className="absolute top-[90%] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[80%] max-w-4xl"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 200,
              fontStyle: 'light',
              fontSize: 'clamp(11px, 1.3vw, 12px)',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              fontVariantNumeric: 'lining-nums proportional-nums',
            }}
          >
            Explique le concept de ton agence : <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          </div>

          {/* 📍 Localisation */}
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
            📍 Localisation
          </div>
        </div>
      </section>
    );
  };
  

export default HeroProjet
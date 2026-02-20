import React, { useState } from 'react';
import {  useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import type { NavItem } from '../../types/profiles';
import HeaderStandard from './HeaderStandard';

interface HeaderModelsProps {
  backgroundImage?: string;
}

const HeaderModels: React.FC<HeaderModelsProps> = ({ backgroundImage }) => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState<string>(location.pathname);

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

  return (
    <section className="relative w-screen h-[35vh] overflow-hidden bg-white">
      {/* Background Image optionnel */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

<HeaderStandard textColor="text-black" />
      {/* Navigation */}
      <div className="relative z-50">
        <Navigation
          navItems={navItems}
          activeNav={activeNav}
          onNavClick={handleNavClick}
          textColor="text-black"
          justify="center"
        />
      </div>

      {/* Contenu du hero pour Models */}
      <div className="absolute inset-0 z-20 flex items-end justify-center pb-8">
        <div className="text-center">
        <h2 
            className="text-black"
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontStyle: 'bold',
              fontSize: '44px',
              lineHeight: '120%',
              letterSpacing: '-2%',
            }}
          >
           Nos modèles
          </h2>
         
        </div>
      </div>
    </section>
  );
};

export default HeaderModels;
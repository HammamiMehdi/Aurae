import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderModelsProps {
  backgroundImage?: string;
}

const HeaderModels: React.FC<HeaderModelsProps> = ({ backgroundImage }) => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState<string>(location.pathname);

  const navItems = [
    { label: 'Home page', href: '/' },
    { label: 'Aurae Profile', href: '/profile-agence' },
    { label: 'Trouver un model', href: '/Models' },
    { label: 'Mes Projets', href: '/projets-modele' },
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

      {/* Header avec logo et navigation - texte en noir */}
      <header className="relative z-50 flex justify-between items-center p-5">
        <Link to="/" className="text-black cursor-pointer hover:opacity-80 transition-opacity">
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

      {/* Navigation - texte en noir */}
      <nav className="relative z-50 px-8 pb-8 justify-center flex">
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`text-black hover:text-gray-600 transition-colors font-medium cursor-pointer ${
                activeNav === item.href ? 'font-bold' : 'font-normal'
              }`}
              style={{fontSize: '14px'}}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

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
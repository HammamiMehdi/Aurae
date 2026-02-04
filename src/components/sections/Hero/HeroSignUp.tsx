import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeroSignUpProps {
  profile: 'agence' | 'modele';
  backgroundImage: string;
  mainText: string;
  subText: string;
}

const HeroSignUp: React.FC<HeroSignUpProps> = ({ 
  profile, 
  backgroundImage, 
  mainText, 
  subText: _subText 
}) => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState<string>(location.pathname);

  const getNavItems = () => {
    if (profile === 'agence') {
      return [
        { label: 'Home page', href: '/' },
        { label: 'Aurae Profile', href: '/profile-agence' },
        { label: 'Trouver un model', href: '/Models' },
        { label: 'Add Project', href: '/add-project' },
        { label: 'Mes Projets', href: '/projets-modele' },
      ];
    } else {
      return [
        { label: 'Home page', href: '/' },
        { label: 'Aurae Profile', href: '/profile-modele' },
        { label: 'Trouver un model', href: '/Models' },
        { label: 'Mes Projets', href: '/projets-modele' },
      ];
    }
  };

  const handleNavClick = (href: string) => {
    setActiveNav(href);
  };

  const navItems = getNavItems();

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          filter: 'grayscale(100%) brightness(0.7)'
        }}
      />
      
      {/* Overlay sombre pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-opacity-40" />
      
      {/* Header avec logo et navigation (sans sign up) */}
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

      {/* Contenu texte en 3 LIGNES avec tailles RÉDUITES et aligné à gauche */}
      <div className="relative z-20 flex flex-col justify-center h-full px-8 -mt-32">
        <div className="max-w-4xl ml-24">
          {/* Première ligne - Auræ */}
          <div className="mb-2 text-left">
            <span 
              className="text-white font-bold block"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontStyle: 'normal',
                fontSize: 'clamp(40px, 8vw, 60px)',
                lineHeight: '120%',
                letterSpacing: '-2%',
              }}
            >
              {mainText}
            </span>
          </div>

          {/* Deuxième ligne - "Une nouvelle" */}
          <div className="mb-2 text-left">
            <span 
              className="text-white font-bold block"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontStyle: 'normal',
                fontSize: 'clamp(32px, 6vw, 55px)',
                lineHeight: '120%',
                letterSpacing: '-2%'
              }}
            >
              Une nouvelle
            </span>
          </div>

          {/* Troisième ligne - "dimension du lien." */}
          <div className="text-left">
            <span 
              className="text-white font-bold block"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontStyle: 'normal',
                fontSize: 'clamp(32px, 6vw, 55px)',
                lineHeight: '120%',
                letterSpacing: '-2%'
              }}
            >
              dimension du lien.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSignUp;
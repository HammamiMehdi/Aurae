import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../../layout/Navigation';
import type { NavItem } from '../../../types/profiles';
import HeaderStandard from '../../layout/HeaderStandard';

interface HeroProjetProps {
    backgroundImage: string;
  }
  
  const HeroProjet: React.FC<HeroProjetProps> = ({ backgroundImage }) => {
    const location = useLocation();
    const [activeNav, setActiveNav] = useState<string>(location.pathname);
  
    const navItems: NavItem[] = [
      { label: 'Home page', href: '/' },
      { label: 'Aurae Profile', href: '/profile-agence' },
      { label: 'Trouver un talent', href: '/Models' },
      { label: 'Matchs & Chat', href: '/matchs' },
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
            backgroundSize: 'clamp(110%, 100%, 140%)',
            backgroundPosition: 'center bottom',
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
                fontSize: 'clamp(12px, 1.5vw, 15px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                fontVariantNumeric: 'lining-nums proportional-nums',
                textAlign: 'right',
              }}
            >
              vérifiée par Auræ
            </div>
          </div>

          {/* Description du concept */}
          <div 
            className="absolute top-[90%] left-1/2 transform -translate-x-1/2 w-[80%] sm:w-[85%] md:w-[80%] lg:w-[70%] max-w-4xl"
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
            Production 520 est une agence de production et de post-production photo, vidéo et 360° spécialisée dans la mode et le luxe <br/> (e-shop, lookbook, edito, campagne etc.).
          </div>

          {/* 📍 Localisation */}
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
            📍 Localisation
          </div>
        </div>
      </section>
    );
  };
  

export default HeroProjet
import React, { useState } from 'react';
import {  useLocation } from 'react-router-dom';
import Footer from '../../layout/Footer';
import Navigation from '../../layout/Navigation';
import type { NavItem } from '../../../types/profiles';
import HeaderStandard from '../../layout/HeaderStandard';

const ProfessionPage: React.FC = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState<string>(location.pathname);
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);

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

        {/* Div avec 5 boutons */}
        <div
          className="flex flex-col items-center mt-24"
          style={{
            width: '300px',
            gap: '40px',
          }}
        >
          {professionButtons.map((buttonText, index) => (
            <button
              key={index}
              onClick={() => setIsOverlayOpen(true)}
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
            </button>
          ))}
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

      {/* Overlay */}
      {isOverlayOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            animationDuration: '0ms',
          }}
          onClick={() => setIsOverlayOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-8 max-w-md mx-4"
            style={{
              animationDuration: '0ms',
            }}
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
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="relative z-40 mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default ProfessionPage;

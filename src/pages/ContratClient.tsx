import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import SignaturePopup from '../components/ui/SignaturePopup';
import ContractViewerPopup from '../components/ui/ContractViewerPopup';
import Navigation from '../components/layout/Navigation';
import type { NavItem } from '../types/profiles';

const ContratClient: React.FC = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState<string>(location.pathname);
  const [isSignaturePopupOpen, setIsSignaturePopupOpen] = useState(false);
  const [isContractViewerOpen, setIsContractViewerOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home page', href: '/' },
    { label: 'Aurae Profile', href: '/profile-agence' },
    { label: 'Find a model', href: '/Models' },
    { label: 'Mes projets', href: '/projets-modele' },
  ];

  const handleNavClick = (href: string) => {
    setActiveNav(href);
  };

  const handleSignatureAccept = () => {
    setIsSignaturePopupOpen(false);
    // Handle signature acceptance logic here
    console.log('Signature accepted');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section with Background Image */}
      <section className="relative w-screen overflow-hidden" style={{ height: '1000px' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/contrat_client.jpg')`,
            backgroundSize: '130%',
            filter: 'grayscale(100%)',
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        
        {/* Header */}
        <header className="relative z-50 flex justify-between items-center p-5">
          <Link to="/" className="text-white hover:opacity-80 transition-opacity">
            <h1 
              className="text-[24px] font-bold leading-[43.2px] tracking-[-0.72px]"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontStyle: 'normal'
              }}
            >
              <span>Auræ</span>{' '}
              <span 
                className="italic text-[24px] leading-[43.2px] tracking-[-0.72px]"
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

          {/* Profile Icon */}
          <Link to="/profile-agence" className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden hover:opacity-80 transition-opacity">
            <img 
              src="/images/profile_modele_page.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover grayscale"
            />
          </Link>
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

        {/* Main Title */}
        <div className="absolute inset-0 z-20 flex items-start justify-start px-16 pt-64">
          <h1 
            className="text-white"
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontStyle: 'bold',
              fontSize: '120px',
              lineHeight: '120%',
              letterSpacing: '-2%',
            }}
          >
            Maje X Katarina.G
          </h1>
        </div>

        {/* Action Buttons */}
        <div className="absolute left-0 right-0 z-20 flex justify-center gap-32 px-8" style={{ top: '60%' }}>
          <button 
            onClick={() => setIsContractViewerOpen(true)}
            className="text-white hover:text-gray-300 transition-colors"
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontStyle: 'bold',
              fontSize: '20px',
              lineHeight: '120%',
              letterSpacing: '-2%',
            }}
          >
            Lecture du contrat
          </button>
          
          <button 
            onClick={() => setIsSignaturePopupOpen(true)}
            className="text-white hover:text-gray-300 transition-colors"
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontStyle: 'bold',
              fontSize: '20px',
              lineHeight: '120%',
              letterSpacing: '-2%',
            }}
          >
            Signature du contrat
          </button>
          
          <button 
            className="text-white hover:text-gray-300 transition-colors"
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontStyle: 'bold',
              fontSize: '20px',
              lineHeight: '120%',
              letterSpacing: '-2%',
            }}
          >
            Procéder au paiement
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Contract Viewer Popup */}
      <ContractViewerPopup
        isOpen={isContractViewerOpen}
        onClose={() => setIsContractViewerOpen(false)}
      />

      {/* Signature Popup */}
      <SignaturePopup
        isOpen={isSignaturePopupOpen}
        onClose={() => setIsSignaturePopupOpen(false)}
        onAccept={handleSignatureAccept}
      />
    </div>
  );
};

export default ContratClient;

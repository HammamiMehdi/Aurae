import React, { useState } from 'react';
import Header from '../../layout/Header';
import Navigation from '../../layout/Navigation';
import HeroContent from './HeroContent';
import HeroBackground from './HeroBackground';
import HeroFooter from './HeroFooter';
import type { NavItem } from '../../../types/profiles';

interface HeroProps {
  profile: 'agence' | 'modele';
  backgroundImage: string;
  mainText: string;
  subText: string;
  onSignupClick: () => void;
  showSignup?: boolean;
  textSizes?: {
    logo?: 'small' | 'medium' | 'large';
    mainText?: 'small' | 'medium' | 'large';
    subText?: 'small' | 'medium' | 'large';
    footer?: 'small' | 'medium' | 'large';
  };
  overlayOpacity?: number;
}

const Hero: React.FC<HeroProps> = ({ 
  profile, 
  backgroundImage, 
  mainText, 
  subText, 
  onSignupClick,
  showSignup = true,
  textSizes = {
    logo: 'medium',
    mainText: 'large',
    subText: 'medium',
    footer: 'medium'
  },
  overlayOpacity = 0.4
}) => {
  const [activeNav, setActiveNav] = useState<string>('/');

  const getNavItems = (): NavItem[] => {
    if (profile === 'agence') {
      return [
        { label: 'Home page', href: '/' },
        { label: 'Aurae Profile', href: '/profile-agence' },
        { label: 'Trouver un talent', href: '/Models' },
        { label: 'Matchs & Chat', href: '/matchs' },
        { label: 'Contact & RDV', href: 'https://calendly.com/constance-landowski/30min' },
      ];
    } else {
      return [
        { label: 'Home page', href: '/' },
        { label: 'Aurae Profile', href: '/profile-modele' },
        { label: 'Matchs & Chat', href: '/matchs' },
        { label: 'Contact & RDV', href: 'https://calendly.com/constance-landowski/30min' },
      ];
    }
  };

  const handleNavClick = (href: string) => {
    setActiveNav(href);
  };

  const navItems = getNavItems();

  return (
    <section 
      className="relative w-screen overflow-hidden"
      style={{
        height: '100vh',
        minHeight: 'clamp(37.5rem, 100vh, 75rem)' // 600px à 1200px convertis en rem
      }}
    >
      <HeroBackground 
        imageUrl={backgroundImage} 
        overlayOpacity={overlayOpacity}
      />
      
      <div 
        className="relative z-10 flex flex-col"
        style={{
          height: '100vh',
          minHeight: 'clamp(37.5rem, 100vh, 75rem)' // 600px à 1200px convertis en rem
        }}
      >
        <Header 
          onSignupClick={onSignupClick}
          showSignup={showSignup}
          textColor="text-white"
          backgroundColor="bg-transparent"
          navItems={navItems}
          activeNav={activeNav}
          onNavClick={handleNavClick}
        />
        
        <Navigation 
          navItems={navItems} 
          activeNav={activeNav} 
          onNavClick={handleNavClick}
          textColor="text-white"
          spacing="wide"
          width="large"
        />
        
        <HeroContent 
          mainText={mainText}
          subText={subText}
          textSizes={textSizes}
        />
        
        <HeroFooter 
          textSize={textSizes.footer}
        />
      </div>
    </section>
  );
};

export default Hero;
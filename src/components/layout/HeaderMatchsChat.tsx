import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import type { NavItem } from '../../types/profiles';
import HeaderStandard from './HeaderStandard';

interface HeaderMatchsChatProps {
  backgroundImage?: string;
}

const HeaderMatchsChat: React.FC<HeaderMatchsChatProps> = ({ backgroundImage }) => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState<string>(location.pathname);
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    { label: 'Home page', href: '/' },
    { label: 'Aurae Profile', href: '/profile-agence' },
    { label: 'Trouver un talent', href: '/Models' },
    { label: 'Matchs & Chat', href: '/matchs' },
  ];

  const handleNavClick = (href: string) => {
    setActiveNav(href);
    navigate(href);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <section className="relative w-screen h-[20vh] overflow-hidden bg-white">
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
    </section>
  );
};

export default HeaderMatchsChat;

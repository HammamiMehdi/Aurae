import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { NavItem } from '../../types/profiles';

interface HeaderProps {
  showSignup?: boolean;
  onSignupClick?: () => void;
  logoSize?: 'small' | 'medium' | 'large';
  textColor?: string;
  backgroundColor?: string;
  navItems?: NavItem[];
  activeNav?: string;
  onNavClick?: (href: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  showSignup = true, 
  onSignupClick,
  logoSize: _logoSize = 'medium',
  textColor = 'text-white',
  backgroundColor = 'bg-transparent',
  navItems = [],
  activeNav = '/',
  onNavClick
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);

  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (href: string) => {
    if (onNavClick) {
      onNavClick(href);
    }
    setIsMenuOpen(false);
  };

  const handleSignupClick = () => {
    if (onSignupClick) {
      onSignupClick();
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`relative z-30 flex justify-between mt-10 items-center ${backgroundColor}`}
        style={{
          padding: 'clamp(0.75rem, 2vw, 2rem) clamp(1rem, 3vw, 2.5rem)'
        }}
      >
        
       
        {/* Hamburger menu button - visible only on mobile */}
        <button
          onClick={toggleMenu}
          className={`md:hidden ${textColor} focus:outline-none transition-opacity hover:opacity-80`}
          style={{
            padding: 'clamp(0.4rem, 1.5vw, 0.5rem)'
          }}
          aria-label="Toggle menu"
        >
          <div 
            className="flex flex-col justify-center"
            style={{
              width: 'clamp(1.25rem, 4vw, 1.5rem)',
              height: 'clamp(1.25rem, 4vw, 1.5rem)',
              gap: 'clamp(0.25rem, 1vw, 0.375rem)'
            }}
          >
            <span 
              className={`block bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
              style={{
                height: '0.125rem', // 2px converti en rem
                width: 'clamp(1.25rem, 4vw, 1.5rem)'
              }}
            />
            <span 
              className={`block bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
              style={{
                height: '0.125rem', // 2px converti en rem
                width: 'clamp(1.25rem, 4vw, 1.5rem)'
              }}
            />
            <span 
              className={`block bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
              style={{
                height: '0.125rem', // 2px converti en rem
                width: 'clamp(1.25rem, 4vw, 1.5rem)'
              }}
            />
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden bg-black bg-opacity-50"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 z-50 h-full md:hidden bg-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          width: 'clamp(15.625rem, 30vw, 18.75rem)' // 250px à 300px convertis en rem
        }}
      >
        <div 
          className="flex flex-col h-full"
          style={{
            paddingTop: 'clamp(4rem, 8vw, 5rem)',
            paddingLeft: 'clamp(1rem, 4vw, 1.5rem)',
            paddingRight: 'clamp(1rem, 4vw, 1.5rem)'
          }}
        >
          {/* Close button */}
          <button
            onClick={toggleMenu}
            className="absolute text-black focus:outline-none"
            style={{
              top: 'clamp(0.75rem, 2vw, 1rem)',
              right: 'clamp(0.75rem, 2vw, 1rem)',
              padding: 'clamp(0.4rem, 1.5vw, 0.5rem)'
            }}
            aria-label="Close menu"
          >
            <svg 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{
                width: 'clamp(1.25rem, 4vw, 1.5rem)',
                height: 'clamp(1.25rem, 4vw, 1.5rem)'
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation items */}
          {navItems.length > 0 && (
            <nav 
              className="flex flex-col mb-6"
              style={{
                gap: 'clamp(0.75rem, 2vw, 1rem)'
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-black hover:text-gray-600 transition-colors font-medium ${
                    activeNav === item.href ? 'font-bold' : 'font-normal'
                  }`}
                  style={{
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

         
        </div>
      </div>
    </>
  );
};

export default Header;
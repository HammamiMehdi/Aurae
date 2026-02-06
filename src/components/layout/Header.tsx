import React, { useState } from 'react';
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
      <header className={`relative z-30 flex justify-between items-center p-3 sm:p-4 md:p-6 lg:p-8 ${backgroundColor}`}>
        <Link to="/" className={`${textColor} hover:opacity-80 transition-opacity cursor-pointer`}>
          <h1 
            className="text-[22px]  font-bold leading-[1.2] tracking-[-0.72px]"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontStyle: 'normal'
            }}
          >
            <span>Auræ</span>{' '}
            <span 
              className="italic text-[22px]  leading-[1.2] tracking-[-0.72px]"
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
        
        {/* Desktop Sign up button - hidden on mobile */}
        {showSignup && (
          <button 
            onClick={onSignupClick}
            className={`hidden md:block ${textColor} bg-transparent  px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full transition-all duration-300 cursor-pointer`}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '15px',
              lineHeight: '120%',
              letterSpacing: '-2%'
            }}
          >
            Sign up
          </button>
        )}

        {/* Hamburger menu button - visible only on mobile */}
        <button
          onClick={toggleMenu}
          className={`md:hidden ${textColor} p-2 focus:outline-none transition-opacity hover:opacity-80`}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
            <span 
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span 
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span 
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
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
        className={`fixed top-0 right-0 z-50 h-full w-64 md:hidden bg-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {/* Close button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-black p-2 focus:outline-none"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation items */}
          {navItems.length > 0 && (
            <nav className="flex flex-col space-y-4 mb-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-black hover:text-gray-600 transition-colors font-medium text-base ${
                    activeNav === item.href ? 'font-bold' : 'font-normal'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          {/* Sign up button in menu */}
          {showSignup && (
            <button 
              onClick={handleSignupClick}
              className="text-white bg-black border border-black px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer text-sm font-medium mt-auto mb-6"
              style={{fontFamily: 'Inter, monospace'}}
            >
              Sign up
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
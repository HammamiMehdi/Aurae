import React from 'react';
import { Link } from 'react-router-dom';
import type { NavItem } from '../../types/profiles';

interface NavigationProps {
  navItems: NavItem[];
  activeNav: string;
  onNavClick: (href: string) => void;
  textColor?: string;
  fontSize?: 'small' | 'medium' | 'large';
  width?: 'full' | 'large' | 'medium';
  spacing?: 'tight' | 'normal' | 'wide';
  justify?: 'center' | 'start' | 'end';
}

const Navigation: React.FC<NavigationProps> = ({ 
  navItems, 
  activeNav, 
  onNavClick,
  textColor = 'text-white',
  fontSize = 'small',
  width = 'full',
  spacing = 'normal',
  justify = 'center'
}) => {
  // Configuration des tailles
  const fontSizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };

  // Configuration des espacements
  const spacings = {
    tight: 'space-x-4',
    normal: 'space-x-8',
    wide: 'space-x-12 sm:space-x-16 md:space-x-20'
  };

  // Configuration des largeurs
  const widths = {
    full: 'w-full max-w-6xl mx-auto',
    large: 'w-full max-w-5xl mx-auto',
    medium: 'w-full max-w-4xl mx-auto'
  };

  // Configuration de l'alignement
  const justifications = {
    center: 'justify-center',
    start: 'justify-start',
    end: 'justify-end'
  };

  return (
    <nav className="hidden md:block px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 flex-shrink-0">
      <div className={`flex ${spacings[spacing]} ${widths[width]} ${justifications[justify]} flex-wrap justify-center sm:justify-center`}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            onClick={() => onNavClick(item.href)}
            className={`${textColor} hover:text-gray-300 transition-colors font-medium text-xs sm:text-sm md:text-base ${
              activeNav === item.href ? 'font-bold' : 'font-normal'
            } ${fontSizes[fontSize]} whitespace-nowrap`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
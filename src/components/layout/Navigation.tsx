import React from 'react';
import { Link } from 'react-router-dom';
import type { NavItem } from '../../types/profiles';

interface NavigationProps {
  navItems: NavItem[];
  activeNav: string;
  onNavClick: (href: string) => void;
  textColor?: string;
  width?: 'full' | 'large' | 'medium';
  spacing?: 'tight' | 'normal' | 'wide';
  justify?: 'center' | 'start' | 'end';
}

const Navigation: React.FC<NavigationProps> = ({ 
  navItems, 
  activeNav, 
  onNavClick,
  textColor = 'text-white',
  width = 'full',
  spacing: _spacing = 'normal',
  justify = 'center'
}) => {
  // Configuration des espacements - fixe à 9px
  const getSpacing = () => {
    return '7%'; // Espacement fixe de 9px entre les items
  };

  // Configuration des largeurs avec clamp()
  const getMaxWidth = () => {
    switch (width) {
      case 'large':
        return 'clamp(80rem, 90vw, 90rem)';
      case 'medium':
        return 'clamp(60rem, 75vw, 70rem)';
      default: // full
        return 'clamp(70rem, 95vw, 100rem)';
    }
  };

  // Configuration de l'alignement
  const justifications = {
    center: 'justify-center',
    start: 'justify-start',
    end: 'justify-end'
  };

  return (
    <nav 
      className="hidden md:block flex-shrink-0"
      style={{
        paddingLeft: 'clamp(1rem, 3vw, 2rem)',
        paddingRight: 'clamp(1rem, 3vw, 2rem)',
        paddingTop: 'clamp(0.25rem, 0.5vw, 0.5rem)', // Padding top réduit
        paddingBottom: 'clamp(0.5rem, 1vw, 1rem)', // Padding bottom réduit
        marginTop: 'clamp(-1rem, -2vw, -0.5rem)' // Marge négative pour monter la navigation
      }}
    >
      <div 
        className={`flex ${justifications[justify]} flex-wrap`}
        style={{
          maxWidth: getMaxWidth(),
          width: '100%',
          margin: '0 auto',
          gap: getSpacing()
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            onClick={() => onNavClick(item.href)}
            className={`${textColor} hover:text-gray-300 transition-colors font-medium ${
              activeNav === item.href ? 'font-bold' : 'font-normal'
            } whitespace-nowrap`}
            style={{ 
              fontSize: 'clamp(0.8125rem, 1.2vw, 1rem)' // 13px à 16px convertis en rem
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
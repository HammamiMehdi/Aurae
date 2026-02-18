import React from 'react';
import { createPortal } from 'react-dom';
import { Heart, MessageSquare, Calendar, Tag, User, Settings, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProfileDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  anchorRect?: DOMRect | null;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ isOpen, onClose, anchorRect }) => {
  if (!isOpen || !anchorRect) return null;

  const menuItems = [
    { icon: <Heart size={18} />, label: 'Favoris', href: '/favoris' },
    { icon: <MessageSquare size={18} />, label: 'Messages', href: '/matchs' },
    { icon: <Calendar size={18} />, label: 'Mes disponibilités', href: '/dispo' },
    { icon: <Tag size={18} />, label: 'Les offres', href: '/offres' },
    { icon: <User size={18} />, label: 'Profil', href: '/profile-agence' },
  ];

  const settingItems = [
    { icon: <Settings size={18} />, label: 'Paramètres du compte', href: '/settings' },
    { icon: <Globe size={18} />, label: 'Langues', href: '#' },
  ];

  const dropdownStyle: React.CSSProperties = {
    position: 'fixed',
    top: `${anchorRect.bottom + 8}px`,
    left: `${anchorRect.right - 240}px`, // Largeur légèrement réduite à 240px pour plus de finesse
    width: '240px',
    zIndex: 99999,
  };

  return createPortal(
    <>
      <div className="fixed inset-0 z-[99998] bg-transparent" onClick={onClose} />
      
      <div 
        className="bg-white rounded-xl shadow-2xl py-1" // py-1 pour réduire l'espace haut/bas global
        style={dropdownStyle}
      >
        <div className="flex flex-col">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-black transition-colors" // py-2 au lieu de py-3 pour diminuer l'espace
              onClick={onClose}
            >
              <span className="text-black">{item.icon}</span>
              <span style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px', 
                fontWeight: 400 
              }}>
                {item.label}
              </span>
            </Link>
          ))}

          {/* Ligne de séparation ajustée selon votre design */}
          <div className="w-full flex justify-center py-1">
            <hr 
              style={{ 
                border: 'none', 
                borderTop: '1px solid #9A9A9A', 
                width: '90%', // Largeur réduite
                margin: '4px 0' 
              }} 
            />
          </div>

          {settingItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-black transition-colors" // py-2 pour diminuer l'espace
              onClick={onClose}
            >
              <span className="text-black">{item.icon}</span>
              <span style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '14px', 
                fontWeight: 400 
              }}>
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>,
    document.body
  );
};

export default ProfileDropdown;
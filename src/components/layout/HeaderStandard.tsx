import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from '../ui/ProfileDropdown';

interface HeaderStandardProps {
  textColor?: 'text-white' | 'text-black';
  profileImage?: string;
}

const HeaderStandard: React.FC<HeaderStandardProps> = ({ 
  textColor = 'text-black', 
  profileImage = "/images/profile_modele_page.jpg" 
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="relative z-[100] flex justify-between items-center p-5 w-full bg-transparent">
      <Link to="/" className={`${textColor} cursor-pointer hover:opacity-80 transition-opacity`}>
        <h1 className="text-[20px] font-bold tracking-[-0.72px]" style={{ fontFamily: 'Inter, sans-serif' }}>
          <span>Auræ</span> <span className="italic font-normal" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Studio</span>
        </h1>
      </Link>

      <div className="relative">
        <button 
          ref={buttonRef}
          onClick={toggleDropdown}
          className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden border-2 border-transparent hover:border-gray-400 transition-all focus:outline-none"
        >
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover grayscale" />
        </button>

        <ProfileDropdown 
          isOpen={isDropdownOpen} 
          onClose={() => setIsDropdownOpen(false)}
          anchorRect={buttonRef.current?.getBoundingClientRect()} 
        />
      </div>
    </header>
  );
};

export default HeaderStandard;
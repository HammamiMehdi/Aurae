import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProfileDropdown from '../ui/ProfileDropdown';

interface HeaderStandardProps {
  textColor?: 'text-white' | 'text-black';
  profileImage?: string;
  onSignupClick?: () => void;
}

const HeaderStandard: React.FC<HeaderStandardProps> = ({ 
  textColor = 'text-black', 
  profileImage,
  onSignupClick
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('accessToken');
      const userStr = localStorage.getItem('user');
      
      if (token && userStr) {
        setIsLoggedIn(true);
        // User data is available in localStorage if needed
        // const user = JSON.parse(userStr);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkAuth();
    
    // Listen for storage changes (e.g., when user logs in/out in another tab)
    window.addEventListener('storage', checkAuth);
    
    // Listen for custom auth event (dispatched after login/logout)
    window.addEventListener('authStateChanged', checkAuth);
    
    // Also check on focus (when user comes back to tab)
    window.addEventListener('focus', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('authStateChanged', checkAuth);
      window.removeEventListener('focus', checkAuth);
    };
  }, []);

  // Get profile image - use provided image, user's profile picture, or default to avatar1.jpeg
  const getProfileImage = () => {
    if (profileImage) {
      return profileImage;
    }
    // If user has a profile picture, use it (you may need to adjust this based on your user object structure)
    // For example: user?.profilePicture || user?.avatar || '/images/avatar1.jpeg'
    // For now, defaulting to avatar1.jpeg
    return '/images/avatar1.jpeg';
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignupClick = () => {
    if (onSignupClick) {
      onSignupClick();
    } else {
      navigate('/signup');
    }
  };

  return (
    <header className="relative z-[100] flex justify-between items-center p-5 w-full bg-transparent">
      <Link to="/" className={`${textColor} cursor-pointer hover:opacity-80 transition-opacity`}>
        <h1 className="text-[20px] font-bold tracking-[-0.72px]" style={{ fontFamily: 'Inter, sans-serif' }}>
          <span>Auræ</span> <span className="italic font-normal" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>Studio</span>
        </h1>
      </Link>

      <div className="relative">
        {isLoggedIn ? (
          <>
            <button 
              ref={buttonRef}
              onClick={toggleDropdown}
              className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden border-2 border-transparent hover:border-gray-400 transition-all focus:outline-none"
            >
              <img 
                src={getProfileImage()} 
                alt="Profile" 
                className="w-full h-full object-cover grayscale"
                onError={(e) => {
                  // Fallback to avatar1.jpeg if image fails to load
                  e.currentTarget.src = '/images/avatar1.jpeg';
                }}
              />
            </button>

            <ProfileDropdown 
              isOpen={isDropdownOpen} 
              onClose={() => setIsDropdownOpen(false)}
              anchorRect={buttonRef.current?.getBoundingClientRect()} 
            />
          </>
        ) : (
          <button 
            onClick={handleSignupClick}
            className={`${textColor} bg-transparent rounded-full transition-all duration-300 cursor-pointer hover:opacity-80`}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '14px',
              lineHeight: '120%',
              letterSpacing: '-2%',
              padding: '6px 20px'
            }}
          >
            Sign up
          </button>
        )}
      </div>
    </header>
  );
};

export default HeaderStandard;
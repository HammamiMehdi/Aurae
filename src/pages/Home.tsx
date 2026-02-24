import React, { useState, useEffect } from 'react';
import Hero from '../components/sections/Hero/Hero';
import Footer from '../components/layout/Footer';
import ConnectionSection from '../components/sections/ConnectionSection/ConnectionSection';
import HeaderStandard from '../components/layout/HeaderStandard';

interface HomeProps {
  onSignupClick: () => void;
}

/**
 * Map backend user role to frontend profile type
 */
const getProfileFromRole = (role: string | undefined): 'agence' | 'modele' => {
  if (!role) return 'agence'; // Default to agence if no role
  
  const roleUpper = role.toUpperCase();
  
  // Map backend roles to frontend profiles
  switch (roleUpper) {
    case 'CLIENT':
    case 'ENTERPRISE':
    case 'ADMIN':
      return 'agence';
    case 'MODEL':
    case 'FREELANCE_MODEL':
      return 'modele';
    case 'CREATOR':
    
      return 'modele';
    default:
      return 'agence';
  }
};

const Home: React.FC<HomeProps> = ({ onSignupClick }) => {
  const [profile, setProfile] = useState<'agence' | 'modele'>('agence');

  useEffect(() => {
    // Check if user is logged in and get their role
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        const userProfile = getProfileFromRole(user.role);
        setProfile(userProfile);
      } catch (error) {
        console.error('Error parsing user data:', error);
        // Default to agence if parsing fails
        setProfile('agence');
      }
    } else {
      // Default to agence if not logged in
      setProfile('agence');
    }

    // Listen for auth state changes (login/logout)
    const handleAuthChange = () => {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        try {
          const user = JSON.parse(userStr);
          const userProfile = getProfileFromRole(user.role);
          setProfile(userProfile);
        } catch (error) {
          setProfile('agence');
        }
      } else {
        setProfile('agence');
      }
    };

    window.addEventListener('authStateChanged', handleAuthChange);
    window.addEventListener('storage', handleAuthChange);

    return () => {
      window.removeEventListener('authStateChanged', handleAuthChange);
      window.removeEventListener('storage', handleAuthChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero avec configuration complète */}
      <div className="relative">
        {/* Header with authentication-aware signup/profile - positioned absolutely over Hero */}
        <div className="absolute top-0 left-0 right-0 z-30">
          <HeaderStandard 
            textColor="text-white" 
            onSignupClick={onSignupClick}
          />
        </div>
        
        <Hero
          profile={profile}
          backgroundImage="/images/Image_home_page_v2.png"
          mainText="Auræ"
          subText="Révéler les talents, créer l'exception"
          onSignupClick={onSignupClick}
          showSignup={false}
          textSizes={{
            logo: 'large',
            mainText: 'large',
            subText: 'medium',
            footer: 'medium'
          }}
        />
      </div>
      {/* <Hero
        profile="agence"
        backgroundImage="/images/template1.png"
        mainText="Auræ"
        subText="Révéler les talents, créer l'exception"
        onSignupClick={onSignupClick}
        textSizes={{
          logo: 'large',
          mainText: 'large',
          subText: 'medium',
          footer: 'medium'
        }}
      /> */}
      <ConnectionSection />
      <Footer />
    </div>
  );
};

export default Home;
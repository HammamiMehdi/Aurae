import React from 'react';
import HeroSignUp from '../components/sections/Hero/HeroSignUp';
import Footer from '../components/layout/Footer';
import HeroProfileAgence from '../components/sections/Hero/HeroProfileAgence';
import ProfileAgenceContent from '../components/sections/ProfileAgence/ProfileAgenceContent';
import ProfileAgenceProjects from './../components/sections/ProfileAgence/ProfileAgenceProjects';
const ProfileAgence: React.FC = () => {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        {/* Hero avec image et textes spécifiques pour le profil agence */}
        <HeroProfileAgence 
          backgroundImage="/images/Profile_agence_page.jpg"
        />
        
        {/* Contenu principal du profil agence */}
        <ProfileAgenceContent />
        <ProfileAgenceProjects />
        
        <Footer />
      </div>
    );
  };
  
  export default ProfileAgence;
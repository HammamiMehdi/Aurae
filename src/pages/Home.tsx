import React from 'react';
import Hero from '../components/sections/Hero/Hero';
import ProfileSelection from '../components/sections/ProfileSelection/ProfileSelection';
import Footer from '../components/layout/Footer';
import ConnectionSection from '../components/sections/ConnectionSection/ConnectionSection';

interface HomeProps {
  onSignupClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onSignupClick }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero avec configuration complète */}
      <Hero
        profile="agence"
        backgroundImage="/images/Image_home_page.png"
        mainText="Auræ"
        subText="Révéler les talents, créer l'exception"
        onSignupClick={onSignupClick}
        textSizes={{
          logo: 'large',
          mainText: 'large',
          subText: 'medium',
          footer: 'medium'
        }}
      />
      
      <ConnectionSection />
      <Footer />
    </div>
  );
};

export default Home;
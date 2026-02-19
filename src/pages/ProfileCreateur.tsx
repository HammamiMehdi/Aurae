import React from "react";
import Footer from "../components/layout/Footer";
import ProfileCreateurBook from "../components/sections/ProfileCreateur/ProfileCreateurBook";
import HeroProfileCreateur from "../components/sections/Hero/HeroProfileCreateur";

const ProfileCreateur: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero avec image et textes spécifiques pour le profil créateur */}
      <HeroProfileCreateur backgroundImage="/images/createur-hero.png" />
      {/* <HeroProfileCreateur backgroundImage="/images/template1.png" /> */}

      {/* Section Mon Portfolio avec carousel */}
      <ProfileCreateurBook />

      {/* Contenu principal du profil créateur */}
      <div className="flex-1">
        <div className="p-8">
          <div
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '15px',
              lineHeight: '120%',
              letterSpacing: '-2%',
              textAlign: 'center',
              marginTop: '30px',
              marginBottom: '30px',
            }}
          >
            Proposer le projet
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfileCreateur;

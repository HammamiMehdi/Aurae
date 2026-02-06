import React from "react";
import Footer from "../components/layout/Footer";
import ProfileModeleBook from "../components/sections/ProfileModele/ProfileModeleBook";
import HeroProfileModele from "../components/sections/Hero/HeroProfileModele";
import ProfileModeleProjets from "../components/sections/ProfileModele/ProfileModeleProjets";


const ProfileModele: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero avec image et textes spécifiques pour le profil modèle */}
      <HeroProfileModele backgroundImage="/images/profile_modele_page.jpg" />

      {/* Section Mon Book avec carousel */}
      <ProfileModeleBook />

      {/* Section Mes Derniers Projets */}
      <ProfileModeleProjets />

      {/* Contenu principal du profil modèle */}
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

export default ProfileModele;
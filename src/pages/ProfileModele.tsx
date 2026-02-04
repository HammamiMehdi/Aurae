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
        {/* Ici vous pouvez ajouter le reste du contenu du profil modèle */}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Informations du modèle</h2>
          {/* Ajoutez ici les sections supplémentaires du profil modèle */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfileModele;
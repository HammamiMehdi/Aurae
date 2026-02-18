import React from "react";
import Footer from "../components/layout/Footer";
import HeroSignUp from "../components/sections/Hero/HeroSignUp";
import InscriptionForm from "../components/sections/InscriptionForm/InscriptionForm";
import EntrepriseForm from "../components/sections/InscriptionForm/EntrepriseForm";
import InscriptionFormAgence from "../components/sections/InscriptionForm/InscriptionFormAgence";

const InscriptionAgence: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero avec image et textes spécifiques */}
      <HeroSignUp
        profile="agence"
        backgroundImage="/images/image_inscription_page.jpg"
        mainText="Auræ."
        subText="Une nouvelle dimension du lien."
      />

      {/* Formulaire d'inscription */}
      <InscriptionFormAgence />
      {/* Formulaire entreprise */}
      <EntrepriseForm />
      {/* Footer en dessous */}
      <Footer />
    </div>
  );
};

export default InscriptionAgence;
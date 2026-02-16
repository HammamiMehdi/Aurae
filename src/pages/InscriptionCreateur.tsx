import React from "react";
import Footer from "../components/layout/Footer";
import HeroSignUp from "../components/sections/Hero/HeroSignUp";
import InscriptionForm from "../components/sections/InscriptionForm/InscriptionForm";
import CreateurForm from "../components/sections/InscriptionForm/CreateurForm";

const InscriptionCreateur: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero avec image et textes spécifiques */}
      <HeroSignUp
        profile="createur"
        backgroundImage="/images/image_inscription_page.jpg"
        mainText="Auræ."
        subText="Une nouvelle dimension du lien."
      />

      {/* Formulaire d'inscription */}
      <InscriptionForm profile="agence" />
      {/* Formulaire créateur */}
      <CreateurForm />
      {/* Footer en dessous */}
      <Footer />
    </div>
  );
};

export default InscriptionCreateur;

import React, { useState } from "react";
import Footer from "../components/layout/Footer";
import HeroSignUp from "../components/sections/Hero/HeroSignUp";
import InscriptionForm from "../components/sections/InscriptionForm/InscriptionForm";
import CreateurForm from "../components/sections/InscriptionForm/CreateurForm";

// Shared form data types
export interface CreatorInscriptionFormData {
  nomPrenom: string;
  dateNaissance: string;
  email: string;
  motDePasse: string;
  telephone: string;
  role: string;
  sousCategorie: string;
  ville: string;
  pays: string;
  instagram: string;
}

export interface CreatorFormData {
  nomEntreprise: string;
  description: string;
  statutJuridique: string;
  tva: string;
  services: string[];
  justificatif: File | null;
  charteAurae: boolean;
  cgu: boolean;
  cgv: boolean;
}

const InscriptionCreateur: React.FC = () => {
  const [inscriptionFormData, setInscriptionFormData] = useState<CreatorInscriptionFormData>({
    nomPrenom: '',
    dateNaissance: '',
    email: '',
    motDePasse: '',
    telephone: '',
    role: '',
    sousCategorie: '',
    ville: '',
    pays: '',
    instagram: ''
  });

  const [creatorFormData, setCreatorFormData] = useState<CreatorFormData>({
    nomEntreprise: '',
    description: '',
    statutJuridique: '',
    tva: '',
    services: [],
    justificatif: null,
    charteAurae: false,
    cgu: false,
    cgv: false
  });

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
      <InscriptionForm 
        profile="agence"
        formData={inscriptionFormData}
        onFormDataChange={setInscriptionFormData}
      />
      {/* Formulaire créateur */}
      <CreateurForm 
        formData={creatorFormData}
        onFormDataChange={setCreatorFormData}
        inscriptionFormData={inscriptionFormData}
      />
      {/* Footer en dessous */}
      <Footer />
    </div>
  );
};

export default InscriptionCreateur;

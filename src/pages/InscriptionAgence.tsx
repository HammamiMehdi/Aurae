import React, { useState } from "react";
import Footer from "../components/layout/Footer";
import HeroSignUp from "../components/sections/Hero/HeroSignUp";
import EntrepriseForm from "../components/sections/InscriptionForm/EntrepriseForm";
import InscriptionFormAgence from "../components/sections/InscriptionForm/InscriptionFormAgence";

// Shared form data types
export interface AgencyFormData {
  nomPrenom: string;
  dateNaissance: string;
  email: string;
  motDePasse: string;
  telephone: string;
  role: string;
  ville: string;
  pays: string;
  instagram: string;
}

export interface EnterpriseFormData {
  nomEntreprise: string;
  description: string;
  statutJuridique: string;
  tva: string;
  services: string[];
  ville: string;
  pays: string;
  profession: string;
  justificatif: File | null;
  charteAurae: boolean;
  cgu: boolean;
  cgv: boolean;
}

const InscriptionAgence: React.FC = () => {
  const [agencyFormData, setAgencyFormData] = useState<AgencyFormData>({
    nomPrenom: '',
    dateNaissance: '',
    email: '',
    motDePasse: '',
    telephone: '',
    role: '',
    ville: '',
    pays: '',
    instagram: ''
  });

  const [enterpriseFormData, setEnterpriseFormData] = useState<EnterpriseFormData>({
    nomEntreprise: '',
    description: '',
    statutJuridique: '',
    tva: '',
    services: [],
    ville: '',
    pays: '',
    profession: '',
    justificatif: null,
    charteAurae: false,
    cgu: false,
    cgv: false
  });

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
      <InscriptionFormAgence 
        formData={agencyFormData}
        onFormDataChange={setAgencyFormData}
      />
      {/* Formulaire entreprise */}
      <EntrepriseForm 
        formData={enterpriseFormData}
        onFormDataChange={setEnterpriseFormData}
        agencyFormData={agencyFormData}
      />
      {/* Footer en dessous */}
      <Footer />
    </div>
  );
};

export default InscriptionAgence;
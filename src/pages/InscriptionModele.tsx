import React, { useState } from 'react';

import Footer from '../components/layout/Footer';
import HeroSignUp from '../components/sections/Hero/HeroSignUp';
import InscriptionForm from '../components/sections/InscriptionForm/InscriptionForm';
import ModeleForm from '../components/sections/InscriptionForm/ModeleForm';
import ProfilPhysiqueForm from '../components/sections/InscriptionForm/ProfilPhysiqueForm';

// Shared form data types
export interface ModelInscriptionFormData {
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

export interface ModelModeleFormData {
  situationPro: string;
  statutJuridique: string;
  justificatif: File | null;
}

export interface ModelProfilPhysiqueFormData {
  sexe: string;
  age: string;
  taille: string;
  poids: string;
  pointure: string;
  mensurations: string;
  couleurCheveux: string;
  longueurCheveux: string;
  couleurYeux: string;
  teint: string;
  silhouette: string;
  particularites: string;
  photoPortrait: File | null;
  photoFullBody: File | null;
  photoProfil: File | null;
  charteAurae: boolean;
  cgu: boolean;
  cgv: boolean;
}

const InscriptionModele: React.FC = () => {
  const [step, setStep] = useState<'base' | 'physique'>('base');

  const [inscriptionFormData, setInscriptionFormData] = useState<ModelInscriptionFormData>({
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

  const [modeleFormData, setModeleFormData] = useState<ModelModeleFormData>({
    situationPro: '',
    statutJuridique: '',
    justificatif: null
  });

  const [profilPhysiqueFormData, setProfilPhysiqueFormData] = useState<ModelProfilPhysiqueFormData>({
    sexe: '',
    age: '',
    taille: '',
    poids: '',
    pointure: '',
    mensurations: '',
    couleurCheveux: '',
    longueurCheveux: '',
    couleurYeux: '',
    teint: '',
    silhouette: '',
    particularites: '',
    photoPortrait: null,
    photoFullBody: null,
    photoProfil: null,
    charteAurae: false,
    cgu: false,
    cgv: false
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero avec image et textes spécifiques pour modèle */}
      <HeroSignUp
        profile="modele"
        backgroundImage="/images/image_inscription_page.jpg"
        mainText="Auræ."
        subText="Une nouvelle dimension du lien."
      />

      {/* Sections de formulaire avec transition */}
      <div className="relative overflow-hidden">
        <div
          className="flex w-[200%] transition-transform duration-500 ease-in-out"
          style={{
            transform: step === 'physique' ? 'translateX(-50%)' : 'translateX(0%)',
          }}
        >
          <div className="w-1/2 flex-shrink-0">
            {/* Formulaire d'inscription personnelle (sans rôle) */}
            <InscriptionForm 
              profile="modele"
              formData={inscriptionFormData}
              onFormDataChange={setInscriptionFormData}
            />

            {/* Formulaire spécifique mannequin */}
            <ModeleForm 
              onNext={() => setStep('physique')}
              formData={modeleFormData}
              onFormDataChange={setModeleFormData}
            />
          </div>

          <div className="w-1/2 flex-shrink-0">
            <ProfilPhysiqueForm 
              onPrevious={() => setStep('base')}
              formData={profilPhysiqueFormData}
              onFormDataChange={setProfilPhysiqueFormData}
              inscriptionFormData={inscriptionFormData}
              modeleFormData={modeleFormData}
            />
          </div>
        </div>
      </div>
      
      {/* Footer en dessous */}
      <Footer />
    </div>
  );
};

export default InscriptionModele;
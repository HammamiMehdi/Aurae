import React, { useState } from 'react';

import Footer from '../components/layout/Footer';
import HeroSignUp from '../components/sections/Hero/HeroSignUp';
import InscriptionForm from '../components/sections/InscriptionForm/InscriptionForm';
import ModeleForm from '../components/sections/InscriptionForm/ModeleForm';
import ProfilPhysiqueForm from '../components/sections/InscriptionForm/ProfilPhysiqueForm';



const InscriptionModele: React.FC = () => {
  const [step, setStep] = useState<'base' | 'physique'>('base');

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
            <InscriptionForm profile="modele" />

            {/* Formulaire spécifique mannequin */}
            <ModeleForm onNext={() => setStep('physique')} />
          </div>

          <div className="w-1/2 flex-shrink-0">
            <ProfilPhysiqueForm onPrevious={() => setStep('base')} />
          </div>
        </div>
      </div>
      
      {/* Footer en dessous */}
      <Footer />
    </div>
  );
};

export default InscriptionModele;
import React, { useState } from 'react'
import Footer from '../components/layout/Footer';
import HeroProjet from '../components/sections/Hero/HeroProjet';
import NouveauProjet from '../components/sections/Projet/NouveauProjet';
import MoodboardUpload from './../components/sections/Projet/MoodboardUpload';

const Projet: React.FC = () => {
    const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    // Simulation de l'enregistrement
    setTimeout(() => {
      setIsSaving(false);
      alert('Projet enregistré avec succès!');
    }, 2000);
  };
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <HeroProjet backgroundImage="/images/Profile_agence_page.jpg" />
        
        {/* Brief section*/}
        <NouveauProjet />
        <MoodboardUpload title="Moodboard" />
        <MoodboardUpload title="Contrat" />
         {/* Texte cliquable Enregistrer */}
      <div className="flex justify-center pb-16 bg-white">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className={`text-gray-700 hover:text-gray-900 transition-colors duration-200 ${
            isSaving ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
          }`}
          style={{
            fontFamily: 'Red Hat Mono',
            fontWeight: 400,
            fontStyle: 'regular',
            fontSize: '12px',
            lineHeight: '100%',
            letterSpacing: '0%',
            fontVariantNumeric: 'lining-nums',
            textDecoration: 'underline',
          }}
        >
          {isSaving ? 'Enregistrement...' : 'Enregistrer'}
        </button>
      </div>
        <Footer />
      </div>
    );
  };

export default Projet
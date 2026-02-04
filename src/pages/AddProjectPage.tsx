import React, { useState } from 'react';
import Footer from '../components/layout/Footer';
import HeroProjet from '../components/sections/Hero/HeroProjet';
import MoodboardUpload from '../components/sections/Projet/MoodboardUpload';
import BriefForm, { type BriefFormData } from '../components/sections/Projet/BriefForm';

const AddProjectPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [briefData, setBriefData] = useState<BriefFormData>({
    clientBrand: '',
    storytelling: '',
    localisation: '',
    date: '',
    budgetModele: '',
    nombreModeles: '',
  });

  const handleBriefChange = (field: keyof BriefFormData, value: string) => {
    setBriefData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // TODO: Replace with API submission when backend is ready
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Projet envoyé avec succès.');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroProjet backgroundImage="/images/Profile_agence_page.jpg" />

      <BriefForm value={briefData} onChange={handleBriefChange} />

      <MoodboardUpload title="Moodboard" />
      <MoodboardUpload title="Contrat" />

      <div
        className="flex justify-center pb-16"
        style={{ backgroundColor: '#F5F0EB' }}
      >
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`px-8 py-3 rounded-full text-white transition-all duration-200 ${
            isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-900'
          }`}
          style={{
            fontFamily: 'Red Hat Mono, monospace',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '12px',
            lineHeight: '100%',
            letterSpacing: '0%',
          }}
        >
          {isSubmitting ? 'Envoi...' : 'Envoyer le projet'}
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default AddProjectPage;

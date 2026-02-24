import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, ApiError } from '../../../services/api';
import type { ModelInscriptionFormData, ModelModeleFormData, ModelProfilPhysiqueFormData } from '../../../pages/InscriptionModele';

interface ProfilPhysiqueFormProps {
  onPrevious?: () => void;
  formData: ModelProfilPhysiqueFormData;
  onFormDataChange: (data: ModelProfilPhysiqueFormData) => void;
  inscriptionFormData: ModelInscriptionFormData;
  modeleFormData: ModelModeleFormData;
}

const ProfilPhysiqueForm: React.FC<ProfilPhysiqueFormProps> = ({ 
  onPrevious,
  formData,
  onFormDataChange,
  inscriptionFormData,
  modeleFormData
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const labelStyle = {
    fontFamily: 'Inter Tight, sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '100%',
    letterSpacing: '0px',
  };

  const inputStyle = {
    height: '60px',
    borderRadius: '15px',
    border: '1px solid #7E7C7E',
    padding: '16px',
    backgroundColor: '#FDF9F5',
    fontFamily: 'Inter Tight, sans-serif',
    fontSize: '14px',
  };

  const handleInputChange = (field: keyof ModelProfilPhysiqueFormData, value: string | File | null | boolean) => {
    onFormDataChange({
      ...formData,
      [field]: value
    });
  };

  const handleFileChange = (field: 'photoPortrait' | 'photoFullBody' | 'photoProfil', file: File | null) => {
    onFormDataChange({
      ...formData,
      [field]: file
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validate required fields from inscription form
    if (!inscriptionFormData.nomPrenom || !inscriptionFormData.email || !inscriptionFormData.motDePasse || 
        !inscriptionFormData.ville || !inscriptionFormData.pays) {
      setError('Veuillez remplir tous les champs obligatoires du formulaire de profil.');
      return;
    }

    // Validate legal consents
    if (!formData.charteAurae || !formData.cgu || !formData.cgv) {
      setError('Vous devez accepter la charte Aurae, les CGU et les CGV pour continuer.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await api.registerModel({
        // From InscriptionForm
        fullName: inscriptionFormData.nomPrenom,
        birthDate: inscriptionFormData.dateNaissance,
        email: inscriptionFormData.email,
        password: inscriptionFormData.motDePasse,
        phone: inscriptionFormData.telephone || undefined,
        role: inscriptionFormData.role || 'mannequin',
        sousCategorie: inscriptionFormData.sousCategorie || undefined,
        city: inscriptionFormData.ville,
        country: inscriptionFormData.pays,
        instagram: inscriptionFormData.instagram || undefined,
        
        // From ModeleForm
        professionalStatus: modeleFormData.situationPro || undefined,
        legalStatus: modeleFormData.statutJuridique || undefined,
        verificationDoc: modeleFormData.justificatif || undefined,
        
        // From ProfilPhysiqueForm
        gender: formData.sexe || undefined,
        height: formData.taille || undefined,
        weight: formData.poids || undefined,
        shoeSize: formData.pointure || undefined,
        measurements: formData.mensurations || undefined,
        hairColor: formData.couleurCheveux || undefined,
        hairLength: formData.longueurCheveux || undefined,
        eyeColor: formData.couleurYeux || undefined,
        skinTone: formData.teint || undefined,
        bodyType: formData.silhouette || undefined,
        otherFeatures: formData.particularites || undefined,
        portraitPhoto: formData.photoPortrait || undefined,
        fullBodyPhoto: formData.photoFullBody || undefined,
        sideProfilePhoto: formData.photoProfil || undefined,
        
        // Legal consents
        acceptedCharter: formData.charteAurae,
        acceptedCGU: formData.cgu,
        acceptedCGV: formData.cgv,
      });

      console.log('Registration successful:', response);
      alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
      navigate('/login');
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message || 'Une erreur est survenue lors de l\'inscription.');
      } else {
        setError('Une erreur inattendue est survenue. Veuillez réessayer.');
      }
      console.error('Registration error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: '#F5F0EB',
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2
          className="text-black mb-8 text-center lg:text-left"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '24px',
            lineHeight: '120%',
            letterSpacing: '-2%',
          }}
        >
          Informations physiques / personnelles
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="input-container">
                <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                  Sexe
                </label>
                <input 
                  value={formData.sexe}
                  onChange={(e) => handleInputChange('sexe', e.target.value)}
                  className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                  style={inputStyle} 
                />
              </div>

              <div className="input-container">
                <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                  Âge
                </label>
                <input 
                  type="number" 
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                  style={inputStyle} 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="input-container">
                <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                  Taille
                </label>
                <input 
                  value={formData.taille}
                  onChange={(e) => handleInputChange('taille', e.target.value)}
                  className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                  style={inputStyle} 
                />
              </div>

              <div className="input-container">
                <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                  Poids
                </label>
                <input 
                  value={formData.poids}
                  onChange={(e) => handleInputChange('poids', e.target.value)}
                  className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                  style={inputStyle} 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="input-container">
                <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                  Pointure
                </label>
                <input 
                  value={formData.pointure}
                  onChange={(e) => handleInputChange('pointure', e.target.value)}
                  className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                  style={inputStyle} 
                />
              </div>

              <div className="input-container">
                <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                  Mensurations (buste / taille / hanches)
                </label>
                <input 
                  value={formData.mensurations}
                  onChange={(e) => handleInputChange('mensurations', e.target.value)}
                  placeholder="Ex: 90 / 60 / 90"
                  className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                  style={inputStyle} 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="input-container">
                <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                  Couleur de cheveux
                </label>
                <input 
                  value={formData.couleurCheveux}
                  onChange={(e) => handleInputChange('couleurCheveux', e.target.value)}
                  className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                  style={inputStyle} 
                />
              </div>

              <div className="input-container">
                <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                  Longueur de cheveux
                </label>
                <input 
                  value={formData.longueurCheveux}
                  onChange={(e) => handleInputChange('longueurCheveux', e.target.value)}
                  className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                  style={inputStyle} 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="input-container">
                <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                  Couleur des yeux
                </label>
                <input 
                  value={formData.couleurYeux}
                  onChange={(e) => handleInputChange('couleurYeux', e.target.value)}
                  className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                  style={inputStyle} 
                />
              </div>

              <div className="input-container">
                <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                  Teint / carnation
                </label>
                <input 
                  value={formData.teint}
                  onChange={(e) => handleInputChange('teint', e.target.value)}
                  className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                  style={inputStyle} 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="input-container">
                <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                  Silhouette / morphotype
                </label>
                <input 
                  value={formData.silhouette}
                  onChange={(e) => handleInputChange('silhouette', e.target.value)}
                  className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                  style={inputStyle} 
                />
              </div>

              <div className="input-container">
                <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                  Autres particularités (tatouages, piercings, marques ...)
                </label>
                <input 
                  value={formData.particularites}
                  onChange={(e) => handleInputChange('particularites', e.target.value)}
                  className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                  style={inputStyle} 
                />
              </div>
            </div>
          </div>

        <h3
          className="text-black mt-12 mb-6 text-center lg:text-left"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: '120%',
            letterSpacing: '-2%',
          }}
        >
          Photos à uploader
        </h3>

          <div className="space-y-6">
            <div className="input-container">
              <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                Portrait / visage
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange('photoPortrait', e.target.files?.[0] || null)}
                className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                style={inputStyle}
              />
            </div>

            <div className="input-container">
              <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                Full body
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange('photoFullBody', e.target.files?.[0] || null)}
                className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                style={inputStyle}
              />
            </div>

            <div className="input-container">
              <label className="text-gray-700 block mb-2 text-sm" style={labelStyle}>
                Profil latéral
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange('photoProfil', e.target.files?.[0] || null)}
                className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                style={inputStyle}
              />
            </div>
          </div>

          {/* Legal consents */}
          <div className="mt-8 space-y-4">
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={formData.charteAurae}
                onChange={(e) => handleInputChange('charteAurae', e.target.checked)}
                className="mt-1 mr-3"
                style={{
                  width: '20px',
                  height: '20px',
                  minWidth: '20px',
                  minHeight: '20px',
                  accentColor: '#000000',
                  cursor: 'pointer'
                }}
              />
              <span
                className="text-gray-700 text-sm"
                style={{
                  fontFamily: 'Inter Tight, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '140%',
                  letterSpacing: '0px',
                }}
              >
                J'ai pris connaissance de la Charte Aurae et je m'engage à en respecter les principes (éthique, usage de la plateforme, respect des talents et des professionnels)
              </span>
            </label>

            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={formData.cgu}
                onChange={(e) => handleInputChange('cgu', e.target.checked)}
                className="mt-1 mr-3"
                style={{
                  width: '20px',
                  height: '20px',
                  minWidth: '20px',
                  minHeight: '20px',
                  accentColor: '#000000',
                  cursor: 'pointer'
                }}
              />
              <span
                className="text-gray-700 text-sm"
                style={{
                  fontFamily: 'Inter Tight, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '140%',
                  letterSpacing: '0px',
                }}
              >
                J'ai lu et j'accepte les Conditions Générales d'Utilisation d'Aurae.
              </span>
            </label>

            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={formData.cgv}
                onChange={(e) => handleInputChange('cgv', e.target.checked)}
                className="mt-1 mr-3"
                style={{
                  width: '20px',
                  height: '20px',
                  minWidth: '20px',
                  minHeight: '20px',
                  accentColor: '#000000',
                  cursor: 'pointer'
                }}
              />
              <span
                className="text-gray-700 text-sm"
                style={{
                  fontFamily: 'Inter Tight, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '140%',
                  letterSpacing: '0px',
                }}
              >
                J'ai lu et j'accepte les Conditions Générales de Vente d'Aurae.
              </span>
            </label>
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                {error}
              </p>
            </div>
          )}
          {onPrevious && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={onPrevious}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-black text-black rounded-2xl hover:bg-black hover:text-white transition-all duration-200"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '14px',
                  minWidth: '180px',
                }}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5" />
                  <path d="M11 19l-7-7 7-7" />
                </svg>
                Retour
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-2xl transition-all duration-200 transform ${
                  isSubmitting 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-gray-800 hover:scale-105'
                }`}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  minWidth: '180px',
                }}
              >
                {isSubmitting ? 'Inscription en cours...' : 'Finaliser l\'inscription'}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProfilPhysiqueForm;

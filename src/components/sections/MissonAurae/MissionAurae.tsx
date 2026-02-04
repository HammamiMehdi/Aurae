import React from 'react';

const MissionAurae: React.FC = () => {
  return (
    <div className="relative w-full flex justify-center -mt-32 sm:-mt-40 md:-mt-48">
      <div 
        className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 md:p-16 relative z-10"
        style={{
          width: '70%',
          maxWidth: '1200px',
        }}
      >
        {/* Titre */}
        <h3 
          className="text-center mb-6 sm:mb-8"
          style={{
            fontFamily: 'Red Hat Mono, monospace',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '25px',
            lineHeight: '100%',
            letterSpacing: '0%',
            fontVariantNumeric: 'lining-nums proportional-nums',
          }}
        >
          Les missions de Auræ
        </h3>

        {/* Paragraphe */}
        <p 
          className="text-center text-gray-800"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: '120%',
            letterSpacing: '-2%',
            textAlign: 'center',
          }}
        >
          Auræ est une plateforme intelligente de mise en relation entre mannequins, agences et professionnels de la mode, de la publicité et de la production visuelle. Elle optimise l'ensemble du processus de casting, de booking et de gestion des talents grâce à une interface intuitive, interactive et propulsée par une IA avancée, permettant une recherche ultra-ciblée et une expérience utilisateur fluide. L'innovation majeure d'Auræ réside également dans l'intégration d'une fonctionnalité exclusive : La possibilité pour les mannequins de proposer à la vente l'utilisation de leur avatar IA, sous forme de droits à l'image numériques contractuellement encadrés. Cela permet à un client (DA, photographe, marque) de créer une campagne avec un mannequin virtuel, sans déplacement, dans un cadre sécurisé, défini (durée, projet, budget) et rémunéré.
        </p>
      </div>
    </div>
  );
};

export default MissionAurae;
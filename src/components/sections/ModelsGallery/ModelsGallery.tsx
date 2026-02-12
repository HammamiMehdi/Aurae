import React from 'react';

interface Model {
  name: string;
  image: string;
  top: string;
  left: string;
  width: string;
  zIndex: number;
}

const collageModels: Model[] = [
  { name: 'Lena.L', image: '/images/lena-L.jpg', top: 'clamp(5%, 8vh, 12%)', left: 'clamp(2%, 2vw, 5%)', width: 'clamp(200px, 35vw, 400px)', zIndex: 2 },
  { name: 'Katharina.G', image: '/images/image_modele_1.jpg', top: 'clamp(2%, 3vh, 6%)', left: 'clamp(30%, 35vw, 40%)', width: 'clamp(180px, 32vw, 380px)', zIndex: 3 },
  { name: 'Demi.K', image: '/images/Demi-K.jpg', top: 'clamp(6%, 10vh, 14%)', left: 'clamp(55%, 64vw, 70%)', width: 'clamp(210px, 37vw, 420px)', zIndex: 4 },
  { name: 'Ayinde.A', image: '/images/Ayinde-A.jpg', top: 'clamp(60%, 80vh, 90%)', left: 'clamp(0%, 0vw, 3%)', width: 'clamp(180px, 32vw, 380px)', zIndex: 1 },
  { name: 'Cheer.M', image: '/images/Cheer.M.jpg', top: 'clamp(45%, 60vh, 70%)', left: 'clamp(25%, 32vw, 38%)', width: 'clamp(170px, 30vw, 360px)', zIndex: 5 },
  { name: 'Eloise.L', image: '/images/Eloise.jpg', top: 'clamp(62%, 82vh, 92%)', left: 'clamp(60%, 70vw, 75%)', width: 'clamp(200px, 36vw, 410px)', zIndex: 1 },
  { name: 'Bianca.S', image: '/images/Image_home_page.png', top: 'clamp(105%, 125vh, 115%)', left: 'clamp(3%, 6vw, 10%)', width: 'clamp(140px, 24vw, 300px)', zIndex: 1 },
  { name: 'Esther.M', image: '/images/Esther.jpg', top: 'clamp(80%, 110vh, 110%)', left: 'clamp(28%, 36vw, 42%)', width: 'clamp(320px, 60vw, 460px)', zIndex: 1 },
  { name: 'Berenice.L', image: '/images/Berenice-l.jpg', top: 'clamp(110%, 140vh, 150%)', left: 'clamp(48%, 55vw, 62%)', width: 'clamp(320px, 60vw, 650px)', zIndex: 1 },
];

interface ModelCardProps {
  model: Model;
}

const ModelCard: React.FC<ModelCardProps> = ({ model }) => {
  const handleFavoriteClick = () => {
    // TODO: Implement favorite functionality
    console.log(`Toggle favorite for ${model.name}`);
  };

  return (
    <div
      className="absolute w-full"
      style={{
        top: model.top,
        left: model.left,
        width: model.width,
        zIndex: model.zIndex,
      }}
    >
      <div className="relative w-full overflow-hidden">
        <img
          src={model.image}
          alt={model.name}
          className="w-full h-auto object-cover grayscale"
        />
        <button
          type="button"
          onClick={handleFavoriteClick}
          aria-label={`Ajouter ${model.name} aux favoris`}
          className="absolute top-2 right-2 text-red-600 hover:text-red-700 transition-colors z-10"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.54 0 3.04.99 3.57 2.36h1.87C13.46 4.99 14.96 4 16.5 4 19 4 21 6 21 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-white font-semibold text-3xl drop-shadow"
            style={{
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-2%',
            }}
          >
            {model.name}
          </span>
        </div>
      </div>
    </div>
  );
};

const ModelsGallery: React.FC = () => {
  return (
    <section className="w-full bg-white pb-64 mt-8 mb-64">
      <div 
        className="hidden lg:block relative mx-auto px-8 my-auto"
        style={{ 
          height: 'auto',
          minHeight: 'clamp(1200px, 110vh, 1400px)',
          width: '100%'
        }}
      >
        {collageModels.map((model) => (
          <ModelCard key={model.name} model={model} />
        ))}
      </div>
    </section>
  );
};

export default ModelsGallery;

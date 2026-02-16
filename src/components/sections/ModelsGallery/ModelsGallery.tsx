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
  // Top row - Left
  { name: 'Lena.L', image: '/images/lena-L.jpg', top: 'clamp(2%, 3vh, 5%)', left: 'clamp(1%, 1.5vw, 3%)', width: 'clamp(255px, 40vw, 475px)', zIndex: 2 },
  // Top row - Middle (slightly overlapping Lena.L on the right)
  { name: 'Katharina.G', image: '/images/image_modele_1.jpg', top: 'clamp(1%, 2vh, 3%)', left: 'clamp(25%, 30vw, 35%)', width: 'clamp(235px, 38vw, 465px)', zIndex: 3 },
  // Top row - Right (overlapping Katharina.G on the right)
  { name: 'Demi.K', image: '/images/Demi-K.jpg', top: 'clamp(3%, 5vh, 7%)', left: 'clamp(52%, 58vw, 63%)', width: 'clamp(275px, 44vw, 525px)', zIndex: 4 },
  // Middle row - Left (below Lena.L)
  { name: 'Ayinde.A', image: '/images/Ayinde-A.jpg', top: 'clamp(53%, 63vh, 70%)', left: 'clamp(0%, 0vw, 2%)', width: 'clamp(235px, 38vw, 455px)', zIndex: 1 },
  // Middle row - Middle (overlapping bottom of Katharina.G and left of Demi.K)
  { name: 'Cheer.M', image: '/images/Cheer.M.jpg', top: 'clamp(43%, 53vh, 60%)', left: 'clamp(20%, 25vw, 30%)', width: 'clamp(210px, 34vw, 435px)', zIndex: 5 },
  // Middle row - Right (below Demi.K)
  { name: 'Eloise.L', image: '/images/Eloise.jpg', top: 'clamp(55%, 65vh, 72%)', left: 'clamp(58%, 64vw, 69%)', width: 'clamp(245px, 40vw, 495px)', zIndex: 1 },
  // Bottom row - Left (below Ayinde.A, overlapping bottom left of Cheer.M)
  { name: 'Bianca.S', image: '/images/Image_home_page.png', top: 'clamp(88%, 98vh, 105%)', left: 'clamp(1%, 1.5vw, 4%)', width: 'clamp(370px, 57vw, 570px)', zIndex: 2 },
  // Bottom row - Middle (overlapping bottom of Cheer.M and left of Eloise.L)
  { name: 'Esther.M', image: '/images/Esther.jpg', top: 'clamp(80%, 90vh, 97%)', left: 'clamp(24%, 30vw, 36%)', width: 'clamp(390px, 66vw, 610px)', zIndex: 1 },
  // Bottom row - Right (below Eloise.L)
  { name: 'Berenice.L', image: '/images/Berenice-l.jpg', top: 'clamp(105%, 115vh, 122%)', left: 'clamp(42%, 48vw, 54%)', width: 'clamp(415px, 71vw, 815px)', zIndex: 1 },
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
      className="absolute w-full h-auto"
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
        className="hidden lg:block relative  my-auto"
        style={{ 
          height: 'auto',
          minHeight: 'clamp(1600px, 150vh, 1500px)',
          paddingBottom: 'clamp(150px, 20vh, 300px)',
          width: '100%',
          marginLeft: '20px'
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

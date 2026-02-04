import React from 'react';

const models = [
  { name: 'Lena.L', image: '/images/modele_1.jpg' },
  { name: 'Katharina.G', image: '/images/image_modele_1.jpg' },
  { name: 'Demi.K', image: '/images/modele_2.jpg' },
  { name: 'Ayinde.A', image: '/images/modele_3.jpg' },
  { name: 'Cheer.M', image: '/images/modele_4.jpg' },
  { name: 'Eloise.L', image: '/images/modele_5.jpg' },
  { name: 'Esther.M', image: '/images/visage_noir_et_blanc.jpg' },
  { name: 'Bianca.S', image: '/images/image_modele_2.jpg' },
  { name: 'Rachelle.P', image: '/images/image_modele_3.jpg' },
  { name: 'Kira.N', image: '/images/image_modele_4.jpg' },
];

const collageModels = [
  { name: 'Lena.L', image: '/images/modele_1.jpg', top: '0%', left: '0%', width: '30%', zIndex: 2 },
  { name: 'Katharina.G', image: '/images/image_modele_1.jpg', top: '0%', left: '32%', width: '32%', zIndex: 3 },
  { name: 'Demi.K', image: '/images/modele_2.jpg', top: '3%', left: '70%', width: '30%', zIndex: 2 },
  { name: 'Ayinde.A', image: '/images/modele_3.jpg', top: '44%', left: '0%', width: '32%', zIndex: 1 },
  { name: 'Cheer.M', image: '/images/modele_4.jpg', top: '52%', left: '36%', width: '30%', zIndex: 2 },
  { name: 'Eloise.L', image: '/images/modele_5.jpg', top: '50%', left: '70%', width: '26%', zIndex: 1 },
  { name: 'Bianca.S', image: '/images/image_modele_2.jpg', top: '78%', left: '6%', width: '24%', zIndex: 1 },
  { name: 'Rachelle.P', image: '/images/image_modele_3.jpg', top: '95%', left: '38%', width: '30%', zIndex: 1 },
  { name: 'Kira.N', image: '/images/image_modele_4.jpg', top: '80%', left: '68%', width: '22%', zIndex: 1 },
];

const ModelsGallery: React.FC = () => {
  return (
    <section className="w-full bg-white pb-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="hidden lg:block relative" style={{ height: '1100px' }}>
          {collageModels.map((model) => (
            <div
              key={model.name}
              className="absolute"
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
                  aria-label={`Ajouter ${model.name} aux favoris`}
                  className="absolute top-2 right-2 text-red-600 hover:text-red-700 transition-colors"
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
          ))}
        </div>

        <div className="lg:hidden columns-2 sm:columns-3 gap-4">
          {models.map((model) => (
            <div key={model.name} className="mb-4 break-inside-avoid">
              <div className="relative w-full overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-auto object-cover grayscale"
                />
                <button
                  type="button"
                  aria-label={`Ajouter ${model.name} aux favoris`}
                  className="absolute top-2 right-2 text-red-600 hover:text-red-700 transition-colors"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsGallery;

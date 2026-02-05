import React from 'react';
import { Link } from 'react-router-dom';

interface Model {
  id: number;
  name: string;
  image: string;
}

const MessagerieGallery: React.FC = () => {
  const models: Model[] = [
    { id: 1, name: 'Lena.L', image: '/images/modele_1.jpg' },
    { id: 2, name: 'Katharina.G', image: '/images/image_modele_1.jpg' },
    { id: 3, name: 'Demi.K', image: '/images/modele_2.jpg' },
    { id: 4, name: 'Ayinde.A', image: '/images/modele_3.jpg' },
    { id: 5, name: 'Cheer.M', image: '/images/modele_4.jpg' },
    { id: 6, name: 'Eloise.L', image: '/images/modele_5.jpg' },
    { id: 7, name: 'Esther.M', image: '/images/visage_noir_et_blanc.jpg' },
    { id: 8, name: 'Bianca.S', image: '/images/image_modele_2.jpg' },
  ];

  return (
    <div className="w-full">
      <div 
        className="grid grid-cols-4 gap-5"
        style={{ gap: '20px' }}
      >
        {models.map((model) => (
          <Link 
            key={model.id} 
            to={`/chat/${model.id}`}
            className="flex flex-col cursor-pointer hover:opacity-90 transition-opacity"
          >
            {/* Model Photo */}
            <div className="w-full aspect-square overflow-hidden mb-3">
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Model Name */}
            <p
              className="text-black text-left"
              style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontStyle: 'bold',
                fontSize: '20px',
                lineHeight: '120%',
                letterSpacing: '-2%',
              }}
            >
              {model.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MessagerieGallery;

import React from "react";

const ProfileModeleProjets: React.FC = () => {
  const projets = [
    {
      id: 1,
      image: "/images/Projet_modele_3.png",
      alt: "Projet modèle 3",
    },
    {
      id: 2,
      image: "/images/Projet_modele_2.jpg",
      alt: "Projet modèle 2",
    },
    {
      id: 3,
      image: "/images/Projet_modele_1.png",
      alt: "Projet modèle 1",
    },
  ];

  return (
    <div className="w-full bg-white ">
      {/* Titre aligné à droite */}
      <div className="w-full mb-16" style={{ padding: '0 20px' }}>
        <div className="flex justify-start">
          <div
            style={{
              fontFamily: "Inter",
              fontWeight: 700,
              fontStyle: "Bold",
              fontSize: "30px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
            className="text-black"
          >
            Ses projets
          </div>
        </div>
      </div>

      {/* Div contenant les images */}
      <div className="w-full" style={{ padding: '0 20px' }}>
        {projets.map((projet, index) => (
          <div
            key={projet.id}
            className="w-full flex justify-center"
            style={{
              marginBottom: index === projets.length - 1 ? "0px" : "25px", // Espace de 20px entre les images, sauf la dernière
            }}
          >
            <img
              src={projet.image}
              alt={projet.alt}
              className="w-full h-[550px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileModeleProjets;
import React from "react";
import HeroMesProjetsModele from "../components/sections/Hero/HeroMesProjetsModele";
import ProjectCarousel from "../components/sections/ProjectCarousel/ProjectCarousel";
import ArchivedCarousel from "../components/sections/ArchivedCarousel/ArchivedCarousel";
import Footer from "../components/layout/Footer";

const MesProjetsModele: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero avec image de fond */}
      <HeroMesProjetsModele backgroundImage="/images/profile_modele_page.jpg" />
      <ProjectCarousel
        projects={[
          {
            id: 1,
            title: "Campagne Beauté 2024",
            image: "/images/carrousel_projet_2.png",
          },
          {
            id: 2,
            title: "Look Book Élégance",
            image: "/images/carrousel_projet_1.png",
          },
          {
            id: 3,
            title: "Editorial Mode",
            image: "/images/carrousel_projet_2.png",
          },
          {
            id: 4,
            title: "Shooting Commercial",
            image: "/images/carrousel_projet_1.png",
          },
        ]}
      />

<ArchivedCarousel 
  projects={[
    {
      id: 5,
      title: "Collection Été 2023",
      image: "/images/carrousel_projet_archives_2.png"
    },
    {
      id: 6,
      title: "Portfolio Classique",
      image: "/images/carrousel_projet_archives_1.png"
    },
    {
      id: 7,
      title: "Mode Sportive",
      image: "/images/carrousel_projet_archives_2.png"
    },
    {
      id: 8,
      title: "Événement Galaxie",
      image: "/images/carrousel_projet_archives_1.png"
    }
  ]}
/>
  <Footer />
    </div>
  );
};

export default MesProjetsModele;

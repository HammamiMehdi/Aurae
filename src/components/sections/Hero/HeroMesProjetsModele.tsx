import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import {  useLocation } from "react-router-dom";
import Navigation from '../../layout/Navigation';
import type { NavItem } from '../../../types/profiles';
import HeaderStandard from "../../layout/HeaderStandard";

interface HeroMesProjetsModeleProps {
  backgroundImage: string;
}

const HeroMesProjetsModele: React.FC<HeroMesProjetsModeleProps> = ({
  backgroundImage,
}) => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState<string>(location.pathname);
  const [isLoaded, setIsLoaded] = useState(false);

  const navItems: NavItem[] = [
    { label: "Home page", href: "/" },
    { label: "Aurae Profile", href: "/profile-modele" },
    { label: "Trouver un model", href: "/Models" },
    { label: "Mes Projets", href: "/projets-modele" },
  ];

  const handleNavClick = (href: string) => {
    setActiveNav(href);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Background Image avec animation d'entrée */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-transform duration-1000 ${
          isLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          filter: "grayscale(100%) brightness(0.9)",
          transform: isLoaded ? "scale(1.2)" : "scale(1.4)",
        }}
      />

      {/* Overlay sombre pour améliorer la lisibilité */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-1000 ${
          isLoaded ? "opacity-40" : "opacity-0"
        }`}
      />

<HeaderStandard textColor="text-white" />

      {/* Navigation */}
      <div 
        className={`relative z-50 transition-all duration-700 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <Navigation
          navItems={navItems}
          activeNav={activeNav}
          onNavClick={handleNavClick}
          textColor="text-white"
          justify="center"
        />
      </div>

      {/* Contenu simplifié - Titre uniquement */}
      <div className="absolute inset-0 z-20 text-white flex items-center justify-center">
      <motion.div
        className={`absolute text-white transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
        style={{
          top: "50%",
          left: "60%",
          transform: "translateY(-50%)",
          fontFamily: "Inter",
          fontWeight: 700,
          fontStyle: "bold",
          fontSize: "clamp(28px, 4vw, 45px)",
          lineHeight: "120%",
          letterSpacing: "-2%",
          transitionDelay: "300ms",
          textAlign: "left",
        }}
      >
        Mes projets
      </motion.div>
      </div>
    </section>
  );
};

export default HeroMesProjetsModele;
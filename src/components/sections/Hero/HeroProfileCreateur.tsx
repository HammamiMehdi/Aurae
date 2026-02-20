import React, { useState, useEffect } from "react";
import {  useLocation } from "react-router-dom";
import Navigation from '../../layout/Navigation';
import type { NavItem } from '../../../types/profiles';
import HeaderStandard from "../../layout/HeaderStandard";

interface HeroProfileCreateurProps {
  backgroundImage: string;
}

const HeroProfileCreateur: React.FC<HeroProfileCreateurProps> = ({
  backgroundImage,
}) => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState<string>(location.pathname);
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const navItems: NavItem[] = [
    { label: "Home page", href: "/" },
    { label: "Aurae Profile", href: "/profile-createur" },
    { label: "Trouver un talent", href: "/Models" },
    { label: "Matchs & Chat", href: "/matchs" },
    { label: 'Contact & RDV', href: 'https://calendly.com/constance-landowski/30min' },
  ];

  const handleNavClick = (href: string) => {
    setActiveNav(href);
  };

  useEffect(() => {
    setIsLoaded(true);
    
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calcul des valeurs responsives pour le background
  // MacBook Air 13" : 1440x900 (ratio 16:10)
  const getScale = () => {
    const aspectRatio = windowSize.width / windowSize.height;
    // Pour MacBook Air 13" (ratio ~1.6), on utilise un scale légèrement plus grand
    if (aspectRatio > 1.5) {
      return isLoaded ? 1.35 : 1.25; // Format large (16:10, 16:9)
    } else {
      return isLoaded ? 1.3 : 1.2; // Format plus carré
    }
  };

  const getTranslateX = () => {
    // Ajustement basé sur la largeur de l'écran
    if (windowSize.width >= 1440) {
      return '5%'; // MacBook Air 13" et plus grand
    } else if (windowSize.width >= 1024) {
      return '4%';
    } else {
      return '3%';
    }
  };

  const getTranslateY = () => {
    // Ajustement basé sur la hauteur de l'écran
    if (windowSize.height >= 900) {
      return '10%'; // MacBook Air 13" et plus grand
    } else if (windowSize.height >= 768) {
      return '9%';
    } else {
      return '8%';
    }
  };

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Background Image avec animation d'entrée */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `scale(${getScale()}) translateX(${getTranslateX()}) translateY(${getTranslateY()})`,
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

      {/* Contenu texte avec animations d'entrée */}
      <div className="absolute inset-0 z-20 text-white">
        {/* Container for nom créateur et Submit the project */}
        <div
  className="absolute flex flex-col items-end"
  style={{
    left: "60%",
    top: "40%",
  }}
>
  {/* Conteneur Nom + Coeur avec animation */}
  <div
    className={`flex items-center transition-all duration-1000 ${
      isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
    }`}
    style={{
      width: "433px",
      height: "77px",
      transitionDelay: "300ms",
      marginRight: "30px",
      justifyContent: "flex-end", // Aligne le contenu à droite du conteneur
    }}
  >
    {/* Coeur simple rouge à gauche du nom */}
    <div className="mr-4">
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="#D10000" 
        style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2))" }}
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </div>

    {/* Nom du créateur */}
    <div
      style={{
        fontFamily: "Inter",
        fontWeight: 700,
        fontStyle: "normal",
        fontSize: "40px", // Ajusté pour Paul. Krausser
        lineHeight: "120%",
        letterSpacing: "-2%",
        textAlign: "right",
        color: "white"
      }}
    >
      Paul. Krausser
    </div>
  </div>

  {/* Submit the project avec animation */}
  <div
    className={`flex items-center justify-center transition-all duration-1000 ${
      isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
    }`}
    style={{
      width: "auto",
      padding: "10px 20px",
      height: "30px",
      backgroundColor: "#1B1F26B8",
      borderRadius: "16px",
      opacity: 0.8, // Augmenté pour la visibilité sur fond image
      transitionDelay: "400ms",
      marginRight: "30px",
    }}
  >
    <span
      style={{
        fontFamily: "Inter",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "12px",
        lineHeight: "100%",
        letterSpacing: "0%",
        color: "white",
        fontVariantNumeric: "lining-nums proportional-nums",
      }}
    >
      Proposer le projet
    </span>
  </div>
</div>

        {/* Informations du créateur avec animation */}
        <div
          className={`absolute transition-all duration-1000 ${
            isLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{
            top: "84%",
            left: "100px",
            width: "308px",
            fontFamily: "Inter",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "12px",
            lineHeight: "100%",
            letterSpacing: "0%",
            fontVariantNumeric: "lining-nums proportional-nums",
            color: "white",
            transitionDelay: "500ms",
          }}
        >
          5 ans d'expérience
          <br />
          Principals clients : Dior, Maison Labiche
          <br />
          Materiel : Leica
          <br />
          Spécialité: Nature morte
          <br />
          Âge : 25 ans
          <br />
          Agence : THE SPINE Paris
          <br />
          Langues : Anglais, Français
        </div>

        {/* Container for IA option and location - Bottom right */}
        <div
          className="absolute flex flex-col items-end"
          style={{
            bottom: "20px",
            right: "20px",
          }}
        >
          

          {/* 📍 Europe & Asie */}
          <div
            className={`transition-all duration-1000 ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
            style={{
              transitionDelay: "700ms",
            }}
          >
            <div
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "15px",
                lineHeight: "100%",
                letterSpacing: "0%",
                fontVariantNumeric: "lining-nums proportional-nums",
                textAlign: "right",
                color: "#fff",
              }}
            >
              📍 Europe & Asie
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroProfileCreateur;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from '../../layout/Navigation';
import type { NavItem } from '../../../types/profiles';

interface HeroProfileModeleProps {
  backgroundImage: string;
}

const HeroProfileModele: React.FC<HeroProfileModeleProps> = ({
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
          transform: isLoaded ? "scale(1.4) translateX(-10%)" : "scale(1.6) translateX(-10%)",
        }}
      />

      {/* Overlay sombre pour améliorer la lisibilité */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-1000 ${
          isLoaded ? "opacity-40" : "opacity-0"
        }`}
      />

      {/* Header minimal avec logo et navigation */}
      <header className="relative z-50 flex justify-between items-center p-5">
        {/* Logo à gauche avec animation */}
        <Link
          to="/"
          className={`text-white cursor-pointer transition-all duration-700 hover:scale-105 hover:opacity-80 ${
            isLoaded ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <h1 
            className="text-[20px] font-bold leading-[43.2px] tracking-[-0.72px]"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontStyle: 'normal'
            }}
          >
            <span>Auræ</span>{' '}
            <span 
              className="italic text-[20px] leading-[43.2px] tracking-[-0.72px]"
              style={{ 
                fontFamily: 'Instrument Sans, sans-serif',
                fontWeight: 400,
                fontStyle: 'italic'
              }}
            >
              Studio
            </span>
          </h1>
        </Link>

        {/* Image de profil à droite avec animation */}
        <div
          className={`flex items-center transition-all duration-700 hover:scale-110 ${
            isLoaded ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div
            className="w-12 h-12 rounded-full overflow-hidden border-2 border-white transition-all duration-300 hover:border-gray-300 cursor-pointer"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(100%) brightness(1.1)",
            }}
            onClick={() => console.log("Profile image clicked")} // Vous pouvez ajouter une fonctionnalité ici
          />
        </div>
      </header>

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
        {/* Container for Katharina.G and Submit the project */}
        <div
          className="absolute flex flex-col items-end"
          style={{
            left: "60%",
            top: "40%",
          }}
        >
          {/* Katharina.G avec animation */}
          <div
            className={`transition-all duration-1000 ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
            style={{
              width: "360px",
              height: "77px",
              fontFamily: "Inter",
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "40px",
              lineHeight: "120%",
              letterSpacing: "-2%",
              transitionDelay: "300ms",
              textAlign: "right",
              marginRight: "30px",
            }}
          >
            Katharina.G
          </div>

          {/* Submit the project avec animation */}
          <div
            className={`flex items-center justify-center transition-all duration-1000 ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
            style={{
              width: "auto",
              padding: "10px 20px",
              height: "30px",
              backgroundColor: "#1B1F26B8",
              borderRadius: "16px",
              opacity: 0.5,
              transitionDelay: "400ms",
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
                fontVariantNumeric: "lining-nums proportional-nums",
              }}
            >
              Proposer le projet
            </span>
          </div>
        </div>

        {/* Mesures du modèle avec animation */}
        <div
          className={`absolute transition-all duration-1000 ${
            isLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{
            top: "70%",
            left: "100px",
            width: "308px",
            height: "126px",
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
          176 cm/ 5'9'' 1/2
          <br />
          Bust 79 cm/ 31''
          <br />
          Waist 61 cm /24''
          <br />
          Hips 89 cm/ 35''
          <br />
          Shoes 39/ 5 1/2
          <br />
          Hair brown
          <br />
          Eyes browns
        </div>

        {/* Informations supplémentaires avec animation */}
        <div
          className={`absolute transition-all duration-1000 ${
            isLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{
            top: "calc(70% + 100px)",
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
            transitionDelay: "550ms",
          }}
        >
          Âge : 25 ans  <br /> Agence : Modelmanagement Paris  <br /> Langues : Anglais, Allemand, Français
        </div>

        {/* Container for IA option and location - Bottom right */}
        <div
          className="absolute flex flex-col items-end"
          style={{
            bottom: "20px",
            right: "20px",
          }}
        >
          {/* Background IA option avec animation */}
          <div
            className={`transition-all duration-1000 flex items-center justify-center ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
            style={{
              width: "135px",
              height: "30px",
              marginBottom: "35px",
              transitionDelay: "600ms",
              background: "#FFFFFF80",
              borderRadius: "16px",
            }}
          >
            <span
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "15px",
                lineHeight: "120%",
                letterSpacing: "-2%",
                textAlign: "center",
                color: "#fff",
              }}
            >
              IA option
            </span>
          </div>

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

export default HeroProfileModele;
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface HeroMesProjetsModeleProps {
  backgroundImage: string;
}

const HeroMesProjetsModele: React.FC<HeroMesProjetsModeleProps> = ({
  backgroundImage,
}) => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState<string>(location.pathname);
  const [isLoaded, setIsLoaded] = useState(false);

  const navItems = [
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
            onClick={() => console.log("Profile image clicked")}
          />
        </div>
      </header>

      {/* Navigation avec animation */}
      <nav
        className={`relative z-50 px-8 pb-8 justify-center flex transition-all duration-700 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="flex space-x-16">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`text-white hover:text-gray-300 transition-all duration-300 font-medium cursor-pointer ${
                activeNav === item.href ? "font-bold" : "font-normal"
              } ${isLoaded ? "opacity-100" : "opacity-0"}`}
              style={{
                fontSize: "14px",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

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
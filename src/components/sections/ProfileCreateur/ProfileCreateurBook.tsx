import React, { useState, useRef } from "react";
import CalendarModal from "../../ui/CalendarModal";

// Icônes simples en SVG
const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const ProfileCreateurBook: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const projects = [
    {
      id: 1,
      name: "Look Book Élégance",
      image: "/images/crea1.png",
    },
    {
      id: 2,
      name: "Campagne Beauté 2024",
      image: "/images/crea2.png",
    },
    {
      id: 3,
      name: "Editorial Mode",
      image: "/images/crea1.png",
    },
    {
      id: 4,
      name: "Shooting Commercial",
      image: "/images/crea2.png",
    },
  ];

  // const projects = [
  //   {
  //     id: 1,
  //     name: "Look Book Élégance",
  //     image: "/images/template1.png",
  //   },
  //   {
  //     id: 2,
  //     name: "Campagne Beauté 2024",
  //     image: "/images/template1.png",
  //   },
  //   {
  //     id: 3,
  //     name: "Editorial Mode",
  //     image: "/images/template1.png",
  //   },
  //   {
  //     id: 4,
  //     name: "Shooting Commercial",
  //     image: "/images/template1.png",
  //   },
  // ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  // Fonctionnalité de glissement
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setPrevTranslate(currentTranslate);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentPosition = e.touches[0].clientX;
    const diff = currentPosition - startX;
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100 && currentIndex < projects.length - 1) {
      nextSlide();
    } else if (movedBy > 100 && currentIndex > 0) {
      prevSlide();
    }

    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  // Version souris
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setPrevTranslate(currentTranslate);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentPosition = e.clientX;
    const diff = currentPosition - startX;
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100 && currentIndex < projects.length - 1) {
      nextSlide();
    } else if (movedBy > 100 && currentIndex > 0) {
      prevSlide();
    }

    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setCurrentTranslate(0);
      setPrevTranslate(0);
    }
  };

  return (
    <div className="w-full bg-white py-16">
      {/* Nouvelle ligne avec icônes et textes */}
      <div className="w-full mb-8" style={{ padding: '0 20px' }}>
        <div className="flex justify-between items-center">
          {/* Partie gauche - Mon agenda */}
          <div 
        className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => setIsCalendarOpen(true)}
      >
          <CalendarIcon />
            <span
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontStyle: "Regular",
                fontSize: "20px",
                lineHeight: "120%",
                letterSpacing: "-2%",
                textAlign: "center",
              }}
            >
              Mon agenda
            </span>
          </div>

      {/* Popup du calendrier */}
      <CalendarModal 
        isOpen={isCalendarOpen} 
        onClose={() => setIsCalendarOpen(false)} 
      />
          {/* Partie droite - Mes projets */}
          <div className="flex items-center gap-2">
            
            
            <span
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontStyle: "Regular",
                fontSize: "20px",
                lineHeight: "120%",
                letterSpacing: "-2%",
                textAlign: "center",
              }}
            >
              
              Télécharger la fiche créatif
            </span>
          </div>
        </div>
      </div>

      {/* Titre et description */}
      <div className="w-full mb-12 mt-20" style={{ padding: '0 20px' }}>
        <div className="mb-6">
          <div
            className="mb-4"
            style={{
              fontFamily: "Inter",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: "50px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "left",
            }}
          >
            Ses projets
          </div>
          <div
            className="max-w-4xl mx-auto mt-10"
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "120%",
              letterSpacing: "-2%",
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
          </div>
        </div>
      </div>

      {/* Carousel avec glissement */}
      <div className="relative w-full" style={{ height: "600px" }}>
        <div 
          className="relative h-full overflow-hidden cursor-grab active:cursor-grabbing"
          ref={carouselRef}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out h-full gap-[30px]"
            style={{
              transform: `translateX(calc(-${currentIndex * (100 + 3)}% + ${currentTranslate}px))`,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 h-full flex justify-center items-center select-none"
              >
                <div className="relative w-[400px] h-full">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover select-none"
                    draggable={false}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="text-white text-center"
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 700,
                        fontStyle: "bold",
                        fontSize: "15px",
                        lineHeight: "120%",
                        letterSpacing: "-2%",
                      }}
                    >
                      {project.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Boutons de navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-70 transition-all"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-70 transition-all"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Indicateurs */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-white" : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCreateurBook;

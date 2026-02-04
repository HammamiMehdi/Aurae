import React, { useState, useRef, useEffect } from "react";

const ProfileAgenceProjects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      name: "Projet Fashion Week",
      image: "/images/carrousel_1.jpg",
    },
    {
      id: 2,
      name: "Campagne Luxe 2024",
      image: "/images/carrousel_2.jpg",
    },
    {
      id: 3,
      name: "Shooting Editorial",
      image: "/images/carrousel_3.png",
    },
  ];

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

    // Si glissé de plus de 100px, changer de slide
    if (movedBy < -100 && currentIndex < projects.length - 1) {
      nextSlide();
    } else if (movedBy > 100 && currentIndex > 0) {
      prevSlide();
    }

    // Réinitialiser la position
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

    // Si glissé de plus de 100px, changer de slide
    if (movedBy < -100 && currentIndex < projects.length - 1) {
      nextSlide();
    } else if (movedBy > 100 && currentIndex > 0) {
      prevSlide();
    }

    // Réinitialiser la position
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
    <div className="w-full bg-white py-12 sm:py-14 md:py-16">
      {/* Titre et description */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-8 sm:mb-10 md:mb-12">
        <div className="text-center mb-4 sm:mb-6">
          <div
            className="mb-3 sm:mb-4"
            style={{
              fontFamily: "Red Hat Mono",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: "clamp(22px, 3.5vw, 30px)",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            NOS PROJETS
          </div>
          <div
            className="max-w-4xl mx-auto mt-6 sm:mt-8 md:mt-10 px-4"
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "clamp(13px, 1.8vw, 16px)",
              lineHeight: "140%",
              letterSpacing: "-2%",
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea.
          </div>
        </div>
      </div>

      {/* Carousel avec glissement */}
      <div className="relative w-full" style={{ height: "clamp(400px, 50vw, 600px)" }}>
        <div 
          className="relative h-full overflow-hidden cursor-grab active:cursor-grabbing"
          ref={carouselRef}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out h-full gap-4 sm:gap-6 md:gap-[30px]"
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 1}rem + ${currentTranslate}px))`,
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
                className="flex-shrink-0 h-full flex justify-center items-center select-none px-2 sm:px-4"
              >
                <div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-full">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover select-none"
                    draggable={false}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="text-white text-center px-4"
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 700,
                        fontStyle: "bold",
                        fontSize: "clamp(12px, 1.5vw, 15px)",
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
          className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 md:p-4 rounded-full hover:bg-opacity-70 transition-all"
          aria-label="Previous slide"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
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
          className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 md:p-4 rounded-full hover:bg-opacity-70 transition-all"
          aria-label="Next slide"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
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
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-white" : "bg-white bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Texte "Voir tous les projets" */}
      <div className="w-full flex justify-center mt-6 sm:mt-8 md:mt-10 px-4">
        <span
          style={{
            fontFamily: "Red Hat Mono",
            fontWeight: 400,
            fontSize: "clamp(13px, 1.5vw, 15px)",
            lineHeight: "100%",
            letterSpacing: "0%",
            fontVariantNumeric: "lining-nums proportional-nums",
          }}
        >
          Voir tous les projets
        </span>
      </div>
    </div>
  );
};

export default ProfileAgenceProjects;
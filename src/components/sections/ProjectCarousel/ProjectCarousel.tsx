import React, { useState, useRef } from 'react';

interface ProjectCarouselProps {
  projects: {
    id: number;
    title: string;
    image: string;
  }[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

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
      {/* En-tête avec textes */}
      <div className="w-full mb-8">
        <div className="flex justify-between items-center w-full">
          <h2 
            className="text-gray-900"
            style={{
              fontFamily: "Inter",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: "20px",
              lineHeight: "120%",
              letterSpacing: "-2%",
              marginLeft: "20px",
            }}
          >
            EN COURS
          </h2>
          
          <button 
            className="text-gray-600 hover:text-gray-800 transition-colors"
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontStyle: "regular",
              fontSize: "12px",
              lineHeight: "120%",
              letterSpacing: "-2%",
              textAlign: "center",
              marginRight: "20px",
            }}
          >
            Voir tout
          </button>
        </div>
      </div>

      {/* Carrousel */}
      <div className="relative w-full" style={{ height: "690px" }}>
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
                <div className="relative w-full max-w-lg h-full">
                  <img
                    src={project.image}
                    alt={project.title}
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
                        fontSize: "20px",
                        lineHeight: "120%",
                        letterSpacing: "-2%",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.8)"
                      }}
                    >
                      {project.title}
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

export default ProjectCarousel;
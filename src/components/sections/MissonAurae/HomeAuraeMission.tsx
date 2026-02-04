import React, { useEffect, useRef } from 'react';

const HomeAuraeMission: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5; // Vitesse du parallax
        sectionRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url('/images/home_section.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay avec dégradé pour meilleur effet visuel */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      
      {/* Contenu centré */}
      <div className="relative z-10 w-full h-screen flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          {/* Espace pour du contenu futur - vous pouvez ajouter du texte ici */}
        </div>
      </div>
    </section>
  );
};

export default HomeAuraeMission;
import React from 'react';

const ProfileAgenceContent: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Section avec "Ajouter un nouveau projet" aligné à droite */}
      <div className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto flex justify-center sm:justify-end mb-6">
          <div 
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: 'clamp(13px, 1.5vw, 15px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              fontVariantNumeric: 'lining-nums proportional-nums',
            }}
            className="text-black"
          >
           Créer un nouveau projet
          </div>
        </div>
      </div>

      {/* Section avec division gauche/droite */}
      <div className="w-full pl-10 pb-12 sm:pb-14 md:pb-16">
        <div className=" mx-auto flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12">
          {/* Partie gauche - Textes */}
          <div className="flex-1 order-2 lg:order-1 pt-20">
            {/* A PROPOS */}
            <div 
              className="mb-6 sm:mb-8"
              style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontStyle: 'bold',
                fontSize: 'clamp(45px, 3vw, 50px)',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}
            >
              A propos
            </div>

            {/* Description principale */}
            <div 
              className="mb-8 sm:mb-10 md:mb-12"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: 'clamp(13px, 1.5vw, 15px)',
                lineHeight: '140%',
                letterSpacing: '-2%',
              }}
            >
              Production 520 est une agence de production et de post-production photo, vidéo et 360° spécialisée dans la mode et le luxe
              (e-shop, lookbook, edito, campagne etc.). lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
            </div>

            {/* Services */}
            <div className="mb-5 sm:mb-6">
              <div 
                className="mb-2 sm:mb-3"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  fontStyle: 'bold',
                  fontSize: 'clamp(14px, 1.8vw, 16px)',
                  lineHeight: '120%',
                  letterSpacing: '-2%',
                }}
              >
                Services
              </div>
              <div 
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: 'clamp(13px, 1.5vw, 15px)',
                  lineHeight: '140%',
                  letterSpacing: '-2%',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
              </div>
            </div>

            {/* Clients */}
            <div className="mb-5 sm:mb-6">
              <div 
                className="mb-2 sm:mb-3"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  fontStyle: 'bold',
                  fontSize: 'clamp(14px, 1.8vw, 16px)',
                  lineHeight: '120%',
                  letterSpacing: '-2%',
                }}
              >
                Clients
              </div>
              <div 
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: 'clamp(13px, 1.5vw, 15px)',
                  lineHeight: '140%',
                  letterSpacing: '-2%',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                <div 
                className="mb-2 sm:mb-3 mt-3"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  fontStyle: 'bold',
                  fontSize: 'clamp(14px, 1.8vw, 16px)',
                  lineHeight: '120%',
                  letterSpacing: '-2%',
                }}
              >
                Notre esthétique 
              </div>
                Des images sensorielles, épurées, qui célèbrent la lumière naturelle et la matière.
              </div>
              <div 
              className="mt-8 sm:mt-10 md:mt-12"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: 'clamp(13px, 1.5vw, 15px)',
                lineHeight: '120%',
                letterSpacing: '-2%',
                textDecoration: 'underline',
                textDecorationStyle: 'solid',
                textUnderlineOffset: '15%',
                textDecorationThickness: 'auto',
                textDecorationSkipInk: 'auto',
              }}
            >
              Leur site
              </div>
            </div>
          </div>

          {/* Partie droite - Image */}
          <div className=" order-1 lg:order-2 flex justify-center lg:justify-start">
            <img 
              src="/images/profile_agence_page_section2.png" 
              alt="Profile Agence Section 2"
              className="object-cover w-full max-w-[700px] h-auto aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAgenceContent;
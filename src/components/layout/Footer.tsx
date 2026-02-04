import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Newsletter subscription:', email);
    // Ajoutez ici la logique d'abonnement
  };

  return (
    <footer className="w-full bg-white border-t border-gray-200">
      {/* Section principale du footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Partie gauche - Logo et navigation */}
          <div className="lg:col-span-1">
            {/* Logo Auræ */}
            <div className="mb-4">
              <h1 
                className="text-black"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  lineHeight: '120%',
                  letterSpacing: '-2%'
                }}
              >
                Auræ
              </h1>
            </div>

            {/* Barre de navigation */}
            <nav className="flex flex-nowrap gap-4 sm:gap-6">
              <Link to="/" className="text-gray-700 hover:text-black transition-colors" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '120%', letterSpacing: '-2%', whiteSpace: 'nowrap' }}>Home page</Link>
              <Link to="/profile-agence" className="text-gray-700 hover:text-black transition-colors" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '120%', letterSpacing: '-2%', whiteSpace: 'nowrap' }}>Aurae Profile</Link>
              <Link to="/Models" className="text-gray-700 hover:text-black transition-colors" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '120%', letterSpacing: '-2%', whiteSpace: 'nowrap' }}>Trouver un model</Link>
              <Link to="/add-project" className="text-gray-700 hover:text-black transition-colors" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '120%', letterSpacing: '-2%', whiteSpace: 'nowrap' }}>Add Project</Link>
              <Link to="/projets-modele" className="text-gray-700 hover:text-black transition-colors" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '120%', letterSpacing: '-2%', whiteSpace: 'nowrap' }}>Mes projets</Link>
            </nav>
          </div>

          {/* Partie droite - Newsletter */}
          <div className="lg:col-span-1">
            <div className="flex flex-col space-y-4">
              {/* Titre Newsletter */}
              <h3 
                className="text-black"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontStyle: 'normal',
                  fontSize: '16px',
                  lineHeight: '120%',
                  letterSpacing: '-2%'
                }}
              >
                Rejoindre notre Newsletters
              </h3>

              {/* Description */}
              <p 
                className="text-gray-700"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '13px',
                  lineHeight: '120%',
                  letterSpacing: '-2%'
                }}
              >
                Recevez nos inspirations, nouveaux talents &amp; projets Aurae
              </p>

              {/* Formulaire d'abonnement */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Entrer votre adresse mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px'
                  }}
                />
                <button
                  onClick={handleSubscribe}
                  className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '12px'
                  }}
                >
                  Souscrire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Copyright - En dessous des deux parties */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            {/* Copyright texte */}
            <div className="flex gap-4 sm:gap-6">
              <a 
                href="/language" 
                className="text-gray-600 hover:text-black transition-colors"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '120%',
                  letterSpacing: '-2%'
                }}
              >
                English
              </a>
              <a 
                href="/privacy" 
                className="text-gray-600 hover:text-black transition-colors"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '120%',
                  letterSpacing: '-2%'
                }}
              >
                Privacy
              </a>
              <a 
                href="/terms" 
                className="text-gray-600 hover:text-black transition-colors"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '120%',
                  letterSpacing: '-2%'
                }}
              >
                Legal
              </a>
            </div>
            
            {/* Liens légaux */}
            <div className="flex gap-4 sm:gap-6">
                
            <p 
              className="text-gray-600"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '120%',
                letterSpacing: '-2%'
              }}
            >
              © 2025 Aurae - All Rights Reserved.
            </p>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
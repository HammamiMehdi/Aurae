import { motion, useInView } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedInput from "../components/ui/AnimatedInput";
import Footer from "../components/layout/Footer";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Variants d'animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };


  const handleGoogleLogin = () => {
    console.log("Connexion avec Google");
    // Implémenter la logique de connexion Google
  };

  const handleFacebookLogin = () => {
    console.log("Connexion avec Facebook");
    // Implémenter la logique de connexion Facebook
  };

  const handleLogin = () => {
    console.log("Tentative de connexion:", { email, password });
    // Implémenter la logique de connexion
  };

  const handleForgotPassword = () => {
    console.log("Mot de passe oublié");
    navigate("/forgotPassword");
  };

  const handleCreateAccount = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Header avec Aurae Studio */}
      <motion.header
        className="relative z-20 bg-white px-8 py-3"
        initial={{ opacity: 0, y: -20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-black">
          <h1 className="text-[20px] font-bold">
            <span className="font-inter font-bold">Auræ</span>{" "}
            <span className="font-instrument-sans italic">Studio</span>
          </h1>
        </div>
      </motion.header>

      {/* Section principale avec image de fond */}
      <div ref={sectionRef} className="relative min-h-screen">
        {/* Image de fond */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/login-background.png"
            alt="Login background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Contenu principal */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Titre principal */}
          <motion.div className="text-center  mt-15">
            <h1
              className="text-white font-bold"
              style={{
                fontFamily: "Inter",
                fontWeight: 700,
                fontStyle: "bold",
                fontSize: "45px",
                lineHeight: "120%",
                letterSpacing: "-2%",
              }}
            >
              Au-delà du réel
            </h1>
          </motion.div>

          {/* Sous-titre */}
          <motion.div className="text-center mb-8">
            <p
              className="text-white"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontStyle: "regular",
                fontSize: "15px",
                lineHeight: "120%",
                letterSpacing: "-2%",
              }}
            >
              Talents réels et présences IA pour un nouveau langage du
              casting
            </p>
          </motion.div>

          {/* Boutons sociaux */}
          <motion.div className="flex flex-col items-center gap-4 mb-4">
            {/* Bouton Google */}
            <motion.button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center bg-white text-black hover:bg-gray-100 transition-colors"
              style={{
                width: "195px",
                height: "25px",
                borderRadius: "20px",
                padding: "5px 20px",
                gap: "8px",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="font-inter" style={{ fontSize: '10px' }}>
                Se connecter avec Google
              </span>
            </motion.button>

            {/* Bouton Facebook */}
            <motion.button
              onClick={handleFacebookLogin}
              className="flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              style={{
                width: "210px",
                height: "25px",
                borderRadius: "20px",
                padding: "5px 20px",
                gap: "8px",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  fill="white"
                />
              </svg>
              <span className="font-inter" style={{ fontSize: '10px' }}>
                Se connecter avec Facebook
              </span>
            </motion.button>
          </motion.div>

          {/* Formulaire de connexion */}
          <motion.div className="w-full max-w-md ">
            <AnimatedInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <AnimatedInput
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showPasswordToggle={true}
            />
          </motion.div>

          {/* Mot de passe oublié */}
          <motion.div className="w-full max-w-md mb-8 text-right">
            <button
              onClick={handleForgotPassword}
              className="text-white hover:text-gray-300 transition-colors"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "10px",
                lineHeight: "120%",
                letterSpacing: "-2%",
              }}
            >
              Mot de passe oublié
            </button>
          </motion.div>

          {/* Bouton de connexion */}
          <motion.button
            onClick={handleLogin}
            className="bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-all mb-8 flex items-center justify-center backdrop-blur-md"
            style={{
              width: "231px",
              height: "50px",
              borderRadius: "26px",
              padding: "12px 20px",
              gap: "8px",
              backdropFilter: "blur(35px)",
              backgroundColor: "rgb(255, 255, 255, 0.30)",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600, // Bold
              fontStyle: "normal",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span
              style={{
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: "0%",
              }}
            >
              Accéder à Auræ
            </span>
          </motion.button>

          {/* Lien création compte */}
          <motion.div className="text-center mb-12">
            <span
              className="text-white"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontStyle: "regular",
                fontSize: "12px",
                lineHeight: "120%",
                letterSpacing: "-2%",
              }}
            >
              Première fois sur Auræ ?
              <button
                onClick={handleCreateAccount}
                className="ml-2 text-white hover:text-gray-300 transition-colors font-semibold"
              >
                Créer un compte
              </button>
            </span>
          </motion.div>

          {/* Texte de bas de page */}
          <motion.div className="text-center">
            <p
              className="text-white"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "12px",
                lineHeight: "120%",
                letterSpacing: "-2%",
              }}
            >
              Auræ explore de nouvelles formes de présence, entre réel et
              virtuel
            </p>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

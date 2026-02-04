import { motion, useInView } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedInput from "../components/ui/AnimatedInput";
import Footer from "../components/layout/Footer";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
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


  const handleResetPassword = () => {
    console.log("Réinitialisation du mot de passe:", { email });
    // Implémenter la logique de réinitialisation
  };

  const handleBackToLogin = () => {
    navigate("/login");
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
          <h1 className="text-[24px] font-bold">
            <span className="font-inter font-bold">Auræ</span>{" "}
            <span className="font-instrument-sans italic">Studio</span>
          </h1>
        </div>
      </motion.header>

      {/* Section principale avec vidéo de fond */}
      <div ref={sectionRef} className="relative min-h-screen">
        {/* Vidéo de fond */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/images/media (2).mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </motion.div>

        {/* Contenu principal */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Titre principal */}
          <motion.div className="text-center mb-4">
            <h1
              className="text-white font-bold"
              style={{
                fontFamily: "Inter",
                fontWeight: 700,
                fontStyle: "bold",
                fontSize: "55px",
                lineHeight: "120%",
                letterSpacing: "-2%",
              }}
            >
              Récupérer votre mot de passe
            </h1>
          </motion.div>

          {/* Sous-titre */}
          <motion.div className="text-center mb-12">
            <p
              className="text-white font-bold"
              style={{
                fontFamily: "Inter",
                fontWeight: 700,
                fontStyle: "bold",
                fontSize: "12px",
                lineHeight: "120%",
                letterSpacing: "-2%",
              }}
            >
              Nous vous ferons parvenir un courriel pour réinitialiser votre mot de passe.
            </p>
          </motion.div>

          {/* Lien retour connexion */}
          <motion.div className="w-full max-w-md mb-8 text-center">
            <button
              onClick={handleBackToLogin}
              className="text-white hover:text-gray-300 transition-colors underline"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontStyle: "regular",
                fontSize: "12px",
                lineHeight: "120%",
                letterSpacing: "-2%",
                textAlign: "right",
                textDecoration: "underline",
                textDecorationStyle: "solid",
                textDecorationThickness: "0%",
                textDecorationSkipInk: "auto",
              }}
            >
              Retour à la connexion
            </button>
          </motion.div>

          {/* Formulaire email uniquement */}
          <motion.div className="w-full max-w-md mb-8">
            <AnimatedInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>

          {/* Bouton de réinitialisation */}
          <motion.button
            onClick={handleResetPassword}
            className="bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-all mb-8 flex items-center justify-center backdrop-blur-md"
            style={{
              width: "231px",
              height: "50px",
              borderRadius: "26px",
              padding: "12px 20px",
              gap: "8px",
              backdropFilter: "blur(35px)",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              //border: "1px solid rgba(255, 255, 255, 0.3)",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700, // Bold
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
              Je réinitialise
            </span>
          </motion.button>

          {/* Texte du bas */}
          <motion.div className="text-center">
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
              Auræ explore de nouvelles formes de présence, entre réel et virtuel
            </span>
          </motion.div>
        </motion.div>
      </div>
      <Footer/>
    </div>
  );
};

export default ForgotPassword;
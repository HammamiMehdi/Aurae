import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/layout/Footer';
import HeaderMatchsChat from '../components/layout/HeaderMatchsChat';
import ChatMessageComponent from '../components/sections/ChatMessage/ChatMessageComponent';

const ChatMessage: React.FC = () => {
  const { modelId } = useParams<{ modelId: string }>();
  const navigate = useNavigate();

  // Model data - in a real app, this would come from an API
  const models: { [key: string]: { name: string; image: string } } = {
    '1': { name: 'Lena.L', image: '/images/modele_1.jpg' },
    '2': { name: 'Katharina.G', image: '/images/image_modele_1.jpg' },
    '3': { name: 'Demi.K', image: '/images/modele_2.jpg' },
    '4': { name: 'Ayinde.A', image: '/images/modele_3.jpg' },
    '5': { name: 'Cheer.M', image: '/images/modele_4.jpg' },
    '6': { name: 'Eloise.L', image: '/images/modele_5.jpg' },
    '7': { name: 'Esther.M', image: '/images/visage_noir_et_blanc.jpg' },
    '8': { name: 'Bianca.S', image: '/images/image_modele_2.jpg' },
  };

  const model = modelId ? models[modelId] : models['1'];

  if (!model) {
    navigate('/matchs');
    return null;
  }

  return (
    <motion.div 
      className="min-h-screen bg-white flex flex-col"
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      }}
    >
      {/* Header Component */}
      <HeaderMatchsChat />
      <h2
        className="text-black text-left flex-shrink-0"
        style={{
          fontFamily: 'Inter',
          fontWeight: 700,
          fontStyle: 'bold',
          fontSize: '70px',
          lineHeight: '120%',
          letterSpacing: '-2%',
          marginBottom:'10px'
        }}
      >
        Messagerie 
      </h2>
      {/* Chat Message Component */}
      <ChatMessageComponent modelName={model.name} modelImage={model.image} />
      
      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default ChatMessage;

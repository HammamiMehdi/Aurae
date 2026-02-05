import React from 'react';
import Footer from '../components/layout/Footer';
import HeaderMatchsChat from '../components/layout/HeaderMatchsChat';
import MessagerieTitle from '../components/sections/MessagerieTitle/MessagerieTitle';
import MessagerieGallery from '../components/sections/MessagerieGallery/MessagerieGallery';

const MatchsChat: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header Component */}
      <HeaderMatchsChat />

      {/* Main Content Area */}
      <main className="flex-grow bg-white">
        <div className="max-w mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Title and Search Bar Component */}
          <MessagerieTitle />
          
          {/* Models Gallery Component */}
          <MessagerieGallery />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MatchsChat;

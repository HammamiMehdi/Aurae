import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SignaturePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

const SignaturePopup: React.FC<SignaturePopupProps> = ({ isOpen, onClose, onAccept }) => {
  const [activeTab, setActiveTab] = useState<'dessiner' | 'ecrire' | 'telecharger'>('telecharger');
  const [acceptedConditions, setAcceptedConditions] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileChange = (file: File) => {
    // Check file size (max 100MB)
    if (file.size > 100 * 1024 * 1024) {
      alert('Le fichier dépasse la taille maximale de 100MB');
      return;
    }
    
    // Check file type
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      alert('Type de fichier non autorisé. Veuillez utiliser JPEG, PNG ou PDF.');
      return;
    }
    
    setSelectedFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleAccept = () => {
    if (acceptedConditions && selectedFile) {
      onAccept();
    }
  };

  const isButtonEnabled = acceptedConditions && selectedFile !== null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ 
              type: "spring",
              duration: 0.5,
              bounce: 0.3
            }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 
            className="text-black"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: '120%',
              letterSpacing: '-2%',
            }}
          >
            Choix de la signature
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 px-6">
          <button
            onClick={() => setActiveTab('dessiner')}
            className={`py-3 px-6 transition-colors ${
              activeTab === 'dessiner'
                ? 'border-b-2 border-black text-black font-medium'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
            }}
          >
            Dessiner
          </button>
          <button
            onClick={() => setActiveTab('ecrire')}
            className={`py-3 px-6 transition-colors ${
              activeTab === 'ecrire'
                ? 'border-b-2 border-black text-black font-medium'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
            }}
          >
            Écrire
          </button>
          <button
            onClick={() => setActiveTab('telecharger')}
            className={`py-3 px-6 transition-colors ${
              activeTab === 'telecharger'
                ? 'border-b-2 border-black text-black font-medium'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
            }}
          >
            Télécharger
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'telecharger' && (
            <div
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                isDragOver ? 'border-blue-400 bg-blue-50' : 'border-blue-300 bg-white'
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <div className="flex flex-col items-center justify-center space-y-4">
                {/* Upload Icon */}
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-400"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>

                <div>
                  <p
                    className="text-gray-700 mb-2"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      lineHeight: '120%',
                    }}
                  >
                    Choisis ton fichier ou glisse le ici
                  </p>
                  <p
                    className="text-gray-500"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      lineHeight: '120%',
                    }}
                  >
                    JPEG, PNG, PDF - Max 100 MB
                  </p>
                </div>

                <input
                  type="file"
                  accept=".jpeg,.jpg,.png,.pdf"
                  onChange={(e) => e.target.files && handleFileChange(e.target.files[0])}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer text-blue-600 hover:text-blue-700 underline"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                  }}
                >
                  Parcourir les fichiers
                </label>

                {selectedFile && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">
                      Fichier sélectionné : {selectedFile.name}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'dessiner' && (
            <div className="border-2 border-gray-300 rounded-lg p-12 text-center">
              <p className="text-gray-500">Zone de dessin à implémenter</p>
            </div>
          )}

          {activeTab === 'ecrire' && (
            <div className="border-2 border-gray-300 rounded-lg p-12 text-center">
              <p className="text-gray-500">Zone d'écriture à implémenter</p>
            </div>
          )}

          {/* Checkbox */}
          <div className="mt-6 flex items-center">
            <input
              type="checkbox"
              id="accept-conditions"
              checked={acceptedConditions}
              onChange={(e) => setAcceptedConditions(e.target.checked)}
              className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <label
              htmlFor="accept-conditions"
              className="ml-3 text-black cursor-pointer"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                lineHeight: '120%',
              }}
            >
              J'accepte les conditions
            </label>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex justify-between">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Retour
          </button>
          <button
            onClick={handleAccept}
            disabled={!isButtonEnabled}
            className={`px-6 py-2 rounded-lg transition-all duration-200 ${
              isButtonEnabled
                ? 'text-white hover:bg-green-600 cursor-pointer'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              backgroundColor: isButtonEnabled ? '#10B981' : undefined,
            }}
          >
            Accepter et signer
          </button>
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignaturePopup;

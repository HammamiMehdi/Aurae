import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface MoodboardUploadProps {
    title?: string;
}

const MoodboardUpload: React.FC<MoodboardUploadProps> = ({ title = "Moodboard" }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileSelection(files[0]);
    }
  };

  const handleFileSelection = (file: File) => {
    // Vérifier la taille (max 100MB)
    if (file.size > 100 * 1024 * 1024) {
      alert('Le fichier dépasse la taille maximale de 100MB');
      return;
    }
    
    // Vérifier le type de fichier
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      alert('Type de fichier non autorisé. Veuillez utiliser JPEG, PNG ou PDF.');
      return;
    }
    
    setSelectedFile(file);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFileSelection(files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <motion.div 
      className="w-full py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: '#F5F0EB' }}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Titre principal dynamique */}
        <motion.h1 
          className="text-gray-900 mb-12 text-left"
          style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontStyle: 'bold',
            fontSize: '45px',
            lineHeight: '120%',
            letterSpacing: '-2%',
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h1>

        {/* Zone d'upload */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
         <div
  className={`relative flex items-center justify-center cursor-pointer transition-all duration-300 ${
    isDragOver ? 'bg-gray-50 border-blue-400' : 'hover:bg-gray-50'
  }`}
  style={{
    height: '600px',
    width: '100%',
    border: '2px dashed #00000080',
    borderRadius: '8px',
    backgroundColor: '#FDF9F5',
  }}
  onDragOver={handleDragOver}
  onDragLeave={handleDragLeave}
  onDrop={handleDrop}
  onClick={handleClick}
>
            {/* Contenu centré */}
            <div className="flex flex-col items-center justify-center">
              {/* SVG Upload */}
              <svg 
                width="35" 
                height="35" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="mb-4 text-gray-600"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>

              {/* Texte principal */}
              <div 
                className="text-gray-700 mb-2"
                style={{
                  fontFamily: 'Inter Tight',
                  fontWeight: 400,
                  fontStyle: 'regular',
                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0px',
                }}
              >
                Choisis ton fichier ou glisse le ici
              </div>

              {/* Texte secondaire */}
              <div 
                className="text-gray-500"
                style={{
                  fontFamily: 'Inter Tight',
                  fontWeight: 400,
                  fontStyle: 'regular',
                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0px',
                }}
              >
                JPEG, PNG, PDF - Max 100 MB
              </div>

              {/* Affichage du fichier sélectionné */}
              {selectedFile && (
                <motion.div 
                  className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="text-green-800 text-sm font-medium">
                    Fichier sélectionné : {selectedFile.name}
                  </div>
                  <div className="text-green-600 text-xs">
                    Taille : {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input caché */}
            <input
              ref={fileInputRef}
              type="file"
              accept=".jpeg,.jpg,.png,.pdf"
              onChange={handleFileInputChange}
              className="hidden"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MoodboardUpload;
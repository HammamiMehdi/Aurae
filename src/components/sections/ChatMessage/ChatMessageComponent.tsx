import React from 'react';

interface ChatMessageComponentProps {
  modelName: string;
  modelImage: string;
}

const ChatMessageComponent: React.FC<ChatMessageComponentProps> = ({ modelName, modelImage }) => {
  return (
    <div 
      className="relative w-full min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('${modelImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      {/* Rectangle Container */}
      <div
        className="relative"
        style={{
          width: '560px',
          height: '651px',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.2)', // #FFFFFF33 equivalent
        }}
      >
        {/* Top Left - Model Name and Status */}
        <div className="absolute top-0 left-0 p-6">
          <div className="flex items-end gap-3">
            {/* Model Name */}
            <h2
              className="text-white"
              style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontStyle: 'bold',
                fontSize: '76px',
                lineHeight: '120%',
                letterSpacing: '-2%',
              }}
            >
              {modelName}
            </h2>
            {/* Status */}
            <p
              className="text-white mb-1"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '11px',
                lineHeight: '120%',
                letterSpacing: '-2%',
                textAlign: 'center',
              }}
            >
              en ligne
            </p>
          </div>
        </div>

        {/* Date - Centered Horizontally */}
        <div className="absolute top-60 left-1/2 transform -translate-x-1/2">
          <p
            className="text-white"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '12px',
              lineHeight: '120%',
              letterSpacing: '-2%',
            }}
          >
            MER 17:51
          </p>
        </div>

        {/* Chat Messages - Bottom Section */}
        <div className="absolute left-6 right-6 space-y-4 overflow-y-auto" style={{ bottom: '100px', maxHeight: 'calc(100% - 200px)' }}>
          {/* Model Messages - Left Side */}
          <div className="flex flex-col items-start">
            {/* Profile Circle and Name */}
            <div className="flex items-center gap-3 mb-3">
              {/* Profile Circle */}
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={modelImage}
                  alt={modelName}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Model Name */}
              <p
                className="text-white"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '12px',
                  lineHeight: '120%',
                  letterSpacing: '-2%',
                }}
              >
                {modelName}
              </p>
            </div>

            {/* Message Divs */}
            <div
              className="rounded-lg px-4 py-2"
              style={{
                width: '219px',
                minHeight: '25px',
                background: '#1E1F25',
                marginBottom: '10px',
              }}
            >
              <p
                className="text-white"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '11px',
                  lineHeight: '120%',
                  letterSpacing: '-2%',
                }}
              >
                Lorem ipsum dolor sit amet...
              </p>
            </div>
            <div
              className="rounded-lg px-4 py-2"
              style={{
                width: '219px',
                minHeight: '25px',
                background: '#1E1F25',
                marginBottom: '10px',
              }}
            >
              <p
                className="text-white"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '11px',
                  lineHeight: '120%',
                  letterSpacing: '-2%',
                }}
              >
                Lorem ipsum dolor sit amet...
              </p>
            </div>
          </div>

          {/* Production 520 Messages - Right Side */}
          <div className="flex flex-col items-end">
            {/* Profile Circle and Name */}
            <div className="flex items-center gap-3 mb-3 flex-row-reverse">
              {/* Profile Circle */}
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="/images/Profile_agence_page.jpg"
                  alt="Production 520"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Production 520 Name */}
              <p
                className="text-white"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '12px',
                  lineHeight: '120%',
                  letterSpacing: '-2%',
                }}
              >
                Production 520
              </p>
            </div>

            {/* Message Divs */}
            <div
              className="rounded-lg px-4 py-2"
              style={{
                width: '219px',
                minHeight: '25px',
                background: '#4A5568',
                marginBottom: '10px',
              }}
            >
              <p
                className="text-white"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '11px',
                  lineHeight: '120%',
                  letterSpacing: '-2%',
                }}
              >
                Lorem ipsum dolor sit amet...
              </p>
            </div>
            <div
              className="rounded-lg px-4 py-2"
              style={{
                width: '219px',
                minHeight: '25px',
                background: '#4A5568',
                marginBottom: '10px',
              }}
            >
              <p
                className="text-white"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '11px',
                  lineHeight: '120%',
                  letterSpacing: '-2%',
                }}
              >
                Lorem ipsum dolor sit amet...
              </p>
            </div>
          </div>
        </div>

        {/* Message Input Bar - Bottom of Rectangle */}
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-4"
          style={{
            width: '90%', // 90% of the main rectangle (560px)
          }}
        >
          {/* Outer Rectangle with background #FCFCFC78 */}
          <div
            style={{
              background: 'rgba(252, 252, 252, 0.47)', // #FCFCFC78 equivalent
              padding: '8px',
            }}
          >
            {/* Inner Div with white background and radius 25px */}
            <div
              className="flex items-center px-4 py-3"
              style={{
                background: '#FFFFFF',
                borderRadius: '25px',
                height: '30px',
              }}
            >
              {/* Left - Plus Icon */}
              <button
                type="button"
                className="flex-shrink-0 mr-3 text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Add attachment"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>

              {/* Middle - Input */}
              <input
                type="text"
                placeholder="Commence par écrire..."
                className="flex-grow bg-transparent border-none outline-none text-gray-800 placeholder-gray-400"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 500,
                  fontStyle: 'normal',
                  fontSize: '10px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              />

              {/* Right - Three Icons */}
              <div className="flex items-center gap-3 flex-shrink-0 ml-3">
                {/* Mic Icon */}
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                  aria-label="Voice message"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="23" />
                    <line x1="8" y1="23" x2="16" y2="23" />
                  </svg>
                </button>

                {/* Image Icon */}
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                  aria-label="Add image"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </button>

                {/* Smile Icon */}
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                  aria-label="Add emoji"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessageComponent;

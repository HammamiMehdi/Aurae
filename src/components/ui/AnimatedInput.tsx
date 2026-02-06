import React, { useState, useRef } from 'react';

interface AnimatedInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPasswordToggle?: boolean;
}

const AnimatedInput: React.FC<AnimatedInputProps> = ({ 
  type, 
  placeholder, 
  value, 
  onChange, 
  showPasswordToggle: _showPasswordToggle = false 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [showPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setHasValue(e.target.value.length > 0);
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className="relative mb-4 sm:mb-6">
      {/* Input sans bordure */}
      <input
        ref={inputRef}
        type={inputType}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`
          w-full px-0 py-5 bg-transparent border-none outline-none 
          transition-all duration-300 ease-in-out pr-10
          ${isFocused || hasValue ? 'pt-7 pb-3' : 'py-5'}
        `}
        style={{
          fontSize: '14px',
          fontFamily: 'Inter, sans-serif',
          borderBottom: '1px solid transparent',
          color: 'white'
        }}
      />
      
      {/* Placeholder animé */}
      <label className={`
        absolute right-0 transition-all duration-300 ease-in-out pointer-events-none
        ${isFocused || hasValue 
          ? '-top-3 text-xs text-white' 
          : 'top-5 text-base text-white'
        }
        ${isFocused ? 'text-white font-medium' : ''}
      `}
      style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: isFocused || hasValue ? '12px' : '14px',
        color : 'white'
      }}>
        {placeholder}
      </label>

      {/* Trait animé */}
      <div className={`
        absolute bottom-0 left-0 w-full h-0.5 bg-gray-300 
        transition-all duration-300 ease-in-out
        ${isFocused ? 'bg-white h-0.5' : ''}
      `}>
        {/* Trait animé qui s'étend */}
        <div className={`
          absolute bottom-0 left-0 h-full bg-white 
          transition-all duration-500 ease-out
          ${isFocused ? 'w-full' : 'w-0'}
        `} style={{height: '2px'}} />
      </div>

      {/* Bouton œil pour le mot de passe */}
      {/* {showPasswordToggle && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-0 bottom-3 p-2 text-white hover:text-gray-700 transition-colors duration-200"
          style={{ transform: 'translateY(-50%)' }}
        >
          {showPassword ? (
            // Œil ouvert
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          ) : (
            // Œil fermé
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            </svg>
          )}
        </button>
      )} */}
    </div>
  );
};

export default AnimatedInput;
import React from 'react';

const FacebookIcon: React.FC = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path 
        d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.879V12.89H5.898v-2.78h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.631.771-1.631 1.562v1.88h2.773l-.444 2.78h-2.329V20C16.343 19.473 20 15.071 20 10z" 
        fill="#1877F2"
      />
    </svg>
  );
};

export default React.memo(FacebookIcon);
import React, { useState } from 'react';

export default function Logo({ className = "h-10 sm:h-11 w-auto", variant = "default" }) {
  const [imgSrc, setImgSrc] = useState("/images/logo.png");
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    if (imgSrc === "/images/logo.png") {
      // Fallback to live URL if local path fails
      setImgSrc("https://scientiaindia.com/images/logo.png");
    } else {
      setImageError(true);
    }
  };

  if (imageError) {
    // Fallback vector icon with exact logo colors: #00448C Blue & #F0A400 Amber
    return (
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-[#00448C] flex items-center justify-center shadow-xs">
          <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20C7 16 9 10 15 10C21 10 22 17 25 21" stroke="#F0A400" strokeWidth="3" strokeLinecap="round" />
            <path d="M22 12C25 16 23 22 17 22C11 22 10 15 7 11" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        <span className={`font-extrabold text-xl tracking-tight font-sans ${variant === 'footer' ? 'text-slate-900' : 'text-[#00448C]'}`}>
          Scientia
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <img
        src={imgSrc}
        alt="Scientia"
        onError={handleImageError}
        className={`${className} object-contain transition-transform duration-200`}
        loading="eager"
      />
    </div>
  );
}

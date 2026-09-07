// Loader.jsx
import React, { useEffect, useState } from "react";

function PawIcon({ className }) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" className={className}>
      <path d="M290.6 192c33.8 0 61.4-31.8 61.4-71.1s-27.6-71.1-61.4-71.1s-61.4 31.8-61.4 71.1s27.6 71.1 61.4 71.1zM107.4 216c33.8 0 61.4-31.8 61.4-71.1S141.2 73.8 107.4 73.8S46 105.6 46 144.9S73.6 216 107.4 216zM414.6 273.2c25.9 20.5 61.5 15.3 79.5-11.5s10.5-64.4-15.4-84.9s-61.5-15.3-79.5 11.5s-10.5 64.4 15.4 84.9zM48.9 273.2c25.9-20.5 32.8-58.1 15.4-84.9s-53.6-32-79.5-11.5s-32.8 58.1-15.4 84.9s53.6 32 79.5 11.5zM256 224c-56.5 0-103.7 46.8-131.1 88.8C99.6 351.7 64 396.4 64 445.1C64 481 92.7 512 128.7 512c31.5 0 41.9-20.6 84.6-20.6c15.5 0 31.9 3 45.9 8.2c11.6 4.3 24.4 4.3 36 0c14-5.2 30.4-8.2 45.9-8.2c42.7 0 53.1 20.6 84.6 20.6c36 0 64.7-31 64.7-66.9c0-48.7-35.6-93.4-60.9-132.3C359.7 270.8 312.5 224 256 224z" />
    </svg>
  );
}

const Loader = ({ onFinish }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setHide(true), 2000);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (hide) {
      // fade-out transition (500ms) khatam hone dein, phir parent ko batayein
      const finishTimer = setTimeout(() => {
        if (onFinish) onFinish();
      }, 500);
      return () => clearTimeout(finishTimer);
    }
  }, [hide, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-9999 flex flex-col items-center justify-center bg-orange-50 transition-opacity duration-500 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative w-24 h-24 mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-orange-200"></div>
        <div className="absolute inset-0 rounded-full border-4 border-orange-500 border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <PawIcon className="w-9 h-9 text-orange-500" />
        </div>
      </div>

      <div className="flex gap-3 mb-4">
        <PawIcon className="w-4 h-4 text-orange-400 animate-bounce [animation-delay:-0.3s]" />
        <PawIcon className="w-4 h-4 text-orange-400 animate-bounce [animation-delay:-0.15s]" />
        <PawIcon className="w-4 h-4 text-orange-400 animate-bounce" />
      </div>

      <h2 className="text-lg font-semibold text-orange-600 tracking-wide">
        PawCare Veterinary Clinic
      </h2>
      <p className="text-sm text-orange-400 mt-1">Loading, please wait...</p>
    </div>
  );
};

export default Loader;
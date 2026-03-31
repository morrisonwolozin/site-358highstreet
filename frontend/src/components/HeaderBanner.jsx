// src/components/HeaderBanner.jsx
import { useAppNavigate } from '../utils/utils.js';

export default function HeaderBanner({ onMenuOpen }) {
  const navigateTo = useAppNavigate();

  function handleClick() {
    navigateTo();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="w-full bg-gradient-to-r from-green-400 via-green-500 to-green-400 py-4 opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]">
      {/* Title — always visible, navigates home on click */}
      <button
        onClick={handleClick}
        className="w-full text-center select-none transition-all duration-300 ease-out hover:brightness-110 active:scale-[0.99]"
      >
        <div className="text-2xl sm:text-3xl font-bold text-white py-1">
          Residential Duplex Energy Retrofit and Electrification
        </div>
        <div className="text-2xl font-bold text-white pt-2">
          358 High Street Belfast, Maine 04915
        </div>
      </button>

      {/* Hamburger — below title, centered, mobile only */}
      <div className="flex justify-center mt-3 md:hidden">
        <button
          onClick={onMenuOpen}
          aria-label="Open navigation menu"
          className="text-white p-2 rounded-md hover:bg-green-600 transition-colors duration-150"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}

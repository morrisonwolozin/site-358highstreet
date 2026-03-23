// src/components/HeaderBanner.jsx
import { useAppNavigate } from '../utils/utils.js';

export default function HeaderBanner({ onMenuOpen }) {
  const navigateTo = useAppNavigate();

  function handleClick() {
    navigateTo();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="relative w-full bg-gradient-to-r from-green-400 via-green-500 to-green-400">
      {/* Clickable title area */}
      <button
        onClick={handleClick}
        className="
          w-full text-2xl sm:text-3xl font-bold text-white text-center
          py-4 select-none
          transition-all duration-300 ease-out
          hover:brightness-110 hover:shadow-lg active:scale-[0.99]
          opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]
        "
      >
        <div className="py-1">Residential Duplex Deep Energy Retrofit</div>
        <div className="text-2xl pt-2">358 High Street Belfast, Maine 04915</div>
      </button>

      {/* Hamburger button — mobile only */}
      <button
        onClick={onMenuOpen}
        aria-label="Open navigation menu"
        className="
          md:hidden
          absolute right-4 top-1/2 -translate-y-1/2
          text-white p-2 rounded-md
          hover:bg-green-600 transition-colors duration-150
        "
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
}

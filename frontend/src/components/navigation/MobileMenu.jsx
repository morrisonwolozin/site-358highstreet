// src/navigation/MobileMenu.jsx
import { useEffect } from "react";
import SidebarNav from "./SidebarNav";

export default function MobileMenu({ isOpen, onClose }) {
  // Close drawer on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/40 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl flex flex-col md:hidden">
        {/* Drawer header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
          <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Navigation
          </span>
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="text-gray-500 hover:text-gray-800 p-1 rounded transition-colors duration-150"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav tree — reuses SidebarNav, closes drawer on link click */}
        <div className="flex-1 overflow-y-auto" onClick={onClose}>
          <SidebarNav />
        </div>
      </div>
    </>
  );
}

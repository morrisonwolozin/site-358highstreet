// GalleryModal.jsx
import { useEffect } from "react";

export default function GalleryModal({ items, currentIndex, onClose, onNavigate }) {
  const item = items[currentIndex];

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && currentIndex > 0) onNavigate(currentIndex - 1);
      if (e.key === "ArrowRight" && currentIndex < items.length - 1) onNavigate(currentIndex + 1);
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, items.length, onClose, onNavigate]);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-[94vw] max-w-6xl max-h-[90vh] overflow-hidden rounded-xl bg-white shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 rounded-full bg-white/90 px-3 py-1 text-lg font-bold text-black shadow hover:bg-white"
          aria-label="Close"
        >
          ×
        </button>

        {/* Prev button */}
        {currentIndex > 0 && (
          <button
            onClick={() => onNavigate(currentIndex - 1)}
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-xl text-black shadow hover:bg-white"
            aria-label="Previous image"
          >
            ←
          </button>
        )}

        {/* Next button */}
        {currentIndex < items.length - 1 && (
          <button
            onClick={() => onNavigate(currentIndex + 1)}
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-xl text-black shadow hover:bg-white"
            aria-label="Next image"
          >
            →
          </button>
        )}

        {/* Main modal content */}
        <div className="grid h-full max-h-[90vh] grid-cols-1 lg:grid-cols-[5fr_2fr]">
          {/* Image pane */}
          <div className="flex items-center justify-center bg-gray-100 p-4 sm:p-6 min-h-[280px]">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="max-h-[52vh] lg:max-h-[78vh] w-full object-contain"
            />
          </div>

          {/* Text pane */}
          <div className="overflow-y-auto border-t lg:border-t-0 lg:border-l border-gray-200 bg-white p-4 sm:p-6">
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Image {currentIndex + 1} of {items.length}
                </p>
                <h2 className="mt-1 text-xl sm:text-2xl font-semibold text-gray-900">
                  {item.title}
                </h2>
              </div>

              {item.shortAnnotation && (
                <p className="text-sm sm:text-base font-medium text-gray-700">
                  {item.shortAnnotation}
                </p>
              )}

              {item.fullAnnotation && (
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
                  <p>{item.fullAnnotation}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useEffect } from "react";

export default function GalleryModal({ items, currentIndex, onClose, onNavigate }) {
  const item = items[currentIndex];

  // Handle left/right key events
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft" && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      } else if (e.key === "ArrowRight" && currentIndex < items.length - 1) {
        onNavigate(currentIndex + 1);
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, items.length, onClose, onNavigate]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-7xl w-[95vw] max-h-[90vh] overflow-auto relative shadow-lg">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Left Arrow */}
        {currentIndex > 0 && (
          <button
            onClick={() => onNavigate(currentIndex - 1)}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
            aria-label="Previous"
          >
            ←
          </button>
        )}

        {/* Right Arrow */}
        {currentIndex < items.length - 1 && (
          <button
            onClick={() => onNavigate(currentIndex + 1)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
            aria-label="Next"
          >
            →
          </button>
        )}

        <h2 className="text-xl font-bold mb-2">{item.title}</h2>
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full max-h-[80vh] object-contain rounded"
        />
        <p className="mt-4 text-gray-00">{item.fullAnnotation}</p>
      </div>
    </div>
  );
}

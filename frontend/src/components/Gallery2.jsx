// src/components/Gallery.jsx
// 2026-07-06 refactor — GalleryRoute eliminated, galleries embedded in pages
// Typography aligned with PageIntro: text-sm text-gray-700 leading-relaxed

import { useState } from "react";
import GalleryModal from "./GalleryModal.jsx";

export default function Gallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // No images yet — show coming-soon placeholder
  if (!images || images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div
          className="relative w-full
                      max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl
                      aspect-[4/3] sm:aspect-video
                      rounded-lg overflow-hidden shadow-md bg-gray-200"
        >
          <img
            src="/images/placeholders/coming-soon.jpg"
            alt="Photo gallery coming soon"
            className="w-full h-full object-cover opacity-40 blur-sm scale-105"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-gray-900/80 flex flex-col items-center justify-center gap-3 px-6">
            <p className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
              Photo gallery coming soon
            </p>
            <p className="text-sm sm:text-lg text-white/80 drop-shadow">
              Images for this section have not yet been added.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="py-4 max-h-[80vh] overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {images.map((item, index) => (
            <div
              key={item.id}
              className="cursor-pointer bg-white rounded shadow-sm hover:shadow-xl transition"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="object-cover w-full h-48 rounded-t"
              />
              <div className="p-3">
                <h3 className="text-sm font-semibold text-center text-gray-700 leading-snug">
                  {item.title}
                </h3>
                {item.shortAnnotation && (
                  <p className="text-sm text-center text-gray-600 leading-relaxed mt-1">
                    {item.shortAnnotation}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <GalleryModal
          items={images}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNavigate={(newIndex) => setSelectedIndex(newIndex)}
        />
      )}
    </>
  );
}

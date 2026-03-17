// Gallery.jsx  renders the selected images 

import { useState} from 'react'
import GalleryModal from "./GalleryModal.jsx";
import { galleryIndex } from '../data/galleryIndex.js'


export default function Gallery({images}) {
  const [selectedIndex, setSelectedIndex] = useState(null);


//if there's a partial key or no images for a section
  if (!images || images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-6 text-center">
                 {/* blurred background placeholder */} 
        <div className="relative w-full 
                        max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl
                        aspect-[4/3] sm:aspect-video
                        rounded-lg overflow-hidden shadow-md bg-gray-200">
          <img
            src="/images/placeholders/coming-soon.jpg"
            alt="Coming soon placeholder"
            className="w-full h-full object-cover opacity-40 blur-sm scale-105"
            loading="lazy"
            decoding="async"
          />
          {/* overlay gradient + text */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-gray-900/80 flex flex-col items-center justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
              Select sections and sub-section(s) from menu bar at left or mobile 'pancake' above at right to view the photo galleries.
            </h2>
            <p>"  "</p>
            <p className="text-sm sm:text-2xl font-bold text-white drop-shadow-lg"> If the selection results in no photo gallery, the content is yet to be provided.</p>
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
            className="cursor-pointer bg-white hover:shadow-xl transition"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="object-cover w-full h-48 rounded-t"
            />
            <div className="p-3">
              <h3 className="font-semibold text-center">{item.title}</h3>
              <p className="text-sm text-center text-gray-600">{item.shortAnnotation}</p>
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
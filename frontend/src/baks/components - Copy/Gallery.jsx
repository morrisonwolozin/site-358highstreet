import {useEffect, useState} from 'react'
import GalleryModal from "./GalleryModal";
import galleryItems from '../data/galleryItems.js'


export default function Gallery({modeKey}) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
    <div className="p-4 max-h-[80vh] overflow-y-auto border border-gray-300 rounded-lg shadow-inner">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-3">
        {galleryItems[modeKey].map((item, index) => (
          <div
            key={item.id}
            className="cursor-pointer bg-white rounded shadow hover:shadow-lg transition"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="object-cover w-full h-48 rounded-t"
            />
            <div className="p-3">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.shortAnnotation}</p>
            </div>
          </div>
        ))}
      </div>
     </div> 

      {selectedIndex !== null && (
        <GalleryModal
          items={galleryItems[modeKey]}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNavigate={(newIndex) => setSelectedIndex(newIndex)}
        />
      )}
    </>
  );
}
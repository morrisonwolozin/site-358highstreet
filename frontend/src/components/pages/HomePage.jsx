// src/pages/HomePage.jsx
import { useAppNavigate } from '../../utils/utils.js';
import { useSiteConfig } from '../../config/SiteConfigContext';

const seasonalHero = () => {
  const month = new Date().getMonth(); // 0 = January
  if (month <= 1 || month === 11) return { src: "images/img-hero-winter.webp", label: "Winter" };
  if (month <= 4)                 return { src: "images/img-hero-spring.webp", label: "Spring" };
  if (month <= 7)                 return { src: "images/img-hero-spring.webp", label: "Summer" };
  if (month <= 9)                 return { src: "images/img-hero-fall.webp",   label: "Fall"   };
                                  return { src: "images/img-hero-winter.webp", label: "Winter" };
};

export default function HomePage() {
  const navigateTo = useAppNavigate();
  const { rentalAvailable } = useSiteConfig();
  const hero = seasonalHero();

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-12 py-8 space-y-10 text-center">

      {/* Hero Image */}
      <div className="w-full max-w-6xl bg-white rounded shadow hover:shadow-lg transition">
        <img
          src={hero.src}
          alt={`358 High Street — ${hero.label}`}
          className="w-full max-h-64 sm:max-h-80 md:max-h-[24rem] object-cover rounded-t"
          loading="lazy"
          decoding="async"
        />
        <div className="p-4 sm:p-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
            358 High Street
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Belfast, Maine — {hero.label}
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl columns-1 md:columns-2 gap-8 space-y-2">
        <p>
          <strong>358 High Street</strong> was a conventional rental duplex from 2004, which was transformed to a clean energy building in 2025. Modifications included a high-performance thermal envelope retrofit, electrified HVAC and added tenant space. For its initial year of energy performance data, select the button below,  the menu bar at left or via the small screen menu "hamburger".
        </p>
        <div className="text-center">
          {rentalAvailable ? (
            <button
              className="inline-block mt-4 px-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition"
              onClick={() => navigateTo("rental")}
            >
              Rental details ...
            </button>
          ) : (
            <button
              className="inline-block mt-4 px-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition"
              onClick={() => navigateTo("energy-performance")}
            >
              Energy Performance
            </button>
          )}
        </div>

        <p>
          358 Main St.'s <strong> design considerations, construction photo galleries, data and downloads</strong> are selectable from the left menu bar. "Deep Energy" retrofits of the existing, new spaces, finishes, rebuilt party-wall sound isolation, electrifed HVAC and DHW were elements of the project. Select the button below for an example.
        </p>
        <div className="text-center">
          <button
            className="inline-block mt-4 px-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition"
            onClick={() => navigateTo("construction/party-walls")}
          >
            Duplex party walls
          </button>
        </div>
      </section>

    </div>
  );
}

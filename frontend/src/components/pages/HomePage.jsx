import Gallery from '../Gallery'
import Footer from "../Footer.jsx"
import { useAppNavigate} from '../../utils/utils.js';

export default function HomePage(){

    const navigateTo = useAppNavigate();

    return (

    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-12 py-8 space-y-10 text-center">

      {/* Hero Image */}
      <div className="w-full max-w-6xl bg-white rounded shadow hover:shadow-lg transition">
        <img
          src="images/img-1-home-page.webp"
          alt="358 High Street Deep Energy Retrofit"
          className="w-full max-h-64 sm:max-h-80 md:max-h-[24rem]  object-cover rounded-t"
          loading="lazy"
          decoding="async"
        />
        <div className="p-4 sm:p-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
            358 High Street
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            October 2025
          </p>
        </div>
      </div>

      {/* Introduction / Mission */}
    <section
        className="max-w-5xl mx-auto text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl columns-1    md:columns-2 gap-8 space-y-2" >
        <p> <strong>358 High Street</strong> is a deep energy retrofit (DER)— a duplex residence built in 2004 which was renovated in 2025 to include a high-performance thermal envelope, new HVAC, new finishes and added space.</p>
        <div className="text-center">
            <button 
                className="inline-block mt-4 px-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition"
                onClick={() => navigateTo("rental")}>
                Rental details ...
            </button>
        </div>

        <p>Its <strong>renovation details</strong> describes the construction — from pre-retrofit 
            conditions to renvation construction assemblies, and the measured performance data and ongoing maintenance.
        </p>
        <div className="text-center ">
            <button 
                className="inline-block mt-4 px-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition"
                onClick={() => navigateTo("construction/party-walls")}>
                Construction photos, ex. duplex party walls
            </button>
        </div>
    </section>


  </div>

    )
}
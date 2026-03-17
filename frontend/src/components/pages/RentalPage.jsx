
// RentalPage.jsx
import salesImage from "/images/img-sales-1.jpg"

export default function RentalPage({ navigateTo }) {
  return (
    <div className="space-y-2 max-w-7xl mx-auto text-grey-900">

      <section>
          <img
            src={salesImage}
            alt="sales image"
            className="object-cover w-full max-h-72 rounded-t"
          />
      </section>
      
    {/* <div className="flex flex-col items-center px-4 sm:px-6 lg:px-12 py-8 space-y-10 text-center"> */}
        <section className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1">
            <div className="p-4 bg-gray-50 rounded-lg border">
                <h2 className="font-bold text-xl mb-6">Rental Status:</h2>
                <ul className="list-disc list-inside text-sm sm:text-base">
                        <li><span className="font-semibold text-lg">Apartment 1:</span> <span className="font-semibold pl-2 text-lg">Unavailable</span></li>
                        <li><span className="font-semibold text-lg">Apartment 2:</span> <span className="font-semibold pl-2 text-lg">Unavailable</span> </li>
                    </ul>
            </div>

            {/* <section className="grid gap-4 sm:grid-cols-1"> */}
            <div className="p-2 bg-gray-50 rounded-lg border">
                <h2 className="font-bold text-xl mb-1">Rental Agent:</h2>
                <p className=" font-bold pl-2 pb-1">Sam Mehorter</p>
                <p className=" font-semibold  pl-2">Hometown Realty</p>
                <p className=" font-semibold  pl-2">84 Congress Street Belfast, ME 04915</p>
                <p className=" font-semibold  pl-2 pr-4">207-338-3949
                    <a href="http://www.hometownre.org" className=" font-semibold pl-6" target="_blank" rel="noreferrer noopener" >www.hometownre.org</a>
                </p>
            </div>
        </section>

      <section className="grid gap-4 sm:grid-cols-1">
          <h2 className="font-bold text-center  text-xl">Key Features of Each Apartment:</h2>
      </section>

      <section className="grid gap-4 sm:grid-cols-1  lg:grid-cols-2">
        <div className="p-4 bg-gray-50 rounded-lg border">
          <ul className="list-disc list-inside text-gray-900 space-y-1 text-xs sm:text-base">
                <li><span className="font-semibold text-lg">Spaces:</span> Two bedrooms, one and a half baths, living room, kitchen, mud room w/laundry alcove, storage room;</li>
                <li><span className="font-semibold text-lg">Floor area:</span> 975 total square feet; </li>
                <li><span className="font-semibold text-lg">Baths:</span> New fixtures and vanities; white marble countertops;</li>
                <li><span className="font-semibold text-lg">Kitchens:</span> new white granite countertops, sinks and fittings;</li>
                <li><span className="font-semibold text-lg">Appliances:</span> New GE Profile appliances: induction range, dishwasher, refrigerator; and range hood exhaust systems;</li>
                <li><span className="font-semibold text-lg">Laundry:</span> New stacked washer/dryer in mudroom alcove; </li>
                <li><span className="font-semibold text-lg">Finishes:</span> Hardwood floors in main areas, LVP in entries and bathrooms; all new finishes;</li>          
                <li><span className="font-semibold text-lg">Storage, conditioned:</span>  115 square feet of conditioned storage;</li>  
                <li><span className="font-semibold text-lg">Storage, Unconditioned:</span>  On-site, shared, storage shed;</li>  
                <li><span className="font-semibold text-lg">Gardening: </span> raised garden bed, 3' x 12';</li>
                <li><span className="font-semibold text-lg">Distance: </span> 1.1 miles to downtown Belfast.</li>
            </ul>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg border">
          <ul className="list-disc list-inside text-gray-900 space-y-1 text-xs sm:text-base">
                <li><span className="font-semibold text-lg">Sound Isolation:</span>  Sound separation between units greater than STC 60;</li>                
                <li><span className="font-semibold text-lg">Radon Gas Measurements:</span> Available as per 14-M.R.S.A § 6030-D (2013);</li>
                <li><span className="font-semibold text-lg">Indoor Air Quality:</span> Ongoing measurement of indoor air quality;</li>
                <li><span className="font-semibold text-lg">Thermal Envelope:</span> Super-insulated envelope; </li>                
                <li><span className="font-semibold text-lg">Heating and cooling:</span> Ducted central heat pump system;</li>
                <li><span className="font-semibold text-lg">Ventilation Air:</span> Energy recovery ventilator (ERV);</li>
                <li><span className="font-semibold text-lg">Exhaust Air:</span> General exhaust air; also bathroom exhaust via ERV with boost timers;</li>
                <li><span className="font-semibold text-lg">Range Hood Exhaust:</span> New variable speed range hood exhaust systems</li>
                <li><span className="font-semibold text-lg">Lighting: </span>LED kitchen countertop, overhead and closet lighting;</li>
                <li><span className="font-semibold text-lg">Electric Devices: </span>Tamper-proof receptacles;</li>
                <li><span className="font-semibold text-lg">Utilities: </span>Central Maine Power, City of Belfast Water, Sewer;</li>
                <li><span className="font-semibold text-lg">Parking: </span>Set-back from street location; dedicated parking per apartment.</li>
            </ul>
        </div>
      </section>

      {/* <section className="p-4 bg-gray-50 rounded-lg border">
        <h2 className="font-semibold mb-2">Utilities & Typical Usage</h2>
        <p className="text-gray-700 text-sm sm:text-base mb-3">
          The building is fully electric. Historical usage values are approximate and will vary with
          occupancy and weather.
        </p>
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-1 pr-4 font-semibold">Item</th>
              <th className="py-1 font-semibold">Typical Range</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-1 pr-4">Monthly electric (per unit)</td>
              <td className="py-1">TBD – e.g.  $XX–$YY</td>
            </tr>
            <tr>
              <td className="py-1 pr-4">Heat source</td>
              <td className="py-1">High-efficiency cold-climate heat pumps</td>
            </tr>
          </tbody>
        </table>
      </section> */}

      {/* <div className="flex flex-wrap gap-3">
        <button
          onClick={() => navigateTo("Rental Info", "Unit Details", "Unit A")}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm sm:text-base"
        >
          View Unit A Details
        </button>
        <button
          onClick={() => navigateTo("Rental Info", "Unit Details", "Unit B")}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm sm:text-base"
        >
          View Unit B Details
        </button>
      </div> */}

        <div className="pt-2 mb-6 flex justify-center">
            <a
                href="/images/358-high-unit-1-realty-floor-plan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    inline-flex items-center justify-center
                    px-6 py-3
                    rounded-lg
                    bg-green-600 text-white
                    text-sm sm:text-base font-semibold
                    shadow
                    hover:bg-green-700 hover:shadow-md
                    transition"
               >View Floor Plan Scaled (11x17, pdf)
            </a>
        </div>
    </div>
    
  );
}

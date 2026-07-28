// src/pages/DemolitionPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/image-page-demo-HVAC.webp";

export default function DemolitionPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Heating Plant and Domestic Hot Water Demolition"
        capText="Extracting the original cast iron sectional boiler."
        h1Text="Heating Plant and Domestic Hot Water Demolition"
      >
        <p className="text-base text-gray-700">
          The original oil-fired, forced hot water heating system served both apartments and was located in the midway between them in the north side of the crawlspace.</p>
          <p className="text-base text-gray-700"> The oil tank (Granby MH13819, 130 gallons, 2004) was located in the crawlspace.</p>
          <p className="text-base text-gray-700">
          The heating plant included a cast iron sectional boiler (Peerless Boiler WBV-03-110-WPCL, IBR: gross, 129 MBH, net, 112.9 ) with a Becket AFG oil-burner dpwm-fired with a 0.85 gph nozzle. Its efficiency had been measured at 83%. </p>
          <p className="text-base text-gray-700">The boiler's venting system was driven by a draft inducer (Tjernland Sideshot) whose discharge was at grade - a code violation noted in the preinspection report.</p>
          <p  className="text-base text-gray-700">The distribution system was two series loops, one per apartment, to finnned tube radiation, and a (failed) kick-space heater in the kitchen. A thermostat in each apartment controlled the pumps. </p>
          <p  className="text-base text-gray-700">Two electric domestic hot water heaters — was completely removed from the crawlspace. The boiler and tank removal required rigging and careful maneuvering through the crawlspace access</p>
        
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["mechanical-demolition"]} />
    </div>
  );
}

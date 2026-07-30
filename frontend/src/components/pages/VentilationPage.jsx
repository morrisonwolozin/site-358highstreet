// src/pages/VentilationPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/image-page-ERV.webp";

export default function VentilationPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Ventilation"
        capText="Energy recovery ventilators serve each apartment."
        h1Text="Energy Recovery Ventilation Systems"
      >
        <p className="text-base text-gray-700"> Each apartment is served by a dedicated energy recovery ventilator (ERV) with boost switches in bathrooms. </p>
        <p className="text-base text-gray-700"> Apartment 1 has a FanTech Atmo 150E in its crawlspace. It's controlled with a central interface and wireless bathroom boost switches. </p>
        <p className="text-base text-gray-700"> Apartment 2 is served by a Renewaire Premium Small ERV located in its crawlspace. It's controlled by wired booster switches.</p>
        <p className="text-base text-gray-700"> Each system provides continuous, balanced fresh air supply while recovering heat and moisture from the exhaust air. </p>
       
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["erv"]} />
    </div>
  );
}

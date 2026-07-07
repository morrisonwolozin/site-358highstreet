// src/pages/VentilationPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/img-1-HVAC-ERV.webp";

export default function VentilationPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Ventilation"
        capText="Energy recovery ventilation units in each crawlspace."
        h1Text="Ventilation"
      >
        <p className="text-gray-600">
          Each unit is served by a dedicated energy recovery ventilator (ERV): a FanTech Atmo 150E for Unit 1 and a Renewaire Premium S for Unit 2. Each system provides continuous balanced ventilation with boost capability, recovering heat and moisture from exhaust air to pre-condition incoming fresh air.
        </p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["erv"]} />
    </div>
  );
}

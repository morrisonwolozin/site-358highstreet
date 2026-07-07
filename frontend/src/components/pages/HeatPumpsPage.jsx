// src/pages/HeatPumpsPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/img-1-HVAC-heat-pumps.webp";

export default function HeatPumpsPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Heating \& Cooling"
        capText="Mitsubishi heat pump outdoor units with protective roof overhang."
        h1Text="Heating \& Cooling"
      >
        <p className="text-gray-600">
          Both units are served by Mitsubishi SUZ-KA18NAHZ cold-climate heat pumps with SVZ-KP18NA air handlers located in the crawlspace. Each system provides heating, cooling, and dehumidification via a ducted distribution system, with MHK-2 thermostats and kumo Cloud connectivity.
        </p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["heat-pumps"]} />
    </div>
  );
}

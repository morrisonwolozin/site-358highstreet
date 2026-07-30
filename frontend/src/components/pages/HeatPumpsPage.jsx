// src/pages/HeatPumpsPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/image-page-energy.webp";

export default function HeatPumpsPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Heating and Cooling"
        capText="Mitsubishi ducted cold climate heat pumps."
        h1Text="Heating and Cooling"
      >
        <p className="text-base text-gray-700"> Each apartment is heated and cooled by a single zone, ducted, cold-climate heat pump system. </p>
        <p className="text-base text-gray-700"> The Mitsubishi heat pump outdoor units are SUZ-KA18HAHZ, and their indoor units are SVZ-KP18NA. </p>
        <p className="text-base text-gray-700"> Each system's indoor unit and distribution duct is located in its crawlspace </p>
         <p className="text-base text-gray-700">The systems are controlled with Mitsubishi MHK-2 thermostats. There's remote access to the thermostats via kumo Cloud. </p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["heat-pumps"]} />
    </div>
  );
}
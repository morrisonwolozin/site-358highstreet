// src/pages/DemolitionPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/img-1-HVAC-demo.webp";

export default function DemolitionPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Mechanical Demolition"
        capText="Removal of the original oil-fired heating system."
        h1Text="Mechanical Demolition"
      >
        <p className="text-gray-600">
          The original mechanical system — an oil-fired hot water boiler, 130-gallon fuel oil tank, finned tube radiation, and two electric domestic hot water heaters — was completely removed from the crawlspace. The boiler and tank removal required rigging and careful maneuvering through the crawlspace access.
        </p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["mechanical-demolition"]} />
    </div>
  );
}

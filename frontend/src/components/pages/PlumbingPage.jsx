// src/pages/PlumbingPage.jsx

import PageIntro from "../../components/PageIntro";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/image-page-plumbing.webp";

export default function PlumbingPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Plumbing, Kitchens and Bathrooms"
        capText="heat pump domestic hot water heater"
        h1Text="Plumbing, Kitchens and Bathrooms"
      >
        <p className="text-base text-gray-700">The "lowboy" electric domestic hot water heaters were replaced by heat pump domestic hot water heaters, one per apartment.</p>
        <p className="text-base text-gray-700">A half-bath was added for each apartment. Space from the eliminated common laundry room and a closet from each apartment was repurposed to create the bathrooms.</p>
        <p className="text-base text-gray-700">Stacked washer/ dryer appliances were added for each apartment, replacing the common laundry.</p>
        <p className="text-base text-gray-700">The kitchen sinks and existing batrooms were completely renovated.</p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["plumbing"]} />
    </div>
  );
}

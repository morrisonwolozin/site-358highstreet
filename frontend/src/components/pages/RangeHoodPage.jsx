// src/pages/RangeHoodPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/img-1-HVAC-kitchen-exhaust.webp";

export default function RangeHoodPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Range Hood Exhaust"
        capText="Dedicated exterior exhaust fans serving each kitchen."
        h1Text="Range Hood Exhaust"
      >
        <p className="text-gray-600">
          Each kitchen is served by a Broan MTT130SS range hood with its internal fan removed, controlled by a Fantech WC15 variable speed switch. A Fantech RVF 6XL remote exhaust fan draws air through a 7 in. duct and discharges at the exterior, keeping noise and heat out of the living space.
        </p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["range-hood"]} />
    </div>
  );
}

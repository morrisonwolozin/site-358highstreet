// src/pages/FoundationPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/img-1-foundation.webp";

export default function FoundationPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Foundation"
        capText="Perimeter excavation and waterproofing, 2024."
        h1Text="Foundation"
      >
        <p className="text-gray-600">
          Eliminating bulk water intrusion was a primary goal of the project. The building perimeter was excavated, new foundation drains installed, and polymer-enhanced asphalt waterproofing applied to the original foundation walls — which had no original damp-proofing.
        </p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["foundation"]} />
    </div>
  );
}

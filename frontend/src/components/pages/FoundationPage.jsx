// src/pages/FoundationPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/image-page-foundation.webp";

export default function FoundationPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Foundation"
        capText="Tremco spray waterproofing product"
        h1Text="Foundation"
      >
        <p className="text-base text-gray-700">
          Eliminating bulk water intrusion was a primary goal of the project. The original foundation walls had no damp-proofing. The perimeter drain was disfunctional.
        </p>
        <p className="text-base  text-gray-700">
        The original building perimeter was excavated, new foundation drains installed, and polymer-enhanced asphalt waterproofing was applied to the foundation walls.
        </p>
        <p className="text-base  text-gray-700">
        The new foundation walls were waterproofed with Protecto Wrap membrane.
        </p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["foundation"]} />
    </div>
  );
}

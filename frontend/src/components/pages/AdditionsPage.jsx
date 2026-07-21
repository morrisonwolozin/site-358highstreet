// src/pages/AdditionsPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/img-1-additions.webp";

export default function AdditionsPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Additions"
        capText="North and west addition foundations, summer 2024."
        h1Text="Additions"
      >
      <p className="text base text-gray-700"> Two new spaces were added to the original building.   </p>
      <p  className="text base text-gray-700"> The north addition provided new entries for each unit. The entries include a mudroom and laundry alcove. </p>
      <p  className="text base text-gray-700">The west addition provides space for the domestic hot water heaters and conditioned storage. </p>
      <p  className="text base text-gray-700">Each addition has a concrete slab floor with a subslab drains to a sump pump.</p>

      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["additions"]} />
    </div>
  );
}

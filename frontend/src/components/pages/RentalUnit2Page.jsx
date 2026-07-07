// src/pages/RentalUnit2Page.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/placeholders/coming-soon.jpg";

export default function RentalUnit2Page() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Unit 2 Photos"
        capText="[Placeholder caption — Unit 2 interior.]"
        h1Text="Unit 2 Photos"
      >
        <p className="text-gray-600">
          [Placeholder — describe Unit 2 features, layout, and amenities here.]
        </p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["rental-unit2"]} />
    </div>
  );
}

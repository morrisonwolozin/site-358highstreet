// src/pages/RentalUnit1Page.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/placeholders/coming-soon.jpg";

export default function RentalUnit1Page() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Unit 1 Photos"
        capText="[Placeholder caption — Unit 1 interior.]"
        h1Text="Unit 1 Photos"
      >
        <p className="text-gray-600">
          [Placeholder — describe Unit 1 features, layout, and amenities here.]
        </p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["rental-unit1"]} />
    </div>
  );
}

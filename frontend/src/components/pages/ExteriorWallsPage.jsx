// src/pages/ExteriorWallsPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/img-0-envelope.webp";

export default function ExteriorWallsPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Exterior Walls"
        capText="Exterior wall insulation and ZipSystem sheathing installation."
        h1Text="Exterior Walls"
      >
        <p className="text-gray-600">
          The above-grade wall assembly was upgraded with 2 in. of polyiso exterior continuous insulation (R-13) over the original 2x6 framing, covered with ZipSystem structural sheathing. Existing siding and roof overhangs were removed and rebuilt to accommodate the added thickness.
        </p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["exterior-walls"]} />
    </div>
  );
}

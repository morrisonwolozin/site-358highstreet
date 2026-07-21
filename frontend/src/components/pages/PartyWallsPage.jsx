// src/pages/PartyWallsPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/image-page-party-walls.webp";

export default function PartyWallsPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Party Walls"
        capText="Safe'n'Sound, Resilient Channel, QuietGlue Pro"
        h1Text="Party Walls"
      >
        <p className="text-base text-gray-700">The original party walls were inadequate for both fire separation and sound isolation</p>
        <p className="text-base text-gray-700">
          New party walls use double or staggered stud framing, Roxul Safe-n-Sound insulation, Clark-Dietrich RC-1 resilient channel, QuietGlue Pro, and two layers of 5/8 in. Type X drywall on each side of the wall.</p>
        <p className="text-base text-gray-700">Sound isolation coefficient, SC-1, greater than or equal to 66. </p>
        
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["party-walls"]} />
    </div>
  );
}

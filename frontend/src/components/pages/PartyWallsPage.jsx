// src/pages/PartyWallsPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/img-1-party-walls.webp";

export default function PartyWallsPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Party Walls"
        capText="New fire- and sound-rated separation walls between units."
        h1Text="Party Walls"
      >
        <p className="text-gray-600">
          The original party walls were inadequate for both fire separation and sound isolation. New walls use double or staggered stud framing, Roxul Safe-n-Sound insulation, resilient channel, QuietGlue Pro, and multiple layers of 5/8 in. Type X drywall.
        </p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["party-walls"]} />
    </div>
  );
}

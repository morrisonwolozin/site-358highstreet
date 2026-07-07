// src/pages/CrawlspaceWallsPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/img-1-crawlspace.webp";

export default function CrawlspaceWallsPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Crawlspace Walls"
        capText="Spray foam insulation on crawlspace walls and band joists."
        h1Text="Crawlspace Walls"
      >
        <p className="text-gray-600">
          The original crawlspace wall insulation — rigid styrofoam applied directly to the concrete — had largely failed. New inset stud walls were framed 3 in. from the exterior wall, then 2 in. of closed-cell spray foam was applied within and behind the studs, including all band joist spaces.
        </p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["crawlspace-walls"]} />
    </div>
  );
}

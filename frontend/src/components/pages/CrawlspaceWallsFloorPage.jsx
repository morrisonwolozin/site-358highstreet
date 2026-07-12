// src/pages/CrawlspaceWallsPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/img-1-crawlspace.webp";

export default function CrawlspaceWallsFloorPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Crawlspace Floors and Walls"
        capText="Spray foam insulation on crawlspace walls and band joists."
        h1Text="Crawlspace Floors and Walls"
      >
       <p>
          The crawlspace floor assembly consists of a 1/2 in. dimple mat moisture barrier (Doerken Delta-FL) with taped seams, 1 in. rigid foam insulation, and 5/8 in. Advantech subfloor. The same assembly was used in both the original crawlspace and the new addition slabs.
        </p>
        <p>
          The original crawlspace wall insulation — rigid styrofoam applied directly to the concrete — had detached from the walls, and, in some areas, was failed. New inset stud walls were framed 3 in. from the exterior wall, then 2 in. of closed-cell spray foam was applied within and behind the studs, including all band joist spaces.
        </p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["crawlspace-walls-floor"]} />
    </div>
  );
}

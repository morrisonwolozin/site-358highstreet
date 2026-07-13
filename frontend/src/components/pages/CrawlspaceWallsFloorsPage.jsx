// src/pages/CrawlspaceWallsPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/image-page-crawlspace.webp";

export default function CrawlspaceWallsFloorsPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Crawlspace Floors and Walls"
        capText="Spray foam insulation on crawlspace walls and band joists."
        h1Text="Crawlspace Floors and Walls"
      >
       <p>
          The crawlspace floor is poured concrete. the retrofit and new crawlspace assembly onto the concrete is an HDPE air-gap membrane (Doerken Delta-FL) with taped seams. It serves as a moisture barrier. Next, 1 in. rigid foam insulation, then covered with 5/8" Advantech subfloor. Floor drains were covered with grilles.
        </p>
        <p className= "py-1">
          The crawlspace wall are poured concrete. Their original insulation was rigid styrofoam adhered directly to the concrete. The insulation had detached from the walls, and, in some areas, missing. Teh retrofit walls framed a stud wall were framed 3 in. from the exterior wall, then 2 in. of closed-cell spray foam was applied within and behind the studs, including all band joist spaces.
        </p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["crawlspace-walls-floors"]} />
    </div>
  );
}

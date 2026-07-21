// src/pages/CrawlspaceWallsPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/image-page-crawlspaceWallsFloors.webp";

export default function CrawlspaceWallsFloorsPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Crawlspace Floors and Walls"
        capText="Retrofit crawlspace floor assembly."
        h1Text="Crawlspace Floors and Walls"
        tableData={{
            caption: "Thermal R-values",
            headers: ["Element", "Pre-Construction", "Retrofit","Note"],
            rows: [
              ["Crawlspace walls", "R-4", "R-20.4","3\" foam"],
              ["Crawlspace floors", "R-1", "R-6","dimple mat, 1\" XPS, subfloor"],
            ]}}
      >
       <p>
          The concrete crawlspace floors were retrofitted with an HDPE air-gap membrane (Doerken Delta-FL), 1" XPS foam board insulation and 5/8" Advantech subfloor.
        </p>
        <p className= "py-1">
          The concrete crawlspace walls were retrofitted with a 2x4 stud wall inset 3", then 2 in. of closed-cell spray foam over the existing XPS foam board, and, up into the band joist spaces.
        </p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["crawlspace-walls-floors"]} />
    </div>
  );
}

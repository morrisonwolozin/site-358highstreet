// src/pages/CrawlspaceFloorsPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/img-1-crawlspace-floor.webp";

export default function CrawlspaceFloorsPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Crawlspace Floors"
        capText="New crawlspace floor assembly with moisture barrier and insulation."
        h1Text="Crawlspace Floors"
      >
        <p className="text-gray-600">
          The crawlspace floor assembly consists of a 1/2 in. dimple mat moisture barrier (Doerken Delta-FL) with taped seams, 1 in. rigid foam insulation, and 5/8 in. Advantech subfloor. The same assembly was used in both the original crawlspace and the new addition slabs.
        </p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["crawlspace-floors"]} />
    </div>
  );
}

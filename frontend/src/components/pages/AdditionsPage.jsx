// src/pages/AdditionsPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/img-1-additions.webp";

export default function AdditionsPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Additions"
        capText="North and west addition foundations, summer 2024."
        h1Text="Additions"
      >
        <p className="text-gray-600">
          Two additions were constructed: a north addition providing new entries for each unit, and a west addition housing mechanical equipment and storage. Each addition has a concrete slab floor with a sump pump drain.
        </p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["additions"]} />
    </div>
  );
}

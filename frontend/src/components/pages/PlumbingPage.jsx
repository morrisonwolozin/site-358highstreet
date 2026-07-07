// src/pages/PlumbingPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/placeholders/coming-soon.jpg";

export default function PlumbingPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Plumbing"
        capText="[Placeholder caption]"
        h1Text="Plumbing"
      >
        <p className="text-gray-600">
          [Placeholder — describe domestic hot water and plumbing upgrades here.]
        </p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["plumbing"]} />
    </div>
  );
}

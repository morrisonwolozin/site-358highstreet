// src/pages/PlumbingPage.jsx

import PageIntro from "../../components/PageIntro";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/image-page-plumbing.webp";

export default function PlumbingPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Plumbing"
        capText="heat pump domestic hot water heater"
        h1Text="Plumbing"
      >
        <p className="text-base text-gray-700">
          [Placeholder — describe domestic hot water and plumbing upgrades here.]
        </p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["plumbing"]} />
    </div>
  );
}

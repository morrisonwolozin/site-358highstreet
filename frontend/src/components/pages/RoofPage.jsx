// src/pages/RoofPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/img-01-attic.webp";

export default function RoofPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Roof"
        capText="Closed-cell spray foam in roof cavities."
        h1Text="Roof"
      >
        <p className="text-gray-600">
          The roof cavities were insulated with 5 in. of closed-cell spray polyurethane foam (ccSPF), achieving approximately R-35 in the rafter bays and completing the continuous air barrier at the building's thermal envelope.
        </p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["roof"]} />
    </div>
  );
}

// src/pages/ExteriorWallsPage.jsx

import PageIntro from "../PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/img-0-envelope.webp";

export default function ExteriorWallsPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Exterior Walls and Roof"
        capText="Original north elevation"
        h1Text="Exterior Walls and Roof Retrofit"
        tableData={{
            caption: "Thermal R-values",
            headers: ["Element", "Pre-Construction", "After Retrofit","Note"],
            rows: [
              ["Above-grade walls", "R-17.5", "R-32.3",""],
              ["Roof", "R-38.0", "R-54.1","includes interior ccSPF"],
            ]
  }}
      >
        <p className="text-gray-600">
          The above-grade wall assembly was upgraded with 2" of polyiso exterior continuous insulation (R-13) over the original 2x6 walls with their cavity insulation, then resheathed. The original attic was vented above ceiling insulation; the retrofit incorporated the attic into conditioned space. The roof was insulated 4" of continuous polyiso onto the existing deck. Then, 5" of closed cell spray foam (ccSPF) was sprayed into the 2x6 rafter cavities. And 3" was sprayed onto the attic end walls.
        </p>

      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["retrofit-wall-roof"]} />
    </div>
  );
}

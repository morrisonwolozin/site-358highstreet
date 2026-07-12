// src/pages/ExteriorWallsPage.jsx

import PageIntro from "../PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/img-0-envelope.webp";

export default function ExteriorWallsPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-2">
      <PageIntro
        imgName={pageImage}
        altImageName="Exterior Walls and Roof"
        capText="Original north elevation"
        h1Text="Exterior Walls and Roof Retrofit"
        tableData={{
            caption: "Thermal R-values",
            headers: ["Element", "Pre-Construction", "After Retrofit","Note"],
            rows: [
              ["Above-grade walls", "R-17.5", "R-32.3","polyiso, fiberglass"],
              ["Roof", "R-38.0", "R-54.1","ccSPF, exterior polyiso"],
            ]}}
            >
        <p>The roof retrofit for the above-grade wall was 2" of exterior polyiso insulation onto the existing 2x6 wall including its cavity fiberglass insulation, then resheathed.</p>
        <p>The roof retrofit placed 4" of exterior polyiso onto the existing roof deck. Then, 5" of closed cell spray foam (ccSPF) was sprayed into the interior roof rafter cavities. Pre-retrofit, the attic floor was insulated and attic vented. The retrofit incorporated the attic into ventilated conditioned space.</p>
        <p>Lastly, 3" of ccSPF was sprayed onto the attic end walls.</p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["retrofit-wall-roof"]} />
    </div>
  );
}

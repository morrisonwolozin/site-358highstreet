// src/pages/RetrofitWallRoofPage.jsx

import PageIntro from "../PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/image-page-exteriorWallRoof.webp";

export default function ExteriorWallsPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-2">
      <PageIntro
        imgName={pageImage}
        altImageName="Exterior Walls and Roof"
        capText="exterior wall and roof insulation"
        h1Text="Wall and Roof Retrofit"
        tableData={{
            caption: "Thermal R-values",
            headers: ["Element", "Pre-Construction", "Retrofit","Note"],
            rows: [
              ["Above-grade walls", "R-17.5", "R-32.3","polyiso, fiberglass"],
              ["Roof", "R-38.0", "R-54.1","interior ccSPF, exterior polyiso"],
            ]}}
            >
        <p>The above-grade existng 2x6 wall's siding was removed, and 2" polyiso insulation retrofitted onto its exterior. The existing cavity insulation was retained. New sheathing was installed over the polyiso.</p>
        <p>The existing roofing was removed and 4" polyiso was retrofitted onto the existing roof deck. Then flat 2x4s were screwed through the insulation into the rafters to create a vent channel, then new sheathing and roofing with ridge and soffit vents.</p>
        <p> 5" of closed cell spray foam (ccSPF) was sprayed into the interior roof rafter cavities. Pre-retrofit, the attic floor was insulated and attic vented. The retrofitted attic was incorporated into the conditioned space.</p> 

      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["retrofit-wall-roof"]} />
    </div>
  );
}

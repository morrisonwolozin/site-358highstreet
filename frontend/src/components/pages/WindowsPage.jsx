// src/pages/WindowsPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/image-page-windows.webp";

export default function WindowsPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Windows"
        capText="Sandford Hills triple-pane window section"
        h1Text="Windows"
        tableData={{
            caption: "Thermal R-values",
            headers: ["Element", "Pre-Construction", "Retrofit","Note"],
            rows: [
              ["Windows", "R-1.5", "R-5","2-pane, alumimum to 3-pane, vinyl"],
            ]}}
      >
        <p className="text-gray-600">The original double-pane, aluminum, windows were replaced with triple-pane vinyl windows, the Sanford Hills product manufactured by Matthews Brothers, Belfast, ME.</p>
        <p className="text-gray-600">Framing was extended outward to align the new windows with the plane of the exterior insulation. </p>
        <p className="text-gray-600">Flashing tape was applied over the window frame's nailing flange for continuous air sealing. </p>
        
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["windows"]} />
    </div>
  );
}

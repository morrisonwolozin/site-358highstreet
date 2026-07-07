// src/pages/WindowsPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/img-1-windows-remove-existing.webp";

export default function WindowsPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Windows"
        capText="Triple-pane window installation, 2024."
        h1Text="Windows"
      >
        <p className="text-gray-600">
          All original double-pane aluminum-frame windows were replaced with triple-pane units. Framing was extended outward to align the new windows with the plane of the exterior insulation, and flashing tape was applied for continuous air sealing at each rough opening.
        </p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["windows"]} />
    </div>
  );
}

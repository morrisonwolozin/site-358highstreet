// src/pages/RangeHoodPage.jsx

import PageIntro from "../../components/PageIntro";
// import MarkdownPage from "./MarkdownPage";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import pageImage from "/images/image-page-range-hood-exhaust.webp";

export default function RangeHoodPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={pageImage}
        altImageName="Range Hood Exhaust"
        capText="A range hood exhaust system serves each kitchen."
        h1Text="Range Hood Exhaust System"
      >
        <p className="text-base text-gray-700"> Each kitchen's range hood exhaust system has a conventional hood retrofitted with a remote exhaust fan and a variable speed controller. </p>
        <p className="text-base text-gray-700"> The hood is an off-the-shelf hood (Broan MTT130SS) whose internal fan has been removed.</p>
        <p className="text-base text-gray-700"> The hood's controls are rewired to a remote, exterior, exhaust fan (Fantech RVF 6XL) through a wall-mounted variable speed controller switch (Fantech WC-15). The hood's three position speed switch is modified to two position. </p>
        <p className="text-base text-gray-700"> Exhaust air is discharged to outdoors at each apartment's end wall. Make-up air can be induced from the crawlspaces, which are included in the conditioned envelope. Infrastructure to install future make-up air is included. </p>
      </PageIntro>

      {/* <MarkdownPage content={content} /> */}

      <Gallery images={galleryIndex["range-hood"]} />
    </div>
  );
}

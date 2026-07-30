// src/pages/IceDamsPage.jsx
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import MarkdownPage from "./MarkdownPage";
import PageIntro from "../../components/PageIntro";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import narrative from "../../content/ice-dams-narrative.md?raw";
import imgPageIntro from "/images/image-page-ice-dams.webp"

function normalize(pathname) {
  return pathname
    .replace(/^\/+|\/+$/g, "")
    .toLowerCase();
}

export default function IceDamsPage() {
  const { pathname } = useLocation();
  const key = useMemo(() => normalize(pathname), [pathname]);
  const images = galleryIndex[key];

  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={imgPageIntro}
        altImageName="ice dams"
        capText="Ice Dams"
        h1Text="Ice Dams! An Unexpected Challenge"
      >
        <p className="text-base text-gray-700 pb-1">  Ice dams formed in at the eave of the north addition during the first winter. </p>
        <p className="text-base text-gray-700 pb-1"> But, why?: This roof is designed to vent above the roof deck and cavity insulation. </p>
        <p className="text-base text-gray-700"> Read below the photo gallery for the details. </p>
      </PageIntro>

      <Gallery images={galleryIndex["ice-dams"]} />

      <MarkdownPage content={narrative} />

    </div>
  );
}

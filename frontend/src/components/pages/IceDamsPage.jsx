// src/pages/IceDamsPage.jsx
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import MarkdownPage from "./MarkdownPage";
import PageIntro from "../../components/PageIntro";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import narrative from "../../content/ice-dams-narrative.md?raw";
import imgPageIntro from "/images/img-ice-dams-pageIntro.webp"

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
        h1Text="Ice Dams!"
      >
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae hic consectetur eligendi maiores molestiae numquam error eaque ducimus sapiente quaerat repellat ipsam quis, facere itaque. Quae necessitatibus fugit eveniet commodi.
        </p>
        <p className="text-gray-600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod enim mollitia doloremque a illum deserunt, voluptatum voluptas sunt dolorem nihil illo id iste sed maxime voluptatem exercitationem, ad, porro facilis.
      
        </p>
      </PageIntro>

      <MarkdownPage content={narrative} />

      <Gallery images={galleryIndex["ice-dams"]} />
    </div>
  );
}

// src/pages/HistoricalPage.jsx
// 2026-07-06

import PageIntro from "../../components/PageIntro";
import Gallery from "../../components/Gallery";
import { galleryIndex } from "../../data/galleryIndex.js";
import historicalPageImage from "/images/image-page-historical.webp";

export default function HistoricalPage() {
  return (
    <div className="max-w-5xl mx-auto gap-y-4">
      <PageIntro
        imgName={historicalPageImage}
        altImageName="Consent agreement signature page"
        capText="Signature page of the 2012 consent agreement."
        h1Text="Historical"
      >
        <p className="text-gray-600">
          The duplex was built to the rear of 360 High Street within its
          lot in 2004. There were numerous deficiencies with its siting and
          construction aside from no lot division: failed setback compliance on the south
          side, no driveway or parking, and unmanaged site drainage from the
          up-slope west side. By 2012 the original owners had defaulted and
          Nationstar Mortgage LLC assumed ownership.
        </p>
        <p className="text-gray-600">
          The image above is the signature page of the consent agreement to
          correct the deficiencies, whose parties were the Town of Belfast,
          abutter Michelle Morrow, and the mortgage company. See the{" "}
          <a
            href="/downloads"
            className="text-emerald-700 underline underline-offset-2 hover:text-emerald-900"
          >
            2012 Consent Agreement
          </a>{" "}
          on the Downloads page for the full legal context. The photo gallery
          below shows the original 2004 module 'nameplates' and pre-construction
          conditions as of 2023.
        </p>
      </PageIntro>

      <Gallery images={galleryIndex["historical"]} />
    </div>
  );
}

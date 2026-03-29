// src/pages/IceDamsPage.jsx
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import MarkdownPage from "./MarkdownPage";
import Gallery from "../Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import narrative from "../../content/ice-dams-narrative.md?raw";

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
    <div className="max-w-4xl mx-auto space-y-8">
      <MarkdownPage content={narrative} />
      {images ? (
        <Gallery images={images} />
      ) : (
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-gray-700">
          <div className="text-lg font-semibold mb-1">Photos coming soon</div>
          <div className="text-sm">
            No gallery found for <span className="font-mono">{key}</span>.
          </div>
        </div>
      )}
    </div>
  );
}

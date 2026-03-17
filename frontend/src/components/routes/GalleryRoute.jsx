// 03/08/2026
// src/routes/GalleryRoute.jsx
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Gallery from "../Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import { findNodeByPath} from '../../utils/utils.js'
import { siteMap } from "../navigation/siteMap.js";

function normalize(pathname) {
  return pathname
    .replace(/^\/+|\/+$/g, "")   // trim leading/trailing slash
    .toLowerCase();
}

export default function GalleryRoute() {
  const { pathname } = useLocation();
  const node = findNodeByPath(siteMap, pathname);

  const key = useMemo(() => normalize(pathname), [pathname]);
  const images = galleryIndex[key];

  // console.log(`GalleryRoute: images: ${images}`)

  return (
    <div className="p-6">
      {/* Breadcrumb from URL 
      <div className="mb-4 text-sm text-gray-600">
        {key.split("/").filter(Boolean).map((seg, i, arr) => (
          <span key={`${seg}-${i}`}>
            <span className={i === arr.length - 1 ? "font-semibold text-gray-900" : ""}>
              {seg.replace(/-/g, " ")}
            </span>
            {i < arr.length - 1 ? <span className="text-gray-400"> / </span> : null}
          </span>
        ))}
      </div> */}

      <div className="mb-6 space-y-3 text-black">
        <h1 className="text-3xl sm:text-4xl font-bold">
          {node?.title}
        </h1>

        {node?.summary && (
          <p className="text-base sm:text-lg ">
            {node.summary}
          </p>
        )}

        {node?.intro && (
          <div className="max-w-4xl leading-relaxed space-y-4">
            <p>{node.intro}</p>
          </div>
        )}
      </div>

      <p className="italic">select image to enlarge</p>

      {images ? (
        <Gallery images={images} />
      ) : (
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-gray-700">
          <div className="text-lg font-semibold mb-1">Content coming soon</div>
          <div className="text-sm">
            No gallery found for <span className="font-mono">{key}</span>.
          </div>
        </div>
      )}
    </div>
  );
}
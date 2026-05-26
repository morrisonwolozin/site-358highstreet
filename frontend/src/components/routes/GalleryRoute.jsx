// 03/08/2026
// src/routes/GalleryRoute.jsx
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Gallery from "../Gallery";
import { galleryIndex } from "../../data/galleryIndex";
import { findNodeByPath } from '../../utils/utils.js';
import { siteMap } from "../navigation/siteMap.js";

function normalize(pathname) {
  return pathname
    .replace(/^\/+|\/+$/g, "")
    .toLowerCase();
}

export default function GalleryRoute() {
  const { pathname } = useLocation();
  const node = findNodeByPath(siteMap, pathname);
  const key = useMemo(() => normalize(pathname), [pathname]);
  const images = galleryIndex[key];

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="mb-6 space-y-3 text-black">
        <h1 className="text-3xl sm:text-4xl font-bold">
          {node?.title}
        </h1>
        {node?.summary && (
          <p className="text-base sm:text-lg">
            {node.summary}
          </p>
        )}
        {node?.intro && (
          <div className="max-w-4xl leading-relaxed space-y-4">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ node, ...props }) => (
                  <img {...props} className="rounded shadow-sm max-w-sm my-2" />
                ),
                a: ({ node, ...props }) => (
                  <a {...props} className="text-green-600 underline hover:text-green-800" />
                ),
                p: ({ node, ...props }) => (
                  <p {...props} className="text-base leading-relaxed" />
                ),
              }}
            >
              {node.intro}
            </ReactMarkdown>
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
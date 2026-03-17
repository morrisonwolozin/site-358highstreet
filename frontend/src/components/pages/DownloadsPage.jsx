// src/pages/DownloadsPage.jsx
import { downloads } from "../../../public/downloads/downloads.js";

function DownloadItem({ title, description, file }) {
  return (
    <a
      href={`/downloads/${file}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start justify-between gap-4 p-4 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors duration-150 group"
    >
      <div className="flex items-start gap-3 min-w-0">
        {/* PDF icon */}
        <div className="shrink-0 mt-0.5 w-8 h-8 flex items-center justify-center rounded bg-red-50 text-red-500 text-xs font-bold border border-red-100">
          PDF
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-gray-900 group-hover:text-green-800 transition-colors duration-150">
            {title}
          </div>
          <div className="text-sm text-gray-500 mt-0.5">{description}</div>
        </div>
      </div>
      {/* Download arrow */}
      <div className="shrink-0 mt-1 text-gray-400 group-hover:text-green-600 transition-colors duration-150">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
        </svg>
      </div>
    </a>
  );
}

function DownloadCategory({ category, items }) {
  return (
    <section className="space-y-2">
      <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">
        {category}
      </h2>
      {items.map((item) => (
        <DownloadItem key={item.file} {...item} />
      ))}
    </section>
  );
}

export default function DownloadsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Downloads</h1>
        <p className="text-gray-600 text-sm">
          Project documents available for download. Files open in a new tab.
        </p>
      </div>
      {downloads.map((section) => (
        <DownloadCategory
          key={section.category}
          category={section.category}
          items={section.items}
        />
      ))}
    </div>
  );
}

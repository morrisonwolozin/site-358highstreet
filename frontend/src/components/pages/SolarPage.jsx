// src/pages/IssuesPage.jsx
import MarkdownPage from "./MarkdownPage";
import content from "../../content/solar.md?raw";
import arrayImage from "/images/img-array.webp"

export default function SolarPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-4">
      {/* Header */}

        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <img
            src={arrayImage}
            alt="solar image"
            className="w-full sm:w-96 rounded shadow-sm flex-shrink-0"
          />
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-gray-900">Solar Electricity</h1>
            <p className="text-gray-600">
            Proposed 19-panel layout across two south-southeast facing roof planes by Revision Energy, April 2026.
            </p>
          </div>
        </div>

      <MarkdownPage content={content} />
  </div>

  )
}
// src/pages/IssuesPage.jsx
import MarkdownPage from "./MarkdownPage";
import content from "../../content/solar.md?raw";
import arrayImage from "/images/img-array.webp"

export default function SolarPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-4">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Solar Electricity</h1>
      </div>

      <div className=" py-2 max-w-3xl">
        <img
          src={arrayImage}
          alt="Proposed onsite array layout: 6 panels on addition roof, 13 panels on main roof"
          className="w-full rounded shadow-sm"
        />
        <p className="text-base text-gray-900 mt-2">
          Proposed 19-panel layout across two south-southeast facing roof planes.
          Revision Energy, April 2026.
        </p>
      </div>

      <MarkdownPage content={content} />
  </div>

  )
}
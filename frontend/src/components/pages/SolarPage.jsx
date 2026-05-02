// src/pages/IssuesPage.jsx
import MarkdownPage from "./MarkdownPage";
import content from "../../content/solar.md?raw";
import arrayImage from "/images/img-array.webp"

export default function SolarPage() {
  return (
    <div>

      <div className=" py-4 max-w-3xl">
        <img
          src={arrayImage}
          alt="Proposed onsite array layout: 6 panels on addition roof, 13 panels on main roof"
          className="w-full rounded shadow-sm"
        />
        <p className="text-sm text-gray-500 mt-2">
          Proposed 19-panel layout across two south-southeast facing roof planes.
          Revision Energy, April 2026.
        </p>
      </div>

          <MarkdownPage content={content} />
    </div>

  )
}
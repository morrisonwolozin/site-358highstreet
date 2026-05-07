// src/pages/IssuesPage.jsx
import MarkdownPage from "./MarkdownPage";
import content from "../../content/goals-challenges.md?raw";

import issuesPageImage from "/images/issues-image.webp"

export default function IssuesPage() {
  return (

      <div className="max-w-5xl mx-auto space-y-10">

        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <img
            src={issuesPageImage}
            alt="issues page image"
            className="w-full sm:w-96 rounded shadow-sm flex-shrink-0"
          />
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-gray-900">Renovation Challenge</h1>
            <p className="text-gray-600">
              The project's overall goal was to create energy-efficient and healthy dwelling apartments while eliminating all fossil fuel combustion.
            </p>
          </div>
        </div>

          <MarkdownPage content={content} />
    </div>
  )
}

// src/pages/IssuesPage.jsx
import MarkdownPage from "./MarkdownPage";
import content from "../../content/goals-challenges.md?raw";

import issuesPageImage from "/images/issues-image.webp"

export default function IssuesPage() {
  return (

      <div className="max-w-4xl mx-auto px-4 py-10">

        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <figure className="w-full sm:w-1/2 flex-shrink-0">
            <img
              src={issuesPageImage}
              alt="issues page image"
              className="w-full sm:w-96 rounded shadow-sm flex-shrink-0"
            />
            <figcaption className="text-sm italic text-gray-500 mt-2 text-center">The original crawlspace flooded.</figcaption>
          </figure>

          <div className="w-full sm:w-1/2 space-y-4">
            <h1 className="text-3xl font-semibold text-gray-900">Renovation Challenge</h1>
            <p className="text-gray-600">
              The project's overall goal was to create a clean energy property: fully-electrified, energy-efficient and verified healthy environments, similar to the Massachusetts Clean Energy Center's <a href="https://goclean.masscec.com/landlords/clean-energy-solutions/"  target="_blank" rel="noreferrer" className="text-emerald-700 underline underline-offset-2 hover:text-emerald-900" >Solutions for Landlords </a>.
            </p>
          </div>
        </div>

          <MarkdownPage content={content} />
    </div>
  )
}

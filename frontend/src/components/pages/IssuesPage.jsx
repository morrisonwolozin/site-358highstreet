// src/pages/IssuesPage.jsx
import MarkdownPage from "./MarkdownPage";
import content from "../../content/goals-challenges.md?raw";

import issuesPageImage from "/images/issues-image.webp"

export default function IssuesPage() {
  return (

      <div className="max-w-4xl mx-auto px-4 py-10">

        <div className="flex flex-col sm:flex-row gap-6 items-start justify-center">
          <figure className="w-full sm:w-auto flex-shrink-0">
            <img
              src={issuesPageImage}
              alt="design page image"
              className="sm:w-96 rounded shadow-sm flex-shrink-0 flex-col items-center"
            />
            <figcaption className="text-base italic text-gray-500 mt-2 text-center">The original crawlspace flooded each Spring.</figcaption>
          </figure>
          <div className="text-left space-y-4 max-w-xl">
            <h1 className="text-3xl font-semibold text-gray-900">Building Design</h1>
            <p className="text-gray-600">
                The project's overall goal was to create a clean energy property: fully-electrified, energy-efficient and verified healthy environments, similar to the Massachusetts Clean Energy Center's <a href="https://goclean.masscec.com/landlords/clean-energy-solutions/"  target="_blank" rel="noreferrer" className="text-emerald-700 underline underline-offset-2 hover:text-emerald-900" >Solutions for Landlords </a>.
            </p>
          </div>
        </div>

          <MarkdownPage content={content} />
    </div>
  )
}

// src/pages/AboutPage.jsx
import MarkdownPage from "./MarkdownPage";
import aboutPageImage from "/images/img-hero-spring.webp"
import content from "../../content/about.md?raw";

export default function AboutPage() {
  return (
    <>
        <div className="flex flex-col sm:flex-row gap-6 items-start">
        <img
          src={aboutPageImage}
          alt="particpants page"
          className="w-full sm:w-96 rounded shadow-sm flex-shrink-0"
        />
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-gray-900">Project Particpants</h1>
          <p className="text-gray-600">
            The following companies and individuals participated in the construction of this project.
          </p>
        </div>
      </div>
  
      <MarkdownPage content={content} />;
    </>
  )
}

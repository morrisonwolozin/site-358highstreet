// src/pages/IssuesPage.jsx
import MarkdownPage from "./MarkdownPage";
import content from "../../content/goals-challenges.md?raw";
import PageIntro from "../PageIntro";
import issuesPageImage from "/images/issues-image.webp"

export default function IssuesPage() {
  return (

      <div className="max-w-4xl mx-auto px-4 py-10">

        <PageIntro  
            imgName= {issuesPageImage}
            altImageName= "issues page image"
            capText ="The original crawlspace flooded after each heavy rain."
            h1Text = "Project Challenges"
            >

            <p className="text-gray-600">{<>The project's overall goal was to create a "clean energy property": fully-electrified, energy-efficient and verified healthy apartments, inspired by the Massachusetts Clean Energy Center's <a href='https://goclean.masscec.com/landlords/clean-energy-solutions/'  target='_blank' rel='noreferrer' className='text-emerald-700 underline underline-offset-2 hover:text-emerald-900' >Solutions for Landlords</a>.</>}</p>
          </PageIntro>

        <MarkdownPage content={content} />
    </div>
  )
}
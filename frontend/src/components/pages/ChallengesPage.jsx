// src/pages/IssuesPage.jsx
import MarkdownPage from "./MarkdownPage";
import content from "../../content/goals-challenges.md?raw";
import PageIntro from "../PageIntro";
import issuesPageImage from "/images/image-page-challenges.webp"

export default function IssuesPage() {
  return (

      <div className="max-w-5xl mx-auto gap-y-4">

        <PageIntro  
            imgName= {issuesPageImage}
            altImageName= "issues page image"
            capText ="The original crawlspace flooded after heavy rains."
            h1Text = "Project Goals and Challenges"
            >

            <p className="text-gray-600 text-base py-2">The project set out to create a clean energy property — fully electrified, deeply energy-efficient, and verifiably healthy — where renewable solar generation and a high-performance envelope combine to minimize tenant utility costs.</p>
            
            <p className=" text-base text-gray-600"> {<> This project's clean energy property approach follows the Massachusetts Clean Energy Center's <a href='https://goclean.masscec.com/landlords/clean-energy-solutions/'  target='_blank' rel='noreferrer' className='text-emerald-700 underline underline-offset-2 hover:text-emerald-900' >Solutions for Landlords</a>.</>}</p>
          </PageIntro>

        <MarkdownPage content={content} />
    </div>
  )
}
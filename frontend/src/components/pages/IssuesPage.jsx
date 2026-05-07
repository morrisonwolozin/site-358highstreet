// src/pages/IssuesPage.jsx
import MarkdownPage from "./MarkdownPage";
import content from "../../content/goals-challenges.md?raw";

export default function IssuesPage() {
  return (
      <div className="max-w-5xl mx-auto space-y-10">
          <MarkdownPage content={content} />;
    </div>
  )
}

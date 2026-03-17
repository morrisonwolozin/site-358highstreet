// src/pages/IssuesPage.jsx
import MarkdownPage from "./MarkdownPage";
import content from "../../content/goals-challenges.md?raw";

export default function IssuesPage() {
  return <MarkdownPage content={content} />;
}

// src/pages/AboutPage.jsx
import MarkdownPage from "./MarkdownPage";
import content from "../../content/about.md?raw";

export default function AboutPage() {
  return <MarkdownPage content={content} />;
}

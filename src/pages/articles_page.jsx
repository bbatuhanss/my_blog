import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";

const articlePage = () => {
  const [markdownContent, setMarkdownContent] = useState("");
  const { state } = useLocation();

  useEffect(() => {
    console.log(state.article);
    fetch(`src/articles/${state.article}`)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text))
      .catch((error) => console.error("Error fetching Markdown file:", error));
  }, []);
  return (
    <div className="articles-card">
      <div className="articles-card-item">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
 
    </div>
  );
};

export default articlePage;

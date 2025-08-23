import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation, Link } from "react-router-dom";
import { OrbitProgress } from "react-loading-indicators";

const articlePage = () => {
  const { state } = useLocation();
  const article = state?.article;
  const title = state?.title || "Article";
  const date = state?.date || "";
  const cover = state?.image || "";

  const [isLoading, setIsLoading] = useState(true);
  const [markdownContent, setMarkdownContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // state/param yoksa geri dön
    if (!article) {
      setError("Article not found.");
      setIsLoading(false);
      return;
    }

    const fetchMarkdown = async () => {
      setIsLoading(true);
      setError("");
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/bbatuhanss/my_blog/main/src/articles/${article}`
        );
        if (!response.ok) throw new Error("Failed to fetch markdown content");
        const markdown = await response.text();
        setMarkdownContent(markdown);
      } catch (err) {
        console.error(err);
        setError("Sorry, the article could not be loaded.");
      } finally {
        const t = setTimeout(() => setIsLoading(false), 600);
        return () => clearTimeout(t);
      }
    };

    fetchMarkdown();
  }, [article]);

  if (isLoading) {
    return (
      <div className="article__loading">
        <OrbitProgress color="#2b93f5" size="medium" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="article__container">
        <div className="article__error">
          <h2>{error}</h2>
          <p>
            Please go back to <Link to="/publications">Publications</Link>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="article">
      {/* Hero */}
      <header
        className={`article__hero ${cover ? "has-cover" : ""}`}
        style={cover ? { ["--cover"]: `url(${cover})` } : undefined}
      >
        <div className="article__hero-inner">
          <div className="article__breadcrumbs">
            <Link to="/publications">← Publications</Link>
          </div>
          <h1 className="article__title">{title}</h1>
          {date && <time className="article__date">{date}</time>}
        </div>
      </header>

      {/* Content */}
      <main className="article__container">
        <article className="article__content prose">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </article>
      </main>
    </div>
  );
};

export default articlePage;

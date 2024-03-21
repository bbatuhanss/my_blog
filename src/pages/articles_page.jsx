import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";
import {OrbitProgress} from "react-loading-indicators";


const articlePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [markdownContent, setMarkdownContent] = useState("");
  const { state } = useLocation();

  useEffect(() => {
    const fetchMarkdown = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/bbatuhanss/my_blog/main/src/articles/${state.article}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content");
        }
        const markdown = await response.text();
        setMarkdownContent(markdown);
      } catch (error) {
        console.error("Error fetching markdown:", error);
      } finally {
        const timeoutId = setTimeout(() => {
          setIsLoading(false);
        }, 800);
        // eslint-disable-next-line no-unsafe-finally
        return () => {
          clearTimeout(timeoutId);
        };
      }
    };

    fetchMarkdown();
  }, [state.article]);
  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            minHeight: "70vh",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <OrbitProgress  color="#2b93f5" size="medium" text="" textColor="" />
         
        </div>
      ) : (
        <div className="articles-card">
          <div className="articles-card-item">
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
          </div>
        </div>
      )}
    </>
  );
};

export default articlePage;

import React from "react";
import { useNavigate } from "react-router-dom";

const articleCard = ({ title, description, image, date, article }) => {
  const navigate = useNavigate();

  const open = () => {
    navigate("/articles", {
      state: { article, title, date, image },
    });
  };

  return (
    <article
      className="card-article"
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => (e.key === "Enter" ? open() : null)}
      aria-label={`Read: ${title}`}
    >
      <figure className="card-article__media">
        <img src={image} alt={title} loading="lazy" />
      </figure>

      <div className="card-article__body">
        <h3 className="card-article__title" title={title}>
          {title}
        </h3>
        <p className="card-article__desc">{description}</p>

        <div className="card-article__meta">
          <time className="card-article__date">{date}</time>
          <span className="card-article__cta">Read</span>
        </div>
      </div>
    </article>
  );
};

export default articleCard;

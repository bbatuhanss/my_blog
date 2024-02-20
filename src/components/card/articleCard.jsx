import React from "react";
import { useNavigate } from "react-router-dom";
const articleCard = ({ title, description, image, date, article }) => {
  const navigate = useNavigate();
  return (
    <div className="card-article">
      <img className="card-article-image" src={image} alt="Kart Resmi" />
      <div className="card-article-content">
        <div className="card-article-title">{title}</div>

        <p className="card-article-description">{description}</p>
        <div className="card-article-info">
          <p className="card-article-date">{date}</p>
          <p
            className="card-article-button"
            onClick={() =>
              navigate("/articles", {
                state: { 
                  article,
                },
              })
            }
          >
            Read More
          </p>
        </div>
      </div>
    </div>
  );
};

export default articleCard;

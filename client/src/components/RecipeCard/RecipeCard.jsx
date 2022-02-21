import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

export const RecipeCard = ({ id, title, image, diets, score }) => {
  return (
    <>
      <div className="card-custom">
        <img className="card-custom-header" alt="not found" src={image} />

        <h1 className="card-custom-title">{title}</h1>

        <div className="diets-container">
          {diets.map((diet) => {
            return (
              <div className="card-diet" key={diet}>
                {diet}
              </div>
            );
          })}
        </div>
        <div className="card-score">Score: {score}</div>
        <Link to={`/${id}`} className="card-custom-link">
          <div className="card-button">Read More</div>
        </Link>
      </div>
    </>
  );
};

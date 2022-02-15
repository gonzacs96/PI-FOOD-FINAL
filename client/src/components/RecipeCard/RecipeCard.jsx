import React from "react";
import { Link } from "react-router-dom";
import s from "./RecipeCard.module.css";

export const RecipeCard = ({ id, title, image, diets }) => {
  return (
    <>
      <div className={s.wrapper}>
        <img className={s.header} alt="not found" src={image} />

        <h1 className={s.name}>{title}</h1>

        <div>
          {diets.map((diet) => {
            return (
              <div className={s.info} key={diet}>
                {diet}
              </div>
            );
          })}
        </div>

        <Link to={`/${id}`} className={s.link}>
          <div className={s.button}>Read More</div>
        </Link>
      </div>
    </>
  );
};

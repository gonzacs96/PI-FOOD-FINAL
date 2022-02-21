import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import s from "./RecipeDetail.module.css";
import { useEffect } from "react";
import { setRecipeById } from "../../redux/actions";

export const RecipeDetail = () => {
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipeById);
  const { id } = useParams();

  useEffect(() => {
    dispatch(setRecipeById(id));
  }, [dispatch, id]);

  function summary() {
    return { __html: recipe.summary };
  }
  return (
    <>
      <Link to={"/home"} className={s.link}>
        <button className={s.button1}>Volver a home</button>
      </Link>
      {!recipe.title ? <h1 className={s.title}>Loading...</h1> : null}
      {recipe.title ? (
        <div>
          <h3 className={s.title}>{recipe.title}</h3>
          <div className={s.conteiner}>
            <div>
              <img src={recipe.image} className={s.image} alt="not found" />
              <div className={s.text}>Score: {recipe.score}</div>
              <div className={s.text}>Health Score: {recipe.healthScore}</div>
            </div>
            <div>
              <h3>Resumen: </h3>
              <p dangerouslySetInnerHTML={summary()}></p>
            </div>
            <div>
              <h4>Paso a paso: </h4>
              {
                <div>
                  {recipe.stepByStep.map((step, index) => {
                    return (
                      <div key={index}>
                        Step {index + 1}: {step}
                      </div>
                    );
                  })}
                </div>
              }
            </div>
            <div>
              <h4>Dietas: </h4>
              <ul>
                {recipe.diets.map((dieta, index) => {
                  return <li key={`${dieta}${index}`}>{dieta}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

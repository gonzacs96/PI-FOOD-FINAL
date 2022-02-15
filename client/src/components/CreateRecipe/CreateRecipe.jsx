import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewRecipe } from "../../redux/actions/index";
import { Link } from "react-router-dom";
import s from "./CreateRecipe.module.css";
import { useEffect } from "react";

export const CreateRecipe = () => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  const [checkboxs, setCheckboxs] = useState({});
  const [recipe, setRecipe] = useState({
    title: "",
    summary: "",
    healthScore: "",
    score: "",
    stepByStep: [],
    diets: [],
  });

  useEffect(() => {
    const putDietsOnRecipe = (stateCheckboxs) => {
      let result = Object.values(stateCheckboxs);
      result = result.filter((el) => el.checked === true);
      result = result.map((el) => parseInt(el.value));
      return result;
    };
    setRecipe((prevState) => {
      return {
        ...prevState,
        diets: putDietsOnRecipe(checkboxs),
      };
    });
  }, [checkboxs]);

  const handleChange = (e) => {
    if (e.target.name === "stepByStep") {
      setRecipe({
        ...recipe,
        stepByStep: [e.target.value],
      });
      return;
    }
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  const setValueCheckBox = (e) => {
    setCheckboxs({
      ...checkboxs,
      [e.target.name]: {
        checked: e.target.checked,
        value: e.target.value,
        element: e.target,
      },
    });
  };

  const cleanForm = () => {
    //limpio recipe
    setRecipe({
      title: "",
      summary: "",
      healthScore: "",
      score: "",
      stepByStep: "",
      diets: [],
    });
    //limpio los checkkboxs
    Object.values(checkboxs).map((elem) => (elem.element.checked = false));
    setCheckboxs({});
  };

  const validateName = (name) => {
    return /^[a-zA-Z\s]*$/.test(name);
  };

  const sendRecipe = (event) => {
    event.preventDefault();
    if (
      validateName(recipe.title) &&
      recipe.title !== "" &&
      recipe.summary !== "" &&
      recipe.summary !== " " &&
      recipe.score >= 0 &&
      recipe.score <= 100 &&
      recipe.healthScore >= 0 &&
      recipe.healthScore <= 100
    ) {
      dispatch(createNewRecipe(recipe));
      cleanForm();
    } else {
      alert("Revise los datos del formulario");
    }
  };

  return (
    <div className={s.formConteiner}>
      <Link to={"/home"}>
        <button className={s.button1}>Volver a Home</button>
      </Link>
      <div className={s.titlee}>Tu receta</div>
      <form onSubmit={sendRecipe}>
        <div className={s.inputsConteiner}>
          <input
            type="text"
            name="title"
            placeholder="Ingrese un nombre"
            onChange={handleChange}
            value={recipe.title}
            className={s.input}
          />
          {!validateName(recipe.title) ? (
            <span>Ingresa nombre valido</span>
          ) : null}
          <input
            type="text"
            name="summary"
            placeholder="Ingrese un resumen"
            onChange={handleChange}
            value={recipe.summary}
            className={s.input}
          />
          {recipe.summary === " " ? (
            <span>Ingresa un resumen valido</span>
          ) : null}
          <input
            type="number"
            name="score"
            placeholder="Ingrese una puntuacion"
            onChange={handleChange}
            value={recipe.score}
            className={s.input}
          />
          {recipe.score < 0 || recipe.score > 100 ? (
            <span>Ingresa un score de 1-100</span>
          ) : null}
          <input
            type="number"
            name="healthScore"
            placeholder="Ingrese nivel de comida sana"
            onChange={handleChange}
            value={recipe.healthScore}
            className={s.input}
          />
          {recipe.healthScore < 0 || recipe.healthScore > 100 ? (
            <span>Ingresa un nivel de 1-100</span>
          ) : null}
          <input
            type="text"
            name="stepByStep"
            placeholder="Ingrese un paso a paso"
            onChange={handleChange}
            value={recipe.stepByStep}
            className={s.input}
          />
        </div>
        <div>
          {diets.map((diet) => {
            return (
              <div key={diet.id} className={s.checkboxs}>
                <label htmlFor={diet.name}>{diet.name}</label>
                <input
                  type="checkbox"
                  name={diet.name}
                  value={diet.id}
                  onChange={setValueCheckBox}
                />
              </div>
            );
          })}
        </div>
        <div>
          <button type="submit" className={s.button1}>
            Enviar Receta
          </button>
        </div>
      </form>
    </div>
  );
};

import React from "react";
import { useDispatch } from "react-redux";
import { setSortedRecipes, setSortedScore } from "./../../redux/actions/index";

import "./SortBar.css";

export const SortBar = ({ changeDadState }) => {
  const dispatch = useDispatch();

  const handleSort = (e) => {
    dispatch(setSortedRecipes(e.target.value));
    changeDadState(e.target.value);
    e.target.selectedIndex = 0;
  };

  const handleSortScore = (e) => {
    dispatch(setSortedScore(e.target.value));
    changeDadState(e.target.value)
    e.target.selectedIndex = 0;
  };

  return (
    <>
    <div className="sortBar">
      <select
        name="order_alphabetically"
        defaultValue={"default"}
        onChange={handleSort}
        className="sortbar-select"
      >
        <option value={"default"} disabled>
          Ordernar por alfabeto
        </option>
        <option value="A-Z">Ordernar A-Z</option>
        <option value="Z-A">Ordernar Z-A</option>
      </select>

      <select
        name="order_score"
        defaultValue={"default"}
        onChange={handleSortScore}
        className="sortbar-select"
      >
        <option value={"default"} disabled>
          Ordernar por score
        </option>
        <option value="desc">Ordernar Descendente</option>
        <option value="asc">Ordenar Ascendente</option>
      </select>
    </div>
    </>
  );
};

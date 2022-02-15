import React from "react";
import { useDispatch } from "react-redux";
import { setSortedRecipes } from "./../../redux/actions/index";
import s from './SortBar.module.css'

export const SortBar = ({ changeDadState }) => {
  const dispatch = useDispatch();

  const handleSort = (e) => {
    dispatch(setSortedRecipes(e.target.value));
    changeDadState(e.target.value);
    e.target.selectedIndex = 0;
  };

  return (
    <>
      <select
        name="order_alphabetically"
        defaultValue={"default"}
        onChange={handleSort}
        className={s.button1}
      >
        <option value={"default"} disabled>
          Ordernar por alfabeto
        </option>
        <option value="A-Z">Ordernar A-Z</option>
        <option value="Z-A">Ordernar Z-A</option>
      </select>
    </>
  );
};

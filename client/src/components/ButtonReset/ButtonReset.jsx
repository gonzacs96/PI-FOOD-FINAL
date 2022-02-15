import React from "react";
import { useDispatch } from "react-redux";
import { resetRecipes } from "../../redux/actions";
import s from './ButtonReset.module.css'

export const ButtonReset = ({ changeDadState }) => {
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(resetRecipes());
    changeDadState();
  };

  return (
    <>
      <button onClick={handleReset} className={s.button1}>Reset</button>
    </>
  );
};

import React from "react";
import { useDispatch } from "react-redux";
import { resetRecipes } from "../../redux/actions";
import "./ButtonReset.css";

export const ButtonReset = ({ changeDadState }) => {
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(resetRecipes());
    changeDadState();
  };

  return (
    <>
      <button onClick={handleReset} className="buttonReset">
        Reset
      </button>
    </>
  );
};

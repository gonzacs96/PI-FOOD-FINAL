import React from "react";
import { Link } from "react-router-dom";
import s from "./LandingPage.module.css";

export const LandingPage = () => {
  return (
    <div className={s.conteiner}>
      <Link to={"/home"}>
        <button className={s.button}>Ingresar</button>
      </Link>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.divContainer}>
      <div>
        <Link to="/home">
            <h3 className={style.h3}>Home</h3>
            <div  className={style.pokeball}></div>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
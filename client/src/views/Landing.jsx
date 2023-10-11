import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.divContainer}>
      <div>
        <h1>Landing Page</h1>
        <Link to="/home">
            <h3>Vamos para Home</h3>
        </Link>
        <Link to="/about">
            <h3>Vamos para About</h3>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
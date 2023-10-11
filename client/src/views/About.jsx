import React from "react";
import { Link } from "react-router-dom";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.divContainer}>
        <h1>==== About Me Page ===</h1>
        <Link to="/home">
            <button>Volvemos para Home</button>
        </Link>
    </div>
  );
};

export default About;
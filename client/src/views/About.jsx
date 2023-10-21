import React from "react";
import { Link } from "react-router-dom";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.divContainer}>
      <div>
        <Link to="/home">
            <h3 >Home</h3>
            <div  className={style.pokeball}></div>
        </Link>
        <div className={style.divContainer}>
          <div className={style.divPhoto}>
            <img></img>
          </div>
          <div className={style.divContacts}>

          </div>
          <div className={style.divTech}>

          </div>
          <h3>aca van mis datos</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
import React from "react";
import { Link } from "react-router-dom";
import style from "./About.module.css";
import photo from "../img/AdrianVelazquez.JPG"

const About = () => {
  return (
    <div>
        <div className={style.divContainer}>
          <div>
            <Link to="/home">
                <h3 className={style.h3}>Home</h3>
                <div  className={style.pokeball}></div>
            </Link>
          </div>

          <div className={style.divData}>

            <h6>Adrian Velazquez</h6>
            <img src={photo} alt="Not found" width={"150px"}/>
            <h6>Email: </h6>
            <h6>a.velazquez.tf@gmail.com</h6>
            <h6>GitHub:</h6>
            <h6>https://github.com/fuegianboy</h6>
            <h6>LinkedIn</h6>
            <h6>https://www.linkedin.com/in/adrian-velazquez-182a242/</h6>
          </div>
        </div>
    </div>
  );
};

export default About;
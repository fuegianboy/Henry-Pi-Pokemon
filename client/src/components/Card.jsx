import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Card.module.css";

const  Card = ({pokemon}) => {
  const {id} = pokemon
  return (
    <div className={style.divContainer}>
      <NavLink to={`/detail/${id}`}    >
        <div className={style.divData}>
          <h6>{pokemon.name}</h6>
          <img src={pokemon.image} alt="Not found" width={"150px"}/>
          <h6>Types:{pokemon.types}</h6>
          <h6>Attack:{pokemon.attack}</h6>
          <h6>Life:{pokemon.life}</h6>
        </div>
      </NavLink>

    </div>
  );
};

export default Card;
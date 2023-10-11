import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

const  Card = ({pokemon}) => {
  const {id} = pokemon
  return (
    <div className={style.divContainer}>
      <Link to={`/detail/${id}`}    >
        <div>
          <h6>## Pokemon Card ##</h6>
          <h6>{pokemon.name}</h6>
          <h6>{pokemon.image}</h6>
          <h6>{pokemon.types}</h6>
          <h6>{pokemon.height}</h6>
          <h6>{pokemon.weight}</h6>
        </div>
      </Link>

    </div>
  );
};

export default Card;
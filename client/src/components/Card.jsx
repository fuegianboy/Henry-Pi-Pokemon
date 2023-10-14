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
          <img src={pokemon.image} alt="Not found" width={"100px"}/>
          <h6>Name:{pokemon.name}</h6>
          <h6>Types{pokemon.types}</h6>
          <h6>Attack:{pokemon.attack}</h6>
          <h6>HP:{pokemon.hp}</h6>
        </div>
      </Link>

    </div>
  );
};

export default Card;
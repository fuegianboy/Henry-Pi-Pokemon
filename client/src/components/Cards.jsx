import React from "react";
import Card from "./Card"
// import { Link } from "react-router-dom";
import style from "./Cards.module.css";

const  Cards = ({allPokemons}) => {
  return (
    <div className={style.divContainer}>
        <h1>Pokemon Cards Container Page</h1>
        <div className={style.divCards}>
          {allPokemons?.map((pokemon,index)=>(
            <Card key={index} pokemon={pokemon}/>
          ))}
        </div>
    </div>
  );
};

export default Cards;
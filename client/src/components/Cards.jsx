import React from "react";
import Card from "./Card"
import style from "./Cards.module.css";

const  Cards = ({allPokemons}) => {
  return (
    <div className={style.divContainer}>
        <h2>Get Pokemons !</h2>
        <div className={style.divCards}>
          {allPokemons.length ? (
            allPokemons?.map((pokemon,index)=>(
              <Card key={index} pokemon={pokemon}/>
            ))
          ) : (
            <div className={style.noPokemon}>
              <p>No Pokemon !</p>
            </div>
          )}
        </div>
    </div>
  )
}

export default Cards;
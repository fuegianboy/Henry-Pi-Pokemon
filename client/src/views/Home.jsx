import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";

import{getPokemons, orderByName} from "../redux/actions"

import Cards from "../components/Cards"
import Navbar from "../components/Navbar"

import style from "./Home.module.css";

const Home = () => {

  const dispatch = useDispatch()
  const allPokemons = useSelector(state=>state.pokemons)


  const handleSort = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
  };
  
  useEffect(()=>{
    dispatch(getPokemons())
  },[dispatch])



  return (

    <div className={style.divContainer}>
        <h1>==========Home Page=========</h1>
        <select onChange={(e) => handleSort(e)}>
          <option value="asc">A - Z</option>
          <option value="des">Z - A</option>
        </select>

        <Navbar />
        <Cards allPokemons={allPokemons}/>
    </div>
  );
};

export default Home;
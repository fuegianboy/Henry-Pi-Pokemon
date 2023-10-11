import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import{getPokemons} from "../redux/actions"

import Cards from "../components/Cards"
import Navbar from "../components/Navbar"

import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch()
  const allPokemons = useSelector(state=>state.allPokemons)
  
  useEffect(()=>{
    dispatch(getPokemons())
  },[dispatch])



  return (

    <div className={style.divContainer}>
        <h1>==========Home Page=========</h1>
        <Link to="/about">
            <button>Vamos para About Me</button>
        </Link>
        <Navbar />
        <Cards allPokemons={allPokemons}/>
    </div>
  );
};

export default Home;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";

import{getPokemons, getTypes, orderByName, orderByAttack, orderByHP, filterBySource, filterByType} from "../redux/actions"

import Cards from "../components/Cards"
import Navbar from "../components/Navbar"
import Pagination from "../components/Pagination";

import style from "./Home.module.css";

const Home = () => {

  const dispatch = useDispatch()
  const allPokemons = useSelector(state=>state.pokemons)
  const types = useSelector(state=>state.types)

  const handleFilterClear = (e) =>{
    e.preventDefault();
    dispatch(getPokemons())
  }


  const handleSortName = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
  };

  const handleSortAttack = (e) => {
    e.preventDefault();
    dispatch(orderByAttack(e.target.value));
  };

  const handleSortHP = (e) => {
    e.preventDefault();
    dispatch(orderByHP(e.target.value));
  };

  const handleFilterSource = (e) => {
    e.preventDefault();
    dispatch(filterBySource(e.target.value));
  };
  
  const handleFilterType = (e) => {
    e.preventDefault();
    dispatch(filterByType(e.target.value));
  };

  useEffect(()=>{
    dispatch(getPokemons())
    dispatch(getTypes())
  },[dispatch])

  //----------paginado----------------------------------
  const [dataQt, setDataQt] = useState(12)
  const [currentPage, setCurrentPage] = useState(1)
  
  const indexFin = currentPage * dataQt
  const indexIni = indexFin - dataQt
  
  const allPokPagin = allPokemons.slice(indexIni, indexFin)
  
  const nPages = Math.ceil(allPokemons.length / dataQt)
  
  //----------------------------------------------------
  return (
    
    <div className={style.divContainer}>
      <Navbar />
          <button className={style.buttonStyle} onClick={(e) => handleFilterClear(e)}>Reload</button>

        <select className={style.selectStyle} onChange={(e) => handleSortName(e)}>
          <option value="Name" selected>Name</option>
          <option value="asc">A - Z</option>
          <option value="des">Z - A</option>
        </select>

        <select className={style.selectStyle} onChange={(e) => handleSortAttack(e)}>
          <option value="attack">Attack</option>
          <option value="min">min</option>
          <option value="max">max</option>
        </select>

        <select className={style.selectStyle} onChange={(e) => handleSortHP(e)}>
          <option value="hp">HP</option>
          <option value="min">min</option>
          <option value="max">max</option>
        </select>

        <select className={style.selectStyle} onChange={(e) => handleFilterSource(e)}>
          <option value="Source">Source</option>
          <option value="API">API</option>
          <option value="DB">DB</option>
        </select>

        <select className={style.selectStyle} onChange={(e) => handleFilterType(e)}>
          <option value="Types">Types</option>
          {
            types.map((e, index)=>(<option key={index} value={e.name} >{e.name}</option>) )
          }
        </select>
        <Cards allPokemons={allPokPagin}/>
        <Pagination setCurrentPage={setCurrentPage} currentPage = {currentPage} nPages={nPages} />

    </div>
  );
};

export default Home;
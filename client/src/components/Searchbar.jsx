import React, { useState } from "react";
// import { Link } from "react-router-dom";
import style from "./Searchbar.module.css";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../redux/actions";

const Searchbar = () => {

  const dispatch = useDispatch()
  const [name, setName] = useState("")

  const handleInputChange =(e)=>{
    e.preventDefault()
    setName(e.target.value)
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    dispatch(getPokemonByName(name))
  }

  return (
    <div className={style.divContainer}>
        {/* <h1>===SearchBar===</h1> */}
        <input className={style.inputStyle} type="text" placeholder="ingrese nombre" onChange={handleInputChange}/>
        <button className={style.buttonStyle} type="submit" onClick={handleSubmit}>buscar</button>
    </div>
  );
};

export default Searchbar;
import React from "react";
// import { Link } from "react-router-dom";
import style from "./Searchbar.module.css";

const Searchbar = () => {
  return (
    <div className={style.divContainer}>
        <h1>===SearchBar===</h1>
        <input type="text" placeholder="ingrese nombre"/>
        <button>buscar</button>
    </div>
  );
};

export default Searchbar;
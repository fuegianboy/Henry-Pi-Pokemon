import React from "react";
// import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <div className={style.divContainer}>
        <h1>NavBar Page</h1>
        <Searchbar />
    </div>
  );
};

export default Navbar;
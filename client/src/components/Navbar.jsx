import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <div className={style.divContainer}>
        {/* <h1>NavBar Page</h1> */}
        
        <Link to="/home">
          <button>Home</button>
        </Link>

        <Link to="/create">
          <button>Crear Pokemon</button>
        </Link>
        <Link to="/about">
            <button>Vamos para About Me</button>
        </Link>
        <Searchbar />
        
    </div>
  );
};

export default Navbar;
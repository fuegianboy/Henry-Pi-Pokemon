import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <div className={style.divContainer}>
        {/* <h1>NavBar Page</h1> */}
        <div>
          <Link to="/home">
            <button className={style.buttonStyle}>Home</button>
          </Link>
        </div>
        <div>
          <Link to="/create">
            <button className={style.buttonStyle}>Create</button>
          </Link>
        </div>
        <div>
          <Link to="/about">
              <button className={style.buttonStyle}>About Me</button>
          </Link>
        </div>
        <Searchbar />
        
    </div>
  );
};

export default Navbar;
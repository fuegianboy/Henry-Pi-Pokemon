import React from "react";
import { Link } from "react-router-dom";
import style from "./Detail.module.css";

const  Detail = () => {
  return (
    <div className={style.divContainer}>
        <h1>Pokemon Detail Page</h1>
        <h4>Aca va el detalle de cada pokemon</h4>
        <h4>Nombre</h4>
        <h4>Imagen</h4>
        <h4>id</h4>
        <h4>attack</h4>
        <h4>speed</h4>
        <h4>grupo sanguineo</h4>
        <Link to="/home">
          <button>Volver a Home</button>
        </Link>
    </div>
  );
};

export default Detail;
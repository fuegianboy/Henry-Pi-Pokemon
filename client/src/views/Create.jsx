import React from "react";
// import { Link } from "react-router-dom";
import style from "../views/Create.module.css";

const Create = () => {
  return (
    <div className={style.divContainer}>
        <h1>Create Pokemon Page</h1>
        <h4>Aca van todos los campos a completa del nuevo pokemon creado</h4>
        <h4>Nombre</h4>
        <h4>Imagen</h4>
        <h4>id</h4>
        <h4>attack</h4>
        <h4>speed</h4>
        <h4>grupo sanguineo</h4>
    </div>
  );
};

export default Create;
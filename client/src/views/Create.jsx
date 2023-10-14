import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux"
import { Link } from "react-router-dom";
import style from "../views/Create.module.css";
import {getTypes, createPokemon} from "../redux/actions"


const Create = () => {

  const dispatch = useDispatch()

  const types = useSelector(state=>state.types)

  const [data, setData] = useState({
    name:"",
    image:"",
    life:8,
    attack:0,
    defense:0,
    speed:0,
    height:0,
    weight:0,
    types:[]
  })
  // const {error, setError} = useState({
  //   name:"debe entrar name",
  //   image:"",
  //   life:"",
  //   attack:"",
  //   defense:"",
  //   speed:"",
  //   height:"",
  //   weight:"",
  //   types:""
  // })

  // const validate =()=>{
  //   console.log(error)
  // }

  const handleChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data)
    // setError(
    //   validate({
      //     ...data,
      //     [e.target.name]: e.target.value,
      //   })
      // );
    }
    
    const handleSubmit = (data) => {
      dispatch(createPokemon(data))
    }

    const handleSelect = (e) => {
      e.preventDefault();
      setData({
        ...data,
        types: [...data.types, e.target.value],
      });
    }

    const [checkBox, setCheckBox] = useState([]);

    // const handleCheckboxChange = (event) => {
    //   const { value, checked } = event.target;
    //   if (checked) {
    //     setCheckBox([...checkBox, value]);
    //   } else {
    //     setCheckBox(checkBox.filter((opcion) => opcion !== value));
    //   }
    // };
    
    useEffect(()=>{
        dispatch(getTypes())
        console.log("pasoooooo pooooor useEfeeeeect")
        console.log(types)
        // eslint-disable-next-line
    },[dispatch])
  
  return (
    <div className={style.divContainer}>
        <h1>Create Pokemon Page</h1>
        <h4>Aca van todos los campos a completa del nuevo pokemon creado</h4>
        <form onSubmit={handleSubmit}>

          <label>Name:</label>
          <input 
            type="text"
            name='name'
            value={ data.name }
            onChange={handleChange}></input>
          <p></p>

          <label>Image:</label>
          <input
            type="text"
            name='image'
            value={ data.image }
            onChange={handleChange}></input>
          <p></p>


          <label>Life:</label>
          <input type="number"
            name='life'
            value={ data.life }
            onChange={handleChange}></input>
          <p></p>


          <label>Attack:</label>
          <input
            type="number"
            name='attack'
            value={ data.attack }
            onChange={handleChange}></input>
          <p></p>

          
          <label>Defense:</label>
          <input
            type="number"
            name='defense'
            value={ data.defense }
            onChange={handleChange}></input>
          <p></p>

          
          <label>Speed:</label>
          <input
            type="number"
            name='speed'
            value={ data.speed }
            onChange={handleChange}></input>
          <p></p>


          <label>Height:</label>
          <input
            type="number"
            name='height'
            value={ data.height }
            onChange={handleChange}></input>
          <p></p>


          <label>Weight:</label>
          <input
            type="number"
            name='weight'
            value={ data.weight }
            onChange={handleChange}></input>
          <p></p>

          <label>Types:</label>
          {/* <fieldset>
            <legend>Selecciona tus opciones:</legend>
            {types.map((opcion, index) => (
              <div key={index}>
                <label>
                <input
                  type="checkbox"
                  name="opciones"
                  value={opcion}
                  checked={checkBox.includes(opcion)}
                  onChange={handleCheckboxChange}
                />
                {opcion}
                </label>
              </div>
            ))}
          </fieldset> */}

          <div>
            <label>Tipo:</label>
            <select onChange={(e) => handleSelect(e)}>
              {types.map((t, index) => (
                <option key={index} value={t.name}>
                  {t.name}
                </option>
              ))}
            </select>
            <div>
              {/* {errors.types && (
                <span className={style.spanError} style={{ color: "#e74c3c" }}>
                  {errors.types}
                </span>
              )} */}
            </div>
          </div>


          {/* <select
                onChange={(e) => handleSelect(e)}
              >
                {types.map((t, index) => (
                  <option key={index} value={t.name}>
                    {t.name}
                  </option>
                ))}
              </select>
          <p></p>   */}

          <button onClick={handleSubmit}>Crear Pokemon</button>
        </form>
        <Link to ="/home">
          <button>Volver a Home</button>
        </Link>
    </div>
  );
};

export default Create;
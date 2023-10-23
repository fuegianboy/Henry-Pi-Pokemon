import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux"
import { Link } from "react-router-dom";
import style from "../views/Create.module.css";
import {getTypes, createPokemon} from "../redux/actions"
import validate from "../components/validate"

const Create = () => {

  const dispatch = useDispatch()
  const types = useSelector(state=>state.types)

  const disable = () => {
    let disabled = true;
    // for (let err in error) {
      if (  (Object.keys(error).length === 1 && Array.isArray(Object.values(error)[0]) && Object.values(error)[0].length === 0)
      ) disabled = false;
      // if (error[err] === "" || error[err].length === 0) disabled = false;
      else {
        disabled = true;
        // break;
      }
    // }
    return disabled;
  };


  // (Object.keys(error).length === 1 && Array.isArray(Object.values(error)[0]) && Object.values(error)[0].length === 0)
  
  
  
  const [data, setData] = useState({
    name:"",
    image:"",
    life:0,
    attack:0,
    defense:0,
    speed:0,
    height:0,
    weight:0,
    types:[]
  })
  const [error, setError] = useState({
    // name:"Se requiere un nombre",
    // image:"Ingresa una url valida",
    // life:"No puede ser menor a 0",
    // attack:"No puede ser menor a 0",
    // defense:"No puede ser menor a 0",
    // speed:"No puede ser menor a 0",
    // height:"No puede ser menor a 0",
    // weight:"No puede ser menor a 0",
    // types:"Debes elegir al menos 2 tipos"
  })

  const handleChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
          ...data,
          [e.target.name]: e.target.value,
        })
      );
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      setData({
          name: data.name,
          image: data.image,
          life:parseInt(data.life),
          attack:parseInt(data.attack),
          defense:parseInt(data.defense),
          speed:parseInt(data.speed),
          height:parseInt(data.height),
          weight:parseInt(data.weight),
          types,
      })
      dispatch(createPokemon(data))
      setData({
        name: "",
        image: "",
        life:0,
        attack:0,
        defense:0,
        speed:0,
        height:0,
        weight:0,
        types:[],
      })
    }
    
    const [selected, setSelected] = useState([]);
        
    const handleCheckboxChange = (event) => {
      const { value, checked } = event.target
      if (checked) {
        setSelected([...selected, value]);
        setData({
          ...data,
          types:[...selected, value],
        });
        setError(
          validate({
            ...data,
            types:[...selected, value],
          })
        )
      } else {
        setSelected(selected.filter((opt) => opt !== value));
        setData({
          ...data,
          types:selected.filter((opt) => opt !== value),
        });
        setError(
          validate({
            ...data,
            types:selected.filter((opt) => opt !== value),
          })
        )
      }
    }
    console.log(error)
    
    useEffect(()=>{
        dispatch(getTypes())
        // eslint-disable-next-line
    },[dispatch])
  return (
    <div className={style.divContainer}>

      <div>
        <Link to="/home">
          <h3 className={style.h3}>Home</h3>
          <div  className={style.pokeball}></div>
        </Link>
      </div>

      <div className={style.divCreate}>

        <h2>Create Pokemon</h2>

        <form onSubmit={handleSubmit}>

          <div className={style.divForm}>

              <div className={style.divSelect}>

                <label>Name: </label>
                <input 
                  type="text"
                  name='name'
                  value={ data.name }
                  onChange={handleChange}></input>
                <div className={style.error}>
                  <span>{error.name}</span>
                </div>

                <label>Image: </label>
                <input
                  type="text"
                  name='image'
                  value={ data.image }
                  onChange={handleChange}></input>
                <div className={style.error}>
                  <span>{error.image}</span>
                </div>

                <label>Life: </label>
                <input type="number"
                  name='life'
                  value={ data.life }
                  onChange={handleChange}></input>
                <div className={style.error}>
                  <span>{error.life}</span>
                </div>

                <label>Attack: </label>
                <input
                  type="number"
                  name='attack'
                  value={ data.attack }
                  onChange={handleChange}></input>
                <div className={style.error}>
                  <span>{error.attack}</span>
                </div>

                <label>Defense: </label>
                <input
                  type="number"
                  name='defense'
                  value={ data.defense }
                  onChange={handleChange}></input>
                <div className={style.error}>
                  <span>{error.defense}</span>
                </div>
                
                <label>Speed: </label>
                <input
                  type="number"
                  name='speed'
                  value={ data.speed }
                  onChange={handleChange}></input>
                <div className={style.error}>
                  <span>{error.speed}</span>
                </div>

                <label>Height: </label>
                <input
                  type="number"
                  name='height'
                  value={ data.height }
                  onChange={handleChange}></input>
                <div className={style.error}>
                  <span>{error.height}</span>
                </div>

                <label>Weight:  </label>
                <input
                  type="number"
                  name='weight'
                  value={ data.weight }
                  onChange={handleChange}></input>
                <div className={style.error}>
                  <span>{error.weight}</span>
                </div>
              </div>

              <div className={style.divTypesImage}>
                <div className={style.divImage}>
                  <h3>--Pokemon Image--</h3>
                </div>

                <div className={style.divTypesa}>
                  <label>Types:</label>
                  <div className={style.divTypes}>
                    {types.map((opcion, index) => (
                      <div key={index}>
                        <label>
                          <input
                            type="checkbox"
                            value={(index+1).toString()}
                            checked={selected.includes((index+1).toString())}
                            onChange={handleCheckboxChange}
                            />
                          {opcion.name}
                        </label>
                      </div>
                    ))}
                  </div>
                <div className={style.error}>
                  <span>{error.types}</span>
                </div>


                </div>
                <div className={style.divButton}>
                  <button className={style.buttonStyle} disabled={disable()} type="submit" onClick={handleSubmit}>Create</button>
                </div>
              </div>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Create;
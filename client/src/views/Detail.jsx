import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import style from "./Detail.module.css";
import { getDetail, clearDetail } from "../redux/actions";

const  Detail = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getDetail(id))
    return ()=>dispatch(clearDetail())
    // eslint-disable-next-line
  },[])

  const detail = useSelector(state =>state.detail)
  
  return (
    <div className={style.divContainer}>
      <div>
        <Link to="/home">
          <h3 className={style.h3}>Home</h3>
          <div  className={style.pokeball}></div>
        </Link>
      </div>
      <div className={style.divData}>
        <h2>{detail.name}   </h2>
        <img src={detail.image} alt="Not found" width={"300px"}/>
        <h6>ID: {detail.id}     </h6>
        <h6>Life: {detail.life}   </h6>
        <h6>Attack: {detail.attack }</h6>
        <h6>Defense: {detail.defense}</h6>
        <h6>Speed: {detail.speed}  </h6>
        <h6>Height: {detail.height} </h6>
        <h6>Weight: {detail.weight} </h6>
        <h6>Types: {detail.types}  </h6>
      </div>
    </div>
  );
};

export default Detail;
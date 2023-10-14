import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import style from "./Detail.module.css";
import { getDetail, clearDetail } from "../redux/actions";

const  Detail = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getDetail(id)) /// todo lo que pasa cuando se monta
    return ()=>dispatch(clearDetail()) /// todo lo que pasa cuando se desmonta
        // eslint-disable-next-line
  },[])/// todo lo que pasa cuando se actualiza lo que pongas aca

  const detail = useSelector(state =>state.detail)
  
  return (
    <div className={style.divContainer}>
      <h1>Pokemon Detail Page</h1>
      <div className={style.divDetail}>
        <img src={detail.image} alt="Not found" width={"200px"}/>
        <h4>ID:{detail.id}     </h4>
        <h4>Name:{detail.name}   </h4>
        <h4>Life:{detail.life}   </h4>
        <h4>Attack:{detail.attack }</h4>
        <h4>Defense:{detail.defense}</h4>
        <h4>Speed:{detail.speed}  </h4>
        <h4>Height:{detail.height} </h4>
        <h4>Weight:{detail.weight} </h4>
        <h4>Types:{detail.types}  </h4>
        <Link to="/home">
          <button>Volver a Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
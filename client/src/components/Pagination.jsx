import React from 'react'
import style from "./Pagination.module.css";

export default function Pagination({setCurrentPage, currentPage, nPages}) {
  const next = () =>{
    if(currentPage !== nPages){ setCurrentPage(currentPage + 1)}}

  const prev = () => {
    if(currentPage !== 1) {setCurrentPage(currentPage-1)}}

  return (
    <div className={style.divContainer}>
        <div>Pagination</div>
        <div>
            <button onClick={prev}>Prev</button>
            <h3>{currentPage} / {nPages}</h3>
            <button onClick={next}>Next</button>
        </div>
    </div>
  )
}

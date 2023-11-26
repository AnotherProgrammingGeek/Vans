// import { type } from "@testing-library/user-event/dist/type"
// import React, { useEffect, useState } from "react"
import {Link, useSearchParams,useLoaderData} from "react-router-dom"
import { getVans } from "../../api"

export function loader(){
  return getVans()
}

export default function Vans(){
  let [searchParams, setSearchParams] = useSearchParams()
  // let [error, setError] = useState(null)
  let typeFilter = searchParams.get("type")
  // console.log(searchParams.toString());
  let vans = useLoaderData()
  let displayedVans = typeFilter
  ? vans.filter(van => van.type === typeFilter)
  : vans
  let vanElements = displayedVans.map(van => (
      <div key = {van.id} className="van-tile">
        <Link to={van.id} state= {{search: searchParams.toString(), type: typeFilter}}>
          <img src={van.imageUrl} alt="van"/>
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
      </div>
  ))
  function handleFilterChange(key,value){
    setSearchParams(prevParams => {
      if(value == null){
        prevParams.delete(key)
      }else{
        prevParams.set(key,value)
      }
      return prevParams
    })
    }
 
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
      </div>
      <button className={`van-type simple ${(typeFilter === "simple")? "selected" : ""}`} onClick={()=> handleFilterChange("type", "simple")}>Simple</button>
      <button className={`van-type rugged ${(typeFilter === "rugged")? "selected" : ""}`} onClick={()=> handleFilterChange("type", "rugged")}>Rugged</button>
      <button className={`van-type luxury ${(typeFilter === "luxury")? "selected" : ""}`} onClick={()=> handleFilterChange("type", "luxury")}>Luxury</button>
      {
        typeFilter ?(
          <button className="van-type clear-filters" onClick={()=> handleFilterChange("type", null)}>Clear</button>
        ) : null
      }
      <div className="van-list">
        {vanElements}
      </div>
      

      {/* <Link to="?type=simple" className="van-type simple">Simple</Link>
      <Link to="?type=rugged" className="van-type rugged">Rugged</Link>
      <Link to="?type=luxury" className="van-type luxury">Luxury</Link>
      <Link to="." className="van-type clear-filters">Clear</Link> */}
    </div>
  )
};

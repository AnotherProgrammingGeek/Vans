import React, { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
export default function VanDetail(props){
  let params = useParams()
  let [van, setVan] = useState(null)
  useEffect(()=>{
  fetch(`/api/vans/${params.id}`)
    .then(res => res.json())
    .then(data => setVan(data.vans))
  },[params.id])
  console.log(van);
  return (
    <div className="van-detail-container">
      {
        van ?(
          <div className="van-detail">
            <img src={van.imageUrl} alt="van"/>
            <i className={`van-type ${van.type}selected`}>{van.type}</i>
            <h2>{van.name}</h2>
            <p>{van.description}</p>
            <p className="van-price"><span>${van.price} /day</span></p>
            <button className="link-button">Rent this van</button>
          </div>
        )
        :
        <h2>Loading...</h2>
      }
    </div>
  )
};

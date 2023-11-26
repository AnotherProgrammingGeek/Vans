import React, { useEffect, useState } from "react"
import {Link, useLocation, useLoaderData} from "react-router-dom"
import { getVans } from "../../api"

export function loader({params}){
  return getVans(params.id)
}

export default function VanDetail(){
  // let [van, setVan] = useState(null)
  let location = useLocation()
  let van  = useLoaderData()
  // console.log(location);
  // useEffect(()=>{
  // fetch(`/api/vans/${params.id}`)
  //   .then(res => res.json())
  //   .then(data => setVan(data.vans))
  // },[params.id])

  let type = location.state?.type || "all";
  return (
    <div className="van-detail-container">
      <Link
        to={
          (location.state)? `..?${location.state.search}`
          : ".."
        }
        relative="path"
        className="back-button"
        >&larr; <span>Back to {type} vans</span>
        </Link>
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

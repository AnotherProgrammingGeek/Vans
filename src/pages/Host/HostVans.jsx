// import React, { useEffect, useState } from "react";
import {Link, useLoaderData} from "react-router-dom"
import { getHostVans } from "../../api";

export function loader(){
  return getHostVans()
}

export default function HostVans(props){
  // let [hostVans, setHostVans] = useState([]);
  let hostVans = useLoaderData()
 
  let elementHostVan = hostVans.map(van => (
    <Link
      to={`${van.id}`}
      key={van.id}
      className="host-van-link-wrapper"
    >
      <div className="host-van-single" key={van.id}>
          <img src={van.imageUrl} alt={`${van.name}`} />
          <div className="host-van-info">
              <h3>{van.name}</h3>
              <p>${van.price}/day</p>
          </div>
      </div>
    </Link>

  ))
  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
              <section>
                  {elementHostVan}
              </section>
            </div>
    </section>
  )
};

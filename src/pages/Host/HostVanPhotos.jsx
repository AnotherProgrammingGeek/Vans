import React from "react"
import { useOutletContext } from "react-router-dom"
export default function HostVanPhotos(props){
    let {currentVan} = useOutletContext()
  return (
   <img src={currentVan.imageUrl} className="host-van-detail-image" alt="Van"/>
  )
};

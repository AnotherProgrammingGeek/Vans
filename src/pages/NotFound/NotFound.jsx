import React from "react"
import { Link } from "react-router-dom"

export default function NotFound(props){
    let btnStyle = {
        backgroundColor : "#000",
        color: "#fff",
        fontSize: "20px",
        lineHeight: "100px",
        padding: "10px",
        borderRadius: "10px",
        textDecoration: "none"
    }
  return (
    <div className="notfound">
      <h2>Sorry but this page does not exit</h2>

      <Link to= "/" style= {btnStyle}> Back to the home page</Link>

    </div>
  )
};
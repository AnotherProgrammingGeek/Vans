import React from "react";
import{ NavLink, Outlet, } from "react-router-dom"



export default function HostLayout(props){
    let navStyle = {
        fontWeight : "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
  return (
    <>
        <nav className="host-nav">
            <NavLink style={
                ({isActive}) => isActive ? navStyle : null
                }
                to= '.' end>Dashboard
                </NavLink>
            <NavLink style={
                ({isActive}) => isActive ? navStyle : null
                }
                to= '/host/vans'>Vans</NavLink>
            <NavLink style={
                ({isActive}) => isActive ? navStyle : null
                }
                to= '/host/income'>Income</NavLink>
        </nav>
        <Outlet/>
    </>
  )
};

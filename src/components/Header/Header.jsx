import React from "react"
import {Link, NavLink} from "react-router-dom"
export default function Header(props){
  return (
    <>
      <header>
      <Link className='site-logo' to="/">#MyLife</Link>
      <nav>
        <NavLink 
            className = {
                ({isActive})=> isActive ? "activeNav" : null 
            }
            to="/host">Host</NavLink>
        <NavLink
            className = {
                ({isActive})=> isActive ? "activeNav" : null 
            } to="/about">About</NavLink>
        <NavLink
            className = {
                ({isActive})=> isActive ? "activeNav" : null
            } to="/vans">Vans</NavLink>
        <NavLink
            className = {
                ({isActive})=> isActive ? "activeNav" : null
            } to="/login">Login</NavLink>
      </nav>
    </header>
    </>
  )
};

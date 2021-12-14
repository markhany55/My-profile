import React from 'react'
import { NavLink  } from 'react-router-dom'
import {Link} from 'react-scroll'
import './NavBar.scss'
const NavBar =()=>{

    return(
        <div className="navbar">
            <div className="container">
            
            <div className="text">
                <p>Ultra Profile</p>
            </div>
                <input className="navinput" type="checkbox" id="nav" ></input>
                <label className="general" for="nav"></label>
            <ul className="list">
                 <NavLink  to="/">Home</NavLink>
                 <Link to="work" smooth={true} >Work</Link>
                 <Link to="portfolio" smooth={true}>Portfolio</Link>
                 <Link to="profile" smooth={true}>Profile</Link>
                 <NavLink  to="/Contact">Contact</NavLink>
                 </ul>   
             
            </div>
        </div>
    )
}
export default NavBar
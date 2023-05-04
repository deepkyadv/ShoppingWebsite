import React from "react";
import { Link } from "react-router-dom";

const Menu = () =>{
    return(
        <>
        <div className="div">
        <Link exact to="/">   About us</Link>
        <Link exact to="/contact">Contact us</Link> 
        <Link exact to="/home">Home</Link>
        <Link exact to="/user">User</Link>
        <br/>
        </div>

         
        
        </>
    )
}

export default Menu;
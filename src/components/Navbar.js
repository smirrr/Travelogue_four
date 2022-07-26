import React from "react"
import logo from "../images/logo.png"

export default function  Navbar(){
    return(
    <nav className="navg">
        <img src={logo} className="logo"/>
        <p>my travel journal.</p>
    </nav>
    )
}
import React from "react";
import "../styles/header.css"

export default function Header(){
    return(
        <div className = "header">
        <img src = "/public/memoraLogo.png" className = "memoraLogo"></img>
        <div className = "navbar">
                    <img src="../../public/Logo (1).png" className='logo' />
                    <a>info@memora.events</a>
        </div>
        </div>
    )
}
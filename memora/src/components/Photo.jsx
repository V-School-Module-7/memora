import React from "react";
import "../styles/photo.css"

export default function Photo(){
    return(
        <div className = 'photoContainer'>
        <h1 className = "memorable">Memorable Authentic Togetherness</h1>
        <div className = "photo">
        <img src = "/Mary.png" className = "mary"></img>
        </div>
        </div>
    )
}
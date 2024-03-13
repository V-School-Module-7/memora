import React from "react";
import "../styles/experiences.css"

export default function Experiences(){
    return(
        <div className = "experiences">
            <div className = "textContainer">
        <h1 className = "experiencesTitle">Authentic Experiences, Lasting Impressions</h1>
        <h3 className = "experiencesText">Transforming corporate visions into memorable experiences. Let us bring your event to life, from concept to execution.</h3>
            <button className = "getInTouch">Get In Touch</button>
            <button className = "learnMore">Learn More</button>
            </div>
            <img src = 'image1.jpg' className = "experiencesImage"></img>
        </div>
    )
}
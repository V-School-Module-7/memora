import React from "react";
import { ReactDOM } from "react";
import Form from "./Form";

export default function SplashPage(){

    return (
        <>
        <img className = "bg" src = "/logo.svg"></img>
        {/* title */}
        <div className = "title">
        <h1>Welcome!</h1>
        <h2>To Memora Events</h2>
        </div>
        {/* main portion */}
        <div>
            <div className = "main">
                
<Form/>
<div className = "rightSide">
    <p className = "mainText">Our website may be temporarily under construction, but rest assured, our commitment to excellence in every event remains unwavering. Just as we meticulously design and refine our online presence, we approach every occasion with professionalism, style, and an unwavering attention to detail. Stay tuned for the unveiling of our refreshed website, where you'll discover the same dedication to crafting unforgettable experiences. Thank you for your patience and continued support!</p>
    <div className = "bottomText">
<p className = "sincerely">Sincerely,</p><p className = "signature">Team Memora</p>
    </div>
</div>
            </div>
{/* bottom line */}
<h4 className = "cta">Fill out the form above or contact us at:<a>info@memoraevents.com</a></h4>
        </div>
        </>
    )
}
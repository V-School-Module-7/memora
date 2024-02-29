import React from "react";
import { ReactDOM } from "react";
import Form from "./Form";

export default function SplashPage(){

    return (
        <>
        {/* title */}
        <div>
        <h1>Welcome!</h1>
        <h2>To Memora Event Planning</h2>
        </div>
        {/* main portion */}
        <div>
<Form/>
<div>
    <p>Our website may be temporarily under construction, but rest assured, our commitment to excellence in every event remains unwavering. Just as we meticulously design and refine our online presence, we approach every occasion with professionalism, style, and an unwavering attention to detail. Stay tuned for the unveiling of our refreshed website, where you'll discover the same dedication to crafting unforgettable experiences. Thank you for your patience and continued support!</p>
<p>Sincerely,<br/><span>Team Memora</span></p>
</div>
{/* bottom line */}
<h4>Fill out the form above or contact us at:<a>info@memoraevents.com</a></h4>
        </div>
        </>
    )
}
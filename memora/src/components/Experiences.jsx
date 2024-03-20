import React from "react";
import "../styles/experiences.css"
import { Link, animateScroll as scroll } from "react-scroll";

export default function Experiences(){
    return(
        <div className = "experiences">
            <div className = "textContainer">
        <h1 className = "experiencesTitle">Authentic Experiences, Lasting Impressions</h1>
        <img src = 'image1.jpg' className = "experiencesImageSmall"></img>
        <h3 className = "experiencesText">Transforming corporate visions into memorable experiences. Let us bring your event to life, from concept to execution.</h3>
        <Link
                            activeClass="active"
                            className="getInTouch"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={600}
                        >Get In Touch</Link>
            {/* <button className = "getInTouch">Get In Touch</button> */}
            <Link
                            activeClass="active"
                            className="learnMore"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={600}
                        >Learn More</Link>
            {/* <button className = "learnMore">Learn More</button> */}
            </div>
            <img src = 'image1.jpg' className = "experiencesImage"></img>
        </div>
    )
}
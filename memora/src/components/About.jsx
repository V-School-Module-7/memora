import React from "react";
import "../styles/about.css"

export default function About(){
    return(
        <div className = "about">
            <div className = "aboutContainer">
            <div className = "aboutElement">
            <img src = "../../public/champagne.svg"></img>
            <div className = "textContainer">
             <h2>Welcome to Memora Events</h2>
            <h3 className = "smallText">At Memora Events, every gathering becomes a cherished memory. Guided by a collective vision honed from over a decade of combined experience, our team is dedicated to delivering unparalleled experiences that leave lasting impressions.</h3>
            </div>
            </div>
            <div className = "aboutElement">
            <img src = "/iconoir_star.svg"></img>
            <div className = "textContainer">
             <h2>Our Specialization</h2>
            <h3 className = "smallText">We specialize in curating memorable events that resonate with authenticity and togetherness. From grand conventions to intimate team retreats, we pride ourselves on our ability to transform your vision into reality, ensuring each detail is infused with our core values: Memorable, Authentic, and Togetherness.</h3>
            </div>
            </div>
            <div className = "aboutElement">
            <img src = "/lets-icons_10.svg"></img>
            <div className = "textContainer">
             <h2>Experience Matters</h2>
            <h3 className = "smallText">With over 10 years of industry experience, our passion for creating extraordinary moments has only deepened. We understand the importance of every occasion, whether it’s celebrating a business milestone or fostering team cohesion. Our commitment to excellence is reflected in every event we undertake.</h3>
            </div>
            </div>
            <div className = "aboutElement">
            <img src = 'ic_outline-handshake.svg'></img>
            <div className = "textContainer">
             <h2>Our Mission</h2>
            <h3 className = "smallText">Driven by our mission to transcend the ordinary, we strive to craft events that not only meet but exceed your expectations. Rooted in authenticity and guided by the spirit of togetherness, we believe in bringing people closer through shared experiences.</h3>
            </div>
            </div>
            <div className = "aboutElement">
            <img src = "/mdi_head-love-outline.svg"></img>
            <div className = "textContainer">
             <h2>Unforgettable Memories</h2>
            <h3 className = "smallText">At Memora Events, we don't just plan events; we craft unforgettable memories. Join us on a journey where authentic experiences leave lasting impressions. Welcome to Memora Events, where every moment matters.</h3>
            </div>
            </div>
            </div>
        </div>
    )
}
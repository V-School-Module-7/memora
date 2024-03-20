import React from "react";
import Form from "./Form";
import "../styles/contact.css"

export default function Contact(){
    return(
        <div className="contact-body">

            <img src="../../public/logo.svg" className='logo' />
            
            <div className="contact-txt">
                <h2>Get in touch</h2>
                <h3>We look forward to working with you.</h3>
             </div>
            

            <div className = "contact">
            <img src="../../public/contactform.png" className="contact-image" />
            <Form/>
            </div>
        </div>
    )
}
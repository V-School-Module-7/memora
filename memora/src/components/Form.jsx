import React from "react";
import { ReactDOM, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css"

export default function Form(){


    const initInputs = {
        name : "",
        street : "",
        location : "",
        zip : "",
        tel : "",
        email : "",
        details : ""
      }
  
  const [inputs, setInputs] = useState(initInputs)
  const isDisabled = !(inputs.name && inputs.email);
      const [emailSent, setEmailSent] = useState(false)
      const [errorMsg, setErrorMsg] = useState(false)

  function handleChange(event){
    const {name, value} = event.target
    setInputs(prevFormData => {
        return {
            ...prevFormData,
            [name] : value
        }
    })
}

function sendEmail(e){
    e.preventDefault()
    console.log(inputs)
    emailjs
    .sendForm(
        // service ID
        "service_jcw02vr",
//template id
        "template_484tr6i",
        e.target,
        {
            publicKey : "3LONeouWv0AZKZsK9"
        })
        .then(
            (res) => {
              setEmailSent(true);
            })
            .catch(
            (error) => {
              console.log('FAILED...', error.text);
              setErrorMsg(true)
            },
          );
    setInputs(initInputs)
}

    return(
        <>
        {emailSent? 
    
    <h3 className = "submitMsg">Thank you for submitting your information, someone will be in contact with you soon!</h3>

    
    :

        <form className = "form" onSubmit = {sendEmail}>
        <input 
            type = "text"
            name = "name"
            value = {inputs.name}
            id = "name"
            className="input"
            placeholder = "Full Name"
            required = {true}
            onChange = {handleChange}
            />
            <input 
            type = "text"
            name = "street"
            value = {inputs.street}
            id = "street"
            className="input"
            placeholder="Street"
            onChange={handleChange}
            />
            <div className="location-container">
            <input 
            type = "text"
            name = "location"
            value = {inputs.location}
            id = "location"
            className="input"
            placeholder = "City, State"
            onChange = {handleChange}
            />
            <input 
            type = "number"
            name = "zip"
            value = {inputs.zip}
            id = "zip"
            className="input"
            placeholder = "Zip Code"
            onChange={handleChange}
            />
            </div>
            <input 
            type = "tel"
            name = "tel"
            value = {inputs.tel}
            id = "tel"
            className="input"
            placeholder = "Phone"
            onChange = {handleChange}
            />
            <input 
            type = "email"
            name = "email"
            value = {inputs.email}
            id = "email"
            className="input"
            placeholder = "Email"
            required = {true}
            onChange = {handleChange}
            />
            <textarea 
            type = "textarea"
            name = "details"
            value = {inputs.details}
            id = "details"
            className="input"
            placeholder = "What would you like to discuss?"
            onChange = {handleChange}
            />
            <button type="submit" className="btn">
                <img src="/Letter.png" className='letter' />
                SEND FORM
            </button>
            {errorMsg && <h3 className = "errorMsg" >Something went wrong... Kindly email your information and someone will get back to you</h3>}
        </form>
    }
        </>
    )
}
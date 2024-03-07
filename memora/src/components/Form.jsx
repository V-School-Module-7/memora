import React from "react";
import { ReactDOM, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form(){


    const initInputs = {
        name : "",
        email : "",
        tel : "",
        location : "",
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
            placeholder = "John Doe"
            required = {true}
            onChange = {handleChange}
            />
            <input 
            type = "email"
            name = "email"
            value = {inputs.email}
            id = "email"
            placeholder = "johndoe@example.com"
            required = {true}
            onChange = {handleChange}
            />
            <input 
            type = "tel"
            name = "tel"
            value = {inputs.tel}
            id = "tel"
            placeholder = "555-555-5555"
            onChange = {handleChange}
            />
            <input 
            type = "text"
            name = "location"
            value = {inputs.location}
            id = "location"
            placeholder = "City, State"
            onChange = {handleChange}
            />
            <textarea 
            type = "textarea"
            name = "details"
            value = {inputs.details}
            id = "details"
            placeholder = "Anything else you want us to know?"
            onChange = {handleChange}
            />
            <button type="submit" className="btn" >Submit</button>
            {errorMsg && <h3 className = "errorMsg" >Something went wrong... Kindly email your information and someone will get back to you</h3>}
        </form>
    }
        </>
    )
}
import React from "react";
import { ReactDOM, useState } from "react";

//look into emailjs

export default function Form(){


    const initInputs = {
        name : "",
        email : "",
        tel : "",
        location : "",
        details : ""
      }
  
  const [inputs, setInputs] = useState(initInputs)

  function handleChange(event){
    const {name, value} = event.target
    setInputs(prevFormData => {
        return {
            ...prevFormData,
            [name] : value
        }
    })
console.log(inputs)
}

    return(
        <>
        <form>
        <input 
            type = "text"
            name = "name"
            value = {inputs.name}
            id = "name"
            placeholder = "John Doe"
            onChange = {handleChange}
            />
            <input 
            type = "email"
            name = "email"
            value = {inputs.email}
            id = "email"
            placeholder = "johndoe@example.com"
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
            <button>Submit</button>
        </form>
        </>
    )
}
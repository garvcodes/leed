
"use client";
import React from "react";
import {useState} from "react";
const FormComponent = ({title, onSubmit, button}) => { 
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission from reloading the page
        onSubmit(inputValue); // Pass the input value up to the parent component
      };


    return (
    <form className="form-component-container" onSubmit={handleSubmit}>
        
        <input
        className="formfield-box"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
        {button &&(
        <button className="approveButton" type="submit">
                     
                      <div className="buttonContent">
                          <div className="body-4-fwm">
                              Submit
                          </div>
                      </div>
                  </button>
       )}
    </form>
    )
}

export default FormComponent;
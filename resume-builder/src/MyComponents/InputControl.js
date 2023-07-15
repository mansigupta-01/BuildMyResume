import React from 'react';
import './InputControl.css';

function InputControl({label,errorMessage, ...props}){
    return(
        <div className="container-sm">
            {label && <label>{label}</label>}
            <input type="text" {...props} />
            <span>{errorMessage}</span>
        </div>
    );
}
export default InputControl;
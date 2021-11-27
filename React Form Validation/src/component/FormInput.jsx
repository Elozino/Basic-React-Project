import React from 'react'
import { useState } from 'react';
import './Form.css'

function FormInput(props) {
    const { name, type, label, placeholder, onChange, errorMsg, pattern } = props;

    const [focus, setFocused] = useState(false)
    const handleFocus = (e) => {
        setFocused(true)
    }
    return (
        <div>
            <label>{label}</label>
            <input
                name={name} type={type} placeholder={placeholder}
                onChange={onChange}
                onBlur={handleFocus}
                focused={focus.toString()}
                onFocus={() => {
                    name === "confiredPassword" && setFocused(true)
                }}
            pattern={pattern} 
            required
            />
            <span>{errorMsg}</span>
        </div>
    )
}

export default FormInput




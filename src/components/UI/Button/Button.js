import React from "react";
import './Button.css';

const Button = props => (


    <button
        onClick={props.clicked}
        className={props.type}
    >
        {props.label}
    </button>
);


export default Button;

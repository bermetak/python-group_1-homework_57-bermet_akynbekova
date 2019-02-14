import React from "react";
import './Button.css';

function Button(props) {

        return <div>{props.buttons.map((button, id) =>
        <button
            type='button'
            className={'btn btn-' + button.type}
            onClick={button.clicked}
            key={id}>
            {button.label}
        </button>
        )}
        </div>

};


export default Button;

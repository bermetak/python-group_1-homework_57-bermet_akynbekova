import React from 'react';


function OrderButton(props) {
    return <button
        disabled={props.disabled}
        onClick={props.click}
    >{props.text}</button>
}


export default OrderButton;
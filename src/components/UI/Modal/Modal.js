import React from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";


const Modal = props => (
    <div>
        <Backdrop show={props.show} cancel={props.cancel}/>

        <div className={"Modal" + (props.show ? ' Modal-show' : '')}>
            <h3>{props.title}</h3>
            <hr/>
            <p>{props.modaltext}</p>

        </div>
    </div>
);


export default Modal;

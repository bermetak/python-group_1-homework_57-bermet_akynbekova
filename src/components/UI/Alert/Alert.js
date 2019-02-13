import React from 'react';
import './Alert.css'



const Alert = props => (
        <div className={"Alert" + (props.show ? ' Alert-show' : '') + props.type}
             onClick={props.clickDismissable ? props.dismiss : null}>


            {props.dismiss === undefined ? null :

            <button onClick={props.dismiss}
                    style={{display: props.clickDismissable ? ' none' : ' inline-block'}}
                    className={'close'}
            >x</button>}

            <p>{props.alerttext}</p>
        </div>

);


export default Alert;

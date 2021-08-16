import React from 'react';
import "./index.css";

function Card(props) {

    const{id,count,value}=props.obj;

    return (
        <div className="color">
            <p className="color-count">{count}</p>
            <button className="color-button" 
            style={{background:value}} 
            onClick={()=>props.clickHandler(id)}>Click Me
            </button>
            
        </div>
    )
}

export default Card;

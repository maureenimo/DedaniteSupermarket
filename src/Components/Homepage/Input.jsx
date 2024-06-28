import React from 'react';
import './Input.css';

export default function Input (props) {
  return (
    <div>
        
        <div className= "card">
            <img className="product--image"
            src={props.url} alt=""/>
            <h3>{props.name}</h3>
            {props.weight && <p>{props.weight}</p>}
            {props.price && <p className="price">Price: {props.price}</p>}
            <p>{props.description}</p>
            
            
            </div>

        </div>
)
}
export { Input };

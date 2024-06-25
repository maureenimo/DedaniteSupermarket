import React from 'react'
import { Link } from 'react-router-dom'

export default function Product (props) {
  return (
    <div>
        
        <div className= "card">
            <img className="product--image"
            src={props.url} alt=""/>
            
            <Link to={props.path}>
            <h3>{props.name}</h3>

            </Link>
            
            </div>

        </div>
  )
}
export { Product };

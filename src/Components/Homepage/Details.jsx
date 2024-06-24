import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Details.css"

export default function Details(props) {
  const [showNotification, setNotification] = useState(false)

  const handleAddToCart = () => {
    const newProduct = {
      id: props.id,
      name: props.name,
      price: props.price,
      imageurl: props.imageurl
    }
    props.handleAddToCart(newProduct)
    setNotification(true)
    setTimeout(() => {
      setNotification(false)
    }, 500)
  }

  return (
    <div>
      <section className="vegetables-fruits">
        <div className="vegetables-fruits-frame"></div>
      </section>
      <div className="card">
        <Link to={`/product-details/${props.id}`}>
          <img className="product--image" src={props.imageurl} alt="" />
          <h4>{props.name}</h4>
          {props.weight && <p>Weight: {props.weight}</p>}
          {props.price && <p className="price">Price: {props.price}</p>}
        </Link>
        <Button className="cta" onClick={handleAddToCart}>
          ADD
        </Button>
        
        <div className="frame-child9" />
        <div className="offer">
          <b className="off">20% OFF</b>
        </div>
        {showNotification ? (
          <div className='notification-center'>
            <div className='notification'>
              <p>Added to cart</p>
            </div>
          </div>
        ) : (null)}
      </div>
    </div>
  );
}

export { Details };
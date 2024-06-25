// MyOrder.js
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Cart.css";
function Cart({customer, cart, setCart, removeFromCart, totalAmount}) {


  const navigate = useNavigate()

  const handlePay = () => {
    navigate('/cart/payment')
  }

  const handleCheckUser = () => {
    navigate('/login')
  }
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className='selected-cart'>
      <h1>Selected Items:</h1>
      {cart.length == 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className='table-container'>
         
            <table className='table'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td> <img src={item.product.imageurl} className='table-img'/></td>
                    <td>{item.product.name}</td>
                    <td>{item.product.price}</td>
                    <td className='quantity'>

                      <button className="add" onClick={() => {
                        setCart((prevdata) => {
                          const updatedQuantity = prevdata.map(
                            (prevItem) => prevItem.product.id == item.product.id ? {
                              ...prevItem, quantity: item.quantity + 1
                            } : prevItem
                          )
                          return updatedQuantity
                        })
                      }}>
                        +
                      </button>

                      
                      {item.quantity}

                      <button onClick={() => {
                        setCart((prevdata) => {
                          const updatedQuantity = prevdata.map(
                            (prevItem) => prevItem.product.id == item.product.id ? {
                              ...prevItem, quantity:Math.max(item.quantity - 1, 0)
                            } : prevItem
                          )
                          return updatedQuantity
                        })
                      }}>
                        -
                      </button>
                    </td>
                    <td>
                      <button className="remove-item" onClick={() => removeFromCart(item.product)}>
                        Remove Item
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tbody>
                <tr className='tr-amount'>
                  <td className='amount'></td>
                  <td className='amount'></td>
                  <td className='amount'></td>
                  <td className='amount'></td>
                  <td className='amount'></td>
                  <td>
                    Total: {totalAmount().toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
   
        </div>
      )}
  
      <div className='order-summary'>
        <button className="check-out" onClick={customer ? (handlePay) : (handleCheckUser)}>
          Check Out
        </button>
        <button className="clear-cart" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  )
}

export default Cart;

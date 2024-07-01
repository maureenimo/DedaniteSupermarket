import React, { useState } from 'react';
import './Mpesa.css';
import { useNavigate } from 'react-router-dom';

const Mpesa = ({ totalAmount }) => {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState(totalAmount);
  const [name, setName] = useState('');
  const [county, setCounty] = useState('');
  const [street, setStreet] = useState('');
  const [status, setStatus] = useState(true);
  const [additionalSpecifications, setAdditionalSpecifications] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState(null);

  const navigate = useNavigate();

  const handleNumber = (event) => setPhone(event.target.value);
  const handleAmount = (event) => setAmount(event.target.value);
  const handleName = (event) => setName(event.target.value);
  const handleCounty = (event) => setCounty(event.target.value);
  const handleStreet = (event) => setStreet(event.target.value);
  const handleAdditionalSpecifications = (event) => setAdditionalSpecifications(event.target.value);

  const submitForm = (event) => {
    event.preventDefault();
    setLoading(true);
  
    fetch('https://dedanite-online.onrender.com/make_payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone, amount }),
    })
      .then((response) => {
        setLoading(false);
        if (response.ok) {
          setNotification('Payment made');
          setTimeout(() => {
            navigate('/myorders');
          }, 1000);
        } else {
          throw new Error('Payment failed');
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
        setTimeout(() => {
          setError(null);
        }, 1000);
      });
  };
  
  return (
    <div className='mpesaPage'>
      <div className='mpesacard'>
        <h1 className="shipping-header">SHIPPING DETAILS</h1>
        <form className="shippingForm" onSubmit={submitForm}>
          <label>
            Name:
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={handleName}
            />
          </label>
          <label>
            County:
            <input
              type="text"
              placeholder="Enter county"
              name="county"
              value={county}
              onChange={handleCounty}
            />
          </label>
          <label>
            Street:
            <input
              type="text"
              placeholder="Enter street"
              name="street"
              value={street}
              onChange={handleStreet}
            />
          </label>
  
          <h1 className='header'>PAYMENT INFORMATION</h1>
  
          <input
            type='number'
            placeholder='Enter number'
            name='phone'
            value={phone}
            onChange={handleNumber}
          />
          <input
            type='number'
            placeholder='Enter amount'
            name='amount'
            value={amount.toFixed(2)}
            onChange={handleAmount}
          />
          <button type='submit'>{loading ? 'Processing...' : 'Pay Now'}</button>
        </form>
      </div>
    </div>
  );
  

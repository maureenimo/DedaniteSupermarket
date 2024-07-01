import React, { useEffect, useState } from 'react'
import "./MyOrders.css"

function MyOrders() {

    const [record, setRecord] = useState([])
    const user_id = sessionStorage.getItem('user_id');

    useEffect(() => {
      if (!user_id) {
        console.log('User ID not found in the session.');
        return;
      }

        fetch(`https://dedanite-online.onrender.com/user_orders/${user_id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => response.json())
        .then((data) => {
            setRecord(data)
            console.log(data)
        })
        .catch((error) => {
          console.log('Error fetching orders:', error);
        });
    }, [user_id])
  return (
      <div className='history_container'>
        <h2>My Orders</h2>
        <div className='history_table'>
          <table className='table'>
            <thead>
              <th>Order Id</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Payment</th>
            </thead>
            <tbody>
              {record.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.total_amount.toFixed(2)}</td>
                  <td>{order.order_date}</td>
                  <td>{order.status == 0 ?('pending'):('paid')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default MyOrders
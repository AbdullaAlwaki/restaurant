import React, { useContext } from 'react'
import { dataContext } from '../Context/context'

function Order_details(props) {

const {state, dispatch} = useContext(dataContext);

console.log(state);
  return (
    <div>
      <div className="order-details">
        <h2>Order Details</h2>
        <div className="profile-details">
            <h2>Customer:</h2>
             <h3>{state.customer.firstName} {state.customer.lastName}</h3>
             <h3>{state.customer.address}</h3>
             <h3>{state.customer.email}</h3>
             <h3>{state.customer.phone}</h3>
        </div>
        <div className="order-dish">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {state.cart.map(()=>{
                return   <tr>
                <td>{state.cart.name}</td>
                <td>{state.cart.qty}</td>
                <td>{state.cart.price}</td>
              </tr>
              }
             
              )}
              
            </tbody>
          </table>
          <div className="total-final">{state.cart.total}</div>
        </div>
      </div>



<div className='pay-to'>
      <button className='menu-back'onClick={()=>{props.setPage(2)}}>Previous</button>
      <button className='menu-back' onClick={()=>{props.setPage(4)}}>Next</button>
      </div>
    </div>
  )
}

export default Order_details
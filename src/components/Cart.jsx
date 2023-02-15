import React, { useContext } from 'react';
import { FaMinusCircle, FaPlusCircle, FaTrashAlt } from 'react-icons/fa';
import '../styles/Cart.css';
import { dataContext } from './Context/context'
// import {useLocation}from "react-router-dom"



function Cart() {
const {state, dispatch} = useContext(dataContext);
function itemDecrement(item){
dispatch({type: 'DECREMENT', payload: item._id})
}

function itemIncrement(item){
  const action = {type: 'INCREMENT', payload: item._id}
  dispatch(action)
  }
  function getTotal (products) {
    return products.reduce((a,b)=>a+b.price*b.qty, 0)
 }
const cartArray = state.cart.map((item,index)=>(
          <tr key='index'>
            <th  scope='row'>{index+1}</th>
          <td className='order-img'><img className='dish-img' src={item.images} alt='orderedDish'/></td>
          <td>{item.name}</td>
          <td>
            <span>
              <FaMinusCircle onClick={()=>itemDecrement(item)}/>
            </span>
            {item.qty}
            <span>
              <FaPlusCircle onClick={()=>itemIncrement(item)}/>
            </span>
          </td>
          <td>{item.price}€</td>
          <td>{item.qty*item.price}€</td>
          <td>
            <FaTrashAlt onClick={()=>dispatch({type:'REMOVEFROMCART', payload: item._id})}/>
          </td>
          </tr>
        ))
console.log(cartArray);
return(
  <div className='order-container'>
        <h2 className='order-heading'>My Order</h2>
     <table>
      <thead className='table-head'>
        <tr className='table-heading'>
          <th scope='col'>#</th>
          <th scope='col'>Image</th>
          <th scope='col'>Dish Name</th>
          <th scope='col'>QTY</th>
          <th scope='col'>Price</th>
          <th scope='col'>Total</th>
          <th scope='col'></th>
        </tr>
      </thead>
      <tbody className='table-body'>
        {cartArray}
        
      </tbody>
     
     </table>
     
      <div className="cart-total">Total: {getTotal(state.cart).toFixed(2)}</div>

     <div className='pay-to'>
      <button className='menu-back'>Back to Menu</button>
      <button className='menu-back'>Go to Payment</button>
      </div>
  </div>
)
}

export default Cart
import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { dataContext } from '../Context/context'

function Bill(){
      
const {state, dispatch} = useContext(dataContext);
const navigate = useNavigate();
function getTotal (products) {
  return products.reduce((a,b)=>a+b.price*b.qty, 0)
}



function cartEmpty(){

dispatch({type:"EMPTYCART"})
}
function goToMenu (){
    const path = `/menu`;
    navigate(path);
    cartEmpty()
}

  return (
   <div className="bill-details">
    <div className="order-details ">
        <h2>Order Details</h2>
        <div className="profile-details">
            <h3>Customer Details:</h3>
             <p>{state.customer.firstName} {state.customer.lastName}</p>
             <p>{state.customer.address}</p>
             <p>{state.customer.email}</p>
             <p>{state.customer.phone}</p>
             <p>{state.customer.StreetName}</p>
             <p>{state.customer.House}</p>
             <p>{state.customer.city}</p>
             <p>{state.customer.zipCode}</p>
             <p>{state.customer.country}</p>

        </div>

        <div className="payment-details">
          <h3>Payment Mode:</h3>
          <p>{state.payment}</p>
        </div>
        <div className="shipping-details">
          <h3>Shipping Mode:</h3>
          <p>{state.shipping}</p>
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
            <tbody className='detail-bill'>
              {state.cart.map((item, index)=>{
                return  (<tr key={index}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.qty*item.price}€</td>
              </tr>) 
              }
             
              )}
              
            </tbody>
          </table>
          <div className="total-final">
            <h3>Total: </h3>
          <p >{getTotal(state.cart)} €</p>
          </div>
          
        </div>
      </div>
      <div className="last-button">
        <button className='menu-back'onClick={goToMenu}>Back to Menu</button>
      </div>
      
   </div>
      
    )
}

export default Bill
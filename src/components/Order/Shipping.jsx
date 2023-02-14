import React, { useState } from 'react';
import payPal from '../../images/payPal.jpg';
import visa from '../../images/visa.png';
import liferando from '../../images/liferando.png';
import bar from '../../images/bar.jpg';
import pickUp from '../../images/pickUp.png';
function Shipping(props) {
    const [warning, setWarning] = useState(false);

    const submitOrderShipPay = (e) => {
        e.preventDefault();
        if (e.target.checkValidity()) {
          setWarning(false);
          props.setPage(3);
        } else {
          setWarning(true);
        }
      };
  return (
    <div className='shipping-info' onSubmit={submitOrderShipPay}>

        <div className="shipment">
             <h2>Shipping</h2>
        <label>
            <input
            required
            type="checkbox"
            name="shipping"
            value="liferando"
            />
         <img className='payment-img' src={liferando} alt="liferando" />
        </label>
        <label>
            <input
            required
            type="checkbox"
            name="shipping"
            value="pickUp"
            />
         <img className='payment-img'  src={pickUp} alt="pickUp" />
        </label>
        </div>
        <div className="payment">
             <h2>Payment</h2>
        <label>
            <input
            required
            type="checkbox"
            name="payment"
            value="Paypal"
            />
         <img className='payment-img'  src={payPal} alt="payPal"/>
        </label>
        <label>
            <input
            required
            type="checkbox"
            name="payment"
            value="Bar-bezahlen"
            />
        <img className='payment-img'  src={bar} alt="bar"/>
        </label>
        <label>
            <input
            required
            type="checkbox"
            name="payment"
            value="Visa"
            />
        <img className='payment-img'  src={visa} alt="visa"/>
        </label>
        </div>
        {warning?(
        <h2>Please choose shipping and payment mode.</h2>
      ): null}
        <div className='pay-to'>
      <button className='menu-back'onClick={()=>{props.setPage(1)}}>Previous</button>
      <button className='menu-back' onClick={()=>{props.setPage(0)}}>Next</button>
      </div>

      
    </div>
  )
}

export default Shipping
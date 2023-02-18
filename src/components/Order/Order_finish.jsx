import React from 'react';
import { useNavigate } from 'react-router-dom';

function Order_finish(props) {
    const navigate = useNavigate();
    function goToMenu (){
        const path = `/menu`;
        navigate(path);
    }
  return (
    <div>
        
        <p className='order-done'>Thank you for your order!</p>



<div className='pay-to'>
      <button className='menu-back'onClick={goToMenu}>Back to Menu</button>
      <button className='menu-back' onClick={()=>{props.setPage(3)}}>Order Details</button>
      </div>
    </div>
  )
}

export default Order_finish
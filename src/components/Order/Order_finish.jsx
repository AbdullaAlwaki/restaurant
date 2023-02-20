import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataContext } from '../Context/context';

function Order_finish() {
  const{ dispatch} = useContext(dataContext);
    const navigate = useNavigate();
    
    function cartEmpty(){

    dispatch({type:"EMPTYCART"})
  }
    function goToMenu (){
        const path = `/menu`;
        navigate(path);
        cartEmpty()
    }
    function goToBill (){
      const newPath = `/bill`;
      navigate(newPath);
  }

  


  return (
    <div>
        
        <p className='order-done'>Thank you for your order!</p>
        


<div className='pay-to'>
      <button className='menu-back'onClick={goToMenu}>Back to Menu</button>
      <button className='menu-back' onClick={goToBill}>Order Details</button>
      </div>
    </div>
  )
}

export default Order_finish
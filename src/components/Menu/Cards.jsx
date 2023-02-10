import React, { useContext } from 'react';
import '../../styles/Menu.css';
import { dataContext } from '../Context/context';

function Cards({items}) {

  const {state, dispatch} = useContext(dataContext);

  function addToCart(item){
    const itemIndex = state.cart.filter((el)=> el._id === item._id )
    // console.log(itemIndex);
   
    dispatch({type: 'ADDTOCART', payload:item})
    if(itemIndex < -1){
      dispatch({type: 'INCREMENT', payload: item._id})
    }else {
     
    }
  }
  return (
    <div className='section-center'>
       {items.map((item,index)=>{
        const {name, images, description, price} = item;
        return(
            <div className="menu-item" key={index} onClick={()=>addToCart(item)}>
              <img className='photo' src={images} alt={name} />
               <div className="item-info">
                <header>
                    <h4>{name}</h4>
                    <h4 className='price'>{price} €</h4>
                </header>
                <p className='desc'>{description}</p>
               </div>
            </div>
        )
       })}
    </div>
  )
}

export default Cards;
import React from 'react';
import '../../styles/Menu.css';

function Cards({items}) {
  return (
    <div className='section-center'>
       {items.map((index,item)=>{
        const {name, images, description, price} = item;
        return(
            <div className="menu-item" key={index}>
              <a href="/"><img className='photo' src={images} alt={name} /></a> 
               <div className="item-info">
                <header>
                    <h4>{name}</h4>
                    <h4 className='price'>{price}</h4>
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
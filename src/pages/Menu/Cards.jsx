import React from 'react';
import '../../styles/Menu.css';

function Cards({items}) {
  return (
    <div className='section-center'>
       {items.map((item)=>{
        const {id, title, img, desc, price} = item;
        return(
            <div className="menu-item" key={id}>
              <a href="#"><img className='photo' src={img} alt={title} /></a> 
               <div className="item-info">
                <header>
                    <h4>{title}</h4>
                    <h4 className='price'>{price}</h4>
                </header>
                <p className='desc'>{desc}</p>
               </div>
            </div>
        )
       })}
    </div>
  )
}

export default Cards;
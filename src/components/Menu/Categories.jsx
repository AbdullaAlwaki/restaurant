import React from 'react';
import '../../styles/Menu.css';

function Categories({filterItems, categories, activeCategory}) {
  return (
    <div className='btn-container'>
        {categories.map((category,index)=>{
      return (
        <button  type='button' className={`${
            activeCategory === category? "filter-btn active" : "filter-btn"
        }`}  key={index} onClick={()=> filterItems(category)}>
            {category}
        </button>
      )
        })}
    </div>
  )
}

export default Categories
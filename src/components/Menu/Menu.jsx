import React, { useContext, useEffect } from 'react'
import { dataContext } from '../Context/context';
import Cards from './Cards';

function Menu_2() {
    const {state, dispatch} = useContext(dataContext);

    useEffect(()=>{
        (async()=>{
            const res = await fetch("https://mern-restaurant-backend.onrender.com/api/Dishes");
            const jres = await res.json();
            dispatch({type:'MENU', payload: jres.dishes});
        })()
        // eslint-disable-next-line
    },[])
    console.log(state)
    // const { state, dispatch } = useContext(dataContext);
//   const [items, setItems] = useState([]);
// //   console.log(items);
//   const filterItems = (category) => {
//     if (category === "all") {setItems(state.menu); return};
//     setItems(state.menu.filter((dish) => dish.category === category));
//   };


//   useEffect(()=>{
//           setItems(state.menu)
//   console.log('useEffect', state.menu)
//  }, [state.menu]);

//   return (
//     <div>
//       <div className="filter-btns-cont">
//         <button onClick={() => filterItems("all")} className="filter-btn">
//           All
//         </button>
//         <button onClick={() => filterItems("lunch")} className="filter-btn">
//           Lunch
//         </button>
//         <button onClick={() => filterItems("breakfast")} className="filter-btn">
//           Breakfast
//         </button>
//         <button onClick={() => filterItems("dinner")} className="filter-btn">
//           Dinner
//         </button>
//       </div>

//       {items.map((dish, index) => {
//         return (
          
//             <div className="menu-item" key={index}>
//               <img className="photo" src={dish.images} alt={dish.name} />
//               <div className="item-info">
//                 <header>
//                   <h4>{dish.name}</h4>
//                   <h4 className="price">{dish.price} €</h4>
//                 </header>
//                 <p className="desc">{dish.description}</p>
//               </div>
//               {/* <button >Add to order</button> */}
//             </div>
          
//         );
//       })}
//     </div>)
  return (
    <div>
        <Cards />
    </div>
  )
}

export default Menu_2
import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../Context/context';
import Cards_2 from './Cards';

function Menu_2() {
    const {state, dispatch} = useContext(dataContext);

    useEffect(()=>{
        (async()=>{
            const res = await fetch("https://mern-restaurant-backend.onrender.com/api/Dishes");
            const jres = await res.json();
            dispatch({type:'MENU', payload: jres.dishes});
        })()
    },[])
    console.log(state)
    // const { state, dispatch } = useContext(dataContext);
//   const [items, setItems] = useState([]);
// //   console.log(items);
//   const filterItems = (category) => {
//     if (category === "all") {setItems(state.menu); return};
//     setItems(state.menu.filter((dish) => dish.category === category));
//   };


<<<<<<< HEAD
const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState([]);
  const [allFood, setAllFood] = useState([]);
  const allDishes = useContext(dishes);
  // eslint-disable-next-line no-unused-vars
  const {state, dispatch} = useContext(dataContext);
  useEffect(() => {
    setCategories(['all', 'breakfast', 'lunch', 'dinner'])
    allDishes.then((jsonRes) => {
      setMenuItems(jsonRes);
      dispatch({type:"MENU", payload: jsonRes})
      // console.log(state.state.menu)
      setAllFood(jsonRes);
      return jsonRes})
    .catch((error) => console.log(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(allFood);
      return;
    }
    const newItems = allFood.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
=======
//   useEffect(()=>{
//           setItems(state.menu)
//   console.log('useEffect', state.menu)
//  }, [state.menu]);
>>>>>>> kamalpreet

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
<<<<<<< HEAD
    <main className="menu-container">
      <section className="menu section" >
        <div className="title">
          <div className="con_logo">
                      <img src={logo} alt="logo" className="logo" />

          </div>
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
           filterItems={filterItems}
        />
        
        <Cards items={menuItems}  />
      
      </section>
    </main>
  );
};
=======
    <div>
        <Cards_2 />
    </div>
  )
}
>>>>>>> kamalpreet

export default Menu_2
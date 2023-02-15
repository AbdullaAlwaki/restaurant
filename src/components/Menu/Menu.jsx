import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "../Context/context";
import "../../styles/Menu.css";
import logo from "../../images/MERN.svg";

function Menu() {
  //eslint-disable-next-line
  const { state, dispatch } = useContext(dataContext);
  const [items, setItems] = useState([state.menu]);

  const filterItems = (category) => {
    if (category === "all") {
      setItems(state.menu);
      return;
    }
    setItems(state.menu.filter((dish) => dish.category === category));
  };

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch(
  //       `https://mern-restaurant-backend.onrender.com/api/Dishes`
  //     );
  //     const jres = await res.json();
      
  //     dispatch({ type: "MENU", payload: jres.dishes });
  //   })();
    
  // }, []);
useEffect(() =>{
  setItems(state.menu);
}
,[state.menu])
  function addToCart(item) {
    const itemIndex = state.cart.findIndex((el) => el._id === item._id);

    if (itemIndex !== -1) {
      dispatch({ type: "INCREMENT", payload: item._id });
    } else {
      dispatch({ type: "ADDTOCART", payload: item });
    }
  }
  return (
    <main className="menu-container">
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button onClick={() => filterItems("all")} className="filter-btn">
            All
          </button>
          <button
            onClick={() => filterItems("breakfast")}
            className="filter-btn"
          >
            Breakfast
          </button>
          <button onClick={() => filterItems("lunch")} className="filter-btn">
            Lunch
          </button>

          <button onClick={() => filterItems("dinner")} className="filter-btn">
            Dinner
          </button>
        </div>
        <div className="section-center">
          {items.map((dish, index) => {
            return (
              <div
                className="menu-item"
                key={index}
                onClick={() => addToCart(dish)}
              >
                <img className="photo" src={dish.images} alt={dish.name} />
                <div className="item-info">
                  <header>
                    <h4>{dish.name}</h4>
                    <h4 className="price">{dish.price} €</h4>
                  </header>
                  <p className="desc">{dish.description}</p>
                </div>
                {/* <button >Add to order</button> */}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Menu;

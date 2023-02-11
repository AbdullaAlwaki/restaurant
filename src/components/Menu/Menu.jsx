import React, { useState, useContext, useEffect } from "react";
import Cards from "./Cards.jsx";
import Categories from "./Categories";
import {dishes} from "../../help/getData";
import logo from "../../images/MERN.svg";
import "../../styles/Menu.css";
import { dataContext } from "../Context/context.jsx";


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


  return (
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

export default Menu;

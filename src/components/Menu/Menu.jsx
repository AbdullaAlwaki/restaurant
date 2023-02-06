import React, { useState, useContext, useEffect } from "react";
import Cards from "./Cards.jsx";
import Categories from "./Categories";
import {dishes} from "../../help/help.jsx";
import logo from "../../images/MERN.svg";
import "../../styles/Menu.css";


const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState([]);
  const [allFood, setAllFood] = useState([]);
  const allDishes = useContext(dishes);

  useEffect(() => {
    setCategories(['all', 'breakfast', 'lunch', 'dinner'])
    allDishes.then((jsonRes) => {
      setMenuItems(jsonRes);
      setAllFood(jsonRes);
      return jsonRes})
    .catch((error) => console.log(error))
  },[allDishes]);
  
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
          <img src={logo} alt="logo" className="logo" />
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
           filterItems={filterItems}
        />

        <Cards items={menuItems} />
      </section>
    </main>
  );
};

export default Menu;

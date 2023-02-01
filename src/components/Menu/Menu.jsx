import React, { useState } from "react";
import Cards from "./Cards.jsx";
import Categories from "./Categories";
import { items } from "./data.js";
import logo from "../../images/MERN.svg";
import "../../styles/Menu.css";
import Footer from "../../components/Footer.jsx";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Menu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
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

      <Footer />
    </main>
  );
};

export default Menu;

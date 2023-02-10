import { createContext } from "react";
const dishesF = async () => {
    const res = await fetch("https://mern-restaurant-backend.onrender.com/api/Dishes");
    const jsonRes = await res.json();
    console.log(jsonRes)
    const dishes = jsonRes.dishes;
    return dishes;
}

const dishes = createContext(dishesF());
export default dishes;



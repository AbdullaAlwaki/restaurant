import { createContext } from "react";

const dishesF = async () => {
    const res = await fetch("https://mern-restaurant-backend.onrender.com/api/Dishes");
    //const res = await fetch("https://randomuser.me/api/?results=5");

    const jsonRes = await res.json();
    console.log(jsonRes)
    const dishes = jsonRes.dishes;
    return dishes;
}

let dishesInContext;
dishesF()
    .then(data=> { dishesInContext = createContext(data); console.log('context data:', data)})
    .catch(err=>console.error(err))
//const dishes = createContext(dishesF());
export default dishesInContext;



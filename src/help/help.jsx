import { createContext } from "react";
const dishesF = async () => {
  const res = await fetch(
    "https://mern-restaurant-backend.onrender.com/api/addDishes"
  );
  const jsonRes = await res.json();
  const dishes = jsonRes.dishes;
  return dishes;
};

const tableF = async () => {
  const res = await fetch(
    "https://mern-restaurant-backend.onrender.com/api/bookTable"
  );
  const jsonRes = await res.json();
  return jsonRes;
};


// let token=JSON.parse(localStorage.getItem("user"))
// const headersAll = {
//   headers: {
//     "Content-Type": "application/json",
    
//   },
// };

// export const fetchTest = async (endPoint, method = "Get", payload = "") => {
//   const res = await fetch({
//     url: endPoint,
//     method,
//     // headers: { ...headersAll, authorization: token && "Bearer " + token },
//     payload,
//   });
//   const jsonRes = await res.json();
//   return jsonRes;
// };
export const table = createContext(tableF());
export const dishes = createContext(dishesF());

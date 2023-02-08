import React from "react";

import GetDishes from "./GetDishes";
import PostDishes from "./PostDishes";
import DeleteDishes from "./DeleteDishes";
import UpdateDishes from "./UpdateDishes";

import "../../style/AddDishes.css";

export default function AddDishes() {
  
  const [method, setMethod] = React.useState("POST");
  const handleChange = (e) => {
    setMethod(e.target.value);
  };
  return (<>
    <select name="" id="" onChange={handleChange}>
          <option value="POST">post</option>
          <option value="GET">get</option>
          <option value="PUT">update</option>
          <option value="DELETE">delete</option>
        </select>
        {method === "POST" && <PostDishes />}
        {method === "GET" && <GetDishes />}
        {method === "DELETE" && <DeleteDishes />}
        {method === "PUT" && <UpdateDishes />}
    </>
  );
}

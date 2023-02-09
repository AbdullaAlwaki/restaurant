import React from "react";

import GetTable from "./GetTable";
// import PostDishes from "./PostDishes";
// import DeleteDishes from "./DeleteDishes";
import UpdateTable from "./UpdateTable";

import "../../style/AddDishes.css";
import DeleteTable from "./DeleteTable";

export default function Table() {
  const [method, setMethod] = React.useState("GET");
  const handleChange = (e) => {
    setMethod(e.target.value);
  };
  return (
    <>
      <select name="" id="" onChange={handleChange}>
        <option value="GET">get</option>
        <option value="POST">post</option>
        <option value="PUT">update</option>
        <option value="DELETE">delete</option>
      </select>
      {method === "GET" && <GetTable />}
      {method === "PUT" && <UpdateTable />}
      {method === "DELETE" && <DeleteTable />}
      {/* {method === "POST" && <PostDishes />}
       */}
    </>
  );
}

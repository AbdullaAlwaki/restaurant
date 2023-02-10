import React from "react";

import GetContact from "./GetContect";
import DeleteContact from "./DeleteContact";
import UpdateContact from "./UpdateContact";

import "../../style/AddDishes.css";

export default function Contact() {
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
      
      {method === "GET" && <GetContact />}
      {method === "DELETE" && <DeleteContact />}
      {method === "PUT" && <UpdateContact />}
      {/* {method === "POST" && <PostDishes />}
       */}
    </>
  );
}
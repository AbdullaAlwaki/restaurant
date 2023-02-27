import React from "react";

function DeleteContact() {
  const [res, setRes] = React.useState([]);

  const handleChange = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const _id = form.get("id");
    try {
      const response = await fetch(`https://mern-restaurant-backend.onrender.com/api/contact/${_id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      setRes(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="delete-vh-50">
      <h1  className="delete-contacts-h1">Delete Contact</h1>
      {res && <h2>{res.message}</h2>}
      {res && <h2>{res.error}</h2>}
      <form action="" className="first-form"  onSubmit={handleChange} >
        <input type="text" name="id"  placeholder="Enter Contact ID" />
        <button   className="buttonAddDish">Delete</button>
      </form>
    </div>
  );
}

export default DeleteContact;

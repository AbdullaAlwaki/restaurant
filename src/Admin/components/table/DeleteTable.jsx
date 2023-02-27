import React from 'react'

export default function DeleteTable() {
    const [res, setRes] = React.useState([]);

  const handleChange = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const id = form.get("id");
    try {
      const response = await fetch(`https://mern-restaurant-backend.onrender.com/api/table/${id}`, {
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
        <h1 className="delete-table-h1">Delete Table</h1>
        {res && <h2>{res.message}</h2>}
        {res && <h2>{res.error}</h2>}
        <form className="first-form"  onSubmit={handleChange} >
            <input type="text" name="id"  placeholder="Enter Table ID" />
            <button  className="buttonTable" >Delete</button>
        </form>
        
    </div>
  )
}

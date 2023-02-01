import React from "react";

function AddDishes() {
  const [response, setResponse] = React.useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const data = {
      name: form.get("name"),
      images: form.get("dish images"),
      category: form.get("category"),
      price: form.get("price"),
      description: form.get("description"),
      isVeg: form.get("is Vegan"),
      isOffers: form.get("is offers"),
      isFavorites: form.get("is Favorites"),
    };
    try {
      const response = await fetch("/api/addDishes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setResponse(result);
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <div>
      <form className="AddDishes_form" action="" method="post" onSubmit={handleSubmit} >
        <h1>Add Dishes</h1>
        <input type="text" name="name" id="name" placeholder="dish name" />

        <input type="text" name="dish images" id="dish images" placeholder="dish images"/>
          {/* or
            <input type="file" name="dish images" id="dish images" placeholder="dish images" /> */}
        

        <label htmlFor="breakfast" >Breakfast</label>
        <input type="radio" name="category" id="breakfast" value="breakfast"/>
          
        <label htmlFor="lunch" >Lunch</label>
        <input type="radio" name="category" id="lunch" value="lunch" />
            
        <label htmlFor="dinner">Dinner</label>
        <input type="radio" name="category" id="dinner" value="dinner" />
            
       

        <input type="number" name="price" id="price" placeholder="price" />
        <input type="text" name="description" id="description" placeholder="description" />

        <h4>is Vegan</h4>
        <label htmlFor="is Vegan true">True</label>
        <input type="radio" name="is Vegan" id="is Vegan true" value="true" />
        <label htmlFor="is Vegan false">False</label>
        <input type="radio" name="is Vegan" id="is Vegan false" value="false"/>
        


        <h4>is Offers</h4>
        <label htmlFor="is offers true">True</label>
        <input type="radio" name="is offers" id="is offers true" value="true"/>
        <label htmlFor="is offers false">False</label>
        <input type="radio" name="is offers" id="is offers false" value="false"/>


        <h4>is Favorites</h4>
        <label htmlFor="is Favorites true">True</label>
        <input type="radio" name="is Favorites" id="is Favorites true" value="true"/>
        <label htmlFor="is Favorites false">False</label>
        <input type="radio" name="is Favorites" id="is Favorites false" value="false"/>

        <button type="submit">Add Dishes</button>
      </form>
      {response ? <h1>{response.message}</h1> : null}
        {response ? <p>{response.error}</p> : null}
    </div>
  );
}

export default AddDishes;

import React from 'react';



function PostDishes() {
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
      const response = await fetch(
        "https://mern-restaurant-backend.onrender.com/api/Dishes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      setResponse(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        className="post-form" action="" method="post"onSubmit={handleSubmit}     >
 
        <h1>Post Dishes</h1>

        

        <div className="dish-info">
          <h4 className="headingAdd"> Name Of The Dish?</h4>
          <input
            className="inputWhatDish"
            type="text"
            name="name"
            id="name"
            placeholder="dish name"
          />
          <input
            className="inputWhatDish"
            type="text"
            name="dish images"
            id="dish images"
            placeholder="dish images"
          />
        </div>

       

        {/*Price and description*/}
        <div className="dish-info">
          <h4>Price and description:</h4>
          <input
            className="inputPrice"
            type="number"
            name="price"
            id="price"
            placeholder="price"
          />
          <input
            className="inputDescription"
            type="text"
            name="description"
            id="description"
            placeholder="description"
          />

          {/*is dishes*/}
        </div>
         <div className="dish-info">
          <h4>What kind of dish?</h4>
          <div className='radio-container' >
          <section className="addBreakfast">
            <label htmlFor="breakfast">Breakfast</label>
            <input
              type="radio"name="category"id="breakfast"value="breakfast"/>
          </section>
          <section className="addLunch">
            <label htmlFor="lunch">Lunch</label>
            <input type="radio" name="category" id="lunch" value="lunch" />
          </section>
          <section className="addDinner">
            <label htmlFor="dinner">Dinner</label>
            <input type="radio" name="category" id="dinner" value="dinner" />
          </section>
          </div>
        
        </div>

        {/*vegan*/}
        <div className="dish-info">
          <h4>Is the dish vegan?</h4>
          <div className='radio-container'>
          <section className="veganTrue">
            <label htmlFor="is Vegan true">Yes</label>
            <input type="radio" name="is Vegan" id="vegan_true" value="true" />
          </section>
          <section className="veganFalse">
            <label htmlFor="is Vegan false">No</label>
            <input
              type="radio"
              name="is Vegan"
              id="vegan_false"
              value="false"
            />
          </section>

          </div>
         
        </div>

        {/*offer of the week*/}
        <div className="dish-info">
          <h4>Is the dish an offer?</h4>
          <div className='radio-container'>
          <section className="offerTrue">
            <label htmlFor="is offers true">Yes</label>
            <input type="radio" name="is offers" id="offer_true" value="true" />
          </section>
          <section className="offerFalse">
            <label htmlFor="is offers false">No</label>
            <input
              type="radio"
              name="is offers"
              id="offer_false"
              value="false"
            />
          </section>
          </div>
          
        </div>

        {/*favorite dishes*/}
        <div className="dish-info">
          <h4>Is the dish a favorite dish?</h4>
          <div className='radio-container'> 
          <section className="favoriteTrue">
            <label htmlFor="is Favorites true">Yes</label>
            <input
              type="radio"
              name="is Favorites"
              id="favorite_true"
              value="true"
            />
          </section>
          <section className="favoriteFalse">
            <label htmlFor="is Favorites false">No</label>
            <input
              type="radio"
              name="is Favorites"
              id="favorite_false"
              value="false"
            />
          </section>
          </div>
         
        </div>

        <button type="submit" className="buttonAddDish">
          Add Dishes
        </button>
      </form>
      
      {response ? <h1>{response.message}</h1> : null}
      {response ? <p>{response.error}</p> : null}
    </div>
  )
}

export default PostDishes
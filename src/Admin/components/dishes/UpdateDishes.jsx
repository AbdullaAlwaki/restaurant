import React from "react";

import { dishes } from "../../../help/getData";

function UpdateDishes() {
  const [dishs, setDishs] = React.useState([]);
  const [dish, setDish] = React.useState(null);
  const [res, setRes] = React.useState(null);

  const data = React.useContext(dishes);
  React.useEffect(() => {
    data
      .then((res) => {
        setDishs(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  const handleDish = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const id = form.get("id");
    const data = dishs.find((item) => item._id === id);
    setDish(data);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const images = form.get("images");
    const category = form.get("category");
    const price = form.get("price");
    const description = form.get("description");
    const isVeg = form.get("isVeg");
    const isOffers = form.get("isOffers");
    const isFavorite = form.get("isFavorite");
    const data = {
      name,
      images,
      category,
      price,
      description,
      isVeg,
      isOffers,
      isFavorite,
    };
    try {
      await fetch(
        //http://localhost:10000/api/dishes/
        `https://mern-restaurant-backend.onrender.com/api/dishes/${dish._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((res) => res.json())
        .then((res) => setRes(res));
    } catch (error) {
      setDish(error);
    }
  };

  return (
    <div >
      <form action="" onSubmit={handleDish}>
        <input type="text" className="post-form" name="id" id="id" placeholder="Enter Dish Id" />
        <button className="buttonAddDish"> Find Dish</button>
      </form>

      {dish && (
        <form className="post-form" action="" key={dish._id} onSubmit={handleUpdate}>
          <div className="dish-info">
      <h1>Update Dishes</h1>
        </div>
        <div className="dish-info">

        <input type="text" name="name" id="name" defaultValue={dish.name} />
          <input
            type="text"
            name="images"
            id="image"
            defaultValue={dish.images}
          />
        </div>

          <div className="dish-info" >
          <h4>What kind of dish?</h4>
            <div className='radio-container'>
            <section className="addBreakfast">
            <label htmlFor="breakfast">Breakfast</label>
            <input
              type="radio"
              name="category"
              id="breakfast"
              value="breakfast"
              defaultChecked={dish.category === "breakfast" ? true : false}
            />
          </section>
          <section className="addLunch">
            <label htmlFor="lunch">Lunch</label>
            <input
              type="radio"
              name="category"
              id="lunch"
              value="lunch"
              defaultChecked={dish.category === "lunch" ? true : false}
            />
          </section>
          <section className="addDinner">
            <label htmlFor="dinner">Dinner</label>
            <input
              type="radio"
              name="category"
              id="dinner"
              value="dinner"
              defaultChecked={dish.category === "dinner" ? true : false}
            />
          </section>
            </div>
         
          </div>
          <div className="dish-info">
          <input
            type="price"
            name="price"
            id="price"
            defaultValue={dish.price}
          />
          <input
            type="text"
            name="description"
            id="description"
            defaultValue={dish.description}
          />
          </div>
         
         
          <div className="dish-info">
          <h4>Is the dish vegan?</h4>
          <div className='radio-container'>
          <section>
            <label htmlFor="isVeg">is Veg</label>
            <input
              type="radio"
              name="isVeg"
              id="isVeg"
              defaultChecked={dish.isVeg ? true : false}
              value="true"
            />
            <label htmlFor="isNotVeg">is Not Veg</label>
            <input
              type="radio"
              name="isVeg"
              id="isNotVeg"
              defaultChecked={dish.isVeg ? false : true}
              value="false"
            />
          </section>
          </div>
         
          </div>

         <div className="dish-info">
         <h4>Is the dish an offer?</h4>
         <div className="radio-container" >
           <section>
            <label htmlFor="isOffers">is Offer</label>
            <input
              type="radio"
              name="isOffers"
              id="isOffers"
              defaultChecked={dish.isOffers ? true : false}
              value="true"
            />
            <label htmlFor="isNotOffer">is Not Offer</label>
            <input
              type="radio"
              name="isOffers"
              id="isNotOffer"
              defaultChecked={dish.isOffers ? false : true}
              value="false"
            />
          </section>
          </div>
         </div>
          <div className="dish-info">
          <h4>Is the dish a favorite dish?</h4>
          <div className="radio-container">
          <section>
            <label htmlFor="isFavorite">is Favorite</label>
            <input
              type="radio"
              name="isFavorite"
              id="isFavorite"
              defaultChecked={dish.isFavorites ? true : false}
              value="true"
            />
            <label htmlFor="isNotFavorite">is Not Favorite</label>
            <input
              type="radio"
              name="isFavorite"
              id="isNotFavorite"
              defaultChecked={dish.isFavorites ? false : true}
              value="false"
            />
          </section>
          </div>
          </div>

          <button  type="submit" className="buttonAddDish">Update Dish</button>
        </form>
      )}
      {res && <h1>{res.massage}</h1> }
      {res && <h1>{res}</h1> }
    </div>
  );
}

export default UpdateDishes;

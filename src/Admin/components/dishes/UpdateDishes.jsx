import React from "react";
import axios from "../../../util/axios.config";
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
      const response = await axios.put(`/api/dishes/${dish._id}`,data)
      setRes(response.data)
    } catch (error) {
      setDish(error);
    }
  };

  return (
    <div  className="update-page-view" >
       <h1 className="update-contacts-h1"> Update Dishes</h1>
    
      <form action="" className="first-form" onSubmit={handleDish}>
      
        <input type="text"  name="id" id="id" placeholder="Enter Dish Id" />
        <button className="buttonContacts"> Find Dish</button>
      </form>

      {dish && (
        <form
          className="post-form"
          action=""
          key={dish._id}
          onSubmit={handleUpdate}
        >
          <div className="dish-info">
          <h1>Update Dishes</h1>
     
        </div>
        <div className="dish-info">

          <div className="dish-info">
            <h4>What kind of dishes?</h4>
            <div className="radio-container">
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
            <div className="radio-container">
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

          <button  type="submit" className="buttonContacts">Update Dish</button>
          </div>
        </form>
      )}
      {res && <h1>{res.massage}</h1>}
    </div>
  );
}

export default UpdateDishes;

import React from "react";

import { dishes } from "../../../help/getData";

function UpdateDishes() {
  const [dishs, setDishs] = React.useState([]);
  const [dish, setDish] = React.useState(null);

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
    const name = form.get("dish");
    setDish(name);
  };
  return (
    <div>
      <h1>Update Dishes</h1>
      <form action="" onSubmit={handleDish}>
        <input
          type="text"
          name="dish"
          id="dish"
          placeholder="Enter Dish Name"
        />
        <button> find Dish</button>
      </form>
      {dish ? (
        <div>
          {dishs.map((item) => {
            if (item.name === dish) {
              return (
                <form action="" key={item._id}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    defaultValue={item.name}
                  />
                  <input
                    type="text"
                    name="image"
                    id="image"
                    defaultValue={item.images}
                  />
                  <section className="addBreakfast">
                    <label htmlFor="breakfast">Breakfast</label>
                    <input
                      type="radio"
                      name="category"
                      id="breakfast"
                      value="breakfast"
                    //   checked={item.category === "breakfast" ? "yes" : "no"}
                    defaultChecked={item.category === "breakfast" ? "yes" : "no"}
                    />
                  </section>
                  <section className="addLunch">
                    <label htmlFor="lunch">Lunch</label>
                    <input
                      type="radio"
                      name="category"
                      id="lunch"
                      value="lunch"
                    //   checked={item.category === "lunch" ? "yes" : "no"}
                    defaultChecked={item.category === "lunch" ? "yes" : "no"}
                    />
                  </section>
                  <section className="addDinner">
                    <label htmlFor="dinner">Dinner</label>
                    <input
                      type="radio"
                      name="category"
                      id="dinner"
                      value="dinner"
                    //   checked={item.category === "dinner" ? "yes" : "no"}
                    defaultChecked={item.category === "dinner" ? "yes" : "no"}
                    />
                  </section>
                  <input
                    type="price"
                    name="price"
                    id="price"
                    defaultValue={item.price}
                  />
                  <input
                    type="text"
                    name="description"
                    id="description"
                    defaultValue={item.description}
                  />
                  <section>
                    <label htmlFor="isVeg">is Veg</label>
                    <input
                      type="radio"
                      name="isVeg"
                      id="isVeg"
                    //   checked={item.isVeg ? "yes" : "no"}
                    defaultChecked={item.isVeg ? "yes" : "no"}
                    />
                    <label htmlFor="isNotVeg">is Non Veg</label>
                    <input
                      type="radio"
                      name="isVeg"
                      id="isNotVeg"
                    //   checked={item.isVeg ? "no" : "yes"}
                    defaultChecked={item.isVeg ? "no" : "yes"}
                    />
                  </section>
                
                  <section>
                    <label htmlFor="isOffers">is Offer</label>
                    <input
                      type="radio"
                      name="isOffers"
                      id="isOffers"
                    //   checked={item.isVeg ? "yes" : "no"}
                    defaultChecked={item.isOffers ? "yes" : "no"}
                    />
                    <label htmlFor="isNotOffer">is Not Offer</label>
                    <input
                      type="radio"
                      name="isOffers"
                      id="isNotOffer"
                    //   checked={item.isVeg ? "no" : "yes"}
                    defaultChecked={item.isOffers ? "no" : "yes"}
                    />
                  </section>

                  <section>
                    <label htmlFor="isFavorite">is Favorite</label>
                    <input
                      type="radio"
                      name="isFavorite"
                      id="isFavorite"
                    //   checked={item.isVeg ? "yes" : "no"}
                    defaultChecked={item.isFavorite ? "yes" : "no"}
                    />
                    <label htmlFor="isNotFavorite">is Not Offer</label>
                    <input
                      type="radio"
                      name="isFavorite"
                      id="isNotFavorite"
                    //   checked={item.isVeg ? "no" : "yes"}
                    defaultChecked={item.isFavorite ? "no" : "yes"}
                    />
                  </section>

                  <button>Update Dish</button>
                </form>
              );
            }
            return null;
          })}
        </div>
      ) : null}
    </div>
  );
}

export default UpdateDishes;

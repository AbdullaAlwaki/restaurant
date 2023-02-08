import React from "react";
import { dishes } from "../../../help/getData";

function GetDishes() {
  const [res, setRes] = React.useState([]);
  const data = React.useContext(dishes);
  React.useEffect(() => {
    data
      .then((jsonRes) => {
        setRes(jsonRes);
      })
      .catch((err) => {
        console.log(err);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>Dishes</h1>
      {res.map((item) => {
        return (
          <div key={item._id}>
            <h3>{item.name}</h3>
            <p>{item._id}</p>
            <img src={item.images} width="250px" height="250px" alt="" />
            <p>{item.category}</p>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <p>{item.isVeg}</p>
            <p>{item.isOffers}</p>
            <p>{item.isFavorites}</p>
          </div>
        );
      })}
    </div>
  );
}

export default GetDishes;

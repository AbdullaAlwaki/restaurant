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
    <div  className="get-dishes">
      <h1> Get Dishes</h1>
      <div className="get-dishes-all" >
      {res.map((item) => {
        return (
         
          <div className="get-dishes-items" key={item._id}>
            <img src={item.images}  width="250px" height="250px" alt="" />
            <h3> Name:  {item.name}</h3>
            <p> <span> ID :</span>{item._id}</p>
            <p> <span> Category :</span>{item.category}</p>
            <p> <span> Price: {item.price}</span></p>
            <p> <span>Description: </span>{item.description}</p>
          </div>

          
        );
      })}
    </div>
    </div>
  );
}

export default GetDishes;

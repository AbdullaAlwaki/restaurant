import React from "react";
import { NavLink } from "react-router-dom";
import {dishes} from "../../help/help.jsx";
import "../../styles/Home/Fav.dishes.css";



function FavDishes() {
    const [favorite, setFavorite] = React.useState([]);
    const fav = React.useContext(dishes);
    React.useEffect(() => {
        fav.then((jsonRes) => jsonRes.filter((item) => item.isFavorites === true))
        .then((jsonRes) => setFavorite(jsonRes))
        .catch((error) => console.log(error))
    }, [fav]);

       return (
        <div className="fav_dishes_container">
            <h2 className="heading_fav_dishes">Favourite dishes</h2>
            {/*container for pictures*/}
            <div className="pictures_fav">
                {favorite.map((item,index)=>{
                return <div className="fav_content" key={index}>
                   <div className="fav_image_cont" > <img className="fav_pic" src={item.images} alt="" /></div>
                        <p className="food_name">{item.name}</p>
                    </div >
                })
                }
            </div>
            <div>
                <p className="fav_p"> For More Discover our  <NavLink  className="fav_menu"
            to='/menu '>Menu</NavLink></p>
                   
            </div>
       </div>
)   
}

export default FavDishes;
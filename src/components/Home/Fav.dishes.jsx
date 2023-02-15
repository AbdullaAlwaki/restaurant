import React from "react";
import { NavLink } from "react-router-dom";

import { dataContext } from "../Context/context";

import "../../styles/Home/Fav.dishes.css";



function FavDishes() {
    const { state } = React.useContext(dataContext);
    const [favorite, setFavorite] = React.useState([]);
    React.useEffect(() => {
        setFavorite(state.favorite);
    }, [state.favorite]);

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
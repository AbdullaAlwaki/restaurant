import React from "react";
// import { Routers,Route} from "react-router-dom";
/* import Menu from "" */
import "../../styles/Fav.dishes.css";



function FavDishes() {
    const [favorite, setFavorite] = React.useState([]);
    React.useEffect(() => {
        fetch(`/api/addDishes`).then((res) => {
            if (res.ok) {
                return res.json();
            }
        }).then((jsonRes) => jsonRes.dishes)
        .then((jsonRes) => jsonRes.filter((item) => item.isFavorites === true))
        .then((jsonRes) => setFavorite(jsonRes))
        .catch((error) => console.log(error))
    }, []);
    console.log(favorite);
    return (
        <div className="fav_dishes_container">
            <h2 className="heading_fav_dishes">Favourite dishes</h2>
            {/*container for pictures*/}
            <div className="pictures_fav">
                {favorite.map((item,index)=>{
                return <section key={index}>
                    <div className="fix">
                    <img className="bryani foto" src={item.images} alt="" />
                        <p className="food_name">{item.name}</p>
                    </div >
                </section>

                })
                }
            </div>
            <div>
                <span> For More Discover our Menu </span>
                {/* <Routers>
                    <Route path="/menu" element={<Menu/>}/>

                    </Routers>     */}
            </div>
       </div>
)   
}

export default FavDishes;
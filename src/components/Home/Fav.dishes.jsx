import React from "react";
// import { Routers,Route} from "react-router-dom";
/* import Menu from "" */
import "../../styles/Fav.dishes.css";
import pizza from "../../images/pizza.png";
import burger from "../../images/burger.png"
import falafel from "../../images/falafel.png"
import mashawi from "../../images/mashawi.png"
import bryani from "../../images/bryani.png"


function FavDishes() {
    return (
        <div className="fav_dishes_container">
            <h2 className="heading_fav_dishes">Favourite dishes</h2>
            {/*container for pictures*/}
            <div className="pictures_fav">
                <section>
                    <div className="fix">
                    <img className="pizza foto" src={pizza} alt="" />
                        <p  className="food_name">pizza</p>
                    </div >
                </section>
                <section>
                    <div className="fix">
                    <img className="burger foto " src={burger} alt="" />
                        <p className="food_name">burger</p>
                    </div >
                </section>
                <section>
                    <div className="fix">
                    <img className="falafel foto" src={falafel} alt="" />
                        <p className="food_name">falafel</p>
                    </div >
                </section>
                <section>
                    <div className="fix">
                    <img className="mashawi foto" src={mashawi} alt="" />
                        <p className="food_name">mashawi</p>
                    </div >
                </section>
                <section>
                    <div className="fix">
                    <img className="bryani foto" src={bryani} alt="" />
                        <p className="food_name">bryani</p>
                    </div >
                </section>
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
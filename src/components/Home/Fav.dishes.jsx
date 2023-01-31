import React from "react";
import "../styles/Fav.dishes.css";
import food from "../images/bryani.png";

function FavDishes() {
    return (
        <div className="container">
            <h2 className="heading_offer">Favourite Dishes</h2>
            {/*container for pictures*/}
            <div className="pictures">
                <section>
                    <figure>
                        <img className="food_img" src={food} alt="" />
                        <figcaption>Bryani</figcaption>
                    </figure>
                    <p className="new_sticker">new</p>
                </section>
                <section>
                    <figure>
                        <img className="food_img" src={food} alt="" />
                        <figcaption>Falafel</figcaption>
                    </figure>
                    <p className="new_sticker">new</p>
                </section>
                <section>
                    <figure>
                        <img className="food_img" src={food} alt="" />
                        <figcaption>Burger</figcaption>
                    </figure>
                    <p className="new_sticker">new</p>
                    
                </section>
                <section>
                    <figure>
                        <img className="food_img" src={food} alt="" />
                        <figcaption>pizza</figcaption>
                    </figure>
                    <p className="new_sticker">new</p>
                    
                </section>
                <section>
                    <figure>
                        <img className="" src={food} alt="" />
                        <figcaption>Food name</figcaption>
                    </figure>
                    <p className="new_sticker">new</p>
                    
                </section>
            </div>
        </div>
    )
}

export default FavDishes;
import React from "react";
import "../../styles/Home/Offer.css";
import food from "../../images/food_example.png";

function Offer() {
    return (
        <div className="container_offer">
            <h2 className="heading_offer">Offer of the week</h2>
            {/*container for pictures*/}
            <div className="pictures">
                <section>
                    <figure>
                        <img className="food_img" src={food} alt="" />
                        <figcaption>Food name</figcaption>
                    </figure>
                    <p className="new_sticker">new</p>
                </section>
                <section>
                    <figure>
                        <img className="food_img" src={food} alt="" />
                        <figcaption>Food name</figcaption>
                    </figure>
                    <p className="new_sticker">new</p>
                </section>
                <section>
                    <figure>
                        <img className="food_img" src={food} alt="" />
                        <figcaption>Food name</figcaption>
                    </figure>
                    <p className="new_sticker">new</p>
                    
                </section>
                <section>
                    <figure>
                        <img className="food_img" src={food} alt="" />
                        <figcaption>Food name</figcaption>
                    </figure>
                    <p className="new_sticker">new</p>
                    
                </section>
                <section>
                    <figure>
                        <img className="food_img" src={food} alt="" />
                        <figcaption>Food name</figcaption>
                    </figure>
                    <p className="new_sticker">new</p>
                    
                </section>
            </div>
        </div>
    )
}

export default Offer;
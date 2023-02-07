import React from "react";
import {dishes} from "../../help/help.jsx";
import "../../styles/Home/Offer.css";

function Offer() {
    const [offer, setOffer] = React.useState([]);
    const offers = React.useContext(dishes);
    
    React.useEffect(() => {
        offers.then((jsonRes) => jsonRes.filter((item) => item.isOffers === true))
        .then((jsonRes) => setOffer(jsonRes))
        .catch((error) => console.log(error))
    }, [offers]);

    return (
        <div className="container_offer">
            <h2 className="heading_offer">Offer of the week</h2>
            <div className="offer">
            {offer.map((item,index) => {
                return <div className="cont_offer">
                <section className="sectionOffer" key={index}>
                    <figure className="figureOffer">
                        <p className="new_sticker">%</p>
                        <img className="food_img" src={item.images} alt="" />
                        <figcaption className="nameOffer">{item.name}</figcaption>
                        <figcaption className="priceOffer">{item.price} €</figcaption>
                        <figcaption className="descriptionOffer">{item.description}</figcaption>
                    </figure>
                </section>
            </div>
            ))}
        </div>
    )
}

export default Offer;
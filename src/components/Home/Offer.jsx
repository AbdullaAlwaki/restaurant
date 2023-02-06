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
            {offer.map((item,index) => (
                <section key={index} className="sectionOffer">
                    {/*container for pictures*/}
                    <p className="new_sticker">%</p>
                    <figure className="figureOffer">
                        <img className="food_img" src={item.images} alt="" />
                        <figcaption className="nameOffer">{item.name}</figcaption>
                        <figcaption className="priceOffer">{item.price} €</figcaption>
                        <figcaption className="descriptionOffer">{item.description}</figcaption>
                    </figure>
                </section>
            ))}
        </div>
    )
}

export default Offer;
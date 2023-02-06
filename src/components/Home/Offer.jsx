import React from "react";
import "../../styles/Home/Offer.css";

function Offer() {
    const [offer, setOffer] = React.useState([]);
    React.useEffect(() => {
        fetch(`https://mern-restaurant-backend.onrender.com/api/addDishes`).then((res) => {
            if (res.ok) {
                return res.json();
            }
        }).then((jsonRes) => jsonRes.dishes)
        .then((jsonRes) => jsonRes.filter((item) => item.isOffers === true))
        .then((jsonRes) => setOffer(jsonRes))
        .catch((error) => console.log(error))
    }, []);
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
import React from "react";
import "../../styles/Home/Offer.css";

function Offer() {
    const [offer, setOffer] = React.useState([]);
    React.useEffect(() => {
        fetch(`/api/addDishes`).then((res) => {
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
            {offer.map((index,item) => (
                <section key={index}>
                    <figure>
                        <img className="food_img" src={item.images} alt="" />
                        <figcaption>{item.name}</figcaption>
                        <figcaption>{item.price} PLN</figcaption>
                        <figcaption>{item.description}</figcaption>
                    </figure>
                    <p className="new_sticker">new</p>
                </section>
            ))}
            {/*container for pictures*/}
        </div>
    )
}

export default Offer;
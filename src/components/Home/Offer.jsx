import React from "react";
import dishes from "../../help/help.jsx";
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
                <section key={index}>
                    <figure>
                        <img className="food_img" src={item.images} alt="" />
                        <figcaption>{item.name}</figcaption>
                        <figcaption>{item.price} €</figcaption>
                        <figcaption>{item.description}</figcaption>
                    </figure>
                    <p className="new_sticker">new</p>
                </section>
            ))}
            {/*container for pictures*/}
            {/* <button onClick={h}>sdfhgdsf</button> */}
        </div>
    )
}

export default Offer;